"use client"

import { motion } from "framer-motion"
import PropTypes from "prop-types"

const FilterBar = ({ onFilterChange, categories, activeFilter }) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 py-6 bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {Object.keys(categories).map((category) => (
        <motion.button
          key={category}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === category ? "bg-[#c5ac5a] text-black" : "text-white hover:text-[#c5ac5a]"
          }`}
          onClick={() => onFilterChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.button>
      ))}
    </motion.div>
  )
}

FilterBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  activeFilter: PropTypes.string.isRequired,
}

export default FilterBar

