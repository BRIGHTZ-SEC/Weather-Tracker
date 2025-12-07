import React from 'react';
import { getWeatherDescription } from '../utils/weatherCodes';

const WeatherCard = ({ data, location, sunrise, sunset }) => {
  if (!data) return null;

  const { current } = data;

  return (
    <div className="weather-card">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {location}
      </h2>
      <div className="flex justify-between items-center mt-4">
        <p className="text-5xl font-bold text-accent">
          {Math.round(current.temperature_2m)}°C
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${current.weather_code}@2x.png`}
          alt="Weather Icon"
          className="w-16 h-16"
        />
      </div>
      <p className="text-lg capitalize text-gray-600 dark:text-gray-300">
        {getWeatherDescription(current.weather_code)}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Kelembaban</p>
          <p className="font-semibold">{current.relative_humidity_2m}%</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Angin</p>
          <p className="font-semibold">{current.wind_speed_10m} km/h</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Tekanan</p>
          <p className="font-semibold">{current.pressure_msl} hPa</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Terasa</p>
          <p className="font-semibold">{Math.round(current.apparent_temperature)}°C</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Curah Hujan</p>
          <p className="font-semibold">{current.rain || 0} mm</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Arah Angin</p>
          <p className="font-semibold">{current.wind_direction_10m}°</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Matahari Terbit</p>
          <p className="font-semibold">{sunrise}</p>
        </div>
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Matahari Terbenam</p>
          <p className="font-semibold">{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;