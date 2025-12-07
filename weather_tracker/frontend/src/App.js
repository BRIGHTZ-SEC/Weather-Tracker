import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import WeatherChart from './components/WeatherChart';
import WeatherMap from './components/WeatherMap';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Real-time update (setiap 10 menit)
  useEffect(() => {
    const interval = setInterval(() => {
      if (location) {
        fetchWeather(location.split(',')[0].trim());
      }
    }, 600000); // 10 menit

    return () => clearInterval(interval);
  }, [location]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      // Ambil koordinat dari nama kota
      const geoRes = await axios.get(`http://localhost:5000/api/geocode/${city}`);
      const { lat, lon, display_name } = geoRes.data;

      // Ambil cuaca dari koordinat
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`http://localhost:5000/api/weather/${lat}/${lon}`),
        axios.get(`http://localhost:5000/api/forecast/${lat}/${lon}`)
      ]);

      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
      setLocation(display_name);
      setLat(lat);
      setLon(lon);

      // Ambil waktu sunrise & sunset dari forecast
      const { daily } = forecastRes.data;
      if (daily.sunrise && daily.sunset) {
        setSunrise(new Date(daily.sunrise[0]).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
        setSunset(new Date(daily.sunset[0]).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
      }
    } catch (err) {
      setError('Kota tidak ditemukan atau terjadi kesalahan');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 p-4`}>
      <div className="max-w-6xl mx-auto">
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">🌤️ Weather Tracker Indonesia</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Cek cuaca real-time di seluruh Indonesia (Gratis Forever!)</p>
        </header>

        <main>
          <SearchBar onSearch={fetchWeather} loading={loading} onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {loading ? <LoadingSpinner /> : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <WeatherCard data={weather} location={location} sunrise={sunrise} sunset={sunset} />
                  <Forecast forecast={forecast} />
                </div>
                <div>
                  <WeatherMap lat={lat} lon={lon} />
                  <WeatherChart forecast={forecast} />
                </div>
              </div>
            </>
          )}
        </main>

        <footer className="text-center py-6 text-gray-600 dark:text-gray-400">
          <p>© 2025 Weather Tracker Indonesia (Proyek Open Source)</p>
        </footer>
      </div>
    </div>
  );
}

export default App;