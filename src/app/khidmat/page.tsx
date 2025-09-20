'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Wrench, 
  Settings, 
  Shield, 
  CheckCircle,
  Clock,
  Star,
  Award,
  MapPin,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../../components/Header'

export default function KhidmatPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappNumber = '+601131051677'
  const phoneNumber = '+601131051677'

  const services = [
    {
      icon: Wrench,
      title: 'Diagnosis Gearbox',
      price: 'PERCUMA',
      description: 'Pemeriksaan menyeluruh menggunakan alat canggih untuk mengesan masalah gearbox dengan tepat.',
      image: 'service-diagnosis.jpg',
      features: [
        'Alat Diagnosis Profesional',
        'Test Drive Bersama Mekanik',
        'Semakan Tahap dan Kualiti Minyak Gearbox',
        'Pengesanan Kebocoran dan Kerosakan Komponen',
        'Laporan Diagnosis Lengkap'
      ],
      duration: '30-45 minit',
      warranty: 'Diagnosis percuma'
    },
    {
      icon: Settings,
      title: 'Overhaul Gearbox AT/CVT',
      price: 'RM 2,500 - RM 10,000+',
      description: 'Pembaikpulihan lengkap sistem CVT dengan spare parts original dan jaminan kerja.',
      image: 'service-overhaul.jpg',
      features: [
        'Buka dan asingkan keseluruhan gearbox',
        'Pemeriksaan terperinci setiap komponen dalaman',
        'Tukar/Baiki komponen rosak',
        'Tukar minyak ATF/CVT dengan spesifikasi pengeluar',
        'Kalibrasi semula gearbox'
      ],
      duration: '3-5 hari kerja',
      warranty: '6 bulan / 10,000km'
    },
    {
      icon: Shield,
      title: 'Servis Gearbox/Enjin',
      price: 'RM 150 - RM 800',
      description: 'Penyelenggaraan rutin dan pembaikan gearbox automatik untuk prestasi optimum.',
      image: 'service-automatic.jpg',
      features: [
        'Tukar minyak enjin',
        'Tukar oil filter',
        'Tukar auto filter / ATF filter',
        'Tukar minyak gearbox (ATF/CVT)',
        'Pemeriksaan asas prestasi enjin & gearbox'
      ],
      duration: '4-8 jam',
      warranty: '3 bulan / 5,000km'
    },
    {
      icon: Award,
      title: 'Lain Lain Servis',
      price: 'Mengikut servis',
      description: 'Servis penyelenggaraan lengkap untuk semua keperluan kenderaan anda.',
      image: 'service-others.jpg',
      features: [
        'Spark plug',
        'Brake pad',
        'Timing belt / fan belt',
        'Coolant / servis sistem penyejukan',
        'Minyak brek'
      ],
      duration: '1-3 jam',
      warranty: 'Mengikut servis'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: '15+ Tahun Pengalaman',
      description: 'Pakar dalam CVT dan gearbox automatik semua jenama'
    },
    {
      icon: Shield,
      title: 'Spare Parts Original',
      description: 'Hanya gunakan spare parts original atau OEM berkualiti'
    },
    {
      icon: CheckCircle,
      title: 'Jaminan Kerja',
      description: 'Garansi sehingga 6 bulan untuk kerja overhaul penuh'
    },
    {
      icon: Clock,
      title: 'Servis Pantas',
      description: 'Diagnosis hari yang sama, kerja siap tepat masa'
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
      <Header currentPage="services" />

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
            >
              Servis <span className="text-red-500">Professional</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0"
            >
              Kami menyediakan servis lengkap untuk pembaikan dan penyelenggaraan 
              gearbox CVT dan automatik dengan standard antarabangsa.
            </motion.p>

            {/* Service Categories Visual */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-4xl mx-auto px-4 sm:px-0"
            >
              <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 text-center">
                <Wrench className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm text-white/70 font-medium">Diagnosis</p>
              </div>
              <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 text-center">
                <Settings className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm text-white/70 font-medium">Overhaul</p>
              </div>
              <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm text-white/70 font-medium">Pembaikan</p>
              </div>
              <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-sm text-white/70 font-medium">Servis</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Large Service Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={`/${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-black mb-2 sm:mb-3 tracking-tight">{service.title}</h3>
                      <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 inline-block">
                        <span className="text-red-600 font-normal text-lg sm:text-xl tracking-wide">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-black/80 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-normal text-black mb-4 tracking-tight">Termasuk:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 text-black/70">
                            <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="font-light leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Duration and Warranty */}
                    <div className="space-y-6">
                      <div className="bg-white border border-black/10 rounded-2xl p-6">
                        <h5 className="text-lg font-normal text-black mb-2 tracking-tight">Tempoh Kerja:</h5>
                        <p className="text-black/70 font-light">{service.duration}</p>
                      </div>
                      <div className="bg-white border border-black/10 rounded-2xl p-6">
                        <h5 className="text-lg font-normal text-black mb-2 tracking-tight">Jaminan:</h5>
                        <p className="text-black/70 font-light">{service.warranty}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a
                    href="https://wa.link/0hmj0n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-all duration-300 font-normal tracking-wide group-hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Tanya Detail</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-light tracking-tight mb-6"
            >
              Kenapa Pilih <span className="text-red-500">Kami?</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-light tracking-tight"
            >
              Mula <span className="text-red-500">Hari Ini</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Jangan biarkan masalah gearbox menjadi lebih teruk. 
              Dapatkan diagnosis percuma sekarang!
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="https://wa.link/0hmj0n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Sekarang</span>
              </motion.a>

              <motion.a
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call +60 11-3105 1677</span>
              </motion.a>
            </motion.div>
          </motion.div>
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
                <li>• Diagnosis Gearbox</li>
                <li>• Overhaul CVT</li>
                <li>• Servis Automatik</li>
                <li>• Tukar Minyak ATF</li>
                <li>• Pembaikan Transmisi</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Hubungi</h4>
              <div className="space-y-2 text-sm text-white/50">
                <p>+60 11-3105 1677</p>
                <p>+60 11-3105 1677 (WhatsApp)</p>
                <p>40460 Shah Alam, Selangor</p>
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
