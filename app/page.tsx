'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  useEffect(() => {
    const map = L.map('map').setView([-6.2, 106.816666], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const fireStation: [number, number] = [-6.1754, 106.8272];
    const fireLocation: [number, number] = [-6.2146, 106.8451];

    L.marker(fireStation).addTo(map).bindPopup('Pos Pemadam');
    L.marker(fireLocation).addTo(map).bindPopup('Lokasi Kebakaran');

    L.polyline([fireStation, fireLocation], { color: 'red' }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <main>
      <h1 style={{ padding: 16 }}>Peta Pemadam Kebakaran 🔥</h1>
      <div id="map" style={{ height: '80vh', width: '100%' }} />
    </main>
  );
}
