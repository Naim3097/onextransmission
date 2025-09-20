'use client'

import { motion } from 'framer-motion'
import { Camera, Phone, MessageCircle, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'

// Generate gallery images array from all available images
const galleryImages = [
  "/pakar-gearbox shah-alam-gallery-1.jpg",
  "/pakar-gearbox shah-alam-gallery-2.jpg", 
  "/pakar-gearbox shah-alam-gallery-3.jpg",
  "/pakar-gearbox shah-alam-gallery-4.jpg",
  "/pakar-gearbox shah-alam-gallery-5.jpg",
  "/pakar-gearbox shah-alam-gallery-6.jpg",
  "/pakar-gearbox shah-alam-gallery-7.jpg",
  "/pakar-gearbox shah-alam-gallery-8.jpg",
  "/pakar-gearbox shah-alam-gallery-9.jpg",
  "/pakar-gearbox shah-alam-gallery-10.jpg",
  "/pakar-gearbox shah-alam-gallery-11.jpg",
  "/pakar-gearbox shah-alam-gallery-12.jpg",
  "/pakar-gearbox shah-alam-gallery-13.jpg",
  "/pakar-gearbox shah-alam-gallery-14.jpg",
  "/pakar-gearbox shah-alam-gallery-15.jpg",
  "/pakar-gearbox shah-alam-gallery-16.jpg",
  "/pakar-gearbox shah-alam-gallery-17.jpg",
  "/pakar-gearbox shah-alam-gallery-18.jpg",
  "/pakar-gearbox shah-alam-gallery-19.jpg",
  "/pakar-gearbox shah-alam-gallery-20.jpg",
  "/pakar-gearbox shah-alam-gallery-21.jpg",
  "/pakar-gearbox shah-alam-gallery-22.jpg",
  "/pakar-gearbox shah-alam-gallery-23.jpg",
  "/pakar-gearbox shah-alam-gallery-24.jpg",
  "/pakar-gearbox shah-alam-gallery-25.jpg",
  "/pakar-gearbox shah-alam-gallery-27.jpg",
  "/pakar-gearbox shah-alam-gallery-29.jpg",
  "/pakar-gearbox shah-alam-gallery-30.jpg",
  "/pakar-gearbox shah-alam-gallery-31.jpg",
  "/pakar-gearbox shah-alam-gallery-32.jpg"
]

export default function GalleryPage() {
  const whatsappNumber = '+601131051677'

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5"></div>
      <Header currentPage="gallery" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light tracking-tight"
            >
              Galeri <span className="text-red-500">Kerja</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Lihat sendiri kualiti kerja professional kami dalam setiap projek yang dilaksanakan
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={image}
                    alt={`Kerja Gearbox ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-light mb-8 leading-tight tracking-tight"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Perlukan Servis Gearbox
              <br />
              <span className="text-white font-normal">Professional?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-red-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hubungi kami sekarang untuk <span className="font-semibold text-white">diagnosis percuma</span> dan quotation terbaik
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.link/0hmj0n"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-3">💬</span>
                WhatsApp Kami
                <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  →
                </motion.div>
              </motion.a>
              
              <motion.a
                href="tel:+601131051677"
                className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white hover:text-red-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl backdrop-blur-sm border-2 border-white/20 hover:border-white transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-3">📞</span>
                Call Terus: 03-5191 8330
                <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-500 to-red-500"></div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-40 h-40 relative">
                  <Image 
                    src="/one-x-transmission-logo.png"
                    alt="One X Transmission Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Khusus pembaikan dan servis gearbox CVT dan automatik dengan 
                lebih 15 tahun pengalaman.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Halaman</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-red-400 transition-colors">Utama</Link></li>
                <li><Link href="/khidmat" className="hover:text-red-400 transition-colors">Servis Kami</Link></li>
                <li><Link href="/galeri" className="hover:text-red-400 transition-colors">Galeri</Link></li>
                <li><Link href="/hubungi" className="hover:text-red-400 transition-colors">Hubungi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Servis Kami</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>Diagnosis Gearbox</li>
                <li>Overhaul CVT & Auto</li>
                <li>Servis & Tukar Oil</li>
                <li>Pembaikan Komponen</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Hubungi Kami</h4>
              <div className="space-y-3 text-sm text-white/50">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>+60 11-3105 1677</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <span>WhatsApp 24/7</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>No 15, Jalan Industri 16/12<br />Shah Alam, Selangor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-900/30 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 One X Transmission. Semua hak terpelihara.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.link/0hmj0n"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  )
}
