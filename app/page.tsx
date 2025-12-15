export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Peta Pemadam Kebakaran 🔥</h1>
      <p>Website ini sudah jalan di Vercel</p>
    </main>
  );

// 1. Inisialisasi peta (contoh: Jakarta)
const map = L.map('map').setView([-6.200000, 106.816666], 13);

// 2. Ambil peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Contoh titik pemadam kebakaran
const fireStation = [-6.1754, 106.8272];

// 4. Contoh titik kebakaran
const fireLocation = [-6.2146, 106.8451];

// 5. Marker pemadam
L.marker(fireStation)
  .addTo(map)
  .bindPopup("Pos Pemadam Kebakaran");

// 6. Marker kebakaran
L.marker(fireLocation)
  .addTo(map)
  .bindPopup("Lokasi Kebakaran");

// 7. Garis rute (sementara garis lurus)
L.polyline([fireStation, fireLocation], {
  color: 'red'
}).addTo(map);
  }


