'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { 
  Calculator,
  Car,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin,
  AlertCircle,
  Calendar,
  Package,
  Award,
  Wrench,
  TrendingUp,
  ChevronDown,
  Eye,
  Star,
  Search,
  DollarSign,
  Info,
  Clock,
  Users,
  BadgeCheck
} from 'lucide-react'
import Header from '../../components/Header'

// Enhanced metadata for SEO
const pageMetadata = {
  title: 'Kalkulator Harga Repair Gearbox Malaysia 2025 | Anggaran Kos Tepat',
  description: 'Kalkulator harga repair gearbox terkini untuk 200+ model kereta di Malaysia. Dapatkan anggaran kos CVT, automatik & manual secara percuma. Pakar gearbox Shah Alam dengan 15+ tahun pengalaman.',
  keywords: 'kalkulator harga gearbox, repair gearbox malaysia, kos overhaul gearbox, harga servis cvt, gearbox automatik, repair gearbox shah alam, anggaran kos gearbox',
  ogImage: '/images/calculator-og.jpg',
  canonicalUrl: 'https://onextransmission.com/kalkulator-harga'
}

export default function KalkulatorHargaPage() {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [gearboxType, setGearboxType] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [symptom, setSymptom] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState(1)

  const whatsappNumber = '+601131051677'

  // Enhanced SEO with structured data
  useEffect(() => {
    document.title = pageMetadata.title
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', pageMetadata.description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = pageMetadata.description
      document.head.appendChild(meta)
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Kalkulator Harga Repair Gearbox",
      "description": pageMetadata.description,
      "url": pageMetadata.canonicalUrl,
      "applicationCategory": "UtilityApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "MYR"
      },
      "provider": {
        "@type": "AutomotiveBusiness",
        "name": "One X Transmission Specialist",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GF LOT 184107 (LOT LAMA 3579), JALAN HAJI TAIB, BATU 7 1/2",
          "addressLocality": "Shah Alam",
          "addressRegion": "Selangor",
          "postalCode": "40460",
          "addressCountry": "MY"
        },
        "telephone": "+601131051677",
        "priceRange": "RM"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Car brands data
  const carBrands = [
    { value: '', label: 'Pilih Jenama Kereta', icon: '' },
    { value: 'perodua', label: 'Perodua', icon: '' },
    { value: 'proton', label: 'Proton', icon: '' },
    { value: 'honda', label: 'Honda', icon: '' },
    { value: 'toyota', label: 'Toyota', icon: '' },
    { value: 'nissan', label: 'Nissan', icon: '' },
    { value: 'mazda', label: 'Mazda', icon: '' },
    { value: 'bmw', label: 'BMW', icon: '' },
    { value: 'mercedes', label: 'Mercedes-Benz', icon: '' },
    { value: 'volkswagen', label: 'Volkswagen', icon: '' },
    { value: 'others', label: 'Lain-lain', icon: '' }
  ]

  // Car models data
  const carModels: { [key: string]: { value: string; label: string; popular?: boolean }[] } = {
    perodua: [
      { value: '', label: 'Pilih Model' },
      { value: 'myvi', label: 'Myvi (All Gen)', popular: true },
      { value: 'axia', label: 'Axia', popular: true },
      { value: 'bezza', label: 'Bezza', popular: true },
      { value: 'alza', label: 'Alza', popular: true },
      { value: 'aruz', label: 'Aruz' },
      { value: 'viva', label: 'Viva' },
      { value: 'kancil', label: 'Kancil' },
      { value: 'kelisa', label: 'Kelisa' },
      { value: 'kenari', label: 'Kenari' }
    ],
    proton: [
      { value: '', label: 'Pilih Model' },
      { value: 'saga', label: 'Saga', popular: true },
      { value: 'persona', label: 'Persona', popular: true },
      { value: 'iriz', label: 'Iriz', popular: true },
      { value: 'x50', label: 'X50', popular: true },
      { value: 'x70', label: 'X70', popular: true },
      { value: 'exora', label: 'Exora' },
      { value: 'preve', label: 'Preve' },
      { value: 'inspira', label: 'Inspira' },
      { value: 'waja', label: 'Waja' },
      { value: 'gen2', label: 'Gen-2' },
      { value: 'satria', label: 'Satria Neo' }
    ],
    honda: [
      { value: '', label: 'Pilih Model' },
      { value: 'city', label: 'City', popular: true },
      { value: 'civic', label: 'Civic', popular: true },
      { value: 'accord', label: 'Accord', popular: true },
      { value: 'crv', label: 'CR-V', popular: true },
      { value: 'hrv', label: 'HR-V', popular: true },
      { value: 'jazz', label: 'Jazz' },
      { value: 'brv', label: 'BR-V' },
      { value: 'odyssey', label: 'Odyssey' }
    ],
    toyota: [
      { value: '', label: 'Pilih Model' },
      { value: 'vios', label: 'Vios', popular: true },
      { value: 'yaris', label: 'Yaris', popular: true },
      { value: 'altis', label: 'Altis/Corolla', popular: true },
      { value: 'camry', label: 'Camry' },
      { value: 'fortuner', label: 'Fortuner' },
      { value: 'hilux', label: 'Hilux' },
      { value: 'innova', label: 'Innova' },
      { value: 'rush', label: 'Rush' },
      { value: 'avanza', label: 'Avanza' },
      { value: 'veloz', label: 'Veloz' }
    ],
    nissan: [
      { value: '', label: 'Pilih Model' },
      { value: 'almera', label: 'Almera', popular: true },
      { value: 'navara', label: 'Navara', popular: true },
      { value: 'xtrail', label: 'X-Trail', popular: true },
      { value: 'serena', label: 'Serena' },
      { value: 'teana', label: 'Teana' },
      { value: 'sylphy', label: 'Sylphy' },
      { value: 'livina', label: 'Livina' },
      { value: 'grand-livina', label: 'Grand Livina' }
    ],
    mazda: [
      { value: '', label: 'Pilih Model' },
      { value: 'mazda2', label: 'Mazda 2', popular: true },
      { value: 'mazda3', label: 'Mazda 3', popular: true },
      { value: 'cx3', label: 'CX-3', popular: true },
      { value: 'cx5', label: 'CX-5', popular: true },
      { value: 'cx30', label: 'CX-30' },
      { value: 'mazda6', label: 'Mazda 6' },
      { value: 'biante', label: 'Biante' }
    ],
    bmw: [
      { value: '', label: 'Pilih Model' },
      { value: '3series', label: '3 Series', popular: true },
      { value: '5series', label: '5 Series', popular: true },
      { value: 'x1', label: 'X1' },
      { value: 'x3', label: 'X3' },
      { value: 'x5', label: 'X5' },
      { value: '1series', label: '1 Series' },
      { value: '7series', label: '7 Series' }
    ],
    mercedes: [
      { value: '', label: 'Pilih Model' },
      { value: 'c-class', label: 'C-Class', popular: true },
      { value: 'e-class', label: 'E-Class', popular: true },
      { value: 'a-class', label: 'A-Class' },
      { value: 's-class', label: 'S-Class' },
      { value: 'glc', label: 'GLC' },
      { value: 'gla', label: 'GLA' },
      { value: 'gle', label: 'GLE' }
    ],
    volkswagen: [
      { value: '', label: 'Pilih Model' },
      { value: 'polo', label: 'Polo', popular: true },
      { value: 'vento', label: 'Vento', popular: true },
      { value: 'golf', label: 'Golf' },
      { value: 'jetta', label: 'Jetta' },
      { value: 'passat', label: 'Passat' },
      { value: 'tiguan', label: 'Tiguan' }
    ],
    others: [
      { value: '', label: 'Pilih Model' },
      { value: 'other', label: 'Model Lain' }
    ]
  }

  // Gearbox types
  const gearboxTypes = [
    { value: '', label: 'Pilih Jenis Gearbox', icon: '' },
    { value: 'cvt', label: 'CVT (Continuously Variable)', icon: '', popular: true },
    { value: 'automatic', label: 'Automatik (AT)', icon: '', popular: true },
    { value: 'dct', label: 'DCT (Dual Clutch)', icon: '' },
    { value: 'manual', label: 'Manual', icon: '' },
    { value: 'other', label: 'Lain-lain', icon: '' }
  ]

  // Service types
  const serviceTypes = [
    { value: '', label: 'Pilih Jenis Servis', description: '', icon: '' },
    { 
      value: 'service', 
      label: 'Servis Biasa',
      description: 'Tukar minyak gearbox, filter, checkup',
      icon: ''
    },
    { 
      value: 'repair', 
      label: 'Repair/Pembaikan',
      description: 'Betulkan masalah specific (jerking, slip, bunyi)',
      icon: ''
    },
    { 
      value: 'overhaul', 
      label: 'Overhaul Lengkap',
      description: 'Buka dan baiki dalaman gearbox sepenuhnya',
      icon: ''
    },
    { 
      value: 'replacement', 
      label: 'Replacement/Ganti',
      description: 'Ganti gearbox baru atau reconditioned',
      icon: ''
    }
  ]

  // Symptoms
  const symptoms = [
    { value: 'none', label: 'Tiada masalah (servis sahaja)' },
    { value: 'jerking', label: 'Jerking/sentap masa tukar gear' },
    { value: 'slip', label: 'Gear slip/tak makan' },
    { value: 'noise', label: 'Bunyi pelik dari gearbox' },
    { value: 'leak', label: 'Bocor minyak gearbox' },
    { value: 'warning', label: 'Warning light gearbox menyala' },
    { value: 'overheat', label: 'Gearbox terlalu panas' },
    { value: 'delayed', label: 'Delay masa shift gear' },
    { value: 'vibration', label: 'Gegaran berlebihan' },
    { value: 'multiple', label: 'Beberapa masalah sekaligus' }
  ]

  // Price factors
  const priceFactors = [
    {
      icon: Calendar,
      title: 'Tahun Kereta',
      description: 'Model lama mungkin susah cari parts, model baru parts mahal'
    },
    {
      icon: AlertCircle,
      title: 'Severity Masalah',
      description: 'Masalah ringan vs masalah besar - harga berbeza'
    },
    {
      icon: Package,
      title: 'Jenis Parts',
      description: 'Original parts vs OEM vs reconditioned affect price'
    },
    {
      icon: Award,
      title: 'Warranty Included',
      description: 'Kami provide 6-12 bulan warranty, bengkel lain mungkin tidak'
    },
    {
      icon: Wrench,
      title: 'Scope Kerja',
      description: 'Simple service vs full overhaul - complexity matters'
    },
    {
      icon: TrendingUp,
      title: 'Market Price',
      description: 'Harga parts fluctuate based on availability & demand'
    }
  ]

  // Trust signals
  const trustSignals = [
    {
      icon: Award,
      title: '15+ Tahun Pengalaman',
      description: 'Sejak 2009, lebih 5000 pelanggan'
    },
    {
      icon: Shield,
      title: 'Warranty Terjamin',
      description: '6-12 bulan warranty semua kerja'
    },
    {
      icon: Eye,
      title: 'Transparent Pricing',
      description: 'No hidden charges, clear quotation'
    },
    {
      icon: Star,
      title: 'Google Rating 4.8/5',
      description: 'Ratusan review positif'
    },
    {
      icon: Search,
      title: 'Free Diagnosis',
      description: 'Checkup & quotation percuma'
    },
    {
      icon: CheckCircle,
      title: 'Quality Parts',
      description: 'Original/OEM parts guaranteed'
    }
  ]

  // FAQ data
  const faqs = [
    {
      q: "Adakah harga ini final?",
      a: "Harga yang ditunjuk adalah anggaran sahaja. Harga sebenar bergantung pada diagnosis tepat di bengkel. Kami provide free diagnosis untuk dapatkan quotation exact."
    },
    {
      q: "Berapa lama proses repair/overhaul?",
      a: "Servis biasa: 2-4 jam. Repair: 1-3 hari. Overhaul lengkap: 3-7 hari bergantung pada availability parts dan complexity masalah."
    },
    {
      q: "Ada warranty ke?",
      a: "Ya! Kami provide warranty 6 bulan hingga 12 bulan bergantung pada jenis servis. Warranty cover parts dan workmanship."
    },
    {
      q: "Boleh claim insurance?",
      a: "Untuk certain cases boleh claim insurance atau takaful. Kami boleh assist dengan documentation yang diperlukan."
    },
    {
      q: "Kenapa harga berbeza dengan bengkel lain?",
      a: "Kami transparent dengan pricing. Harga include parts quality (original/OEM), technician berpengalaman, warranty, dan after-sales support. Cheap price selalunya compromise on quality."
    },
    {
      q: "Boleh installment ke?",
      a: "Ya, kami accept various payment methods. Contact kami untuk discuss payment plans yang sesuai."
    },
    {
      q: "Nak tahu harga model kereta lain?",
      a: "Layari hargarepairgearbox.com untuk database lengkap dengan 200+ model kereta di Malaysia, termasuk breakdown detail dan comparison."
    }
  ]

  // Price calculation logic
  const calculatePrice = () => {
    let basePrice = 500

    // Adjust by brand
    if (['bmw', 'mercedes', 'volkswagen'].includes(selectedBrand)) {
      basePrice *= 2
    } else if (['honda', 'toyota', 'nissan', 'mazda'].includes(selectedBrand)) {
      basePrice *= 1.5
    }

    // Adjust by gearbox type
    if (gearboxType === 'cvt') {
      basePrice *= 1.3
    } else if (gearboxType === 'dct') {
      basePrice *= 1.5
    }

    // Adjust by service type
    const serviceMultipliers: { [key: string]: number } = {
      service: 1,
      repair: 2.5,
      overhaul: 5,
      replacement: 8
    }
    basePrice *= serviceMultipliers[serviceType] || 1

    // Adjust by symptom severity
    if (['multiple', 'warning'].includes(symptom)) {
      basePrice *= 1.2
    }

    // Calculate range (±20%)
    const minPrice = Math.round(basePrice * 0.8 / 50) * 50
    const maxPrice = Math.round(basePrice * 1.2 / 50) * 50

    return { min: minPrice, max: maxPrice }
  }

  // Form validation
  const isFormValid = () => {
    return selectedBrand !== '' && 
           selectedModel !== '' && 
           gearboxType !== '' && 
           serviceType !== ''
  }

  // Calculate price when form is valid
  useEffect(() => {
    if (isFormValid()) {
      const prices = calculatePrice()
      setEstimatedPrice(prices)
      setShowResult(true)
      
      // Track calculator usage
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'calculator_complete', {
          brand: selectedBrand,
          model: selectedModel,
          service_type: serviceType,
          price_range: `${prices.min}-${prices.max}`
        })
      }
    } else {
      setShowResult(false)
    }
  }, [selectedBrand, selectedModel, gearboxType, serviceType, symptom])

  // Track external link click
  const trackExternalLinkClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'external_link_click', {
        destination: 'hargarepairgearbox.com',
        source_page: 'calculator'
      })
    }
  }

  // Generate WhatsApp message
  const getWhatsAppMessage = () => {
    const brandLabel = carBrands.find(b => b.value === selectedBrand)?.label || selectedBrand
    const modelLabel = selectedModel
    const serviceLabel = serviceTypes.find(s => s.value === serviceType)?.label || serviceType
    const symptomLabel = symptoms.find(s => s.value === symptom)?.label || 'Tiada'
    
    return `Hai, saya nak quotation untuk:\n\nKereta: ${brandLabel} ${modelLabel}\nJenis Servis: ${serviceLabel}\nMasalah: ${symptomLabel}\nAnggaran Harga Calculator: RM ${estimatedPrice.min} - RM ${estimatedPrice.max}\n\nBoleh check harga exact?`
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Header currentPage="kalkulator-harga" />

        {/* Hero Section - Enhanced */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-950/30 via-black to-black overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-full px-8 py-3 backdrop-blur-sm">
                <Calculator className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-semibold">Alat Kalkulator Percuma 2025</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 
                  style={{ 
                    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '-0.02em'
                  }}
                  className="text-5xl md:text-6xl lg:text-7xl leading-tight"
                >
                  Kalkulator Harga{' '}
                  <span className="text-red-500">Repair Gearbox</span>
                </h1>
                
                <p 
                  style={{ 
                    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeight: 300,
                    lineHeight: '1.75'
                  }}
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                >
                  Semak anggaran kos repair, overhaul & servis gearbox untuk kereta anda. Percuma, pantas & transparent.
                </p>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span>15+ Tahun Pengalaman</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-400" />
                  <span>5,000+ Pelanggan</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-400 fill-red-400" />
                  <span>4.9/5 Rating</span>
                </div>
              </motion.div>

              {/* Hero Features - Enhanced Cards */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
              >
                <div className="group bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-red-500/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Zap className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Percuma & Pantas</h3>
                  <p className="text-gray-400 leading-relaxed">Dapatkan anggaran dalam <span className="text-red-400 font-semibold">30 saat</span></p>
                </div>
                
                <div className="group bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-red-500/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Car className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">200+ Model</h3>
                  <p className="text-gray-400 leading-relaxed">Semua jenama <span className="text-red-400 font-semibold">popular</span> di Malaysia</p>
                </div>
                
                <div className="group bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-red-500/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Shield className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">100% Transparent</h3>
                  <p className="text-gray-400 leading-relaxed">Tiada <span className="text-red-400 font-semibold">caj tersembunyi</span></p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Calculator Form Section - Enhanced */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-12"
            >
              <div className="space-y-6">
                {/* Brand Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    1. Jenama Kereta <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value)
                      setSelectedModel('') // Reset model when brand changes
                    }}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all hover:border-red-500/50"
                  >
                    {carBrands.map((brand) => (
                      <option key={brand.value} value={brand.value}>
                        {brand.icon} {brand.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model Selection */}
                {selectedBrand && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      2. Model Kereta <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all hover:border-red-500/50"
                    >
                      {carModels[selectedBrand]?.map((model) => (
                        <option key={model.value} value={model.value}>
                          {model.label} {model.popular ? '⭐' : ''}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Gearbox Type Selection */}
                {selectedModel && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      3. Jenis Gearbox <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={gearboxType}
                      onChange={(e) => setGearboxType(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all hover:border-red-500/50"
                    >
                      {gearboxTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Service Type Selection */}
                {gearboxType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      4. Jenis Servis <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3">
                      {serviceTypes.slice(1).map((service) => (
                        <div
                          key={service.value}
                          onClick={() => setServiceType(service.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            serviceType === service.value
                              ? 'border-red-500 bg-red-500/10'
                              : 'border-gray-700 bg-gray-800/50 hover:border-red-500/50'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{service.label}</h4>
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                            </div>
                            {serviceType === service.value && (
                              <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Symptom Selection (Optional) */}
                {serviceType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      5. Masalah/Simptom (Optional - untuk anggaran lebih tepat)
                    </label>
                    <select
                      value={symptom}
                      onChange={(e) => setSymptom(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all hover:border-red-500/50"
                    >
                      <option value="">Pilih masalah (optional)</option>
                      {symptoms.map((symptom) => (
                        <option key={symptom.value} value={symptom.value}>
                          {symptom.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}
              </div>

              {/* Price Result */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 bg-gradient-to-br from-red-900/20 to-red-950/10 border-2 border-red-500/30 rounded-2xl p-8 shadow-2xl shadow-red-500/20"
                  >
                    {/* Result Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        Anggaran Harga Untuk {carBrands.find(b => b.value === selectedBrand)?.label} {selectedModel.toUpperCase()}
                      </h3>
                      <p className="text-gray-400">Jenis Servis: {serviceTypes.find(s => s.value === serviceType)?.label}</p>
                    </div>

                    {/* Price Display */}
                    <div className="text-center py-8 border-y border-red-500/30">
                      <p className="text-gray-400 text-sm mb-2">Anggaran Kos</p>
                      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        RM {estimatedPrice.min.toLocaleString()} - RM {estimatedPrice.max.toLocaleString()}
                      </div>
                      <p className="text-gray-500 text-xs mt-3">*Harga sebenar bergantung pada diagnosis</p>
                    </div>

                    {/* What's Included */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Diagnosis komputer percuma</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Minyak gearbox spec original</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Parts berkualiti (original/OEM)</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Warranty 6 hingga 12 bulan</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Test drive selepas servis</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Nasihat penyelenggaraan percuma</span>
                      </div>
                    </div>

                    {/* Price Factors Alert */}
                    <div className="mt-6 bg-gray-900/50 border border-yellow-500/30 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-yellow-500 font-semibold mb-2">⚠️ Harga Bergantung Pada:</h4>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• Tahun kereta (older = more expensive parts)</li>
                            <li>• Severity masalah (diagnosis tepat diperlukan)</li>
                            <li>• Jenis parts (original vs OEM vs recond)</li>
                            <li>• Lokasi/availability parts</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 space-y-4">
                      {/* Primary CTA - WhatsApp */}
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center group"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>Dapatkan Quotation Tepat Percuma</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>

                      {/* Secondary CTA - External Link */}
                      <a
                        href="https://www.hargarepairgearbox.com/"
                        target="_blank"
                        rel="noopener"
                        onClick={trackExternalLinkClick}
                        className="block w-full border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center group"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <DollarSign className="w-5 h-5" />
                          <span>Lihat Harga Lengkap 200+ Model Kereta</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </a>

                      {/* Tertiary CTA - Visit Shop */}
                      <Link
                        href="/hubungi"
                        className="block w-full text-center text-gray-400 hover:text-red-500 transition-colors text-sm underline"
                      >
                        Lawati Bengkel Kami
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Why Prices Vary Section */}
        <section className="py-16 md:py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Harga Berbeza?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Memahami faktor-faktor yang mempengaruhi kos repair gearbox anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {priceFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                    <factor.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                  <p className="text-sm text-gray-400">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Pilih Kami?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Lebih dari sekadar repair gearbox - kami berikan peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-red-500/50 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-4">
                    <signal.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{signal.title}</h3>
                  <p className="text-sm text-gray-400">{signal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Soalan Lazim</h2>
              <p className="text-gray-400">
                Jawapan kepada soalan yang kerap ditanya tentang harga repair gearbox
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold pr-4">{faq.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-24 bg-gradient-to-r from-red-900/20 via-black to-red-900/20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Dah Semak Harga? Hubungi Kami Sekarang!
              </h2>
              <p className="text-xl text-gray-300">
                Dapatkan quotation tepat dan diagnosis percuma dari pakar kami
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hai, saya nak tanya tentang servis gearbox')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Kami</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href={`tel:${whatsappNumber}`}
                  className="flex items-center space-x-2 border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Sekarang</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
                  <p>GF LOT 184107, JALAN HAJI TAIB, BATU 7 1/2, 40460 Shah Alam, Selangor</p>
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
    </>
  )
}
