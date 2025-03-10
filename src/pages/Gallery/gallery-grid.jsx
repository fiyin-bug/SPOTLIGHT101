"use client"

import { motion } from "framer-motion"
import PropTypes from "prop-types"

const GalleryGrid = ({ images, openModal }) => {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-gray-900"
          variants={itemVariants}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
          onClick={() => openModal(index)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="text-white text-sm font-medium">View Image</span>
          </motion.div>

          <img
            src={src || "/placeholder.svg"}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

GalleryGrid.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default GalleryGrid

