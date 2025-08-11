'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      className="w-full min-h-screen h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Avatar Animation removed for cleaner look */}

      <div className="container mx-auto px-6 text-center relative z-10 flex justify-center items-center h-full">
        <motion.div
          className="glass-effect rounded-3xl shadow-2xl px-8 py-14 md:px-16 md:py-20 max-w-3xl w-full mx-auto border border-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Rathan Priyan</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & TypeScript Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I create beautiful, functional, and user-friendly web applications
            using modern technologies like React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              whileHover={{ scale: 1.13, rotate: 2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <Mail size={22} />
              Get In Touch
            </motion.button>

            <motion.button
              className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 shadow-lg transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              whileHover={{ scale: 1.13, rotate: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={22} />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-8 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
                whileHover={{ scale: 1.3, y: -4, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={28} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2, rotate: 8 }}
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Hero
