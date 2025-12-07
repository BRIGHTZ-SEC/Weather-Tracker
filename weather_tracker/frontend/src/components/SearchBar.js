import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading, onToggleDarkMode, darkMode }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Cari cuaca di kota..."
        className="search-input"
        onKeyPress={(e) => e.key === 'Enter' && !loading && handleSubmit(e)}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex-1"
        >
          {loading ? 'Mencari...' : 'Cek Cuaca'}
        </button>
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;