'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ChevronRight,
  Wrench,
  Settings,
  Shield,
  CheckCircle,
  Star,
  Award,
  Camera,
  Calendar,
  Users,
  X
} from 'lucide-react'
import Image from 'next/image'
import Header from '../components/Header'

export default function HomePage() {
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

  const services = [
    {
      icon: Wrench,
      title: 'Diagnosis Tepat',
      description: 'Gunakan alat canggih untuk diagnosis masalah gearbox dengan tepat',
      features: ['Scan komputer', 'Test drive', 'Pemeriksaan menyeluruh'],
      image: '/diagnosis.jpg'
    },
    {
      icon: Settings,
      title: 'Overhaul CVT',
      description: 'Khusus untuk CVT semua jenama kereta dengan jaminan kerja',
      features: ['Spare Parts Original', 'Technician Bertauliah/Berpengalaman', 'Warranty 6 ke 12 bulan'],
      image: '/overhaul-cvt.jpg'
    },
    {
      icon: Shield,
      title: 'Servis Gearbox Auto',
      description: 'Pembaikan gearbox automatik dengan standard antarabangsa',
      features: ['Servis Minyak Gearbox', 'Auto Filter', 'Kalibrasi Sistem'],
      image: '/overhaul-at.jpg'
    }
  ]

  const whyChooseUs = [
    { icon: Award, text: '15 Tahun Pengalaman' },
    { icon: CheckCircle, text: 'Warranty 6 ke 12 Bulan' },
    { icon: Star, text: '4.8/5 Google Rating' },
    { icon: Shield, text: 'Parts Original & OEM' }
  ]

  const testimonials = [
    {
      name: 'Ameer Hafiz',
      location: 'Shah Alam',
      rating: 5,
      text: 'Haritu kereta saya servis sini, memang ngam. Pomen peramah. Banyak bagi nasihat yang berguna tentang kereta. Recommended sangat²',
      image: '/reviewer-1.png'
    },
    {
      name: 'Alvin Tan',
      location: 'Klang',
      rating: 5,
      text: 'Great experience, detailed explanation, progress updates and photos clearly show what was the issue with the X70 CBU. Very satisfied with the result, feels like new',
      image: '/reviewer-2.png'
    },
    {
      name: 'Syaza Hidzir',
      location: 'Petaling Jaya',
      rating: 5,
      text: 'Honda Civic gearbox jerking, lepas buat kat sini dah smooth macam baru.',
      image: '/reviewer-3.png'
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <Header currentPage="home" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            opacity: 0.4
          }}
        />
        
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          {/* Subtle fade to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight"
            >
              <span className="block">Gearbox Specialist</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 font-normal">
                Shah Alam
              </span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/70 mt-3 sm:mt-4 tracking-wider">
                One X Transmission
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0"
            >
              Khusus <strong className="text-white font-normal">CVT dan gearbox automatik</strong> semua jenama kereta. 
              Lebih 15 tahun pengalaman dengan jaminan kerja.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0"
            >
              <motion.a
                href="https://wa.link/0hmj0n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto max-w-sm sm:max-w-none flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasi Percuma</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="tel:+601131051677"
                className="w-full sm:w-auto max-w-sm sm:max-w-none flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-xl text-base sm:text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>+60 11-3105 1677</span>
              </motion.a>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center space-x-6 text-sm text-white/50"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Shah Alam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span>Isnin - Sabtu: 9AM - 6PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-black">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight"
            >
              Servis <span className="font-normal text-red-500">Professional</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto px-4 sm:px-0"
            >
              Kami khusus dalam pembaikan dan servis gearbox CVT dan automatik dengan 
              teknologi terkini dan spare parts original.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
          >
            {/* Service Card 1 - Diagnosis Percuma */}
            <motion.div
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl bg-black hover:scale-[1.02] transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              {/* Sharp Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/diagnosis.jpg"
                  alt="Diagnosis Percuma"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-tight">
                  Diagnosis Percuma
                </h3>
                
                {/* CTA Button */}
                <Link
                  href="/khidmat"
                  className="inline-flex items-center space-x-2 text-white hover:text-red-400 transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span className="text-sm uppercase tracking-wider font-medium">Lebih Terperinci</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 2 - AT/CVT Gearbox Overhaul */}
            <motion.div
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl bg-black hover:scale-[1.02] transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              {/* Sharp Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/overhaul-cvt.jpg"
                  alt="AT/CVT Gearbox Overhaul"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                  AT/CVT Gearbox Overhaul
                </h3>
                
                {/* CTA Button */}
                <Link
                  href="/khidmat"
                  className="inline-flex items-center space-x-2 text-white hover:text-red-400 transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span className="text-sm uppercase tracking-wider font-medium">Lebih Terperinci</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Service Card 3 - Gearbox Service */}
            <motion.div
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl bg-black hover:scale-[1.02] transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              {/* Sharp Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/overhaul-at.jpg"
                  alt="Gearbox Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                  Gearbox Service
                </h3>
                
                {/* CTA Button */}
                <Link
                  href="/khidmat"
                  className="inline-flex items-center space-x-2 text-white hover:text-red-400 transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span className="text-sm uppercase tracking-wider font-medium">Lebih Terperinci</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white text-black">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight"
            >
              Proses <span className="font-normal text-red-500">Kerja</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg text-black/70 max-w-3xl mx-auto px-4 sm:px-0"
            >
              4 langkah mudah untuk mendapatkan gearbox anda kembali seperti baharu
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative px-4 sm:px-0"
          >
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-red-200 z-0"></div>
            
            {[
              {
                step: "01",
                title: "Pemeriksaan & Kod Masalah",
                description: "Diagnosis komprehensif menggunakan peralatan canggih untuk mengenal pasti masalah gearbox",
                icon: Settings,
                image: "/inspection.jpg"
              },
              {
                step: "02", 
                title: "Pembongkaran & Penilaian Bahagian",
                description: "Bongkar gearbox dengan teliti dan nilai kondisi setiap komponen dalaman",
                icon: Wrench,
                image: "/disassembly.jpg"
              },
              {
                step: "03",
                title: "Pembersihan & Penggantian Bahagian", 
                description: "Bersihkan dan ganti bahagian yang rosak dengan spare part berkualiti tinggi",
                icon: CheckCircle,
                image: "/cleaning.jpg"
              },
              {
                step: "04",
                title: "Kalibrasi",
                description: "Kalibrasi dan ujian akhir untuk memastikan prestasi gearbox seperti baharu",
                icon: Calendar, 
                image: "/calibration.jpg"
              }
            ].map((workflow, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative z-10"
              >
                <div className="bg-white border border-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {workflow.step}
                  </div>
                  
                  {/* Process Image */}
                  <div className="w-full h-32 bg-white rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={workflow.image} 
                      alt={workflow.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-normal mb-2 sm:mb-3 group-hover:text-red-600 transition-colors tracking-tight">
                    {workflow.title}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed font-light">
                    {workflow.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://wa.link/0hmj0n"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulakan Proses Sekarang</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 sm:mb-8 tracking-tight"
            >
              Kenapa Pilih <span className="font-normal">Kami?</span>
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-px bg-red-500 mx-auto"
            ></motion.div>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-0"
          >
            {/* Experience */}
            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-red-500 mb-2">15</div>
                <div className="text-base sm:text-lg font-light text-black/70 uppercase tracking-wider">Tahun</div>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Pengalaman</h3>
              <p className="text-black/70 leading-relaxed font-light">
                Lebih dari satu dekad kepakaran dalam pembaikan gearbox automatik dan CVT
              </p>
            </motion.div>

            {/* Warranty */}
            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-red-500 mb-2">12</div>
                <div className="text-lg font-light text-black/70 uppercase tracking-wider">Bulan</div>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Warranty</h3>
              <p className="text-black/70 leading-relaxed font-light">
                Jaminan komprehensif sehingga 12 bulan untuk ketenangan minda anda
              </p>
            </motion.div>

            {/* Rating */}
            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-red-500 mb-2">4.8</div>
                <div className="text-lg font-light text-black/70 uppercase tracking-wider">Google</div>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Rating</h3>
              <p className="text-black/70 leading-relaxed font-light">
                Penilaian tinggi daripada pelanggan yang berpuas hati dengan perkhidmatan kami
              </p>
            </motion.div>

            {/* Original Parts */}
            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-red-500 mb-2">100%</div>
                <div className="text-lg font-light text-black/70 uppercase tracking-wider">Original & OEM</div>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Parts</h3>
              <p className="text-black/70 leading-relaxed font-light">
                Menggunakan alat ganti original dan OEM untuk kualiti terbaik dan tahan lama
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Gallery Section */}
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
              className="text-4xl md:text-6xl font-light mb-6 tracking-tight"
            >
              Hasil <span className="font-normal text-red-500">Kerja Kami</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Lihat sendiri kualiti kerja professional kami dalam membaiki gearbox
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Honda Civic - Complete Overhaul",
                category: "Auto Transmission",
                description: "Overhaul menyeluruh dengan jaminan 12 bulan",
                image: "civic.jpg"
              },
              {
                title: "Toyota Vios - Complete Overhaul", 
                category: "Auto Transmission",
                description: "Overhaul lengkap dengan hasil yang memuaskan",
                image: "vios.jpg"
              },
              {
                title: "Ford Ranger - Complete Overhaul",
                category: "Auto Transmission", 
                description: "Overhaul professional dengan kualiti terjamin",
                image: "ranger.jpg"
              }
            ].map((work, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black/50 backdrop-blur-sm border border-black rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
              >
                {/* Single Image Display */}
                <div className="relative h-48 bg-gradient-to-r from-black to-black overflow-hidden">
                  <img 
                    src={`/${work.image}`}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Settings className="w-8 h-8 mb-2 mx-auto" />
                      <p className="font-semibold">Lihat Detail</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-red-500 bg-red-500/10 px-2 py-1 rounded">
                      {work.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-red-400 transition-colors">
                    {work.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4">
                    {work.description}
                  </p>

                  <Link
                    href="/galeri"
                    className="inline-flex items-center text-red-500 hover:text-red-400 text-sm font-medium"
                  >
                    Lihat Lebih Banyak
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA to Gallery */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/galeri"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <Camera className="w-5 h-5" />
              <span>Lihat Semua Kerja Kami</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-black mb-8 tracking-tight"
            >
              Apa Kata <span className="font-normal">Pelanggan</span>
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-px bg-red-500 mx-auto"
            ></motion.div>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                {/* Rating Stars */}
                <div className="flex justify-center items-center space-x-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Quote */}
                <blockquote className="text-lg md:text-xl text-black/80 leading-relaxed font-light italic mb-8 min-h-[120px]">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="border-t border-black/20 pt-8">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-normal text-black mb-1">{testimonial.name}</h4>
                  <p className="text-sm font-light text-black/70 uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Testimonials */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <Link 
              href="/testimoni"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors font-light tracking-wide"
            >
              <span>Lihat Lebih Banyak Testimoni</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-black">
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
              className="text-4xl md:text-6xl font-light mb-6 tracking-tight"
            >
              Hubungi <span className="font-normal text-red-500">Kami</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Jangan tunggu lagi! Diagnosis percuma untuk masalah gearbox anda.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                    <p className="text-gray-300 leading-relaxed">
                      No 15, Jalan Industri 16/12<br />
                      Jalan Kampung Batu 7, Jln Kebun Tambahan<br />
                      40460 Shah Alam, Selangor<br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-300">
                      <a href={`tel:${phoneNumber}`} className="hover:text-red-500 transition-colors">
                        +60 11-3105 1677
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-300">
                      <a 
                        href="https://wa.link/0hmj0n"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="hover:text-green-500 transition-colors"
                      >
                        +60 11-3105 1677 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Waktu Operasi</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Isnin - Jumaat: 9:00 AM - 6:00 PM</p>
                      <p>Sabtu: 9:00 AM - 5:00 PM</p>
                      <p>Ahad: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Dapatkan Diagnosis Percuma!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                WhatsApp kami sekarang untuk appointment dan dapatkan diagnosis percuma. 
                Beritahu kami model kereta dan masalah yang anda hadapi.
              </p>
              
              <motion.a
                href="https://wa.link/0hmj0n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-lg font-semibold transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp untuk Booking</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
              <h4 className="text-lg font-semibold mb-4">Servis Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Diagnosis Gearbox</li>
                <li>• Overhaul CVT</li>
                <li>• Servis Automatik</li>
                <li>• Tukar Minyak ATF</li>
                <li>• Pembaikan Transmisi</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+60 11-3105 1677</p>
                <p>+60 11-3105 1677 (WhatsApp)</p>
                <p>40460 Shah Alam, Selangor</p>
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
