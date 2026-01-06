import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'
import MaintenanceOverlay from './components/MaintenanceOverlay'

function App() {
  // Toggle this to enable/disable maintenance mode
  const isMaintenance = false

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


      </div>
    </Router>
  )
}

export default App
