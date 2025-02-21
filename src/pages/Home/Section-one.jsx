"use client"
import { motion } from "framer-motion"
import BackgroundVideo from "../../assets/gif/spotlight-background-video.mp4"

const SectionOne = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const glowingBounceVariants = {
    animate: {
      y: [0, -10, 0],
      textShadow: [
        "0px 0px 8px rgb(255,255,255,0.5)",
        "0px 0px 16px rgb(255,255,255,0.8)",
        "0px 0px 8px rgb(255,255,255,0.5)",
      ],
      transition: {
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        },
        textShadow: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          variants={textVariants}
          animate="animate"
        >
          <motion.span variants={glowingBounceVariants} className="inline-block">
            THE PRESTIGE EXPERIENCE
          </motion.span>
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-center max-w-2xl" variants={textVariants} animate="animate">
          <motion.span variants={glowingBounceVariants} className="inline-block">
            BE PART OF THE EXPERIENCE
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  )
}

export default SectionOne

