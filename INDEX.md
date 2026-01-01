# 🗂️ Project Index - Desa Bojong Minggir Website

Navigasi lengkap untuk memahami struktur dan organisasi proyek.

## 📑 Daftar File & Folder

### Root Files

| File | Deskripsi | Status |
|------|-----------|--------|
| `package.json` | Dependencies dan scripts | ✅ |
| `index.html` | HTML entry point | ✅ |
| `vite.config.js` | Vite configuration | ✅ |
| `tailwind.config.js` | Tailwind CSS config | ✅ |
| `postcss.config.js` | PostCSS config | ✅ |
| `.eslintrc.json` | ESLint rules | ✅ |
| `.gitignore` | Git ignore rules | ✅ |

### Documentation

| File | Tujuan | Halaman |
|------|--------|---------|
| `README.md` | Overview & quick start | 150+ |
| `DEVELOPMENT.md` | Panduan development | 300+ |
| `DEPLOYMENT.md` | Panduan deployment | 350+ |
| `PROJECT_SUMMARY.md` | Project summary & checklist | 200+ |
| `INDEX.md` | File ini - Navigation guide | - |

### Source Code (`src/`)

#### Main Files
- `main.jsx` - Entry point aplikasi
- `App.jsx` - Root component dengan routing
- `index.css` - Global styles & animations

#### Components (`src/components/`)

| Component | Fungsi | Props | Exports |
|-----------|--------|-------|---------|
| `Navbar.jsx` | Navigation bar | - | default |
| `Footer.jsx` | Footer section | - | default |
| `Hero.jsx` | Hero banner | - | default |
| `Stats.jsx` | Statistics cards | - | default |

**Component Details:**

**Navbar.jsx**
```
Features:
- Navigation links untuk 6 halaman
- Mobile responsive menu
- Sticky position di top
- Framer Motion animations
```

**Footer.jsx**
```
Features:
- Company info section
- Quick links
- Contact info dengan icons
- Social media links
- Copyright info
```

**Hero.jsx**
```
Features:
- Gradient background
- Welcome message
- Placeholder image
- CTA buttons
- Decorative shapes
```

**Stats.jsx**
```
Features:
- 4 statistics cards
- Icons dari react-icons
- Hover animations
- Responsive grid
```

#### Pages (`src/pages/`)

| Page | Route | Sections | Status |
|------|-------|----------|--------|
| `Home.jsx` | `/` | 5 | ✅ |
| `ProfilePage.jsx` | `/profil` | 6 | ✅ |
| `FacilitiesPage.jsx` | `/fasilitas` | 2 | ✅ |
| `TourismPage.jsx` | `/wisata` | 3 | ✅ |
| `NewsPage.jsx` | `/berita` | 3 | ✅ |
| `ContactPage.jsx` | `/kontak` | 3 | ✅ |

**Page Details:**

**Home.jsx (5 sections)**
```
1. Hero - Welcome banner
2. Stats - Desa statistics
3. Features - 4 card links
4. Latest News - 3 article preview
5. CTA - Call to action
```

**ProfilePage.jsx (6 sections)**
```
1. Hero - Page title
2. Sidebar - Info desa
3. Sejarah - History section
4. Geografi - Location & geography
5. Demografi - Population data
6. Pemerintahan - Government structure
7. Visi & Misi - Vision & mission
```

**FacilitiesPage.jsx (2 sections)**
```
1. Hero - Page title
2. Content:
   - Tempat Ibadah (3 items)
   - Pendidikan (3 items)
   - Kesehatan (3 items)
   - Infrastruktur Air (3 items)
3. Info Box - Development message
```

**TourismPage.jsx (3 sections)**
```
1. Hero - Page title
2. Destinations:
   - 6 destination cards
   - Image, description, location
   - Operating hours
   - Activity tags
3. Tips - 5 travel tips
```

**NewsPage.jsx (3 sections)**
```
1. Hero - Page title
2. Main Content:
   - News grid (6 articles)
   - Article cards dengan category, date, author
   - Modal untuk detail article
3. Sidebar:
   - Category filter
   - Latest news widget
```

**ContactPage.jsx (3 sections)**
```
1. Contact Info Cards:
   - Alamat
   - Telepon
   - Email
2. Contact Form & Map:
   - Form 5 fields
   - Google Maps embed
3. Operating Hours:
   - Weekday schedule
   - Holidays
```

## 🔌 Dependencies

### Production Dependencies (7)

```json
{
  "react": "^18.2.0",              // UI library
  "react-dom": "^18.2.0",          // DOM rendering
  "react-router-dom": "^6.20.0",   // Routing
  "react-icons": "^4.12.0",        // Icon library
  "framer-motion": "^10.16.0",     // Animation library
  "axios": "^1.6.2"                // HTTP client
}
```

### Dev Dependencies (8)

```json
{
  "@vitejs/plugin-react": "^4.2.0",
  "vite": "^5.0.8",
  "tailwindcss": "^3.3.6",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.55.0",
  "eslint-plugin-react": "^7.33.2"
}
```

