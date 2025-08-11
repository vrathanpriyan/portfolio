'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
    { icon: Zap, label: 'Years Experience', value: '3+' },
  ]

  return (
    <motion.section
      className="py-20 bg-black/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl z-10">👨‍💻</div>
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="text-gray-900" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="text-white" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="text-white" size={20} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 drop-shadow">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed text-lg">
              I'm a dedicated full-stack developer with a passion for creating
              innovative web solutions. With expertise in modern technologies
              like React, Next.js, TypeScript, and Node.js, I bring ideas to
              life through clean, efficient code.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying up-to-date with the latest industry trends.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const projectsSection = document.getElementById('projects')
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-effect rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200"
              whileHover={{ scale: 1.07, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className="text-blue-400 mx-auto mb-4" size={36} />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
