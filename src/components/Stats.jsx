import { motion } from 'framer-motion'
import { FiUsers, FiHome, FiTrendingUp, FiAward } from 'react-icons/fi'

const CountUp = ({ to }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {to}
    </motion.span>
  )
}

export default function Stats() {
  const stats = [
    { icon: FiUsers, label: 'Penduduk', value: '5,200+' },
    { icon: FiHome, label: 'Rumah Tangga', value: '1,100' },
    { icon: FiTrendingUp, label: 'Usaha Kecil', value: '350+' },
    { icon: FiAward, label: 'Dusun', value: '8' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-300">
                    <Icon size={32} className="text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-800 mb-2 font-mono">
                    <CountUp to={stat.value} />
                  </h3>
                  <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
