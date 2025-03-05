"use client"
import { motion } from "framer-motion"
import { Eye, Target, Music, Award, Users, Mic } from "lucide-react"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
        stiffness: 100,
      },
    },
  }

  const features = [
    { icon: Music, text: "Performances by top artists" },
    { icon: Award, text: "Cash prizes worth millions" },
    { icon: Users, text: "Platform for upcoming artists" },
    { icon: Mic, text: "One-year record deal for winners" },
  ]

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 sm:px-12 lg:px-24 py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* About Spotlight Section */}
      <motion.div className="max-w-4xl mx-auto text-center mb-20" variants={itemVariants}>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#c5ac5a] mb-6">About Spotlight</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Spotlight Concert and Awards, founded 4 years ago, is more than just an event—it&apos;s a launchpad for emerging
          talents and a celebration of Nigerian music. We provide a stage for upcoming artists to shine, compete for
          life-changing prizes, and kickstart their careers.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div key={index} className="text-center" variants={itemVariants}>
            <motion.div
              className="bg-[#c5ac5a] rounded-full p-4 inline-block mb-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <feature.icon size={32} className="text-black" />
            </motion.div>
            <p className="text-sm sm:text-base">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Vision */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-[#c5ac5a] mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6" /> Our Vision
          </h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We envision a future where artistic expression is celebrated and nurtured through an immersive platform.
            Spotlight aims to be a globally recognized event fostering creativity and excellence, providing talents a
            space to collaborate and innovate.
          </motion.p>
        </motion.div>

        {/* Mission */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-[#c5ac5a] mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" /> Our Mission
          </h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our mission is to create an inclusive platform that inspires Nigerian youths through culture and
            entertainment. By showcasing emerging talents, we foster growth, spark conversations, and empower artists to
            thrive in the competitive music industry.
          </motion.p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div className="text-center mt-20" variants={itemVariants} whileHover={{ scale: 1.05 }}>
        <h2 className="text-3xl font-bold mb-4">Join Us in April 2025</h2>
        <p className="text-xl mb-6">Be part of the next big music revolution!</p>
        <motion.button
          className="bg-[#c5ac5a] text-black px-8 py-3 rounded-full text-lg font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Notified
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default About

