
import { motion } from "framer-motion"

const GalleryHeader = () => {
  return (
    <div className="text-center py-12 md:py-16 bg-black text-white">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Spotlight Gallery
      </motion.h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Relive the magic of our past events through these captivating moments
        </p>
      </motion.div>

      <motion.div
        className="w-24 h-1 bg-[#c5ac5a] mx-auto mt-8"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </div>
  )
}

export default GalleryHeader

