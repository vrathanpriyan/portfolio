'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black/40 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Ready to start your next project? I'm here to help bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="border-t border-white/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} /> using Next.js & TypeScript
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Rathan Priyan. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full text-white hover:shadow-lg transition-shadow duration-200"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
