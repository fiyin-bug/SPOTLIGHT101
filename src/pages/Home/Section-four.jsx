
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { CarouselImages } from "../../data/carousel-images"

const SectionFour = () => {
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const sliderVariants = {
    hidden: { x: "0%" },
    visible: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div ref={containerRef} className="relative w-full h-[10vh] md:h-[10vh] overflow-hidden bg-black">
      <motion.div
        className="flex absolute top-0 left-0 h-full"
        variants={sliderVariants}
        initial="hidden"
        animate={controls}
      >
        {[...CarouselImages, ...CarouselImages].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/6 md:w-1/2 lg:w-1/6 h-full p-4">
            <div className="w-full h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <img src={image.image || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SectionFour
