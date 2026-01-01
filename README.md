# 🏘️ Desa Bojong Minggir - Website Resmi

Website resmi Desa Bojong Minggir, Pekalongan, Jawa Tengah. Platform digital yang menyediakan informasi lengkap tentang desa, fasilitas, berita, wisata, dan layanan kontak untuk warga.

## ✨ Fitur Utama

- **Beranda**: Halaman utama dengan gambaran umum tentang Desa Bojong Minggir
- **Profil Desa**: Informasi sejarah, geografi, data demografis, dan struktur pemerintahan
- **Kontak & Lokasi**: Formulir kontak, informasi kontak, jam operasional, dan peta interaktif Google Maps
- **Desain Responsif**: Optimal di desktop, tablet, dan mobile
- **Navigasi Mudah**: Menggunakan React Router untuk navigasi seamless
- **Animasi Halus**: Transisi dan efek interaktif menggunakan Framer Motion

## 🚀 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **CSS Framework**: Tailwind CSS 3.3.6
- **Routing**: React Router DOM 6.20.0
- **Animation**: Framer Motion 10.16.0
- **Icons**: React Icons 4.12.0
- **HTTP Client**: Axios 1.6.2

## 📋 Persyaratan

- Node.js 16.0.0 atau lebih tinggi
- npm 8.0.0 atau yarn 3.0.0

## 🛠️ Instalasi

1. Clone atau extract proyek ini
```bash
cd desa_bojongminggir
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

Website akan terbuka di `http://localhost:3000`

## 📦 Build untuk Production

```bash
npm run build
```

Output akan berada di folder `dist/`

## 🏗️ Struktur Proyek

```
desa_bojongminggir/
├── src/
│   ├── components/        # Komponen reusable
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Stats.jsx
│   ├── pages/            # Halaman-halaman
│   │   ├── Home.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── FacilitiesPage.jsx
│   │   ├── TourismPage.jsx
│   │   ├── NewsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies
└── .gitignore           # Git ignore file
```

## 🎨 Warna & Desain

- **Primary**: `#1F2937` (Abu-abu gelap)
- **Secondary**: `#059669` (Hijau)
- **Accent**: `#F59E0B` (Kuning/Oranye)
- **Light**: `#F9FAFB` (Putih gading)

## 📱 Halaman & Rute

| Halaman | Rute | Deskripsi |
|---------|------|-----------|
| Beranda | `/` | Halaman utama |
| Profil Desa | `/profil` | Informasi profil desa |
| Fasilitas | `/fasilitas` | Daftar fasilitas desa |
| Wisata | `/wisata` | Destinasi wisata |
| Berita | `/berita` | Berita & pengumuman |
| Kontak | `/kontak` | Formulir kontak & lokasi |

## 🎯 Fitur Responsif

Website ini didesain mobile-first dan fully responsive:
- ✓ Desktop (1200px+)
- ✓ Tablet (768px - 1199px)
- ✓ Mobile (< 768px)

## 🔐 Keamanan

- Menggunakan form validation
- CSRF protection ready
- Input sanitization

## 📞 Informasi Kontak

- **Telepon**: (0234) 123-4567
- **Email**: info@bojongminggir.go.id
- **Alamat**: Desa Bojong Minggir, Pekalongan, Jawa Tengah

## 📄 Lisensi

Proyek ini adalah proyek komunitas untuk Desa Bojong Minggir.

## 🤝 Kontribusi

Untuk kontribusi, silakan hubungi pemerintah desa setempat.

## 📝 Catatan Pengembang

### Menambah Halaman Baru

1. Buat file di `src/pages/`
2. Import di `App.jsx`
3. Tambahkan route di Router

### Menambah Komponen

1. Buat file di `src/components/`
2. Export sebagai default
3. Import di halaman atau komponen lain

### Styling

- Gunakan Tailwind CSS untuk styling
- Custom styles di `src/index.css`
- Ikuti konsistensi warna yang sudah ditentukan

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
Edit `vite.config.js` dan ubah port ke nomor lain

### Build gagal
Coba hapus `node_modules` dan `package-lock.json`, kemudian jalankan `npm install` lagi

### Animasi tidak smooth
Pastikan Framer Motion sudah terinstall: `npm install framer-motion`

---

**Dibuat dengan ❤️ untuk Desa Bojong Minggir**
