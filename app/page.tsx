'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  useEffect(() => {
    // Inisialisasi peta
    const map = L.map('map').setView([-6.2, 106.816666], 13);

    // Tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Titik pemadam
    const fireStation: [number, number] = [-6.1754, 106.8272];

    // Titik kebakaran
    const fireLocation: [number, number] = [-6.2146, 106.8451];

    // Marker pemadam
    L.marker(fireStation)
      .addTo(map)
      .bindPopup('Pos Pemadam Kebakaran');

    // Marker kebakaran
    L.marker(fireLocation)
      .addTo(map)
      .bindPopup('Lokasi Kebakaran');

    // Garis rute
    L.polyline([fireStation, fireLocation], {
      color: 'red',
    }).addTo(map);

    // Cleanup (WAJIB biar ga error pas reload)
    return () => {
      map.remove();
    };
  }, []);

  return (
    <main style={{ padding: 0 }}>
      <h1 style={{ padding: 20 }}>Peta Pemadam Kebakaran 🔥</h1>
      <div
        id="map"
        style={{ height: '80vh', width: '100%' }}
      />
    </main>
  );
}
