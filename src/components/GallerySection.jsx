import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)

  const traditionGallery = [
    {
      id: 1,
      title: 'Seni Tari Tradisional',
      description: 'Tarian tradisional yang menggambarkan budaya dan semangat masyarakat',
      image: 'https://images.unsplash.com/photo-1543857770-7245f1c41225?w=600&q=80',
      category: 'kesenian'
    },
    {
      id: 2,
      title: 'Pertunjukan Musik Gamelan',
      description: 'Musik gamelan tradisional untuk berbagai acara dan perayaan',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      category: 'kesenian'
    },
    {
      id: 3,
      title: 'Kerajinan Tangan',
      description: 'Kerajinan tradisional yang dibuat oleh pengrajin lokal',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80',
      category: 'kesenian'
    },
    {
      id: 4,
      title: 'Upacara Adat',
      description: 'Upacara adat yang menjadi bagian penting dari tradisi lokal',
      image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&q=80',
      category: 'kesenian'
    }
  ]

  const agricultureGallery = [
    {
      id: 5,
      title: 'Pertanian Organik',
      description: 'Hasil pertanian organik yang sehat dan berkualitas tinggi',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
      category: 'pertanian'
    },
    {
      id: 6,
      title: 'Hasil Panen Padi',
      description: 'Padi menjadi tanaman utama dengan hasil melimpah',
      image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&q=80',
      category: 'pertanian'
    },
    {
      id: 7,
      title: 'Buah-buahan Segar',
      description: 'Buah-buahan segar dari perkebunan lokal yang dirawat alami',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80',
      category: 'pertanian'
    },
    {
      id: 8,
      title: 'Sayuran Berkualitas',
      description: 'Sayuran segar dengan teknik pertanian berkelanjutan',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&q=80',
      category: 'pertanian'
    }
  ]

  const GalleryImage = ({ item }) => (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative h-72 rounded-xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer group bg-slate-900"
      onClick={() => setSelectedImage(item)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-50 transition-all duration-500 ease-out"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-bold text-xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {item.title}
        </h3>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          {item.description}
        </p>
      </div>
    </motion.div>
  )

  return (
    <>
      {/* Traditions Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Kesenian Tradisional</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Melestarikan warisan budaya leluhur melalui berbagai bentuk kesenian yang autentik dan bermakna spiritual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditionGallery.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.id * 0.1 }}
              >
                <GalleryImage item={item} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded"
          >
            <h3 className="text-2xl font-bold text-primary mb-3">💫 Filosofi Kesenian Kami</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kesenian tradisional adalah cerminan jiwa masyarakat Bojong Minggir. Setiap gerakan tari, irama gamelan, dan karya kerajinan menceritakan kisah kehidupan, nilai-nilai budaya, dan komitmen kami untuk menjaga warisan leluhur agar tetap hidup di tengah perubahan zaman. Kami percaya bahwa seni adalah bahasa universal yang menghubungkan generasi masa lalu dengan masa depan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agriculture & Philosophy Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Pertanian Berkelanjutan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Menerapkan sistem pertanian ramah lingkungan dengan hasil yang berkelanjutan melalui teknik tradisional yang dipadukan dengan inovasi modern.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {agricultureGallery.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (item.id - 5) * 0.1 }}
              >
                <GalleryImage item={item} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-l-4 border-green-500 p-8 rounded shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-3">🌱 Filosofi Pertanian Kami</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Desa Bojong Minggir menerapkan prinsip pertanian berkelanjutan yang menghormati alam dan menjaga keseimbangan ekosistem. Menggunakan teknik tradisional yang dipadukan dengan inovasi modern, kami menghasilkan produk pertanian yang sehat, bergizi, dan ramah lingkungan.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kami percaya bahwa pertanian yang baik adalah investasi untuk masa depan generasi mendatang. Setiap lahan yang digarap adalah tanggung jawab kami untuk menjaga kesehatan tanah, air, dan udara agar tetap subur dan produktif untuk periode yang sangat panjang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-96 bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10"
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
            <div className="p-6 bg-gray-50 border-t">
              <h3 className="text-2xl font-bold text-primary mb-2">{selectedImage.title}</h3>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
