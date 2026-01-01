import { motion } from 'framer-motion'
import { FiUsers, FiMapPin, FiTrendingUp } from 'react-icons/fi'

export default function ProfilePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Desa Bojong Minggir</h1>
            <p className="text-lg text-gray-100">Sebuah desa yang kaya akan pertanian berkelanjutan, tradisi lokal, dan keindahan alam yang memukau</p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Lokasi Geografis</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Informasi Lokasi</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Provinsi:</span>
                  <span className="text-gray-600">Jawa Tengah</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Kabupaten:</span>
                  <span className="text-gray-600">Pekalongan</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Kecamatan:</span>
                  <span className="text-gray-600">Bojong</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Desa:</span>
                  <span className="text-gray-600">Bojong Minggir</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Ketinggian:</span>
                  <span className="text-gray-600">600-900 mdpl</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Luas Wilayah:</span>
                  <span className="text-gray-600">±5.2 km²</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Karakteristik Geografis</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Desa Bojong Minggir merupakan bagian dari Kecamatan Cisarua, Kabupaten Bogor, dengan sebagian besar penduduk bermata pencaharian sebagai petani. Walau terletak di daerah yang cukup terpencil, suasana kehidupan di dusun ini tetap hangat, penuh keceriaan, dan rasa kebersamaan.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-gray-700">
                  Wilayah ini dikelilingi oleh pertanian berkelanjutan dan perkebunan yang hijau, menciptakan ekosistem yang seimbang dan udara yang sejuk sepanjang tahun.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Data Demografis</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiUsers size={48} className="mx-auto text-secondary mb-4" />
              <p className="text-gray-600 text-lg mb-2">Total Penduduk</p>
              <p className="text-4xl font-bold text-primary">5,200</p>
              <p className="text-sm text-gray-500 mt-2">Jiwa</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FiTrendingUp size={48} className="mx-auto text-secondary mb-4" />
              <p className="text-gray-600 text-lg mb-2">Jumlah Keluarga</p>
              <p className="text-4xl font-bold text-primary">1,100</p>
              <p className="text-sm text-gray-500 mt-2">KK</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FiMapPin size={48} className="mx-auto text-secondary mb-4" />
              <p className="text-gray-600 text-lg mb-2">Luas Wilayah</p>
              <p className="text-4xl font-bold text-primary">5.2</p>
              <p className="text-sm text-gray-500 mt-2">km²</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Struktur Pemerintahan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-secondary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2 text-primary">Kepala Desa</h3>
              <p className="text-gray-700 text-lg mb-1">Bapak Suwandi, S.Pd</p>
              <p className="text-sm text-gray-600">Periode 2020-2026</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-secondary"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2 text-primary">Sekretaris Desa</h3>
              <p className="text-gray-700 text-lg mb-1">Bapak Ahmad Salim</p>
              <p className="text-sm text-gray-600">Mengelola administrasi desa</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-secondary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-2 text-primary">Bendahara Desa</h3>
              <p className="text-gray-700 text-lg mb-1">Ibu Siti Nurhaliza</p>
              <p className="text-sm text-gray-600">Mengelola keuangan desa</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-secondary"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-2 text-primary">Ketua BPD</h3>
              <p className="text-gray-700 text-lg mb-1">Bapak Hendra Santoso</p>
              <p className="text-sm text-gray-600">Badan Perwakilan Desa</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Visi & Misi</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-10 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Visi</h3>
              <p className="text-lg leading-relaxed">
                Terwujudnya Desa Bojong Minggir yang maju, mandiri, dan berkelanjutan dengan meningkatkan kesejahteraan masyarakat dan menjaga kelestarian lingkungan serta budaya lokal.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-primary rounded-lg p-10 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Misi</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Meningkatkan pelayanan publik yang berkualitas dan responsif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Mengembangkan ekonomi lokal dan kewirausahaan masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Meningkatkan pendidikan dan kesehatan masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Menjaga kelestarian lingkungan dan budaya lokal</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
