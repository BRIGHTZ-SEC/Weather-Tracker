import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = ({ lat, lon }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!lat || !lon) return;

    const map = L.map(mapRef.current).setView([lat, lon], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([lat, lon])
      .addTo(map)
      .bindPopup('Lokasi Cuaca')
      .openPopup();

    return () => map.remove();
  }, [lat, lon]);

  return <div ref={mapRef} className="h-64 rounded-lg overflow-hidden" />;
};

export default WeatherMap;