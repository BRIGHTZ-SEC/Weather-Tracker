import React from 'react';
import { getWeatherDescription } from '../utils/weatherCodes';

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  const { daily } = forecast;
  const { time, temperature_2m_max, temperature_2m_min, weather_code, sunrise, sunset } = daily;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Forecast 7 Hari</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {time.map((date, index) => (
          <div key={index} className="forecast-card">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {new Date(date).toLocaleDateString('id-ID', { weekday: 'short' })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${weather_code[index]}@2x.png`}
              alt="Weather Icon"
              className="w-10 h-10 mx-auto"
            />
            <p className="text-2xl font-bold">{Math.round(temperature_2m_max[index])}°</p>
            <p className="text-gray-500 dark:text-gray-400">{Math.round(temperature_2m_min[index])}°</p>
            <p className="capitalize text-sm">
              {getWeatherDescription(weather_code[index])}
            </p>
            <div className="text-xs mt-2">
              <p>🌅 {new Date(sunrise[index]).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
              <p>🌇 {new Date(sunset[index]).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;