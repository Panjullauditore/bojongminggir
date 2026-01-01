# 🌐 Panduan Deployment

Panduan lengkap untuk mendeploy website Desa Bojong Minggir ke berbagai platform.

## 📋 Daftar Isi

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Build Production](#build-production)
3. [Vercel](#vercel)
4. [Netlify](#netlify)
5. [GitHub Pages](#github-pages)
6. [Server Tradisional](#server-tradisional)
7. [Environment Variables](#environment-variables)

## Pre-Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Semua fitur sudah ditest di development
- [ ] Tidak ada console errors atau warnings
- [ ] Responsive design sudah dicheck di berbagai devices
- [ ] Semua links dan forms berfungsi dengan baik
- [ ] Performance sudah optimal (Lighthouse score > 90)
- [ ] SEO metadata sudah lengkap
- [ ] Security headers sudah dikonfigurasi
- [ ] Build process berjalan tanpa error

## Build Production

### Membuat Build Production

```bash
npm run build
```

Output akan berada di folder `dist/`. Folder ini berisi semua file yang siap untuk di-deploy.

### Testing Build Locally

Sebelum deploy, test build secara lokal:

```bash
npm run build
npm run preview
```

Buka browser ke `http://localhost:4173` untuk melihat build production.

## Vercel

Vercel adalah platform hosting terbaik untuk Next.js dan Vite projects.

### Deploy via CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow prompts and confirm deployment

### Deploy via GitHub

1. Push kode ke GitHub
2. Masuk ke [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select GitHub repository
5. Click "Deploy"

### Konfigurasi Vercel (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "outputDirectory": "dist"
}
```

## Netlify

Netlify adalah alternatif populer untuk hosting Vite projects.

### Deploy via CLI

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Login ke Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy
```

### Deploy via GitHub

1. Push kode ke GitHub
2. Masuk ke [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub repository
5. Konfigurasi:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Deploy site"

### Konfigurasi Netlify (netlify.toml)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[dev]
  command = "npm run dev"
  port = 3000
```

## GitHub Pages

Deploy ke GitHub Pages (gratis tapi dengan keterbatasan).

### Langkah-langkah

1. Edit `vite.config.js`:

```js
export default defineConfig({
  base: '/desa-bojongminggir/', // Sesuaikan dengan repo name
  plugins: [react()],
})
```

2. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

3. Edit `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to Settings → Pages
   - Select `gh-pages` branch
   - Save

## Server Tradisional

Untuk deploy ke VPS atau shared hosting.

### Menggunakan SCP

```bash
# Build
npm run build

# Upload via SCP
scp -r dist/ user@yourserver.com:/var/www/desa-bojongminggir/
```

### Menggunakan FTP

1. Build project:
```bash
npm run build
```

2. Upload folder `dist/` ke server via FTP client
3. Konfigurasi web server

### Konfigurasi Apache (.htaccess)

Buat file `.htaccess` di folder `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Konfigurasi Nginx

```nginx
server {
    listen 80;
    server_name bojongminggir.go.id;

    root /var/www/desa-bojongminggir;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### Konfigurasi SSL (HTTPS)

Gunakan Let's Encrypt untuk SSL gratis:

```bash
# Menggunakan Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d bojongminggir.go.id
```

Update Nginx config:

```nginx
server {
    listen 443 ssl http2;
    server_name bojongminggir.go.id;

    ssl_certificate /etc/letsencrypt/live/bojongminggir.go.id/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bojongminggir.go.id/privkey.pem;

    # ... rest of config
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name bojongminggir.go.id;
    return 301 https://$server_name$request_uri;
}
```

## Environment Variables

### Setup Environment Variables

Buat file `.env.production` untuk production:

```env
VITE_API_URL=https://api.bojongminggir.go.id
VITE_APP_NAME=Desa Bojong Minggir
VITE_GOOGLE_MAPS_KEY=your_google_maps_api_key
```

### Menggunakan Environment Variables

Di kode React:

```jsx
const API_URL = import.meta.env.VITE_API_URL
const APP_NAME = import.meta.env.VITE_APP_NAME
```

### Secrets Management

Jangan commit `.env` files!

1. Add ke `.gitignore`:
```
.env
.env.local
.env.*.local
```

2. Share `.env.example`:
```env
VITE_API_URL=
VITE_GOOGLE_MAPS_KEY=
```

3. Konfigurasi di platform hosting:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site Settings → Build & deploy → Environment

## Performance Optimization

### Sebelum Deploy

1. **Minify & Bundle**:
```bash
npm run build
# Vite automatically minifies in production
```

2. **Image Optimization**:
```jsx
// Use image CDN atau optimize locally
<img src="/images/optimized.webp" alt="..." loading="lazy" />
```

3. **Code Splitting**:
```jsx
// Lazy load routes
import { lazy, Suspense } from 'react'

const NewsPage = lazy(() => import('./pages/NewsPage'))

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/berita" element={<NewsPage />} />
  </Routes>
</Suspense>
```

### Monitoring & Analytics

```jsx
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## CI/CD Pipeline

### GitHub Actions Workflow

Buat `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm install
      
      - name: Run build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: BetaHuhn/deploy-to-vercel-action@v1
        with:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Domain & DNS

### Setup Custom Domain

1. Beli domain dari registrar (Niaga Hoster, Hostinger, dsb)
2. Arahkan nameserver ke hosting provider
3. Konfigurasi DNS records:

```
A Record:     your-ip-address
CNAME Record: www → your-vercel-domain.vercel.app
MX Record:    (untuk email, jika diperlukan)
```

### Email Setup

Jika ingin email dari domain desa (optional):

```
MX Record Priority 10: mail.bojongminggir.go.id
```

## Troubleshooting Deployment

### 404 pada refresh halaman

**Masalah**: SPA (Single Page Application) memerlukan routing configuration

**Solusi**: Konfigurasi web server untuk redirect semua request ke `index.html`

- **Vercel/Netlify**: Automatically handled ✓
- **Apache**: Gunakan `.htaccess` (see above)
- **Nginx**: Gunakan `try_files` directive (see above)

### Build gagal di production

```bash
# Cek build logs
npm run build

# Clear cache dan rebuild
rm -rf dist node_modules package-lock.json
npm install
npm run build
```

### Environment variables tidak terbaca

```jsx
// ✓ Correct - Mulai dengan VITE_
const API_URL = import.meta.env.VITE_API_URL

// ✗ Wrong
const API_URL = import.meta.env.API_URL
```

### Performance issues di production

1. Check Network tab di DevTools
2. Use Lighthouse untuk audit
3. Optimize images dan assets
4. Enable gzip compression di server

## Post-Deployment

### Monitoring

- Setup uptime monitoring (UptimeRobot, Pingdom)
- Monitor error logs
- Check Google Search Console
- Monitor analytics

### Maintenance

- Regular backups
- Update dependencies: `npm update`
- Monitor security advisories: `npm audit`
- Test semua fitur secara berkala

### Support

Tim teknis desa harus:
- Monitor website status
- Handle bug reports
- Update content regularly
- Maintain security patches

---

**Website siap untuk production! 🚀**
