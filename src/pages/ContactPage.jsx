import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Alamat',
      details: ['Desa Bojong Minggir', 'Kecamatan Bojong', 'Kabupaten Pekalongan', 'Jawa Tengah 51156'],
    },
    {
      icon: FiPhone,
      title: 'Telepon',
      details: ['(0285) 123-4567', '(0812) 3456-7890'],
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['admin@bojongminggir.desa.id', 'layanan@bojongminggir.desa.id'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-gray-100">Kami siap membantu menjawab pertanyaan Anda</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  className="card text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Map Only */}
          <motion.div
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Lokasi Kami</h2>
            <div className="h-[500px] bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center relative">
              {/* Embed Google Maps */}
              <iframe
                title="Peta Desa Bojong Minggir"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4242424242427!2d109.74188!3d-7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5e5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sBojong%20Minggir%2C%20Bojong%2C%20Pekalongan%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Gunakan peta di atas untuk menemukan lokasi Desa Bojong Minggir. Silakan datang berkunjung pada jam operasional kami.
            </p>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            className="mt-16 card bg-gradient-to-r from-accent to-yellow-500 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Jam Operasional</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="font-semibold">Senin - Jumat</p>
                <p className="text-lg">07:00 - 16:00</p>
              </div>
              <div>
                <p className="font-semibold">Sabtu</p>
                <p className="text-lg">07:00 - 12:00</p>
              </div>
              <div>
                <p className="font-semibold">Minggu</p>
                <p className="text-lg">Libur</p>
              </div>
              <div>
                <p className="font-semibold">Hari Libur Nasional</p>
                <p className="text-lg">Libur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
