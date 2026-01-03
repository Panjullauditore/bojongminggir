import { motion } from 'framer-motion'
import { FaTools } from 'react-icons/fa'

const MaintenanceOverlay = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center isolate">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-primary/95 backdrop-blur-md"
                aria-hidden="true"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="relative bg-primary border border-secondary/30 rounded-2xl p-10 max-w-lg w-full mx-4 shadow-2xl text-center overflow-hidden"
            >
                {/* Abstract decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

                {/* Animated Icon */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mx-auto w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/5 shadow-inner"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <FaTools className="text-4xl text-accent" />
                    </motion.div>
                </motion.div>

                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-secondary mb-4 tracking-wide font-sans">
                    Under Maintenance!
                </h2>

                <p className="text-light/90 leading-relaxed text-lg font-light tracking-wide">
                    Lagi masuk maintenance era nih, bestie. Stay tuned ya, we keep it lowkey but upgrade soon.
                </p>

                {/* Animated Progress Decoration */}
                <div className="mt-10 relative h-1 w-48 mx-auto bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default MaintenanceOverlay
