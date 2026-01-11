import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              Desa<span className="text-secondary">BojongMinggir</span>
            </Link>
            <p className="mb-4 text-slate-400">
              Mewujudkan desa yang mandiri, berbudaya, dan sejahtera dengan menjunjung tinggi nilai-nilai kearifan lokal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Beranda</Link></li>
              <li><Link to="/profil" className="hover:text-secondary transition-colors">Profil Desa</Link></li>
              <li><Link to="/umkm" className="hover:text-secondary transition-colors">UMKM</Link></li>
              <li><Link to="/kontak" className="hover:text-secondary transition-colors">Kontak Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-secondary" />
                <span>Desa Bojong Minggir, Kec. Bojong, Kab. Pekalongan, Jawa Tengah 51156</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-secondary" />
                <span>(0285) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-secondary" />
                <span>admin@bojongminggir.desa.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Pemerintah Desa Bojong Minggir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