## 🎯 Routes & Navigation

### URL Structure

```
/                    → Home (Beranda)
/profil             → ProfilePage (Profil Desa)
/fasilitas          → FacilitiesPage (Fasilitas)
/wisata             → TourismPage (Wisata)
/berita             → NewsPage (Berita)
/kontak             → ContactPage (Kontak)
```

### Navigation Flow

```
Navbar (All pages)
├── Logo (→ /)
├── Beranda (→ /)
├── Profil Desa (→ /profil)
├── Fasilitas (→ /fasilitas)
├── Wisata (→ /wisata)
├── Berita (→ /berita)
└── Kontak (→ /kontak)

Footer (All pages)
├── Quick Links (ke semua halaman)
├── Contact Info
├── Social Media
└── Copyright
```

## 🎨 Styling Architecture

### Tailwind CSS Classes

**Utility Classes Used:**
- `max-w-7xl` - Container max width
- `mx-auto` - Center container
- `px-4 sm:px-6 lg:px-8` - Responsive padding
- `py-16` - Vertical padding
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grid

**Custom Classes (index.css):**
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.card` - Card component
- `.section-title` - Section title
- `.section-subtitle` - Section subtitle

### Color Scheme

```css
/* Primary Colors */
--primary: #1F2937;     /* Dark gray */
--secondary: #059669;   /* Green */
--accent: #F59E0B;      /* Amber/Orange */
--light: #F9FAFB;       /* Off-white */

/* Gray Palette */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

## 📱 Responsive Design

### Breakpoints

```
Mobile:   < 640px   (default styling)
Tablet:   640px     (sm:)
Tablet:   768px     (md:)
Desktop:  1024px    (lg:)
Desktop:  1280px    (xl:)
Desktop:  1536px    (2xl:)
```

### Responsive Patterns

```jsx
// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Text sizes
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Display
<div className="hidden md:block">  {/* Hidden on mobile */}
<div className="md:hidden">         {/* Hidden on desktop */}
```

## 🔄 Component Flow

```
App.jsx (Router)
├── Navbar (sticky, all pages)
├── Main (Routes)
│   ├── Home
│   ├── ProfilePage
│   ├── FacilitiesPage
│   ├── TourismPage
│   ├── NewsPage
│   └── ContactPage
├── Footer (all pages)
└── Router Provider
```

## ⚙️ Configuration Files

### package.json
```json
{
  "name": "desa-bojong-minggir",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "preview": "vite preview"
  }
}
```

### vite.config.js
```js
- React plugin enabled
- Port: 3000
- Auto open browser on dev
```

### tailwind.config.js
```js
- Custom colors defined
- Custom animations configured
- Full content paths specified
```

### .eslintrc.json
```js
- ESLint config untuk React
- React/jsx-scope disabled (React 17+)
- Props validation as warning
```

## 🚀 Build & Deploy

### Development
```bash
npm run dev      # Start dev server on port 3000
```

### Production
```bash
npm run build    # Build to dist/ folder
npm run preview  # Preview production build
```

### Code Quality
```bash
npm run lint     # Run ESLint checks
```

## 📊 Project Statistics

| Metric | Count |
|--------|-------|
| Pages | 6 |
| Components | 4 |
| Routes | 6 |
| Files | 18 |
| Lines of Code | 2,500+ |
| Documentation | 4 files |
| Total Sections | 25+ |
| Images/Assets | Dynamic URLs |

## 🔗 External Resources

### CDN & APIs
- Google Fonts (Poppins font)
- Unsplash (Image placeholders)
- Google Maps (Embed iframe)

### npm Packages
- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.20.0
- react-icons@4.12.0
- framer-motion@10.16.0
- tailwindcss@3.3.6
- vite@5.0.8

## 📝 File Size Summary

```
src/
├── components/      (4 files, ~5 KB)
├── pages/          (6 files, ~30 KB)
├── App.jsx         (~1 KB)
├── main.jsx        (~0.5 KB)
└── index.css       (~2 KB)

Total Source: ~40 KB
Build Output: ~150-200 KB (gzipped ~40-50 KB)
```

## ✅ Quality Checklist

- ✅ All pages functional
- ✅ All routes working
- ✅ Responsive design tested
- ✅ Animations smooth
- ✅ No console errors
- ✅ Code organized
- ✅ Documented
- ✅ Production ready

## 🛠️ Quick Commands

```bash
# Development
npm install          # Install dependencies
npm run dev         # Start dev server
npm run lint        # Check code quality

# Production
npm run build       # Build for production
npm run preview     # Preview production build

# Maintenance
npm update          # Update dependencies
npm audit           # Check vulnerabilities
npm audit fix       # Fix vulnerabilities
```

## 📞 Support Resources

1. **DEVELOPMENT.md** - Untuk panduan development lengkap
2. **DEPLOYMENT.md** - Untuk panduan deployment ke berbagai platform
3. **README.md** - Untuk overview dan quick start
4. **PROJECT_SUMMARY.md** - Untuk ringkasan project

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
