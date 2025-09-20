'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Navigation,
  Wrench,
  Send
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../../components/Header'

export default function HubungiPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    problem: '',
    message: ''
  })

  const whatsappNumber = '+601131051677'
  const phoneNumber = '+601131051677'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Salam, saya nak booking untuk diagnosis gearbox.

*Maklumat Pelanggan:*
Nama: ${formData.name}
Telefon: ${formData.phone}

*Maklumat Kereta:*
Model: ${formData.carModel}
Masalah: ${formData.problem}

*Mesej Tambahan:*
${formData.message || 'Tiada'}

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    window.open('https://wa.link/0hmj0n', '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+60 11-3105 1677'],
      description: 'Call untuk appointment atau pertanyaan segera',
      action: 'tel:+601131051677',
      actionText: 'Call Sekarang',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+60 11-3105 1677 (WhatsApp)'],
      description: 'Respon pantas 24/7 untuk consultation',
      action: 'https://wa.link/0hmj0n',
      actionText: 'WhatsApp Kami',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: [
        'No 15, Jalan Industri 16/12',
        'Jalan Kampung Batu 7, Jln Kebun Tambahan, 40460 Shah Alam',
        'Selangor, Malaysia'
      ],
      description: 'Lokasi bengkel kami di kawasan perindustrian',
      action: 'https://maps.google.com/?q=2.9790295931497934,101.51856181116906',
      actionText: 'Buka Maps',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      icon: Clock,
      title: 'Waktu Operasi',
      details: [
        'Isnin - Jumaat: 9:00 AM - 6:00 PM',
        'Sabtu: 9:00 AM - 5:00 PM',
        'Ahad: Tutup'
      ],
      description: 'Kecemasan boleh call 24/7',
      action: `tel:${phoneNumber}`,
      actionText: 'Call Kecemasan',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-900/20 via-black to-black">
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
              Hubungi <span className="text-red-500 font-normal">Kami</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Kami sedia membantu dengan masalah gearbox anda. Hubungi kami untuk consultation percuma dan diagnosis professional.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pt-12 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-black rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 h-[420px] flex flex-col justify-between"
              >
                {/* Icon Section - Fixed Height */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 ${info.color.split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6 h-8 flex items-center justify-center">{info.title}</h3>
                </div>
                
                {/* Content Section - Flexible Height */}
                <div className="flex-grow flex flex-col justify-center">
                  <div className="space-y-3 mb-8 min-h-[120px] flex flex-col justify-center">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-white/70 text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
                
                {/* Button Section - Fixed Position */}
                <div className="mt-auto">
                  <motion.a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`inline-flex items-center justify-center px-6 py-4 ${info.color} text-white rounded-lg transition-colors w-full h-14 font-semibold text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {info.actionText}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-light mb-6 tracking-tight"
            >
              Quick <span className="text-red-500 font-normal">Booking</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/50"
            >
              Hantar maklumat anda dan kami akan contact balik untuk appointment
            </motion.p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleWhatsAppSubmit}
            className="bg-black rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Nama Penuh *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  placeholder="Masukkan nama anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  No. Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  placeholder="012-345 6789"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Model Kereta *
                </label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  placeholder="Honda City 2018"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Masalah Utama *
                </label>
                <input
                  type="text"
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                  placeholder="Gearbox slip, bunyi pelik, etc."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Mesej Tambahan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                placeholder="Terangkan masalah dengan lebih detail..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Hantar ke WhatsApp</span>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Workshop Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Maklumat Bengkel</h3>
                
                <div className="bg-gray-900 rounded-2xl p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">One X Transmission</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Specialist gearbox CVT dan automatik dengan pengalaman lebih 15 tahun. 
                        Kami menggunakan equipment terkini dan spare parts berkualiti tinggi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Waktu Operasi</h4>
                      <div className="space-y-1 text-gray-300">
                        <p>Isnin - Jumaat: <span className="text-white">9:00 AM - 6:00 PM</span></p>
                        <p>Sabtu: <span className="text-white">9:00 AM - 5:00 PM</span></p>
                        <p>Ahad: <span className="text-red-400">Tutup</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Kecemasan 24/7</h4>
                      <p className="text-gray-300">
                        Untuk kecemasan atau towing service, call kami 24/7
                      </p>
                      <motion.a
                        href={`tel:${phoneNumber}`}
                        className="inline-flex items-center space-x-2 mt-2 text-red-400 hover:text-red-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Phone className="w-4 h-4" />
                        <span>+60 11-3105 1677</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map/Location Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Lokasi Bengkel</h3>
                
                {/* Google Maps Embed */}
                <div className="bg-gray-800 rounded-2xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.47!2d101.51856181116906!3d2.9790295931497934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTgnNDQuNSJOIDEwMcKwMzEnMDYuOCJF!5e0!3m2!1sen!2smy!4v1635000000000!5m2!1sen!2smy"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80"
                  ></iframe>
                </div>
                  
                <motion.a
                  href="https://maps.google.com/?q=2.9790295931497934,101.51856181116906"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka Google Maps</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <p className="text-gray-400 text-sm leading-relaxed">
                Khusus pembaikan dan servis gearbox CVT dan automatik dengan 
                lebih 15 tahun pengalaman.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Halaman</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-red-400 transition-colors">Utama</Link></li>
                <li><Link href="/khidmat" className="hover:text-red-400 transition-colors">Servis Kami</Link></li>
                <li><Link href="/galeri" className="hover:text-red-400 transition-colors">Galeri</Link></li>
                <li><Link href="/hubungi" className="hover:text-red-400 transition-colors">Hubungi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Servis Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Diagnosis Gearbox</li>
                <li>Overhaul CVT & Auto</li>
                <li>Servis & Tukar Oil</li>
                <li>Pembaikan Komponen</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Hubungi Kami</h4>
              <div className="space-y-3 text-sm text-gray-400">
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

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
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