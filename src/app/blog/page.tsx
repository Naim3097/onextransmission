'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  MessageCircle,
  Wrench,
  Settings,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappNumber = '+601131051677'

  const blogPosts = [
    {
      id: 1,
      slug: '5-langkah-mudah-jaga-gearbox-cvt',
      title: '5 Langkah Mudah Menjaga Gearbox CVT Anda',
      excerpt: 'Panduan lengkap untuk pemilik kereta dengan gearbox CVT. Ikuti 5 langkah mudah ini untuk memastikan gearbox anda tahan lama dan mengelakkan kos pembaikan yang tinggi.',
      image: 'service-diagnosis.jpg',
      category: 'Panduan & Tips',
      date: '1 November 2024',
      readTime: '6 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 2,
      slug: '7-tanda-gearbox-automatik-bermasalah',
      title: '7 Tanda Gearbox Automatik Anda Bermasalah',
      excerpt: 'Kenali tanda-tanda awal masalah gearbox automatik sebelum terlambat. Jimat ribuan ringgit dengan diagnosis awal dan tindakan pantas dari pakar kami.',
      image: 'service-automatic.jpg',
      category: 'Masalah Gearbox',
      date: '28 Oktober 2024',
      readTime: '7 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 3,
      slug: 'jadual-servis-gearbox-masa-sesuai',
      title: 'Jadual Servis Gearbox: Bila Masa Yang Sesuai?',
      excerpt: 'Ketahui jadual servis yang betul untuk gearbox anda. Penyelenggaraan berkala dapat mengelakkan masalah besar dan memanjangkan jangka hayat gearbox.',
      image: 'service-overhaul.jpg',
      category: 'Penyelenggaraan',
      date: '25 Oktober 2024',
      readTime: '5 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 4,
      slug: 'panduan-kos-repair-gearbox-malaysia',
      title: 'Panduan Lengkap Kos Repair Gearbox di Malaysia 2024',
      excerpt: 'Berapa kos sebenar untuk repair atau overhaul gearbox? Panduan lengkap dengan breakdown harga untuk semua jenama kereta di Malaysia.',
      image: 'service-others.jpg',
      category: 'Kos & Harga',
      date: '22 Oktober 2024',
      readTime: '8 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 5,
      slug: 'masalah-gearbox-cvt-perodua',
      title: 'Masalah Biasa Gearbox CVT Perodua: Myvi, Axia & Bezza',
      excerpt: 'Panduan khas untuk pemilik Perodua. Ketahui masalah biasa gearbox CVT Myvi, Axia, dan Bezza serta cara mengatasinya dengan betul.',
      image: 'service-diagnosis.jpg',
      category: 'Jenama Kereta',
      date: '20 Oktober 2024',
      readTime: '6 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 6,
      slug: '15-tahun-pakar-gearbox-shah-alam',
      title: 'Kisah Kejayaan: 15 Tahun Pakar Gearbox di Shah Alam',
      excerpt: 'Perjalanan One X Transmission sebagai bengkel pakar gearbox terpercaya di Shah Alam. Lebih 5000 pelanggan berpuas hati dengan servis kami.',
      image: 'service-overhaul.jpg',
      category: 'Profil Kami',
      date: '15 Oktober 2024',
      readTime: '5 minit bacaan',
      author: 'One X Transmission'
    }
  ]

  const categories = ['Semua', 'Panduan & Tips', 'Masalah Gearbox', 'Penyelenggaraan', 'Kos & Harga', 'Jenama Kereta', 'Profil Kami']
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const filteredPosts = selectedCategory === 'Semua' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
    <>
      <Head>
        <title>Blog Pakar Gearbox Shah Alam | Tips, Panduan & Penyelesaian Masalah Gearbox Malaysia</title>
        <meta name="description" content="Artikel lengkap tentang gearbox CVT, automatik & manual. Dapatkan panduan servis, tips penyelenggaraan, kos repair, masalah biasa gearbox untuk semua jenama kereta di Malaysia." />
        <meta name="keywords" content="blog gearbox malaysia, tips gearbox, panduan servis gearbox, masalah gearbox automatik, kos repair gearbox, CVT perodua myvi, gearbox proton, pakar gearbox shah alam" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onextransmission.com/blog" />
        <meta property="og:title" content="Blog Pakar Gearbox Shah Alam | Tips & Panduan Lengkap Gearbox Malaysia" />
        <meta property="og:description" content="Artikel lengkap tentang gearbox CVT, automatik & manual. Dapatkan panduan servis, tips penyelenggaraan, kos repair, masalah biasa gearbox untuk semua jenama kereta di Malaysia." />
        <meta property="og:image" content="https://onextransmission.com/images/blog-og-image.jpg" />
        <meta property="og:locale" content="ms_MY" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://onextransmission.com/blog" />
        <meta name="twitter:title" content="Blog Pakar Gearbox Shah Alam | Tips & Panduan Lengkap" />
        <meta name="twitter:description" content="Artikel lengkap tentang gearbox CVT, automatik & manual. Panduan servis, tips penyelenggaraan, kos repair untuk semua jenama kereta di Malaysia." />
        <meta name="twitter:image" content="https://onextransmission.com/images/blog-og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="One X Transmission Shah Alam" />
        <link rel="canonical" href="https://onextransmission.com/blog" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Pakar Gearbox Shah Alam",
            "description": "Artikel lengkap tentang gearbox CVT, automatik & manual untuk semua jenama kereta di Malaysia",
            "url": "https://onextransmission.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "One X Transmission Shah Alam",
              "logo": {
                "@type": "ImageObject",
                "url": "https://onextransmission.com/images/logo.png"
              }
            },
            "inLanguage": "ms-MY"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header currentPage="blog" />

        {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-red-900/20 via-black to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Panduan Lengkap{' '}
              <span className="text-red-500">Gearbox</span>
              <br />
              Untuk Anda
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Tips penyelenggaraan, panduan masalah gearbox, maklumat kos, dan cerita kejayaan 
              dari pakar gearbox terpercaya di Shah Alam dengan lebih 15 tahun pengalaman.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span>15+ Tahun Pengalaman</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-red-500" />
                <span>5000+ Pelanggan Berpuas Hati</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-800 hover:border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-gray-900 border border-gray-800 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col h-full"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.1)' }}
              >
                {/* Post Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img 
                    src={`/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="inline-flex items-center bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Post Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Post Meta */}
                  <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="flex items-center flex-wrap gap-3 text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Post Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-red-500" />
                      </div>
                      <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="text-xs text-gray-400 font-medium">{post.author}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      className="inline-flex items-center space-x-1 text-red-500 hover:text-red-400 text-sm font-semibold group/link"
                    >
                      <span>Baca</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
                <MessageCircle className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-gray-400 text-lg">Tiada artikel dalam kategori ini buat masa sekarang.</p>
              <p className="text-gray-500 text-sm mt-2">Cuba pilih kategori lain atau hubungi kami untuk maklumat lanjut.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-r from-red-900/20 via-black to-red-900/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-600/30 mb-4"
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Ada <span className="text-red-500">Soalan</span> Tentang Gearbox?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Jika anda ada soalan tentang gearbox atau memerlukan nasihat professional, 
              jangan segan untuk hubungi kami. Kami sedia membantu dengan diagnosis percuma!
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.a
                href={`https://wa.me/${whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}?text=Saya%20ada%20soalan%20tentang%20gearbox.%20Boleh%20tolong?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Tanya Pakar via WhatsApp</span>
              </motion.a>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href="/khidmat"
                  className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 font-semibold text-base"
                >
                  <span>Lihat Semua Servis Kami</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
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
              <h4 className="text-lg font-semibold mb-4 text-red-400">Kategori Blog</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Tips & Panduan</li>
                <li>• Penyelenggaraan</li>
                <li>• Spare Parts</li>
                <li>• Kos & Budget</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Hubungi</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+60 11-3105 1677</p>
                <p>+60 11-3105 1677 (WhatsApp)</p>
                <p>40460 Shah Alam, Selangor</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-900/30 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 One X Transmission. Semua hak terpelihara.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}`}
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
