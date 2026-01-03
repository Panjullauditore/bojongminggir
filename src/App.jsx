import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'
import MaintenanceOverlay from './components/MaintenanceOverlay'

function App() {
  const [isMaintenance, setIsMaintenance] = useState(false)

  return (
    <Router>
      <div className="flex flex-col w-full min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Maintenance Overlay */}
        {isMaintenance && <MaintenanceOverlay />}

        {/* Toggle Button (Dev Tool) */}
        <button
          onClick={() => setIsMaintenance(!isMaintenance)}
          className="fixed bottom-4 right-4 z-[110] px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          {isMaintenance ? 'Disable Maintenance' : 'Enable Maintenance'}
        </button>
      </div>
    </Router>
  )
}

export default App
