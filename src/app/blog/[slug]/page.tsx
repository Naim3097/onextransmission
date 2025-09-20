'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone,
  Share2,
  Facebook,
  Twitter,
  Wrench,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../../../components/Header'
import { useParams } from 'next/navigation'

// Blog data - In a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    slug: 'cara-mengenal-pasti-masalah-cvt-awal',
    title: 'Cara Mengenal Pasti Masalah CVT Awal',
    excerpt: 'Belajar tanda-tanda awal kerosakan CVT untuk mengelakkan kos pembaikan yang mahal.',
    content: `
      <h2>Tanda-Tanda Awal Masalah CVT</h2>
      <p>CVT (Continuously Variable Transmission) adalah sistem transmisi yang semakin popular dalam kenderaan moden. Namun, seperti mana-mana sistem mekanikal, CVT juga boleh mengalami masalah. Mengenal pasti tanda-tanda awal adalah kunci untuk mengelakkan kos pembaikan yang mahal.</p>
      
      <h3>1. Bunyi Bising Yang Luar Biasa</h3>
      <p>CVT yang sihat sepatutnya beroperasi dengan senyap. Jika anda mendengar bunyi bising seperti:</p>
      <ul>
        <li>Bunyi menderu ketika memecut</li>
        <li>Bunyi berderit atau berkikis</li>
        <li>Bunyi ketukan dari bahagian transmisi</li>
      </ul>
      <p>Ini adalah petanda awal bahawa CVT anda memerlukan perhatian segera.</p>

      <h3>2. Getaran Yang Tidak Normal</h3>
      <p>CVT yang bermasalah akan menyebabkan getaran yang boleh dirasai melalui:</p>
      <ul>
        <li>Stereng yang bergetar ketika memandu</li>
        <li>Tempat duduk yang bergegar</li>
        <li>Gear stick yang tidak stabil</li>
      </ul>

      <h3>3. Masalah Pecutan</h3>
      <p>Jika kenderaan anda mengalami:</p>
      <ul>
        <li>Pecutan yang lemah walaupun enjin berputar laju</li>
        <li>Kenderaan 'tersentak' ketika memecut</li>
        <li>RPM tinggi tapi kelajuan tidak meningkat</li>
      </ul>
      <p>Ini menunjukkan masalah dengan sistem CVT yang memerlukan diagnosis professional.</p>

      <h3>4. Bau Hangus</h3>
      <p>Bau hangus yang datang dari bahagian transmisi adalah tanda bahaya yang tidak boleh diabaikan. Ini mungkin disebabkan oleh:</p>
      <ul>
        <li>Minyak CVT yang terlalu panas</li>
        <li>Geseran berlebihan dalam sistem</li>
        <li>Komponen yang haus</li>
      </ul>

      <h2>Langkah Pencegahan</h2>
      <p>Untuk mengelakkan masalah CVT yang serius:</p>
      <ul>
        <li>Tukar minyak CVT mengikut jadual penyelenggaraan</li>
        <li>Lakukan pemeriksaan berkala di bengkel yang dipercayai</li>
        <li>Elakkan pemanduan yang agresif</li>
        <li>Jangan abaikan tanda-tanda awal masalah</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Mengenal pasti masalah CVT pada peringkat awal dapat menjimatkan beribu-ribu ringgit dalam kos pembaikan. Jika anda mengalami mana-mana tanda yang dinyatakan, jangan tangguh untuk mendapatkan diagnosis professional.</p>
    `,
    image: 'service-diagnosis.jpg',
    category: 'Tips & Panduan',
    date: '15 Ogos 2024',
    readTime: '5 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['CVT', 'Diagnosis', 'Pencegahan', 'Tips']
  },
  {
    id: 2,
    slug: 'pentingnya-servis-cvt-berkala',
    title: 'Pentingnya Servis CVT Berkala',
    excerpt: 'Kenapa servis CVT secara berkala penting untuk jangka hayat gearbox anda.',
    content: `
      <h2>Mengapa Servis CVT Berkala Penting?</h2>
      <p>CVT (Continuously Variable Transmission) adalah sistem yang kompleks yang memerlukan penyelenggaraan yang betul untuk memastikan prestasi optimum dan jangka hayat yang panjang.</p>
      
      <h3>1. Menjaga Kualiti Minyak CVT</h3>
      <p>Minyak CVT berfungsi sebagai:</p>
      <ul>
        <li>Pelincir untuk mengurangkan geseran</li>
        <li>Pendingin untuk mengawal suhu</li>
        <li>Medium hidraulik untuk operasi sistem</li>
        <li>Pembersih untuk membuang kotoran</li>
      </ul>

      <h3>2. Jadual Servis Yang Disarankan</h3>
      <p>Untuk CVT, servis berkala perlu dilakukan:</p>
      <ul>
        <li>Setiap 40,000km - 60,000km (bergantung kepada jenama)</li>
        <li>Setiap 2-3 tahun untuk pemanduan biasa</li>
        <li>Lebih kerap untuk pemanduan dalam keadaan keras</li>
      </ul>

      <h3>3. Apa Yang Dilakukan Semasa Servis CVT?</h3>
      <ul>
        <li>Tukar minyak CVT dengan jenis yang betul</li>
        <li>Ganti filter CVT</li>
        <li>Bersih valve body dan solenoid</li>
        <li>Periksa tahap minyak dan kualiti</li>
        <li>Test sistem untuk memastikan operasi normal</li>
      </ul>

      <h2>Risiko Jika Tidak Servis Berkala</h2>
      <p>Mengabaikan servis CVT berkala boleh menyebabkan:</p>
      <ul>
        <li>Minyak CVT menjadi kotor dan kehilangan sifat pelincir</li>
        <li>Overheat yang boleh memusnahkan komponen</li>
        <li>Kerosakan belt atau chain CVT</li>
        <li>Masalah dengan valve body dan solenoid</li>
        <li>Kos pembaikan yang sangat mahal</li>
      </ul>

      <h2>Tips Penjagaan CVT</h2>
      <ul>
        <li>Panaskan enjin sebelum memandu, terutama di pagi hari</li>
        <li>Elakkan akselerasi mendadak</li>
        <li>Jangan tarik beban yang melebihi kapasiti kenderaan</li>
        <li>Periksa tahap minyak CVT secara berkala</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Servis CVT berkala adalah pelaburan yang bijak untuk memastikan kenderaan anda beroperasi dengan lancar dan mengelakkan kos pembaikan yang besar di masa hadapan.</p>
    `,
    image: 'service-overhaul.jpg',
    category: 'Penyelenggaraan',
    date: '12 Ogos 2024',
    readTime: '4 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['CVT', 'Servis', 'Penyelenggaraan', 'Minyak']
  },
  {
    id: 3,
    slug: 'pilihan-minyak-atf-yang-sesuai',
    title: 'Pilihan Minyak ATF Yang Sesuai',
    excerpt: 'Panduan memilih minyak ATF yang betul untuk gearbox automatik anda.',
    content: `
      <h2>Pentingnya Memilih Minyak ATF Yang Betul</h2>
      <p>Minyak ATF (Automatic Transmission Fluid) adalah nadi kepada gearbox automatik anda. Memilih jenis yang salah boleh menyebabkan kerosakan serius dan kos pembaikan yang tinggi.</p>
      
      <h3>1. Jenis-Jenis Minyak ATF</h3>
      <p>Terdapat beberapa jenis minyak ATF yang berbeza:</p>
      <ul>
        <li><strong>ATF Type A:</strong> Untuk gearbox lama (sebelum 1970s)</li>
        <li><strong>Dexron VI:</strong> Standard GM untuk kebanyakan gearbox moden</li>
        <li><strong>Mercon V:</strong> Spesifikasi Ford</li>
        <li><strong>CVT Fluid:</strong> Khusus untuk transmisi CVT</li>
        <li><strong>Minyak jenama khas:</strong> Toyota WS, Honda ATF-Z1, dsb</li>
      </ul>

      <h3>2. Cara Menentukan Jenis Yang Sesuai</h3>
      <ul>
        <li>Rujuk manual pemilik kenderaan</li>
        <li>Periksa label pada cap minyak transmisi</li>
        <li>Tanya pakar gearbox yang berpengalaman</li>
        <li>Jangan guna minyak generik tanpa spesifikasi yang jelas</li>
      </ul>

      <h3>3. Tanda-Tanda Minyak ATF Perlu Ditukar</h3>
      <p>Periksa minyak ATF anda untuk tanda-tanda berikut:</p>
      <ul>
        <li><strong>Warna:</strong> Merah terang = baik, coklat/hitam = perlu tukar</li>
        <li><strong>Bau:</strong> Bau hangus menandakan minyak rosak</li>
        <li><strong>Tekstur:</strong> Minyak yang berpartikel atau berbuih</li>
        <li><strong>Tahap:</strong> Tahap minyak yang rendah</li>
      </ul>

      <h3>4. Jenama Minyak ATF Yang Disarankan</h3>
      <ul>
        <li><strong>Castrol Transmax:</strong> Sesuai untuk kebanyakan kenderaan</li>
        <li><strong>Mobil 1 ATF:</strong> Prestasi tinggi dan tahan lama</li>
        <li><strong>Valvoline ATF:</strong> Harga berpatutan dengan kualiti baik</li>
        <li><strong>Original Equipment:</strong> Minyak jenama asal kenderaan</li>
      </ul>

      <h2>Proses Penggantian Minyak ATF</h2>
      <p>Penggantian minyak ATF perlu dilakukan dengan betul:</p>
      <ol>
        <li>Panaskan enjin hingga suhu operasi normal</li>
        <li>Kosongkan minyak lama sepenuhnya</li>
        <li>Ganti filter ATF jika perlu</li>
        <li>Isi minyak baharu mengikut spesifikasi</li>
        <li>Test drive dan periksa tahap minyak semula</li>
      </ol>

      <h2>Kesilapan Yang Perlu Dielakkan</h2>
      <ul>
        <li>Mencampur jenis minyak ATF yang berbeza</li>
        <li>Menggunakan minyak enjin sebagai ganti ATF</li>
        <li>Tidak mengosongkan minyak lama sepenuhnya</li>
        <li>Mengabaikan penggantian filter</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Memilih dan menggunakan minyak ATF yang betul adalah kunci kepada prestasi dan jangka hayat gearbox automatik anda. Jangan berkompromi dengan kualiti minyak untuk menjimatkan kos.</p>
    `,
    image: 'service-automatic.jpg',
    category: 'Spare Parts',
    date: '10 Ogos 2024',
    readTime: '6 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['ATF', 'Minyak', 'Gearbox', 'Automatik']
  },
  {
    id: 4,
    slug: 'kos-overhaul-cvt-apa-yang-perlu-tahu',
    title: 'Kos Overhaul CVT - Apa Yang Perlu Tahu',
    excerpt: 'Pemahaman lengkap tentang kos overhaul CVT dan faktor-faktor yang mempengaruhi harga.',
    content: `
      <h2>Memahami Kos Overhaul CVT</h2>
      <p>Overhaul CVT adalah pelaburan besar, tetapi sering kali lebih jimat berbanding membeli gearbox baharu. Mari kita fahami faktor-faktor yang mempengaruhi kos.</p>
      
      <h3>1. Julat Kos Overhaul CVT</h3>
      <ul>
        <li><strong>CVT Asas:</strong> RM 2,500 - RM 3,500</li>
        <li><strong>CVT Sederhana:</strong> RM 3,500 - RM 4,500</li>
        <li><strong>CVT Premium:</strong> RM 4,500 - RM 6,000</li>
        <li><strong>CVT Luxury/Hybrid:</strong> RM 6,000 - RM 8,000</li>
      </ul>

      <h3>2. Faktor-Faktor Yang Mempengaruhi Kos</h3>
      <p><strong>Jenama dan Model Kenderaan:</strong></p>
      <ul>
        <li>Nissan, Honda, Toyota - lebih murah</li>
        <li>Mercedes, BMW, Audi - lebih mahal</li>
        <li>Hybrid CVT - paling mahal</li>
      </ul>

      <p><strong>Tahap Kerosakan:</strong></p>
      <ul>
        <li>Masalah minor - kos rendah</li>
        <li>Kerosakan sederhana - kos pertengahan</li>
        <li>Kerosakan major - kos tinggi</li>
      </ul>

      <h3>3. Apa Yang Termasuk Dalam Overhaul CVT?</h3>
      <ul>
        <li>Bongkar dan pembersihan menyeluruh</li>
        <li>Penggantian belt/chain CVT</li>
        <li>Ganti semua seal dan gasket</li>
        <li>Valve body reconditioning</li>
        <li>Penggantian pump dan solenoid</li>
        <li>Filter dan minyak CVT baharu</li>
        <li>Testing dan kalibrasi</li>
      </ul>

      <h3>4. Spare Parts Yang Lazim Ditukar</h3>
      <table>
        <tr><th>Komponen</th><th>Kos (RM)</th></tr>
        <tr><td>CVT Belt/Chain</td><td>800 - 1,500</td></tr>
        <tr><td>Valve Body</td><td>600 - 1,200</td></tr>
        <tr><td>Oil Pump</td><td>400 - 800</td></tr>
        <tr><td>Solenoid Set</td><td>300 - 600</td></tr>
        <tr><td>Filter CVT</td><td>80 - 150</td></tr>
        <tr><td>Minyak CVT</td><td>200 - 400</td></tr>
      </table>

      <h3>5. Kos Tersembunyi Yang Perlu Diambil Kira</h3>
      <ul>
        <li><strong>Diagnosis:</strong> RM 100 - RM 200</li>
        <li><strong>Towing:</strong> RM 150 - RM 300</li>
        <li><strong>Sewa kereta:</strong> RM 80 - RM 150/hari</li>
        <li><strong>Spare parts tambahan:</strong> 10-20% dari anggaran</li>
      </ul>

      <h2>Tips Untuk Mengurangkan Kos</h2>
      <ul>
        <li>Dapatkan quotation dari beberapa bengkel</li>
        <li>Tanya tentang spare parts aftermarket</li>
        <li>Pertimbangkan reconditioning vs penggantian</li>
        <li>Periksa warranty yang ditawarkan</li>
        <li>Buat overhaul seawal mungkin sebelum kerosakan bertambah</li>
      </ul>

      <h2>Tanda-Tanda CVT Perlu Overhaul</h2>
      <ul>
        <li>Slip ketika memecut</li>
        <li>Bunyi bising yang kuat</li>
        <li>Getaran ketika memandu</li>
        <li>Kenderaan tidak bergerak walaupun gear masuk</li>
        <li>Warning light menyala</li>
      </ul>

      <h2>Alternatif Kepada Overhaul</h2>
      <p><strong>CVT Recon:</strong> RM 3,000 - RM 5,000</p>
      <p><strong>CVT Baharu:</strong> RM 8,000 - RM 15,000</p>
      <p><strong>Tukar ke Manual:</strong> RM 5,000 - RM 8,000 (jika possible)</p>

      <h2>Kesimpulan</h2>
      <p>Walaupun kos overhaul CVT mungkin kelihatan tinggi, ia masih lebih jimat berbanding penggantian dengan unit baharu. Yang penting adalah memilih bengkel yang berpengalaman dan mendapat warranty yang sesuai.</p>
    `,
    image: 'service-others.jpg',
    category: 'Kos & Budget',
    date: '8 Ogos 2024',
    readTime: '7 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['Overhaul', 'Kos', 'CVT', 'Budget']
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = blogPosts.find(p => p.slug === slug)
  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  const whatsappNumber = '+601131051677'
  const phoneNumber = '+601131051677'

  const [showShareMenu, setShowShareMenu] = useState(false)

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

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel Tidak Dijumpai</h1>
          <Link href="/blog" className="text-red-500 hover:text-red-400">
            ← Kembali ke Blog
          </Link>
        </div>
      </div>
    )
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')
  }

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + currentUrl)}`, '_blank')
  }

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage="blog" />

      {/* Article Hero */}
      <section className="py-12 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeInUp} className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-red-400 transition-colors">Utama</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-red-400 transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-red-400">{post.category}</span>
            </motion.div>

            {/* Back Button */}
            <motion.div variants={fadeInUp}>
              <Link 
                href="/blog"
                className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Blog</span>
              </Link>
            </motion.div>

            {/* Article Meta */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-block bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2">
                <span className="text-red-400 text-sm font-medium">{post.category}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Featured Image */}
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                  <img 
                    src={`/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center justify-between py-4 border-y border-gray-800">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">Kongsikan:</span>
                    <button 
                      onClick={shareToFacebook}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </button>
                    <button 
                      onClick={shareToWhatsApp}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                    <button 
                      onClick={shareToTwitter}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg text-sm transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-invert prose-red max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-headings:mb-4
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-6 prose-h2:text-red-400 prose-h2:border-b prose-h2:border-red-900/30 prose-h2:pb-2
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-4 prose-h3:text-red-300
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
                    prose-li:text-gray-300 prose-li:mb-2 prose-li:leading-relaxed
                    prose-ul:mb-6 prose-ol:mb-6 prose-ul:pl-6 prose-ol:pl-6
                    prose-li:marker:text-red-500
                    prose-strong:text-white prose-strong:font-semibold
                    prose-table:text-gray-300 prose-table:border prose-table:border-gray-700
                    prose-th:bg-gray-800 prose-th:text-red-400 prose-th:font-bold prose-th:p-3 prose-th:border prose-th:border-gray-700
                    prose-td:p-3 prose-td:border prose-td:border-gray-700
                    prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-red-900/30 to-red-600/30 border border-red-600/40 rounded-2xl p-8 my-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Ada Soalan Tentang Artikel Ini?</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Hubungi pakar kami untuk mendapatkan nasihat professional tentang gearbox anda.
                      Kami sedia membantu dengan diagnosis percuma dan konsultasi pakar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={`https://wa.me/${whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}?text=Saya%20ada%20soalan%20tentang%20artikel%20${post.title.toLowerCase()}.%20Boleh%20tolong?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Tanya via WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="flex items-center justify-center space-x-3 px-8 py-4 bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-semibold transition-all duration-300"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call +60 11-3105 1677</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Featured/Recent Posts */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-6 text-red-400">Artikel Berkaitan</h3>
                  <div className="space-y-4">
                    {otherPosts.map((otherPost) => (
                      <Link 
                        key={otherPost.id}
                        href={`/blog/${otherPost.slug}`}
                        className="block group hover:bg-gray-800 rounded-lg p-3 transition-colors duration-300"
                      >
                        <div className="flex space-x-3">
                          <img 
                            src={`/${otherPost.image}`}
                            alt={otherPost.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="inline-block bg-red-600/20 text-red-400 text-xs px-2 py-1 rounded-full mb-2 font-medium">
                              {otherPost.category}
                            </span>
                            <h4 className="font-medium text-white group-hover:text-red-400 transition-colors text-sm leading-tight mb-2">
                              {otherPost.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-400 space-x-2">
                              <span>{otherPost.date}</span>
                              <span>•</span>
                              <span>{otherPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link 
                    href="/blog"
                    className="inline-flex items-center justify-center space-x-2 w-full mt-6 px-4 py-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 rounded-lg text-red-400 hover:text-red-300 text-sm font-medium transition-all duration-300"
                  >
                    <span>Lihat Semua Artikel</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Contact Widget */}
                <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Perlukan Bantuan?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Dapatkan diagnosis percuma dan nasihat professional daripada pakar kami.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center space-x-3 w-full px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Sekarang</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
