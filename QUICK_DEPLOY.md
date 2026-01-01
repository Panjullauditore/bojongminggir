# 🚀 Quick Deployment Guide

Panduan cepat untuk deploy website Desa Bojong Minggir ke production dalam 5 menit.

---

## 🎯 Pilihan Deployment Tercepat

### Opsi 1: Vercel (⭐ Recommended - Tercepat)

#### Langkah-langkah:

1. **Persiapan:**
   - Push kode ke GitHub terlebih dahulu
   - Atau install Vercel CLI: `npm i -g vercel`

2. **Via GitHub:**
   - Buka https://vercel.com
   - Klik "Sign Up" atau "Log In"
   - Pilih GitHub sebagai provider
   - Authorize aplikasi Vercel
   - Klik "New Project"
   - Pilih repository: `desa-bojongminggir`
   - Klik "Deploy"
   - ✅ Selesai! URL akan muncul (contoh: desa-bojongminggir.vercel.app)

3. **Via CLI:**
   ```bash
   npm i -g vercel
   vercel login
   # Login dengan akun GitHub
   
   cd desa_bojongminggir
   vercel
   # Follow prompts
   # ✅ URL siap!
   ```

**Kelebihan:**
- Gratis
- Deploy otomatis saat push ke GitHub
- Custom domain support
- SSL/HTTPS included
- Edge network global
- Zero configuration

**Waktu:** ~2 menit

---

### Opsi 2: Netlify

#### Langkah-langkah:

1. Buka https://netlify.com
2. Sign up dengan GitHub
3. "New site from Git"
4. Pilih repository
5. Verifikasi config:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Klik "Deploy site"
7. ✅ Done!

**Kelebihan:**
- Sangat mudah
- Form handling built-in
- Edge functions
- Analytics included

**Waktu:** ~3 menit

---

### Opsi 3: GitHub Pages (Gratis, Tapi Limited)

#### Langkah-langkah:

1. Edit `vite.config.js`:
```js
export default defineConfig({
  base: '/desa-bojongminggir/',  // Sesuaikan dengan repo name
  plugins: [react()],
})
```

2. Edit `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

5. Setting di GitHub:
   - Go to: Settings → Pages
   - Source: `gh-pages` branch
   - Save

6. ✅ Website live di: `https://username.github.io/desa-bojongminggir/`

**Catatan:** URL akan lebih panjang dan perlu setup base path

**Waktu:** ~5 menit

---

### Opsi 4: Server/Hosting Tradisional

Jika punya server atau hosting di provider (Hostinger, Bluehost, dll):

#### Langkah-langkah:

1. Build project:
```bash
npm run build
```

2. Upload folder `dist/` via FTP:
   - Gunakan FileZilla atau hosting control panel
   - Pergi ke folder `/public_html` atau `/www`
   - Upload semua file dari folder `dist/`

3. Konfigurasi `.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. ✅ Website live di: `https://bojongminggir.go.id`

**Waktu:** ~10-15 menit

---

## 🌐 Setup Custom Domain

### Untuk Vercel/Netlify:

1. **Beli domain** dari registrar (Niaga Hoster, IDwebhost, dll)

2. **Konfigurasi DNS** di hosting:
   
   **Untuk Vercel:**
   - Masuk ke Vercel project settings
   - Domains → Add
   - Ikuti instruksi nameserver
   - Atau gunakan CNAME records

   **Untuk Netlify:**
   - Go to Domain Settings
   - Add Domain
   - Update DNS di registrar

3. **Update Nameserver** di registrar:
   - Lihat instruksi dari Vercel/Netlify
   - Update nameserver di hosting registrar
   - Wait 24 jam untuk propagasi

4. ✅ Website tersedia di: `https://bojongminggir.go.id`

---

## 🔒 HTTPS/SSL Setup

### Otomatis (Vercel/Netlify):
- ✅ Sudah include, tidak perlu setup

### Manual (Server tradisional):

Gunakan Let's Encrypt (Gratis):

```bash
# Install certbot
sudo apt update
sudo apt install certbot python3-certbot-apache

# Generate certificate
sudo certbot certonly --apache -d bojongminggir.go.id

# Certificate akan di: /etc/letsencrypt/live/bojongminggir.go.id/

# Auto-renew (optional)
sudo systemctl enable certbot.timer
```

---

## 🎯 Deployment Checklist

Sebelum deploy:

- [ ] Kode sudah di-commit ke Git
- [ ] `npm run build` jalan tanpa error
- [ ] Tidak ada warning penting di console
- [ ] Responsive design sudah ditest
- [ ] Semua links dan forms work
- [ ] Meta tags di index.html sudah benar
- [ ] Environment variables sudah siap (jika ada)
- [ ] Domain sudah siap (jika custom domain)

---

## 📊 Perbandingan Platform

| Platform | Kemudahan | Gratis? | Custom Domain | Setup Time |
|----------|-----------|---------|---------------|------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ✅ | ✅ | 2 min |
| **Netlify** | ⭐⭐⭐⭐⭐ | ✅ | ✅ | 3 min |
| **GitHub Pages** | ⭐⭐⭐⭐ | ✅ | ⚠️ Limited | 5 min |
| **Hosting VPS** | ⭐⭐⭐ | ❌ | ✅ | 15 min |

---

## 🆘 Troubleshooting

### Build gagal saat deploy?

**Error: "Command failed"**
- Check logs di dashboard platform
- Coba local build: `npm run build`
- Install dependencies: `rm -rf node_modules && npm install`
- Push lagi ke repository

### Domain tidak connect?

**Error: "DNS error" atau "Can't reach site"**
- Tunggu 24-48 jam untuk DNS propagation
- Check DNS setting di registrar
- Verifikasi CNAME/A record benar
- Clear browser cache (Ctrl+Shift+Delete)

### Website loading lambat?

- Check performance di Lighthouse (F12 → Lighthouse)
- Optimize images
- Enable gzip compression
- Check database queries (jika pakai backend)

### 404 error saat refresh?

**Problem:** SPA routing error
**Solution:** Configure web server
- Vercel/Netlify: ✅ Otomatis
- Apache: Add `.htaccess` (lihat di atas)
- Nginx: Add `try_files` directive

---

## 📞 Support

Butuh bantuan?

- **Vercel Support:** https://vercel.com/support
- **Netlify Support:** https://support.netlify.com
- **GitHub Pages Docs:** https://docs.github.com/pages
- **Our Project Docs:** See DEPLOYMENT.md for detailed guide

---

## ✅ Final Checklist

Setelah deploy:

- [ ] Website accessible di domain/URL
- [ ] Semua halaman loading dengan baik
- [ ] Links berfungsi normal
- [ ] Mobile view responsive
- [ ] Forms bisa disubmit
- [ ] No console errors
- [ ] Google Maps tampil
- [ ] Images loading properly
- [ ] Animations smooth
- [ ] Speed test good (Lighthouse > 90)

---

## 🎉 Congratulations!

Website Desa Bojong Minggir sudah live! 

**Next steps:**
1. Monitor website selama minggu pertama
2. Share URL ke warga/media
3. Collect feedback
4. Update konten regularly
5. Monitor analytics

---

**Need help?** Check DEPLOYMENT.md for detailed guide atau hubungi admin desa.
