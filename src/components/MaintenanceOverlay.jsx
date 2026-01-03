import { motion } from 'framer-motion'

const MaintenanceOverlay = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center isolate">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                aria-hidden="true"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-[#0F172A] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center"
            >
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-4">
                    Under Maintenance!
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                    Website sedang dalam tahap pengembangan
                </p>
            </motion.div>
        </div>
    )
}

export default MaintenanceOverlay
