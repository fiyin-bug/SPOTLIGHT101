"use client"
import { motion } from "framer-motion"
import { Music, Mic, CirclePlay, Calendar } from 'lucide-react'

const SectionTwo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        damping: 10,
      },
    },
  }

  const iconBounceVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  }

  // eslint-disable-next-line react/prop-types
  const BouncingIcon = ({ icon: Icon, ...props }) => (
    <motion.div variants={iconBounceVariants} animate="animate">
      <Icon {...props} />
    </motion.div>
  )

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-16 lg:px-8 md:px-6 px-4">
      <motion.div className="container mx-auto px-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" variants={itemVariants}>
          Spotlight Concert
        </motion.h2>

        <motion.p className="text-xl mb-12 text-center max-w-3xl mx-auto" variants={itemVariants}>
        Spotlight concert and awards was founded 4 years ago with the vision of giving upcoming artistes a spot in the limelight to prove themselves.Asides the competition, the regular concert goers have a blast vibing to hits from mainstream artistes, some of who have graced our stage are, The Late MOBHAD, ASAKE, SEYI VIBEZ, T-CLASSIC, DJ CONSEQUENCE, DJ NEPTUNE, DJ DSF
       . Lagos get ready to rave !!!!
              
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <BouncingIcon icon={Music} className="w-16 h-16 mb-4 text-[#c5ac5a]" />
            <h3 className="text-2xl font-semibold mb-2">Top Artists</h3>
            <p>Featuring chart-topping performers from around the globe.</p>
          </motion.div>

          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <BouncingIcon icon={Mic} className="w-16 h-16 mb-4 text-[#c5ac5a]" />
            <h3 className="text-2xl font-semibold mb-2">Live Performances</h3>
            <p>Immerse yourself in the raw energy of live music.</p>
          </motion.div>

          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <BouncingIcon icon={CirclePlay} className="w-16 h-16 mb-4 text-[#c5ac5a]" />
            <h3 className="text-2xl font-semibold mb-2">Past Events</h3>
            <p>Take a dive into highlights from our past events.</p>
          </motion.div>

          <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
            <BouncingIcon icon={Calendar} className="w-16 h-16 mb-4 text-[#c5ac5a]" />
            <h3 className="text-2xl font-semibold mb-2">Upcoming Events</h3>
            <p>Stay tuned for our exciting lineup of future concerts.</p>
          </motion.div>
        </div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a
            href="/tickets"
            className="bg-[#c5ac5a] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d4bc6e] transition-colors duration-300"
          >
            Get Tickets
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SectionTwo
