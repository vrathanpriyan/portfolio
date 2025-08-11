'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

interface HeaderProps {
  activeSection: string
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // On mount, set theme from localStorage or system
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 backdrop-blur-lg ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
      style={{ boxShadow: isScrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : undefined }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl md:text-3xl font-extrabold gradient-text tracking-wide drop-shadow-lg select-none cursor-pointer"
            whileHover={{ scale: 1.08 }}
          >
            Portfolio
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-base font-semibold transition-colors duration-200 hover:text-blue-400 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-400 underline underline-offset-4'
                      : 'text-white/80 dark:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full border border-white/10 bg-black/20 dark:bg-white/10 text-yellow-400 dark:text-blue-400 shadow-md hover:scale-110 transition-all duration-200"
              whileTap={{ rotate: 20, scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-md"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 rounded-xl glass-effect shadow-lg border border-white/10 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-6 text-base font-semibold transition-colors duration-200 hover:text-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-400 underline underline-offset-4'
                    : 'text-white/80'
                }`}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
