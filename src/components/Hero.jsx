import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2023/04/11/3131523262.jpg"
          alt="Desa Bojong Minggir Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            SELAMAT DATANG DI
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Desa <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Bojong Minggir</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Menemukan kedamaian dalam harmoni alam, tradisi yang lestari, dan keramahan masyarakat desa yang menghangatkan hati.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/profil"
              className="px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 cursor-pointer"
            >
              Jelajahi Desa
            </Link>
            <Link
              to="/kontak"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-secondary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
