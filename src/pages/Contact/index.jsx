"use client"

import { useState } from "react"
import { Mail, Phone, Instagram, Youtube, Music, Headphones, Mic } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const contactInfo = [
    { icon: Mail, text: "Asanbemusic@gmail.com", href: "mailto:Asanbemusic@gmail.com" },
    { icon: Phone, text: "09012518521", href: "tel:09012518521" },
    { icon: Instagram, text: "Follow us on Instagram", href: "https://www.instagram.com/spotlightconcert/" },
    { icon: Youtube, text: "Subscribe to our YouTube", href: "https://www.youtube.com/asanbemusic" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const floatingIcons = [Music, Headphones, Mic]

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-[#c5ac5a] opacity-20"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{
            x: ["100%", "-100%"],
            y: ["100%", "-100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 20 + index * 5,
            ease: "linear",
          }}
        >
          <Icon size={50 + index * 20} />
        </motion.div>
      ))}
      <motion.div
        className="bg-black bg-opacity-10 backdrop-blur-lg rounded-xl p-8 max-w-md w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-center text-white mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-gray-300 text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
        >
          Ready to rock? Reach out to us for any inquiries, collaborations, or just to say hello!
        </motion.p>
        <motion.div className="space-y-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center space-x-4 text-white hover:text-[#c5ac5a] transition-colors duration-300 group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-[#c5ac5a] p-3 rounded-full group-hover:bg-white transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <item.icon size={24} className="text-black" />
              </motion.div>
              <span className="text-lg">{item.text}</span>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -inset-2 bg-[#c5ac5a] opacity-20 rounded-lg z-[-1]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </motion.div>
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <p className="text-gray-400">Let&apos;s create unforgettable moments together!</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact

