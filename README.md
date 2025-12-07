


# 🌤️ Weather Tracker Indonesia

**Weather Tracker Indonesia** adalah aplikasi web real-time untuk melihat kondisi cuaca di seluruh wilayah Indonesia. Dibangun dengan teknologi modern dan penuh fitur, cocok untuk portofolio developer pemula maupun profesional.

---

## ✨ Fitur Utama

- 🌍 **Peta Cuaca Interaktif** (peta lokasi dengan marker)
- 📊 **Grafik Suhu & Kelembaban** (visualisasi data cuaca)
- ⚡ **Real-time Update Otomatis** (setiap 10 menit)
- 🌙 **Mode Gelap/Terang Manual**
- 📱 **Responsive & Mobile-First Design**
- 🌅 **Info Sunrise & Sunset**
- 🌬️ **Arah & Kecepatan Angin**
- 🌧️ **Curah Hujan & Detail Cuaca**
- 🌡️ **Deskripsi Cuaca Lengkap (berdasarkan kode cuaca)**

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **React** (v18) – Framework JavaScript modern
- **TailwindCSS** – Styling framework
- **Chart.js** – Visualisasi grafik
- **React-Chartjs-2** – Wrapper Chart.js untuk React
- **Leaflet** – Peta interaktif
- **React-Leaflet** – Wrapper Leaflet untuk React

### Backend
- **Node.js** – Runtime JavaScript
- **Express** – Framework web
- **Axios** – HTTP client
- **Open-Meteo API** – Data cuaca real-time (gratis, tanpa API key)
- **Nominatim (OpenStreetMap)** – Geocoding nama kota ke koordinat (gratis)

---

## 📦 Struktur Proyek

```
weather-tracker/
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── WeatherCard.js
    │   │   ├── Forecast.js
    │   │   ├── SearchBar.js
    │   │   ├── LoadingSpinner.js
    │   │   ├── WeatherChart.js
    │   │   └── WeatherMap.js
    │   ├── utils/
    │   │   └── weatherCodes.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── package.json
    └── tailwind.config.js
```

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/BRIGHTZ-SEC/Weather-Tracker
cd Weather-Tracker
```

### 2. Instalasi Backend
```bash
cd backend
npm install
npm start
```

> Backend akan berjalan di `http://localhost:5000`

### 3. Instalasi Frontend
```bash
cd ../frontend
npm install
npm start
```

> Frontend akan berjalan di `http://localhost:3000`

---

## 🧪 Dependencies yang Dibutuhkan

Pastikan kamu sudah menginstal:
- **Node.js** (v16 ke atas)
- **npm** atau **yarn**

### Frontend Dependencies:
- `react`
- `react-dom`
- `axios`
- `tailwindcss`
- `leaflet`
- `react-leaflet`
- `chart.js`
- `react-chartjs-2`

---

## 📝 API yang Digunakan

- **Open-Meteo API**: Digunakan untuk mendapatkan data cuaca real-time (current & forecast).
- **Nominatim (OpenStreetMap)**: Digunakan untuk mencari koordinat berdasarkan nama kota.

> Kedua API ini **gratis** dan **tidak memerlukan API key**.

---

## 🧩 Cara Kerja

1. User mengetik nama kota di kolom pencarian.
2. Frontend meminta koordinat ke backend.
3. Backend mengambil data dari **Nominatim**.
4. Backend mengirim koordinat ke frontend.
5. Frontend mengambil data cuaca dari **Open-Meteo** via backend.
6. Data ditampilkan dalam bentuk card, grafik, dan peta.

---

## 🛡️ Keamanan

- API key disembunyikan di backend (walaupun tidak digunakan dalam proyek ini).
- Semua request ke API eksternal dilakukan melalui proxy backend untuk mencegah CORS dan kebocoran data.

---

## 📁 Lisensi

Dibuat untuk tujuan portofolio dan edukasi. Bebas digunakan dan dimodifikasi.

---

## 📬 Kontribusi

Jika kamu ingin berkontribusi, silakan buat _Pull Request_ atau _Issue_ di repository ini.

---

## 🌟 Dibuat Oleh

**[BRIGHTZ-SEC]**  
_Web Developer_

[GitHub](https://github.com/BRIGHTZ-SEC) | [Email](mailto:xbrightzee@gmail.com)

---

> 🎯 **Proyek ini adalah bagian dari portofolio full-stack developer pertamaku.**
```

---
