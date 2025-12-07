import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherChart = ({ forecast }) => {
  if (!forecast) return null;

  const { daily } = forecast;
  const labels = daily.time.slice(0, 7).map(date => new Date(date).toLocaleDateString('id-ID', { weekday: 'short' }));

  const data = {
    labels,
    datasets: [
      {
        label: 'Suhu Maks (°C)',
        data: daily.temperature_2m_max.slice(0, 7),  // <-- Baris ini salah sebelumnya
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Suhu Min (°C)',
        data: daily.temperature_2m_min.slice(0, 7),  // <-- Baris ini juga salah sebelumnya
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Forecast Suhu 7 Hari' },
    },
  };

  return <Line options={options} data={data} />;
};

export default WeatherChart;
