"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { galleryImages } from "../../data/gallery-images"
import GalleryHeader from "./gallery-header"
import FilterBar from "./filter-bar"
import GalleryGrid from "./gallery-grid"
import ImageModal from "./image-modal"

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [displayedImages, setDisplayedImages] = useState(galleryImages.all)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveCategory(category)
    setDisplayedImages(galleryImages[category])
    // Scroll to top when changing filters
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Modal functions
  const openModal = (index) => {
    setSelectedImage(displayedImages[index])
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentIndex(null)
  }

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < displayedImages.length - 1) {
      setSelectedImage(displayedImages[currentIndex + 1])
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setSelectedImage(displayedImages[currentIndex - 1])
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <motion.div
            className="w-16 h-16 border-4 border-[#c5ac5a] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>
      ) : (
        <>
          <GalleryHeader />

          <FilterBar onFilterChange={handleFilterChange} categories={galleryImages} activeFilter={activeCategory} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={activeCategory}
          >
            <GalleryGrid images={displayedImages} openModal={openModal} />
          </motion.div>

          <ImageModal
            selectedImage={selectedImage}
            currentIndex={currentIndex}
            totalImages={displayedImages.length}
            closeModal={closeModal}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        </>
      )}
    </div>
  )
}

export default GalleryPage

