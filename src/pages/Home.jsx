import Hero from '../components/Hero'
import GallerySection from '../components/GallerySection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  const locationData = {
    provinsi: 'Jawa Tengah',
    kabupaten: 'Pekalongan',
    kecamatan: 'Bojong',
    desa: 'Bojong Minggir',
    luas: '±1.5 - 2.0 km²',
    ketinggian: '±18 - 25 mdpl',
    deskripsi: 'Desa Bojong Minggir merupakan bagian dari Kecamatan Bojong, Kabupaten Pekalongan, dengan sebagian besar penduduk bermata pencaharian sebagai petani. Terletak di daerah yang memiliki keindahan alam dan potensi pertanian yang luar biasa.',
    karakteristik: 'Wilayah ini dikelilingi oleh pertanian berkelanjutan dan perkebunan yang hijau, menciptakan ekosistem yang seimbang dan udara yang sejuk sepanjang tahun.'
  }

  return (
    <>
      <Hero />

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Lokasi Geografis</h2>
          
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
                  <span className="text-gray-600">{locationData.provinsi}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Kabupaten:</span>
                  <span className="text-gray-600">{locationData.kabupaten}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Kecamatan:</span>
                  <span className="text-gray-600">{locationData.kecamatan}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Desa:</span>
                  <span className="text-gray-600">{locationData.desa}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Ketinggian:</span>
                  <span className="text-gray-600">{locationData.ketinggian}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Luas Wilayah:</span>
                  <span className="text-gray-600">{locationData.luas}</span>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h4 className="font-bold text-green-700 mb-2">📍 Alamat Lengkap</h4>
                <p className="text-gray-700">
                  Desa Bojong Minggir<br/>
                  Kecamatan Bojong<br/>
                  Kabupaten Pekalongan<br/>
                  Provinsi Jawa Tengah, Indonesia
                </p>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Peta Lokasi</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4242424242427!2d109.74188!3d-7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5e5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sBojong%20Minggir%2C%20Bojong%2C%20Pekalongan%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
              <p className="mt-4 text-gray-600 text-sm">
                📍 Klik pin peta untuk melihat lokasi lengkap di Google Maps
              </p>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Karakteristik Geografis</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {locationData.deskripsi}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-gray-700">
                {locationData.karakteristik}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Kesenian & Filosofi Pertanian */}
      <GallerySection />

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ingin Menghubungi Kami?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Silakan kunjungi halaman kontak kami untuk informasi lebih lanjut tentang Desa Bojong Minggir.
            </p>
            <Link
              to="/kontak"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
