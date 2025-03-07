import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const ImageModal = ({
  selectedImage,
  currentIndex,
  totalImages,
  closeModal,
  nextImage,
  prevImage,
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [closeModal, nextImage, prevImage]);

  // Modal variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-[90%] max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={selectedImage}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.button
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
            >
              <X size={20} />
            </motion.button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full backdrop-blur-sm text-sm">
              {currentIndex + 1} / {totalImages}
            </div>

            {currentIndex > 0 && (
              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}

            {currentIndex < totalImages - 1 && (
              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ImageModal.propTypes = {
  selectedImage: PropTypes.string,
  currentIndex: PropTypes.number,
  totalImages: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
};

export default ImageModal;
