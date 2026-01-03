# 🚀 GETTING STARTED - Mulai Menggunakan Proyek

File ini berisi instruksi cepat untuk mulai menggunakan website Desa Bojong Minggir.

---

## ⚡ Quick Start (5 Menit)

### 1. Instalasi (First Time Only)

```bash
# Masuk ke folder proyek
cd desa_bojongminggir

# Install semua dependencies
npm install

# Jalankan development server
npm run dev
```

**Output yang diharapkan:**
```
  VITE v5.0.0  ready in 1000 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 2. Buka Website

Buka browser dan pergi ke: **http://localhost:3000/**

Website sudah siap! 🎉

### 3. Buat Perubahan (Development)

1. Edit file di `src/` folder
2. Browser akan auto-refresh
3. Lihat perubahan langsung

### 4. Stop Development Server

Tekan **Ctrl+C** di terminal

---

## 📋 Struktur Folder Penting

```
desa_bojongminggir/
├── src/                    # Folder sumber kode
│   ├── components/         # Component reusable
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Stats.jsx
│   ├── pages/              # Halaman-halaman
│   │   ├── Home.jsx        (Beranda)
│   │   ├── ProfilePage.jsx (Profil Desa)
│   │   ├── FacilitiesPage.jsx (Fasilitas)
│   │   ├── TourismPage.jsx (Wisata)
│   │   ├── NewsPage.jsx    (Berita)
│   │   └── ContactPage.jsx (Kontak)
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── index.html              # HTML file
├── package.json            # Dependencies list
├── vite.config.js          # Vite config
├── tailwind.config.js      # Tailwind config
└── postcss.config.js       # PostCSS config

📚 DOKUMENTASI:
├── README.md               # Dokumentasi utama
├── DEVELOPMENT.md          # Panduan untuk developer
├── DEPLOYMENT.md           # Panduan deploy ke production
├── QUICK_DEPLOY.md         # Deploy cepat (recommended)
├── USER_GUIDE.md           # Panduan untuk pengguna
├── PROJECT_SUMMARY.md      # Ringkasan project
├── INDEX.md                # Peta lengkap file
├── DELIVERABLES.md         # Checklist deliverables
├── START_HERE.md           # Halaman sambutan
└── GETTING_STARTED.md      # Panduan memulai (ini)
```

---

## 📖 Dokumentasi

| File | Untuk Siapa | Isi |
|------|-------------|-----|
| **README.md** | Semua orang | Overview, features, quick start |
| **GETTING_STARTED.md** | Pemula | Panduan memulai step-by-step |
| **USER_GUIDE.md** | Pengguna akhir | Cara menggunakan website |
| **DEVELOPMENT.md** | Developer | Setup, componentes, styling, routing |
| **DEPLOYMENT.md** | DevOps/Admin | Deploy ke berbagai platform |
| **QUICK_DEPLOY.md** | Admin | Deploy cepat (recommended) |
| **PROJECT_SUMMARY.md** | Manager/Client | Ringkasan project & checklist |
| **INDEX.md** | Developer | Peta lengkap file & struktur |
| **DELIVERABLES.md** | Stakeholder | Checklist serah terima project |
| **START_HERE.md** | Semua orang | Halaman sambutan & ringkasan |

---

## 🎯 Halaman-Halaman Utama

### Route & Component Mapping

```
URL              Component         Deskripsi
─────────────────────────────────────────────────────
/                Home.jsx          Beranda dengan hero & stats
/profil          ProfilePage.jsx   Profil, sejarah, struktur
/fasilitas       FacilitiesPage.jsx Daftar fasilitas desa
/wisata          TourismPage.jsx   Destinasi wisata
/berita          NewsPage.jsx      Berita & pengumuman
/kontak          ContactPage.jsx   Formulir kontak & lokasi
```

---

## 🛠️ Perintah-Perintah Penting

### Development

```bash
# Jalankan dev server (port 3000)
npm run dev

# Lint kode
npm run lint
```

### Production

```bash
# Build untuk production
npm run build

# Preview build di localhost:4173
npm run preview
```

### Maintenance

```bash
# Update dependencies (safe)
npm update

# Check vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🔧 Tech Stack

- **Frontend:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.3.6
- **Routing:** React Router 6.20.0
- **Animation:** Framer Motion 10.16.0
- **Icons:** React Icons 4.12.0

---

## 📱 Responsive Design

