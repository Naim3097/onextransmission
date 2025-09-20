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
import Header from '../../components/Header'

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappNumber = '+601131051677'

  const blogPosts = [
    {
      id: 1,
      slug: 'cara-mengenal-pasti-masalah-cvt-awal',
      title: 'Cara Mengenal Pasti Masalah CVT Awal',
      excerpt: 'Belajar tanda-tanda awal kerosakan CVT untuk mengelakkan kos pembaikan yang mahal. CVT yang bermasalah biasanya akan menunjukkan gejala seperti...',
      image: 'service-diagnosis.jpg',
      category: 'Tips & Panduan',
      date: '15 Ogos 2024',
      readTime: '5 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 2,
      slug: 'pentingnya-servis-cvt-berkala',
      title: 'Pentingnya Servis CVT Berkala',
      excerpt: 'Kenapa servis CVT secara berkala penting untuk jangka hayat gearbox anda. Servis yang tepat pada masa akan menjimatkan kos anda...',
      image: 'service-overhaul.jpg',
      category: 'Penyelenggaraan',
      date: '12 Ogos 2024',
      readTime: '4 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 3,
      slug: 'pilihan-minyak-atf-yang-sesuai',
      title: 'Pilihan Minyak ATF Yang Sesuai',
      excerpt: 'Panduan memilih minyak ATF yang betul untuk gearbox automatik anda. Jenis minyak yang salah boleh menyebabkan kerosakan serius...',
      image: 'service-automatic.jpg',
      category: 'Spare Parts',
      date: '10 Ogos 2024',
      readTime: '6 minit bacaan',
      author: 'Pakar Gearbox Team'
    },
    {
      id: 4,
      slug: 'kos-overhaul-cvt-apa-yang-perlu-tahu',
      title: 'Kos Overhaul CVT - Apa Yang Perlu Tahu',
      excerpt: 'Pemahaman lengkap tentang kos overhaul CVT dan faktor-faktor yang mempengaruhi harga. Buat keputusan yang bijak untuk kenderaan anda...',
      image: 'service-others.jpg',
      category: 'Kos & Budget',
      date: '8 Ogos 2024',
      readTime: '7 minit bacaan',
      author: 'Pakar Gearbox Team'
    }
  ]

  const categories = ['Semua', 'Tips & Panduan', 'Penyelenggaraan', 'Spare Parts', 'Kos & Budget']
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
    <div className="min-h-screen bg-black text-white">
      <Header currentPage="blog" />

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
              className="text-4xl md:text-6xl font-bold"
            >
              Blog & <span className="text-red-500">Tips</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Panduan lengkap, tips berguna, dan maklumat terkini tentang 
              penyelenggaraan dan pembaikan gearbox CVT dan automatik.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-gray-900 border border-gray-800 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Post Meta */}
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">{post.author}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1 text-red-500 hover:text-red-400 text-sm font-medium"
                    >
                      <span>Baca Selanjutnya</span>
                      <ArrowRight className="w-3 h-3" />
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
              className="text-center py-12"
            >
              <p className="text-gray-400">Tiada artikel dalam kategori ini buat masa sekarang.</p>
            </motion.div>
          )}
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
              className="text-3xl md:text-5xl font-bold"
            >
              Ada <span className="text-red-500">Soalan?</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Jika anda ada soalan tentang gearbox atau memerlukan nasihat professional, 
              jangan segan untuk hubungi kami!
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={`https://wa.me/${whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}?text=Saya%20ada%20soalan%20tentang%20gearbox.%20Boleh%20tolong?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Tanya Pakar</span>
              </motion.a>

              <motion.div className="text-center">
                <Link
                  href="/khidmat"
                  className="text-red-500 hover:text-red-400 font-medium"
                >
                  Lihat Semua Servis Kami →
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
  )
}
