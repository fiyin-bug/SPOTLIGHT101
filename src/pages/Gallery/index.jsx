import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../../data/gallery-images';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(galleryImages[category] || []);
  }, [category]);

  // Enhanced container variants with more dramatic animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  // Enhanced heading variants
  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      }
    }
  };

  // Paragraph variants
  const paragraphVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  // Enhanced image variants with more dramatic hover effect
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.4)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Button variants with smooth transition
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 } 
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImage === null) return;
    
    if (e.key === 'ArrowRight') {
      navigateImage(1);
    } else if (e.key === 'ArrowLeft') {
      navigateImage(-1);
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <motion.h1 
            className="text-5xl font-bold text-[#c5ac5a] mb-6"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Iconic Moments Captured
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            Step into a visual journey through the electric atmosphere of our past performances. 
            Each frame tells a story of passion, energy, and musical brilliance that defined these unforgettable nights.
          </motion.p>
        </div>

        {/* Category selector with enhanced animations and smooth transitions */}
        {Object.keys(galleryImages).length > 1 && (
          <motion.div 
            className="flex justify-center mb-10 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {Object.keys(galleryImages).map(cat => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-lg transition-all duration-300 ease-in-out border `
                  + (category === cat 
                    ? 'bg-black text-[#c5ac5a] border-[#c5ac5a]' 
                    : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-[#c5ac5a] hover:text-[#c5ac5a]')}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer shadow-lg aspect-square group"
              variants={imageVariants}
              whileHover="hover"
              onClick={() => handleImageClick(index)}
              layoutId={`image-${index}`}
            >
              <img 
                src={image} 
                alt={`Concert image ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-80"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="p-4">
                  <span className="text-sm text-[#c5ac5a]">Click to enlarge</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                layoutId={`image-${selectedImage}`}
                src={images[selectedImage]} 
                alt={`Concert image ${selectedImage + 1}`} 
                className="max-w-full max-h-[90vh] mx-auto object-contain rounded-md"
              />
              <motion.div 
                className="absolute top-4 left-4 text-sm text-[#c5ac5a] bg-black bg-opacity-60 px-3 py-1 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedImage + 1} / {images.length}
              </motion.div>
              {/* <motion.button 
                className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-colors text-xl"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button> */}

              {/* Enhanced navigation buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                {selectedImage > 0 && (
                  <motion.button 
                    className="bg-black bg-opacity-60 text-[#c5ac5a] rounded-full p-3 ml-4 hover:bg-opacity-90 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage(-1);
                    }}
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    &lt;
                  </motion.button>
                )}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                {selectedImage < images.length - 1 && (
                  <motion.button 
                    className="bg-black bg-opacity-60 text-[#c5ac5a] rounded-full p-3 mr-4 hover:bg-opacity-90 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage(1);
                    }}
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    &gt;
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;