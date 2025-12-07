const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint cari koordinat dari nama kota
app.get('/api/geocode/:city', async (req, res) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`
    );
    const data = response.data;

    if (data.length > 0) {
      const { lat, lon, display_name } = data[0];
      res.json({ lat, lon, display_name });
    } else {
      res.status(404).json({ error: 'Kota tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Gagal ambil data lokasi' });
  }
});

// Endpoint cuaca saat ini dari koordinat
app.get('/api/weather/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;

  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal ambil data cuaca' });
  }
});

// Endpoint forecast 7 hari dari koordinat
app.get('/api/forecast/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;

  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal ambil data forecast' });
  }
});

// Endpoint semua data cuaca (current + forecast)
app.get('/api/full-weather/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;

  try {
    const [currentRes, forecastRes] = await Promise.all([
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`),
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto`)
    ]);

    res.json({
      current: currentRes.data,
      forecast: forecastRes.data
    });
  } catch (error) {
    res.status(500).json({ error: 'Gagal ambil data cuaca' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend jalan di http://localhost:${PORT}`);
});