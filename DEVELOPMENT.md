# 🚀 Panduan Pengembangan

Dokumentasi lengkap untuk mengembangkan dan memodifikasi website Desa Bojong Minggir.

## 📋 Daftar Isi

1. [Setup Awal](#setup-awal)
2. [Struktur Folder](#struktur-folder)
3. [Komponen](#komponen)
4. [Halaman](#halaman)
5. [Styling](#styling)
6. [Routing](#routing)
7. [Animasi](#animasi)
8. [Best Practices](#best-practices)

## Setup Awal

### Prasyarat

- Node.js 16.0.0+
- npm 8.0.0+ atau Yarn 3.0.0+
- Code editor (VS Code recommended)

### Instalasi

```bash
# Clone atau extract proyek
cd desa_bojongminggir

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## Struktur Folder

```
src/
├── components/              # Komponen yang dapat digunakan kembali
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer
│   ├── Hero.jsx            # Hero section
│   └── Stats.jsx           # Statistics section
├── pages/                  # Halaman-halaman
│   ├── Home.jsx            # Beranda
│   ├── ProfilePage.jsx     # Profil Desa
│   ├── FacilitiesPage.jsx  # Fasilitas
│   ├── TourismPage.jsx     # Wisata
│   ├── NewsPage.jsx        # Berita
│   └── ContactPage.jsx     # Kontak
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Komponen

### Membuat Komponen Baru

```jsx
// src/components/MyComponent.jsx
import { motion } from 'framer-motion'

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-2xl font-bold">Hello</h1>
    </motion.div>
  )
}
```

### Menggunakan Komponen

```jsx
import MyComponent from '../components/MyComponent'

export default function Home() {
  return <MyComponent />
}
```

## Halaman

### Membuat Halaman Baru

1. Buat file baru di `src/pages/YourPage.jsx`

```jsx
import { motion } from 'framer-motion'

export default function YourPage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold">Halaman Baru</h1>
      </div>
    </section>
  )
}
```

2. Import di `App.jsx`:

```jsx
import YourPage from './pages/YourPage'

function App() {
  return (
    <Routes>
      <Route path="/your-page" element={<YourPage />} />
    </Routes>
  )
}
```

3. Tambahkan link di `Navbar.jsx`:

```jsx
const menuItems = [
  // ... existing items
  { label: 'Halaman Baru', path: '/your-page' },
]
```

## Styling

### Menggunakan Tailwind CSS

Tailwind CSS sudah dikonfigurasi. Gunakan utility classes:

```jsx
<div className="bg-primary text-white p-6 rounded-lg">
  <h1 className="text-2xl font-bold mb-4">Title</h1>
  <p className="text-gray-100">Description</p>
</div>
```

### Warna Custom

Warna telah didefinisikan di `tailwind.config.js`:

```js
colors: {
  primary: '#1F2937',    // Abu-abu gelap
  secondary: '#059669',  // Hijau
  accent: '#F59E0B',     // Kuning
  light: '#F9FAFB',      // Putih gading
}
```

### Global Styles

Untuk styling global, edit `src/index.css`:

```css
/* Custom component classes */
.btn-primary {
  @apply px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300;
}

.card {
  @apply bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6;
}
```

## Routing

Website menggunakan React Router untuk navigasi. Routes didefinisikan di `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profil" element={<ProfilePage />} />
  <Route path="/fasilitas" element={<FacilitiesPage />} />
  <Route path="/wisata" element={<TourismPage />} />
  <Route path="/berita" element={<NewsPage />} />
  <Route path="/kontak" element={<ContactPage />} />
</Routes>
```

### Navigasi Programmatic

```jsx
import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/profil')
  }
  
  return <button onClick={handleClick}>Go to Profile</button>
}
```

### Link Components

```jsx
import { Link } from 'react-router-dom'

<Link to="/profil" className="text-secondary hover:text-accent">
  Profil Desa
</Link>
```

## Animasi

Website menggunakan Framer Motion untuk animasi. Contoh penggunaan:

### Fade In Animation

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Slide In Animation

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Effect

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Staggered Children

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Best Practices

### 1. Component Organization

- Pisahkan komponen besar menjadi komponen-komponen kecil
- Letakkan komponen reusable di `src/components/`
- Letakkan komponen spesifik halaman di file halaman

### 2. Naming Conventions

```jsx
// ✓ Good
function ProfileCard() { }
const userList = []
const handleClick = () => { }

// ✗ Bad
function profile_card() { }
const UserList = []
const onclick = () => { }
```

### 3. Props & State

```jsx
// ✓ Good - Props dengan default values
function Card({ title = 'Default Title', onClick }) {
  return <div onClick={onClick}>{title}</div>
}

// ✗ Bad - Missing prop validation
function Card({ title, onClick }) {
  return <div onClick={onClick}>{title}</div>
}
```

### 4. Conditional Rendering

```jsx
// ✓ Good
{isVisible && <Component />}

{status === 'loading' && <LoadingSpinner />}
{status === 'error' && <ErrorMessage />}
{status === 'success' && <SuccessMessage />}

// ✗ Bad
{isVisible ? <Component /> : null}

{status == 'loading' ? ... : ...}
```

### 5. CSS Classes

```jsx
// ✓ Good - Tailwind classes
<div className="bg-primary text-white p-6 rounded-lg">

// ✗ Bad - Inline styles
<div style={{ background: '#1F2937', color: 'white', padding: '24px' }}>
```

### 6. Comments & Documentation

```jsx
// ✓ Good
/**
 * Hero section untuk halaman utama
 * @returns {JSX.Element} Hero component
 */
export default function Hero() {
  // ...
}

// ✗ Bad
// ini adalah hero
function Hero() {
  // ...
}
```

### 7. Import Organization

```jsx
// ✓ Good - Terorganisir
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'

import Navbar from '../components/Navbar'

// ✗ Bad - Berantakan
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
```

### 8. Performance

```jsx
// ✓ Good - Memoize expensive calculations
const MemoizedComponent = React.memo(MyComponent)

// ✓ Good - useCallback untuk event handlers
const handleClick = useCallback(() => {
  // ...
}, [dependencies])

// ✓ Good - Lazy load images
<img loading="lazy" src="..." alt="..." />
```

### 9. Accessibility

```jsx
// ✓ Good - Semantic HTML & ARIA
<button onClick={handleClick} aria-label="Menu">
  <FiMenu />
</button>

<nav role="navigation">
  <Link to="/">Home</Link>
</nav>

// ✗ Bad
<div onClick={handleClick}>Menu</div>
```

### 10. Error Handling

```jsx
// ✓ Good
try {
  const result = await fetchData()
} catch (error) {
  console.error('Error:', error)
  setError(error.message)
}

// ✓ Good - Conditional rendering
{error && <ErrorMessage message={error} />}
```

## Tips & Trik

### Responsive Design

```jsx
// Desktop: md:, lg:, xl:
// Tablet: sm:, md:
// Mobile: (default)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

### Utility CSS Classes

```jsx
// Container dengan max-width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Spacing
<div className="py-16 px-4 my-8">

// Text styles
<h1 className="text-4xl md:text-5xl font-bold">
```

### Icons dari React Icons

```jsx
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

<FiMenu size={24} className="text-secondary" />
```

### Forms

```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
})

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }))
}

<form onSubmit={handleSubmit}>
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</form>
```

## Troubleshooting

### Module not found errors
- Pastikan import path benar (relatif atau absolute)
- Gunakan `.jsx` extension untuk React components
- Check typos di nama file

### Styling not applied
- Verify Tailwind CSS classes spelling
- Rebuild CSS: `npm run dev`
- Check specificity rules dalam custom CSS

### Animation not smooth
- Ensure Framer Motion installed: `npm install framer-motion`
- Use `whileInView` with `viewport={{ once: true }}` untuk better performance
- Avoid animating expensive properties (width, height)

### Build errors
- Clear `dist/` folder: `rm -rf dist`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 16+)

---

**Selamat mengembangkan! 🚀**