Website fully responsive untuk:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (<768px)

---

## 🎨 Customization Mudah

### Ubah Warna
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#1F2937',      // Ubah di sini
  secondary: '#059669',    // Ubah di sini
  accent: '#F59E0B',       // Ubah di sini
}
```

### Ubah Konten
Edit file di `src/pages/` untuk ubah konten halaman.

### Ubah Styling
- Gunakan Tailwind classes di JSX
- Atau edit `src/index.css` untuk global styles

---

## ✅ Checklist Development

Saat mengembangkan fitur baru:

- [ ] Buat component/page baru
- [ ] Implement logic & styling
- [ ] Test di browser (responsive)
- [ ] Check console untuk error
- [ ] Commit ke Git
- [ ] Test lagi sebelum merge

---

## 📞 Butuh Bantuan?

1. **Development questions** → Baca `DEVELOPMENT.md`
2. **Deployment questions** → Baca `QUICK_DEPLOY.md` atau `DEPLOYMENT.md`
3. **User questions** → Baca `USER_GUIDE.md`
4. **Project overview** → Baca `PROJECT_SUMMARY.md`
5. **File structure** → Baca `INDEX.md`

---

## 🚀 Next Steps

### 1. Development Phase
```bash
npm run dev
# Edit files di src/
# Website update otomatis
```

### 2. Testing Phase
- Test responsive design
- Test semua links
- Test forms
- Check console
- Performance test (Lighthouse)

### 3. Build Phase
```bash
npm run build
# Output di folder: dist/
```

### 4. Deployment Phase
```bash
# Pilih satu:
# Option 1: Vercel (recommended)
vercel

# Option 2: Netlify
netlify deploy

# Option 3: GitHub Pages
npm run deploy

# Baca QUICK_DEPLOY.md untuk detail
```

---

## 📊 Project Info

- **Project Name:** Desa Bojong Minggir Website
- **Version:** 1.0.0
- **Status:** Production Ready ✅
- **Created:** December 2024
- **Type:** React SPA (Single Page Application)

---

## 🎓 Learning Resources

### React
- Official: https://react.dev
- Docs: https://react.dev/learn

### Vite
- Official: https://vitejs.dev
- Docs: https://vitejs.dev/guide/

### Tailwind CSS
- Official: https://tailwindcss.com
- Docs: https://tailwindcss.com/docs

### React Router
- Official: https://reactrouter.com
- Docs: https://reactrouter.com/en/main

### Framer Motion
- Official: https://www.framer.com/motion
- Docs: https://www.framer.com/motion/

---

## 💡 Tips

1. **Hot Module Replacement (HMR)**: Browser auto-refresh saat save file
2. **DevTools**: Gunakan React DevTools extension untuk debug
3. **Console**: F12 untuk lihat errors/warnings
4. **Mobile Test**: Resize browser atau gunakan device emulation (F12)
5. **Performance**: Gunakan Lighthouse (F12 → Lighthouse)

---

## ⚠️ Troubleshooting Common Issues

### Issue: Port 3000 already in use
```bash
# Gunakan port berbeda
npm run dev -- --port 3001
```

### Issue: Module not found error
```bash
# Clear node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styling tidak apply
```bash
# Restart dev server
# Ctrl+C untuk stop, npm run dev untuk start
```

### Issue: Browser tidak refresh
```bash
# Clear browser cache
# Ctrl+Shift+Delete (Chrome)
# Cmd+Shift+Delete (Firefox/Safari)
```

---

## 🎯 Goals

Website ini dirancang untuk:
- ✅ Menyediakan informasi desa yang lengkap
- ✅ Meningkatkan komunikasi dengan warga
- ✅ Mempromosikan wisata desa
- ✅ Menampilkan fasilitas yang tersedia
- ✅ Memberikan aksesibilitas tinggi
- ✅ Desain modern dan responsif

---

## 📝 Notes

- All components are reusable
- Code is well-documented
- Responsive design is priority
- Mobile-first approach
- Accessibility considered
- Performance optimized

---

## 🎉 Ready to Go!

```
✅ Setup complete
✅ Development server running
✅ Documentation ready
✅ Code organized
✅ Responsive tested
✅ Production ready

👉 Mulai dengan: npm run dev
```

---

**Happy Coding! 🚀**

Untuk informasi lebih detail, baca file dokumentasi sesuai kebutuhan Anda.
