'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Menu,
  X,
  Wrench
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '+601131051677'
  const phoneNumber = '+601131051677'

  const navigation = [
    { name: 'Utama', href: '/', key: 'home' },
    { name: 'Servis Kami', href: '/khidmat', key: 'services' },
    { name: 'Galeri', href: '/galeri', key: 'gallery' },
  // { name: 'Blog', href: '/blog', key: 'blog' },
    { name: 'Hubungi Kami', href: '/hubungi', key: 'contact' }
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-32 relative">
                <Image 
                  src="/one-x-transmission-logo.png"
                  alt="One X Transmission Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.key}
                href={item.href} 
                className={currentPage === item.key 
                  ? "text-red-500 font-semibold" 
                  : "hover:text-red-500 transition-colors"
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              href="tel:+601131051677"
              className="flex items-center space-x-2 px-4 py-2 bg-black hover:bg-red-900/30 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </motion.a>
            <motion.a
              href="https://wa.link/0hmj0n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 -mr-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-900/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-3 space-y-3">
            {navigation.map((item) => (
              <Link 
                key={item.key}
                href={item.href} 
                className={currentPage === item.key 
                  ? "block py-2 text-red-500 font-semibold" 
                  : "block py-2 hover:text-red-500 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2 pt-3 border-t border-red-900/30">
              <a
                href={`tel:${phoneNumber}`}
                className="flex-1 flex items-center justify-center space-x-2 px-3 py-2.5 bg-black rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call</span>
              </a>
              <a
                href="https://wa.link/0hmj0n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-3 py-2.5 bg-green-600 rounded-lg text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
