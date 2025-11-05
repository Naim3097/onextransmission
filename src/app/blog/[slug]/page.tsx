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
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import { useParams } from 'next/navigation'

// Blog data - In a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    slug: '5-langkah-mudah-jaga-gearbox-cvt',
    title: '5 Langkah Mudah Menjaga Gearbox CVT Anda',
    excerpt: 'Panduan lengkap untuk pemilik kereta dengan gearbox CVT. Ikuti 5 langkah mudah ini untuk memastikan gearbox anda tahan lama dan mengelakkan kos pembaikan yang tinggi.',
    content: `
      <h2>Pengenalan Gearbox CVT</h2>
      <p>Gearbox CVT (Continuously Variable Transmission) semakin popular dalam kenderaan moden kerana keupayaannya memberikan pemanduan yang smooth dan jimat minyak. Namun, untuk memastikan ia beroperasi dengan baik dan tahan lama, penjagaan yang betul adalah sangat penting.</p>

      <h2>Langkah 1: Tukar Minyak CVT Mengikut Jadual</h2>
      <p>Minyak CVT adalah nadi kepada sistem transmisi anda. Tidak seperti gearbox manual, CVT memerlukan minyak khusus yang direka untuk mengendalikan tekanan dan haba yang tinggi.</p>
      
      <h3>Jadual Penukaran Yang Disarankan:</h3>
      <ul>
        <li><strong>Setiap 40,000km - 60,000km:</strong> Untuk kebanyakan jenama Jepun (Honda, Toyota, Nissan)</li>
        <li><strong>Setiap 30,000km - 40,000km:</strong> Untuk pemanduan dalam bandar atau keadaan keras</li>
        <li><strong>Setiap 2-3 tahun:</strong> Walaupun mileage rendah, minyak perlu ditukar</li>
      </ul>

      <p><strong>Tip Penting:</strong> Sentiasa gunakan minyak CVT yang disyorkan oleh pengeluar kereta anda. Jangan gunakan minyak ATF biasa kerana ia boleh merosakkan sistem CVT.</p>

      <h2>Langkah 2: Panaskan Enjin Sebelum Memandu</h2>
      <p>Ramai pemandu terlepas pandang kepentingan memanaskan enjin, terutamanya pada waktu pagi. Ini sangat penting untuk kesihatan CVT anda.</p>
      
      <h3>Cara Yang Betul:</h3>
      <ul>
        <li>Hidupkan enjin dan biarkan idle selama 30-60 saat</li>
        <li>Jangan tekan minyak dengan kuat serta-merta</li>
        <li>Pandu perlahan-lahan untuk 2-3km pertama</li>
        <li>Biarkan minyak CVT mencapai suhu operasi yang optimum</li>
      </ul>

      <p>Minyak CVT yang sejuk adalah lebih likat dan tidak dapat melincir dengan baik. Ini boleh menyebabkan haus pramatang pada komponen dalaman.</p>

      <h2>Langkah 3: Elakkan Pemanduan Agresif</h2>
      <p>CVT direka untuk kecekapan dan keselesaan, bukan prestasi maksimum. Pemanduan agresif boleh memendekkan jangka hayat CVT anda dengan ketara.</p>
      
      <h3>Perkara Yang Perlu Dielakkan:</h3>
      <ul>
        <li><strong>Kick-down berlebihan:</strong> Menekan pedal minyak sepenuhnya terlalu kerap</li>
        <li><strong>Akselerasi mendadak:</strong> Terutamanya dari keadaan berhenti</li>
        <li><strong>Mengayuh minyak:</strong> On-off pedal minyak dengan kerap</li>
        <li><strong>Overtaking agresif:</strong> Memerlukan CVT bekerja pada tekanan maksimum</li>
      </ul>

      <p>Pemanduan yang smooth dan predictable adalah kunci kepada CVT yang tahan lama. Cuba anticipate traffic flow dan maintain kelajuan yang konsisten.</p>

      <h2>Langkah 4: Jangan Overload Kenderaan</h2>
      <p>CVT mempunyai had berat yang boleh dikendalikan dengan selamat. Membebankan kenderaan melebihi kapasiti boleh menyebabkan kerosakan serius.</p>
      
      <h3>Kesan Overloading:</h3>
      <ul>
        <li>Tekanan berlebihan pada belt atau chain CVT</li>
        <li>Minyak CVT menjadi terlalu panas</li>
        <li>Komponen haus lebih cepat</li>
        <li>Risiko slip dan kerosakan permanent</li>
      </ul>

      <h3>Panduan Beban:</h3>
      <ul>
        <li>Rujuk manual pemilik untuk kapasiti maksimum</li>
        <li>Termasuk berat penumpang dalam kiraan</li>
        <li>Elakkan towing yang berat jika kereta tidak direka untuk itu</li>
        <li>Kurangkan beban jika memandu jauh atau mendaki bukit</li>
      </ul>

      <h2>Langkah 5: Servis Berkala di Bengkel Yang Dipercayai</h2>
      <p>Walaupun anda menjaga CVT dengan baik, servis professional berkala adalah sangat penting untuk mengesan masalah awal.</p>
      
      <h3>Apa Yang Dilakukan Semasa Servis CVT:</h3>
      <ul>
        <li><strong>Pemeriksaan Visual:</strong> Check untuk kebocoran atau kerosakan</li>
        <li><strong>Scan Computer:</strong> Baca error codes dan data sensor</li>
        <li><strong>Test Drive:</strong> Detect masalah yang mungkin tidak disedari pemilik</li>
        <li><strong>Tukar Minyak:</strong> Dengan minyak spec yang betul</li>
        <li><strong>Ganti Filter:</strong> Untuk mengekalkan kebersihan sistem</li>
        <li><strong>Calibration:</strong> Ensure CVT beroperasi pada parameter yang betul</li>
      </ul>

      <h3>Kenapa Pilih Bengkel Specialist?</h3>
      <ul>
        <li>Pengalaman khusus dengan CVT</li>
        <li>Peralatan diagnostic yang lengkap</li>
        <li>Gunakan spare parts berkualiti</li>
        <li>Warranty untuk kerja yang dilakukan</li>
        <li>Nasihat professional untuk penjagaan jangka panjang</li>
      </ul>

      <h2>Tanda-Tanda CVT Memerlukan Perhatian</h2>
      <p>Walaupun anda mengikuti semua langkah di atas, masih penting untuk peka terhadap tanda-tanda yang menunjukkan CVT mungkin bermasalah:</p>
      
      <ul>
        <li><strong>Bunyi Bising:</strong> Bunyi menderu atau grinding ketika memandu</li>
        <li><strong>Getaran:</strong> Vibrasi yang tidak normal, terutama pada kelajuan tinggi</li>
        <li><strong>Slip:</strong> Enjin rev tinggi tapi kereta tidak memecut</li>
        <li><strong>Jerking:</strong> Kereta tersentak ketika menukar kelajuan</li>
        <li><strong>Warning Light:</strong> Lampu transmisi menyala di dashboard</li>
        <li><strong>Bau Hangus:</strong> Bau terbakar dari bahagian gearbox</li>
      </ul>

      <p>Jika anda alami mana-mana simptom ini, <strong>jangan tunggu</strong>. Bawa kereta anda ke bengkel pakar CVT untuk diagnosis segera.</p>

      <h2>Kos Penjagaan vs Kos Pembaikan</h2>
      <p>Ramai pemilik kereta terkejut dengan kos pembaikan CVT yang boleh mencecah <strong>RM 4,000 - RM 8,000</strong> untuk overhaul penuh. Bandingkan ini dengan kos penjagaan berkala:</p>
      
      <table>
        <tr>
          <th>Servis</th>
          <th>Kos</th>
          <th>Kekerapan</th>
        </tr>
        <tr>
          <td>Tukar Minyak CVT</td>
          <td>RM 300 - RM 500</td>
          <td>40,000 - 60,000km</td>
        </tr>
        <tr>
          <td>Tukar Filter CVT</td>
          <td>RM 80 - RM 150</td>
          <td>Setiap kali tukar minyak</td>
        </tr>
        <tr>
          <td>Inspection & Diagnostic</td>
          <td>RM 50 - RM 100</td>
          <td>Setiap tahun</td>
        </tr>
        <tr>
          <td><strong>TOTAL (setahun)</strong></td>
          <td><strong>RM 430 - RM 750</strong></td>
          <td>Lebih murah dari 1 overhaul!</td>
        </tr>
      </table>

      <p>Seperti yang anda lihat, melabur dalam penjagaan berkala adalah jauh lebih murah berbanding membaiki CVT yang rosak.</p>

      <h2>Kesimpulan</h2>
      <p>Menjaga gearbox CVT anda tidak susah - ia hanya memerlukan konsistensi dan perhatian kepada detail. Dengan mengikuti 5 langkah mudah ini, anda boleh:</p>
      
      <ul>
        <li>✅ Memanjangkan jangka hayat CVT anda</li>
        <li>✅ Mengelakkan kos pembaikan yang mahal</li>
        <li>✅ Menikmati pemanduan yang smooth dan selesa</li>
        <li>✅ Mengekalkan nilai jualan semula kereta anda</li>
      </ul>

      <p><strong>Ingat:</strong> CVT yang dijaga dengan baik boleh bertahan lebih dari 200,000km tanpa masalah major. Tetapi CVT yang diabaikan mungkin mula bermasalah seawal 60,000km.</p>

      <p>Jika anda ada sebarang soalan tentang penjagaan CVT atau perlukan servis, jangan teragak-agak untuk hubungi kami di <strong>One X Transmission Shah Alam</strong>. Kami sedia membantu dengan nasihat percuma dan diagnosis professional!</p>
    `,
    image: 'service-diagnosis.jpg',
    category: 'Panduan & Tips',
    date: '1 November 2024',
    readTime: '6 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['CVT', 'Penjagaan', 'Tips', 'Penyelenggaraan']
  },
  {
    id: 2,
    slug: '7-tanda-gearbox-automatik-bermasalah',
    title: '7 Tanda Gearbox Automatik Anda Bermasalah',
    excerpt: 'Kenali tanda-tanda awal masalah gearbox automatik sebelum terlambat. Jimat ribuan ringgit dengan diagnosis awal dan tindakan pantas dari pakar kami.',
    content: `
      <h2>Kenapa Penting Mengenali Tanda Awal?</h2>
      <p>Gearbox automatik adalah salah satu komponen paling mahal dalam kereta anda. Kos pembaikan atau overhaul boleh mencecah <strong>RM 5,000 - RM 10,000</strong> atau lebih, bergantung pada jenama dan model kereta. Oleh itu, mengenali tanda-tanda awal masalah adalah sangat penting.</p>

      <p>Masalah gearbox yang diabaikan bukan sahaja mahal untuk dibaiki, tetapi juga berbahaya. Gearbox yang rosak boleh menyebabkan kereta tiba-tiba stop atau tidak dapat berger ak, yang sangat berisiko terutama di lebuh raya.</p>

      <h2>7 Tanda Yang Tidak Boleh Diabaikan</h2>

      <h3>1. Kereta Tersentak atau Jerking</h3>
      <p>Ini adalah salah satu tanda paling biasa yang masalah gearbox sudah bermula. Anda akan rasa kereta "tersentak" atau "terlompat" ketika:</p>
      <ul>
        <li>Menukar gear (terutama dari P ke D atau R)</li>
        <li>Memecualkan pada kelajuan rendah</li>
        <li>Menukar kelajuan secara automatik</li>
        <li>Berhenti di traffic light</li>
      </ul>

      <p><strong>Punca Biasa:</strong></p>
      <ul>
        <li>Minyak ATF kotor atau rendah</li>
        <li>Solenoid tidak berfungsi dengan baik</li>
        <li>Clutch atau band yang haus</li>
        <li>Valve body bermasalah</li>
      </ul>

      <h3>2. Bunyi Bising Yang Luar Biasa</h3>
      <p>Gearbox automatik yang sihat sepatutnya beroperasi dengan senyap. Jika anda dengar bunyi pelik, ini petanda ada masalah:</p>

      <h4>Jenis Bunyi & Maksudnya:</h4>
      <ul>
        <li><strong>Bunyi Mendering/Whining:</strong> Pump minyak bermasalah atau minyak rendah</li>
        <li><strong>Bunyi Grinding/Berkikis:</strong> Gear atau bearing haus</li>
        <li><strong>Bunyi Knock/Ketukan:</strong> Komponen dalaman longgar atau rosak</li>
        <li><strong>Bunyi Clunking:</strong> Mounting gearbox longgar atau U-joint rosak</li>
      </ul>

      <p><strong>Tindakan:</strong> Jangan tunggu bunyi bertambah kuat. Dapatkan diagnosis segera untuk mengenal pasti punca sebenar.</p>

      <h3>3. Gearbox Slip</h3>
      <p>Ini adalah masalah yang sangat serius. "Slip" bermaksud gearbox tidak dapat maintain gear dengan betul. Tanda-tandanya:</p>
      <ul>
        <li>Enjin RPM naik tinggi tapi kereta tidak memecut sewajarnya</li>
        <li>Kereta rasa "hilang kuasa" ketika memecut</li>
        <li>Gear tiba-tiba "turun" walaupun kaki tidak tekan minyak</li>
        <li>Kereta lambat bertindak balas bila tekan pedal minyak</li>
      </ul>

      <p><strong>Bahaya:</strong> Gearbox yang slip boleh menyebabkan kemalangan, terutama ketika overtake atau naik bukit. Ini adalah emergency yang memerlukan perhatian segera!</p>

      <h3>4. Kelewatan Bertindak Balas (Delayed Engagement)</h3>
      <p>Apabila anda tukar gear dari P ke D atau R, kereta sepatutnya respond serta-merta (dalam 1-2 saat). Jika ada kelewatan yang ketara (3-5 saat atau lebih), ini tanda masalah.</p>

      <p><strong>Gejala:</strong></p>
      <ul>
        <li>Kena tunggu beberapa saat selepas shift gear baru kereta bergerak</li>
        <li>Enjin rev dulu sebelum kereta mula bergerak</li>
        <li>Lebih teruk pada waktu pagi (enjin sejuk)</li>
      </ul>

      <p><strong>Punca:</strong> Biasanya disebabkan oleh minyak ATF yang sudah tidak bagus, clutch pack haus, atau masalah pada valve body.</p>

      <h3>5. Minyak Gearbox Bocor</h3>
      <p>Ini mudah dilihat jika anda perasan. Periksa di bawah kereta anda (tempat letak kereta) untuk tanda-tanda cecair:</p>

      <h4>Cara Mengenal Pasti:</h4>
      <ul>
        <li><strong>Warna:</strong> Minyak ATF biasanya merah terang atau merah jambu</li>
        <li><strong>Lokasi:</strong> Biasanya di bahagian tengah-depan kereta</li>
        <li><strong>Bau:</strong> Minyak ATF ada bau yang khas, tidak sama dengan minyak enjin</li>
      </ul>

      <p><strong>Kenapa Berbahaya:</strong></p>
      <ul>
        <li>Tahap minyak rendah boleh merosakkan gearbox</li>
        <li>Gearbox akan overheat tanpa minyak yang cukup</li>
        <li>Boleh menyebabkan kerosakan total jika diabaikan</li>
      </ul>

      <h3>6. Bau Hangus atau Terbakar</h3>
      <p>Jika anda hidu bau hangus atau terbakar ketika memandu, ini adalah tanda bahaya!</p>

      <p><strong>Punca Bau Hangus:</strong></p>
      <ul>
        <li>Minyak ATF terlalu panas (overheating)</li>
        <li>Minyak sudah rosak dan tidak mampu lincirkan dengan baik</li>
        <li>Clutch terbakar akibat slip yang teruk</li>
        <li>Geseran berlebihan antara komponen dalaman</li>
      </ul>

      <p><strong>Tindakan Segera:</strong> Berhenti memandu dan dapatkan towing service. Teruskan memandu boleh menyebabkan kerosakan permanent yang sangat mahal untuk dibaiki.</p>

      <h3>7. Lampu Warning Gearbox Menyala</h3>
      <p>Kereta moden dilengkapi dengan sensor yang akan detect masalah gearbox dan menyalakan lampu warning di dashboard.</p>

      <p><strong>Jenis Lampu Warning:</strong></p>
      <ul>
        <li><strong>Check Engine Light:</strong> Boleh berkaitan dengan gearbox</li>
        <li><strong>AT Light (Automatic Transmission):</strong> Khusus untuk masalah gearbox</li>
        <li><strong>OD OFF Light:</strong> Masalah dengan overdrive</li>
      </ul>

      <p><strong>Apa Yang Perlu Dibuat:</strong> Jangan abaikan lampu warning! Dapatkan computer diagnostic scan untuk baca error code. Ini akan beritahu exact problem yang berlaku.</p>

      <h2>Masalah Tambahan Yang Perlu Diperhatikan</h2>

      <h3>Gear Tidak Boleh Shift atau Stuck</h3>
      <ul>
        <li>Gear lever stuck dan tidak boleh bergerak</li>
        <li>Gear stuck dalam satu position sahaja</li>
        <li>Perlu force untuk tukar gear</li>
      </ul>

      <h3>Getaran Berlebihan</h3>
      <ul>
        <li>Kereta bergetar ketika gear engage</li>
        <li>Vibrasi yang boleh dirasa melalui steering atau seat</li>
        <li>Lebih teruk pada kelajuan tertentu</li>
      </ul>

      <h2>Apa Yang Perlu Anda Buat Sekarang?</h2>

      <h3>Langkah 1: Diagnostic Segera</h3>
      <p>Jika anda alami mana-mana tanda di atas, jangan tunggu. Bawa kereta anda ke bengkel pakar gearbox untuk diagnostic. Di One X Transmission, kami tawarkan:</p>
      <ul>
        <li>✅ Computer diagnostic scan</li>
        <li>✅ Test drive dengan technician berpengalaman</li>
        <li>✅ Visual inspection menyeluruh</li>
        <li>✅ Quotation percuma</li>
      </ul>

      <h3>Langkah 2: Servis atau Repair</h3>
      <p>Bergantung pada masalah, penyelesaian boleh jadi:</p>
      <ul>
        <li><strong>Minor:</strong> Tukar minyak ATF, ganti filter (RM 300-500)</li>
        <li><strong>Medium:</strong> Tukar solenoid, gasket (RM 800-1,500)</li>
        <li><strong>Major:</strong> Overhaul atau rebuild (RM 3,500-8,000)</li>
      </ul>

      <h3>Langkah 3: Pencegahan</h3>
      <p>Untuk elakkan masalah berulang:</p>
      <ul>
        <li>Tukar minyak ATF mengikut jadual (setiap 40,000-60,000km)</li>
        <li>Servis berkala di bengkel yang dipercayai</li>
        <li>Elakkan pemanduan agresif</li>
        <li>Jangan overload kenderaan</li>
        <li>Panaskan enjin sebelum memandu</li>
      </ul>

      <h2>Kos Pembaikan: Early vs Late</h2>
      <p>Perbezaan kos jika anda ambil tindakan awal berbanding lambat:</p>

      <table>
        <tr>
          <th>Masalah</th>
          <th>Tindakan Awal</th>
          <th>Tindakan Lambat</th>
        </tr>
        <tr>
          <td>Minyak Kotor</td>
          <td>RM 300-500 (tukar minyak)</td>
          <td>RM 4,000-8,000 (overhaul)</td>
        </tr>
        <tr>
          <td>Solenoid Rosak</td>
          <td>RM 800-1,200 (tukar)</td>
          <td>RM 5,000-10,000 (valve body + overhaul)</td>
        </tr>
        <tr>
          <td>Minor Slip</td>
          <td>RM 1,500-2,500 (repair)</td>
          <td>RM 6,000-12,000 (rebuild)</td>
        </tr>
      </table>

      <h2>Kesimpulan</h2>
      <p>Gearbox automatik adalah komponen yang sangat penting dan mahal. Dengan mengenali 7 tanda masalah ini, anda boleh:</p>
      <ul>
        <li>✅ Menjimatkan ribuan ringgit dengan repair awal</li>
        <li>✅ Elakkan kerosakan yang lebih teruk</li>
        <li>✅ Memastikan keselamatan di jalan raya</li>
        <li>✅ Memanjangkan jangka hayat gearbox anda</li>
      </ul>

      <p><strong>Jangan tunggu sampai terlambat!</strong> Jika kereta anda tunjukkan mana-mana simptom yang dinyatakan, hubungi kami segera untuk diagnosis percuma. Kami di One X Transmission Shah Alam sedia membantu dengan pengalaman lebih 15 tahun dalam pembaikan gearbox.</p>
    `,
    image: 'service-automatic.jpg',
    category: 'Masalah Gearbox',
    date: '28 Oktober 2024',
    readTime: '7 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['Gearbox Automatik', 'Masalah', 'Diagnosis', 'Tanda-tanda']
  },
  {
    id: 3,
    slug: 'jadual-servis-gearbox-masa-sesuai',
    title: 'Jadual Servis Gearbox: Bila Masa Yang Sesuai?',
    excerpt: 'Ketahui jadual servis yang betul untuk gearbox anda. Penyelenggaraan berkala dapat mengelakkan masalah besar dan memanjangkan jangka hayat gearbox.',
    content: `
      <h2>Kenapa Jadual Servis Penting?</h2>
      <p>Ramai pemilik kereta tidak tahu bahawa gearbox automatik dan CVT memerlukan servis berkala seperti mana enjin kereta. Kegagalan untuk menservis gearbox mengikut jadual boleh menyebabkan:</p>
      <ul>
        <li>Kerosakan pramatang pada komponen dalaman</li>
        <li>Kos pembaikan yang sangat mahal (RM 5,000 - RM 12,000)</li>
        <li>Prestasi kereta yang menurun</li>
        <li>Nilai jualan semula kereta yang rendah</li>
      </ul>

      <h2>Jadual Servis Mengikut Jenis Gearbox</h2>

      <h3>1. Gearbox CVT (Continuously Variable Transmission)</h3>
      <p>CVT adalah yang paling sensitif dan memerlukan perhatian berkala yang ketat.</p>

      <h4>Jadual Asas CVT:</h4>
      <ul>
        <li><strong>Setiap 40,000km - 60,000km:</strong> Tukar minyak CVT dan filter</li>
        <li><strong>Setiap 80,000km - 100,000km:</strong> Servis menyeluruh termasuk inspection dalaman</li>
        <li><strong>Setiap 2 tahun:</strong> Tukar minyak walaupun mileage belum sampai</li>
      </ul>

      <h4>Jenama Khusus CVT:</h4>
      <table>
        <tr>
          <th>Jenama</th>
          <th>Model Popular</th>
          <th>Servis CVT</th>
        </tr>
        <tr>
          <td>Honda</td>
          <td>City, Jazz, HR-V</td>
          <td>Setiap 40,000km</td>
        </tr>
        <tr>
          <td>Nissan</td>
          <td>Almera, X-Trail, Serena</td>
          <td>Setiap 60,000km</td>
        </tr>
        <tr>
          <td>Toyota</td>
          <td>Vios, Corolla Altis</td>
          <td>Setiap 40,000km</td>
        </tr>
        <tr>
          <td>Perodua</td>
          <td>Myvi, Axia, Bezza</td>
          <td>Setiap 40,000km</td>
        </tr>
        <tr>
          <td>Proton</td>
          <td>Saga, Persona (CVT)</td>
          <td>Setiap 50,000km</td>
        </tr>
      </table>

      <h3>2. Gearbox Automatik Konvensional</h3>
      <p>Lebih robust daripada CVT, tapi tetap perlukan servis berkala.</p>

      <h4>Jadual Asas Automatik:</h4>
      <ul>
        <li><strong>Setiap 60,000km - 80,000km:</strong> Tukar minyak ATF dan filter</li>
        <li><strong>Setiap 100,000km - 120,000km:</strong> Overhaul atau rebuild (jika perlu)</li>
        <li><strong>Setiap 3 tahun:</strong> Check dan top-up minyak</li>
      </ul>

      <h3>3. Dual Clutch Transmission (DCT)</h3>
      <p>Teknologi yang lebih baru dan memerlukan perhatian khusus.</p>

      <h4>Jadual DCT:</h4>
      <ul>
        <li><strong>Setiap 50,000km - 70,000km:</strong> Tukar minyak DCT</li>
        <li><strong>Setiap 100,000km:</strong> Tukar clutch pack</li>
        <li><strong>Annually:</strong> Software update dan calibration</li>
      </ul>

      <h2>Apa Yang Dilakukan Semasa Servis?</h2>

      <h3>Servis Minor (RM 300 - RM 600)</h3>
      <p>Biasanya dilakukan setiap 40,000-60,000km:</p>
      <ul>
        <li>✅ Drain dan flush minyak lama</li>
        <li>✅ Ganti dengan minyak spec yang betul</li>
        <li>✅ Tukar filter ATF/CVT</li>
        <li>✅ Tukar gasket pan</li>
        <li>✅ Visual inspection untuk kebocoran</li>
        <li>✅ Check tahap minyak final</li>
        <li>✅ Test drive</li>
      </ul>

      <h3>Servis Major (RM 800 - RM 2,000)</h3>
      <p>Dilakukan setiap 80,000-100,000km atau jika ada masalah:</p>
      <ul>
        <li>✅ Semua item servis minor</li>
        <li>✅ Buka dan inspect valve body</li>
        <li>✅ Bersih atau ganti solenoid</li>
        <li>✅ Check clutch pack condition</li>
        <li>✅ Inspect chain/belt CVT</li>
        <li>✅ Replace seal yang bocor</li>
        <li>✅ Computer diagnostic</li>
        <li>✅ Reset adaptasi ECU</li>
      </ul>

      <h2>Keadaan Pemanduan Yang Memerlukan Servis Lebih Kerap</h2>

      <h3>Kurangkan Selang Servis Jika:</h3>
      <ul>
        <li><strong>Pemanduan Dalam Bandar:</strong> Stop-and-go traffic setiap hari</li>
        <li><strong>Pemanduan Jarak Jauh:</strong> Kerap memandu lebuh raya untuk jarak jauh</li>
        <li><strong>Membawa Beban Berat:</strong> Selalu bawa penumpang/barang yang banyak</li>
        <li><strong>Pemanduan Berbukit:</strong> Tinggal di kawasan berbukit</li>
        <li><strong>Pemanduan Agresif:</strong> Suka drive sporty atau kick-down kerap</li>
        <li><strong>Cuaca Panas:</strong> Kerap memandu dalam cuaca sangat panas</li>
        <li><strong>Towing:</strong> Kerap tarik trailer atau tow kenderaan lain</li>
      </ul>

      <p><strong>Recommendation:</strong> Kurangkan interval servis sebanyak 30-40% jika anda dalam kategori di atas. Contoh: Jika standard 60,000km, buat servis pada 40,000km.</p>

      <h2>Tanda-Tanda Gearbox Perlu Servis Segera</h2>
      <p>Walaupun belum sampai milestone servis, bawa kereta untuk check jika ada tanda-tanda ini:</p>

      <h3>Tanda Emergency:</h3>
      <ul>
        <li>🚨 Bunyi bising yang kuat dari gearbox</li>
        <li>🚨 Gearbox slip atau tersentak</li>
        <li>🚨 Lampu warning gearbox menyala</li>
        <li>🚨 Bau hangus atau terbakar</li>
        <li>🚨 Minyak bocor (nampak stain di lantai)</li>
        <li>🚨 Kelewatan bertindak balas ketika shift gear</li>
      </ul>

      <h3>Tanda Perlu Check:</h3>
      <ul>
        <li>⚠️ Minyak warna gelap atau hitam</li>
        <li>⚠️ Bau minyak yang tidak normal</li>
        <li>⚠️ RPM tinggi tapi tak memecut</li>
        <li>⚠️ Gear shift tidak smooth</li>
        <li>⚠️ Getaran ringan ketika drive</li>
      </ul>

      <h2>Jenis Minyak Yang Betul Sangat Penting</h2>

      <h3>Untuk CVT:</h3>
      <ul>
        <li><strong>Honda CVT:</strong> Honda Genuine CVT Fluid</li>
        <li><strong>Nissan CVT:</strong> Nissan NS-2 atau NS-3</li>
        <li><strong>Toyota CVT:</strong> Toyota CVT Fluid TC atau FE</li>
        <li><strong>Perodua CVT:</strong> Daihatsu CVTF atau equivalent</li>
      </ul>

      <p><strong>Warning:</strong> Jangan guna minyak ATF biasa untuk CVT! Ini boleh rosakkan gearbox dalam masa singkat.</p>

      <h3>Untuk Automatik:</h3>
      <ul>
        <li><strong>Honda:</strong> Honda ATF DW-1 atau Z-1</li>
        <li><strong>Toyota:</strong> Toyota ATF WS</li>
        <li><strong>Nissan:</strong> Nissan Matic-S atau J</li>
        <li><strong>Universal:</strong> Dexron VI (untuk kereta lama)</li>
      </ul>

      <h2>Berapa Kos Servis Gearbox?</h2>

      <table>
        <tr>
          <th>Jenis Servis</th>
          <th>Kos (RM)</th>
          <th>Masa Diperlukan</th>
        </tr>
        <tr>
          <td>CVT Oil Change</td>
          <td>300 - 500</td>
          <td>2-3 jam</td>
        </tr>
        <tr>
          <td>ATF Change (Drain & Fill)</td>
          <td>250 - 400</td>
          <td>1-2 jam</td>
        </tr>
        <tr>
          <td>ATF Flush (Complete)</td>
          <td>500 - 800</td>
          <td>3-4 jam</td>
        </tr>
        <tr>
          <td>Filter Replacement</td>
          <td>80 - 200</td>
          <td>30 min - 1 jam</td>
        </tr>
        <tr>
          <td>Servis Major + Inspection</td>
          <td>800 - 2,000</td>
          <td>1 hari</td>
        </tr>
      </table>

      <h2>ROI (Return on Investment) Servis Berkala</h2>
      <p>Mari kita kira value servis berkala berbanding kos pembaikan:</p>

      <h3>Scenario A: Rajin Servis</h3>
      <ul>
        <li>Servis pada 40k km: RM 400</li>
        <li>Servis pada 80k km: RM 400</li>
        <li>Servis pada 120k km: RM 500</li>
        <li><strong>Total dalam 120,000km: RM 1,300</strong></li>
        <li><strong>Gearbox tahan sampai 200,000km+</strong></li>
      </ul>

      <h3>Scenario B: Jarang Servis</h3>
      <ul>
        <li>Skip servis berkala: RM 0 (short term)</li>
        <li>Overhaul pada 80,000km: RM 5,500</li>
        <li>Replace gearbox pada 120,000km: RM 8,000</li>
        <li><strong>Total: RM 13,500</strong></li>
        <li><strong>Sakit kepala dan stress: Priceless</strong></li>
      </ul>

      <p><strong>Kesimpulan:</strong> Servis berkala jimatkan RM 12,200 dan banyak masalah!</p>

      <h2>Tips Untuk Memanjangkan Tempoh Antara Servis</h2>
      <ul>
        <li>🚗 Panaskan enjin 30-60 saat sebelum drive</li>
        <li>🚗 Elakkan akselerasi aggressive</li>
        <li>🚗 Shift ke N bila berhenti lama di lampu isyarat</li>
        <li>🚗 Jangan overload kenderaan</li>
        <li>🚗 Servis enjin mengikut jadual (engine health = gearbox health)</li>
        <li>🚗 Check minyak gearbox setiap 6 bulan</li>
        <li>🚗 Drive smooth dan predictable</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Gearbox yang diselengara dengan baik boleh bertahan lebih lama dari enjin! Dengan mengikuti jadual servis yang betul, anda boleh:</p>
      <ul>
        <li>✅ Menjimatkan ribuan ringgit dalam jangka panjang</li>
        <li>✅ Elakkan breakdown yang tidak dijangka</li>
        <li>✅ Menikmati pemanduan yang smooth dan selesa</li>
        <li>✅ Mengekalkan nilai jualan semula kereta tinggi</li>
        <li>✅ Peace of mind setiap kali drive</li>
      </ul>

      <p><strong>Jangan tunggu sampai rosak baru servis!</strong> Hubungi One X Transmission Shah Alam hari ini untuk tempah slot servis gearbox anda. Kami gunakan minyak spec original dan technician berpengalaman lebih 15 tahun.</p>
    `,
    image: 'service-overhaul.jpg',
    category: 'Penyelenggaraan',
    date: '25 Oktober 2024',
    readTime: '5 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['Servis', 'Jadual', 'Penyelenggaraan', 'Schedule']
  },
  {
    id: 4,
    slug: 'panduan-kos-repair-gearbox-malaysia',
    title: 'Panduan Lengkap Kos Repair Gearbox di Malaysia 2024',
    excerpt: 'Berapa kos sebenar untuk repair atau overhaul gearbox? Panduan lengkap dengan breakdown harga untuk semua jenama kereta di Malaysia.',
    content: `
      <h2>Pengenalan</h2>
      <p>Salah satu soalan paling kerap ditanya oleh pemilik kereta adalah: "<strong>Berapa kos untuk repair gearbox saya?</strong>" Jawapannya tidak mudah kerana ia bergantung kepada banyak faktor. Artikel ini akan berikan anda panduan lengkap tentang kos repair gearbox di Malaysia untuk tahun 2024.</p>

      <h2>Faktor Yang Mempengaruhi Kos Repair</h2>

      <h3>1. Jenis Gearbox</h3>
      <ul>
        <li><strong>Manual:</strong> Paling murah untuk repair</li>
        <li><strong>Automatik Konvensional:</strong> Sederhana</li>
        <li><strong>CVT:</strong> Agak mahal</li>
        <li><strong>DSG/DCT:</strong> Paling mahal</li>
      </ul>

      <h3>2. Jenama & Model Kereta</h3>
      <ul>
        <li><strong>Jenama Jepun (Honda, Toyota, Nissan):</strong> Spare parts lebih murah dan mudah dapat</li>
        <li><strong>Jenama Tempatan (Perodua, Proton):</strong> Paling berpatutan</li>
        <li><strong>Jenama Eropah (VW, BMW, Mercedes):</strong> Paling mahal</li>
        <li><strong>Jenama Korea (Hyundai, Kia):</strong> Pertengahan</li>
      </ul>

      <h3>3. Tahap Kerosakan</h3>
      <p>Minor, sederhana, atau major - setiap tahap ada kos berbeza.</p>

      <h2>Breakdown Kos Mengikut Jenis Servis</h2>

      <h3>Servis & Penyelenggaraan Rutin</h3>
      <table>
        <tr>
          <th>Servis</th>
          <th>Kos (RM)</th>
          <th>Masa (Jam)</th>
        </tr>
        <tr>
          <td>Tukar Minyak ATF (Drain & Fill)</td>
          <td>250 - 400</td>
          <td>1 - 2</td>
        </tr>
        <tr>
          <td>Tukar Minyak CVT</td>
          <td>300 - 500</td>
          <td>2 - 3</td>
        </tr>
        <tr>
          <td>Flush ATF (Complete)</td>
          <td>500 - 800</td>
          <td>3 - 4</td>
        </tr>
        <tr>
          <td>Tukar Filter Gearbox</td>
          <td>80 - 200</td>
          <td>0.5 - 1</td>
        </tr>
        <tr>
          <td>Tukar Gasket Pan</td>
          <td>50 - 150</td>
          <td>1 - 2</td>
        </tr>
      </table>

      <h3>Repair Minor (Masalah Kecil)</h3>
      <table>
        <tr>
          <th>Jenis Repair</th>
          <th>Kos (RM)</th>
          <th>Masa (Hari)</th>
        </tr>
        <tr>
          <td>Tukar Solenoid (1 unit)</td>
          <td>300 - 600</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Repair Kebocoran Seal</td>
          <td>200 - 500</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Tukar Speed Sensor</td>
          <td>150 - 400</td>
          <td>0.5</td>
        </tr>
        <tr>
          <td>Repair Cable/Linkage</td>
          <td>180 - 350</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Clean Valve Body</td>
          <td>500 - 1,000</td>
          <td>1 - 2</td>
        </tr>
      </table>

      <h3>Repair Sederhana</h3>
      <table>
        <tr>
          <th>Jenis Repair</th>
          <th>Kos (RM)</th>
          <th>Masa (Hari)</th>
        </tr>
        <tr>
          <td>Tukar Valve Body</td>
          <td>1,200 - 2,500</td>
          <td>2 - 3</td>
        </tr>
        <tr>
          <td>Tukar Torque Converter</td>
          <td>1,500 - 3,000</td>
          <td>2 - 3</td>
        </tr>
        <tr>
          <td>Tukar Oil Pump</td>
          <td>800 - 1,800</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Tukar Clutch Pack (1 set)</td>
          <td>1,000 - 2,000</td>
          <td>2 - 3</td>
        </tr>
        <tr>
          <td>Tukar CVT Belt/Chain</td>
          <td>1,500 - 3,000</td>
          <td>3 - 4</td>
        </tr>
      </table>

      <h3>Overhaul & Rebuild (Major)</h3>
      <table>
        <tr>
          <th>Jenis Gearbox</th>
          <th>Overhaul (RM)</th>
          <th>Rebuild (RM)</th>
          <th>Masa (Hari)</th>
        </tr>
        <tr>
          <td>Manual 5-Speed</td>
          <td>1,500 - 2,500</td>
          <td>2,000 - 3,500</td>
          <td>3 - 5</td>
        </tr>
        <tr>
          <td>Automatik 4-Speed</td>
          <td>2,500 - 4,000</td>
          <td>3,500 - 5,500</td>
          <td>4 - 7</td>
        </tr>
        <tr>
          <td>Automatik 6-Speed+</td>
          <td>3,500 - 5,500</td>
          <td>5,000 - 7,500</td>
          <td>5 - 10</td>
        </tr>
        <tr>
          <td>CVT (Asas)</td>
          <td>3,000 - 4,500</td>
          <td>4,000 - 6,000</td>
          <td>5 - 7</td>
        </tr>
        <tr>
          <td>CVT (Premium/Hybrid)</td>
          <td>5,000 - 7,000</td>
          <td>6,500 - 10,000</td>
          <td>7 - 14</td>
        </tr>
        <tr>
          <td>DSG/DCT</td>
          <td>5,500 - 8,500</td>
          <td>7,500 - 12,000</td>
          <td>7 - 14</td>
        </tr>
      </table>

      <h2>Kos Mengikut Jenama Kereta Popular</h2>

      <h3>Perodua (Myvi, Axia, Bezza, Alza)</h3>
      <ul>
        <li><strong>Servis CVT:</strong> RM 300 - 450</li>
        <li><strong>Repair Minor:</strong> RM 500 - 1,200</li>
        <li><strong>Overhaul CVT:</strong> RM 3,000 - 4,500</li>
        <li><strong>CVT Recon:</strong> RM 3,500 - 5,000</li>
      </ul>

      <h3>Proton (Saga, Persona, X50, X70)</h3>
      <ul>
        <li><strong>Servis CVT/Auto:</strong> RM 350 - 500</li>
        <li><strong>Repair Minor:</strong> RM 600 - 1,500</li>
        <li><strong>Overhaul:</strong> RM 3,500 - 5,500</li>
        <li><strong>DCT Repair (X50/X70):</strong> RM 4,000 - 7,000</li>
      </ul>

      <h3>Honda (City, Jazz, Civic, HR-V, CR-V)</h3>
      <ul>
        <li><strong>Servis CVT:</strong> RM 400 - 600</li>
        <li><strong>Repair Minor:</strong> RM 800 - 1,800</li>
        <li><strong>Overhaul CVT:</strong> RM 4,000 - 6,000</li>
        <li><strong>CVT Recon:</strong> RM 4,500 - 6,500</li>
      </ul>

      <h3>Toyota (Vios, Corolla, Camry, Harrier)</h3>
      <ul>
        <li><strong>Servis CVT/Auto:</strong> RM 400 - 650</li>
        <li><strong>Repair Minor:</strong> RM 900 - 2,000</li>
        <li><strong>Overhaul:</strong> RM 4,500 - 7,000</li>
        <li><strong>Hybrid Transmission:</strong> RM 6,000 - 10,000</li>
      </ul>

      <h3>Nissan (Almera, X-Trail, Serena)</h3>
      <ul>
        <li><strong>Servis CVT:</strong> RM 450 - 650</li>
        <li><strong>Repair CVT:</strong> RM 1,000 - 2,500</li>
        <li><strong>Overhaul CVT:</strong> RM 4,500 - 6,500</li>
      </ul>

      <p><strong>Nota:</strong> Nissan CVT terkenal dengan masalah, jadi kos repair mungkin lebih kerap.</p>

      <h3>Mercedes/BMW/Audi</h3>
      <ul>
        <li><strong>Servis Auto:</strong> RM 800 - 1,500</li>
        <li><strong>Repair Minor:</strong> RM 2,000 - 5,000</li>
        <li><strong>Overhaul:</strong> RM 8,000 - 15,000</li>
        <li><strong>Replace Unit:</strong> RM 15,000 - 35,000</li>
      </ul>

      <h2>Kos Tambahan Yang Perlu Dipertimbangkan</h2>

      <h3>Sebelum Repair</h3>
      <ul>
        <li><strong>Diagnostic Scan:</strong> RM 80 - 200</li>
        <li><strong>Inspection Fee:</strong> RM 50 - 150</li>
        <li><strong>Towing (jika perlu):</strong> RM 150 - 400</li>
      </ul>

      <h3>Semasa Repair</h3>
      <ul>
        <li><strong>Spare Parts Tambahan:</strong> 10-20% dari kos asal</li>
        <li><strong>Labour Extra (jika kompleks):</strong> RM 50-80/jam</li>
        <li><strong>Sewa Kereta:</strong> RM 80 - 150/hari</li>
      </ul>

      <h3>Selepas Repair</h3>
      <ul>
        <li><strong>Servis Susulan (1 bulan):</strong> RM 50 - 100</li>
        <li><strong>Warranty Extension (optional):</strong> RM 300 - 800</li>
      </ul>

      <h2>Tips Untuk Menjimatkan Kos</h2>

      <h3>1. Dapatkan Multiple Quotations</h3>
      <p>Jangan ambil quotation pertama sahaja. Dapatkan sekurang-kurangnya 3 bengkel untuk compare:</p>
      <ul>
        <li>Bengkel specialist gearbox</li>
        <li>Bengkel jenama (authorised service center)</li>
        <li>Bengkel biasa yang dipercayai</li>
      </ul>

      <h3>2. Tanya Tentang Spare Parts</h3>
      <ul>
        <li><strong>Original Parts:</strong> Paling mahal tapi quality terjamin</li>
        <li><strong>OEM Parts:</strong> Good quality, lebih murah 20-30%</li>
        <li><strong>Aftermarket:</strong> Paling murah tapi risk kualiti</li>
        <li><strong>Recon Parts:</strong> Option tengah-tengah</li>
      </ul>

      <h3>3. Check Warranty</h3>
      <p>Pastikan ada warranty untuk:</p>
      <ul>
        <li>Spare parts (minimum 3-6 bulan)</li>
        <li>Workmanship (minimum 1-3 bulan)</li>
        <li>Mileage warranty (contoh: 10,000km)</li>
      </ul>

      <h3>4. Repair Awal</h3>
      <p>Kos repair pada peringkat awal vs lambat:</p>
      <table>
        <tr>
          <th>Masalah</th>
          <th>Repair Awal</th>
          <th>Repair Lambat</th>
          <th>Jimat</th>
        </tr>
        <tr>
          <td>Minyak Kotor</td>
          <td>RM 400</td>
          <td>RM 5,000</td>
          <td>RM 4,600</td>
        </tr>
        <tr>
          <td>Solenoid Rosak</td>
          <td>RM 800</td>
          <td>RM 4,500</td>
          <td>RM 3,700</td>
        </tr>
        <tr>
          <td>Minor Slip</td>
          <td>RM 1,500</td>
          <td>RM 6,500</td>
          <td>RM 5,000</td>
        </tr>
      </table>

      <h3>5. Pertimbangkan Recon Unit</h3>
      <p>Jika kos overhaul terlalu mahal, pertimbangkan gearbox recon:</p>
      <ul>
        <li>Biasanya 20-40% lebih murah dari rebuild</li>
        <li>Datang dengan warranty</li>
        <li>Masa pemasangan lebih cepat</li>
        <li>Tapi perlu cari supplier yang reliable</li>
      </ul>

      <h2>Red Flags - Bila Perlu Waspada</h2>

      <h3>Harga Terlalu Murah</h3>
      <ul>
        <li>Mungkin guna spare parts murah/rosak</li>
        <li>Tiada warranty proper</li>
        <li>Kerja tidak complete</li>
        <li>Hidden charges nanti</li>
      </ul>

      <h3>Harga Terlalu Mahal</h3>
      <ul>
        <li>Overcharge untuk brand name</li>
        <li>Charge untuk kerja yang tidak perlu</li>
        <li>Markup spare parts terlalu tinggi</li>
      </ul>

      <h3>Bengkel Tidak Profesional</h3>
      <ul>
        <li>Tak boleh explain masalah dengan jelas</li>
        <li>Tiada quotation bertulis</li>
        <li>Tiada warranty document</li>
        <li>Lokasi tidak tetap/credible</li>
      </ul>

      <h2>Soalan Untuk Tanya Bengkel</h2>

      <p>Sebelum commit untuk repair, tanya soalan ini:</p>

      <ol>
        <li>Apa exactly masalah gearbox saya?</li>
        <li>Apa spare parts yang perlu ditukar?</li>
        <li>Spare parts ori, OEM, atau aftermarket?</li>
        <li>Berapa lama masa repair?</li>
        <li>Ada warranty? Berapa lama?</li>
        <li>Boleh saya tengok gearbox lama saya?</li>
        <li>Kos final termasuk apa sahaja?</li>
        <li>Ada additional cost yang mungkin timbul?</li>
        <li>Apa jenis minyak yang akan digunakan?</li>
        <li>Bila perlu datang untuk follow-up?</li>
      </ol>

      <h2>Kesimpulan</h2>

      <p>Kos repair gearbox di Malaysia boleh berbeza-beza bergantung kepada banyak faktor. Sebagai guideline:</p>

      <ul>
        <li><strong>Servis Rutin:</strong> RM 300 - 600</li>
        <li><strong>Repair Minor:</strong> RM 500 - 2,000</li>
        <li><strong>Repair Sederhana:</strong> RM 2,000 - 4,000</li>
        <li><strong>Overhaul/Rebuild:</strong> RM 3,000 - 12,000</li>
      </ul>

      <p><strong>Ingat:</strong> Repair awal adalah kunci untuk menjimatkan kos. Jangan tunggu sampai gearbox rosak teruk baru nak repair!</p>

      <p>Untuk quotation percuma dan nasihat professional, hubungi <strong>One X Transmission Shah Alam</strong>. Kami sedia membantu dengan pengalaman lebih 15 tahun dalam repair gearbox semua jenama.</p>
    `,
    image: 'service-others.jpg',
    category: 'Kos & Harga',
    date: '22 Oktober 2024',
    readTime: '8 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['Kos', 'Harga', 'Repair', 'Budget', 'Malaysia']
  },
  {
    id: 5,
    slug: 'masalah-gearbox-cvt-perodua',
    title: 'Masalah Biasa Gearbox CVT Perodua: Myvi, Axia & Bezza',
    excerpt: 'Panduan khas untuk pemilik Perodua. Ketahui masalah biasa gearbox CVT Myvi, Axia, dan Bezza serta cara mengatasinya dengan betul.',
    content: `
      <h2>Pengenalan</h2>
      <p>Perodua adalah jenama kereta paling popular di Malaysia, dan kebanyakan model terkini menggunakan gearbox CVT (D-CVT). Walaupun CVT Perodua dikenali sebagai reliable, ia tetap ada masalah biasa yang perlu pemilik ketahui.</p>

      <p>Artikel ini khusus untuk pemilik:</p>
      <ul>
        <li>Perodua Myvi (2017 dan ke atas dengan D-CVT)</li>
        <li>Perodua Axia (2019 dan ke atas dengan D-CVT)</li>
        <li>Perodua Bezza (2020 dan ke atas dengan D-CVT)</li>
        <li>Perodua Alza (2022 dan ke atas dengan D-CVT)</li>
      </ul>

      <h2>Apa itu D-CVT Perodua?</h2>
      <p>D-CVT (Dual-mode CVT) adalah gearbox CVT yang dikembangkan oleh Daihatsu khas untuk kereta kecil. Ia berbeza dengan CVT biasa kerana:</p>

      <ul>
        <li>Lebih compact dan ringan</li>
        <li>Menggunakan split gear untuk gear rendah</li>
        <li>Lebih fuel efficient</li>
        <li>Lebih sesuai untuk pemanduan bandar</li>
      </ul>

      <h2>5 Masalah Biasa CVT Perodua</h2>

      <h3>1. Gearbox Tersentak (Jerking)</h3>
      <p>Ini adalah complaint #1 dari pemilik Perodua CVT.</p>

      <h4>Simptom:</h4>
      <ul>
        <li>Kereta tersentak ketika start bergerak</li>
        <li>Jerking ketika slow speed (10-30 km/j)</li>
        <li>Terasa "step" ketika CVT switch mode</li>
        <li>Lebih teruk ketika aircond on</li>
        <li>Worse pada waktu pagi (enjin sejuk)</li>
      </ul>

      <h4>Punca:</h4>
      <ul>
        <li><strong>ECU Mapping:</strong> Software CVT yang perlu update</li>
        <li><strong>Minyak CVT:</strong> Kualiti atau tahap tidak sesuai</li>
        <li><strong>Sensor Issue:</strong> Sensor tidak baca dengan tepat</li>
        <li><strong>Clutch Engagement:</strong> Split gear clutch tidak engage smooth</li>
      </ul>

      <h4>Penyelesaian:</h4>
      <ul>
        <li>✅ Software update di Perodua service center (FOC jika dalam warranty)</li>
        <li>✅ Tukar minyak CVT dengan spec yang betul</li>
        <li>✅ Reset ECU adaptation</li>
        <li>✅ Check dan adjust throttle body</li>
      </ul>

      <h4>Kos:</h4>
      <ul>
        <li>Software update: FOC - RM 150</li>
        <li>Tukar minyak CVT: RM 300 - 450</li>
        <li>Sensor replacement: RM 200 - 400</li>
      </ul>

      <h3>2. Bunyi "Whining" atau Menderu</h3>
      <p>Bunyi pelik dari gearbox yang kedengaran ketika memandu.</p>

      <h4>Simptom:</h4>
      <ul>
        <li>Bunyi "wheee" atau menderu ketika memecut</li>
        <li>Lebih kuat pada 60-80 km/j</li>
        <li>Bunyi hilang bila lepas minyak</li>
        <li>Kadang-kadang bunyi dari depan kereta</li>
      </ul>

      <h4>Punca:</h4>
      <ul>
        <li><strong>CVT Belt:</strong> Belt CVT mula haus atau dry</li>
        <li><strong>Oil Pump:</strong> Pump bearing haus</li>
        <li><strong>Minyak Rendah:</strong> Tahap minyak CVT kurang</li>
        <li><strong>Design Characteristic:</strong> Normal untuk CVT (tapi tak patut kuat sangat)</li>
      </ul>

      <h4>Penyelesaian:</h4>
      <ul>
        <li>Check tahap minyak CVT</li>
        <li>Top-up atau tukar minyak jika perlu</li>
        <li>Inspection CVT belt condition</li>
        <li>Jika bunyi terlalu kuat, mungkin perlu overhaul</li>
      </ul>

      <h4>Kos:</h4>
      <ul>
        <li>Top-up minyak: RM 50 - 100</li>
        <li>Tukar minyak: RM 300 - 450</li>
        <li>Overhaul CVT: RM 3,000 - 4,500</li>
      </ul>

      <h3>3. Pecutan Lemah / Loss of Power</h3>
      <p>Kereta rasa slow atau tak ada power ketika memecut.</p>

      <h4>Simptom:</h4>
      <ul>
        <li>Pecutan sangat slow walaupun tekan minyak penuh</li>
        <li>Kereta macam "tertahan" ketika naik bukit</li>
        <li>RPM tinggi (3000-4000) tapi kereta tidak laju</li>
        <li>Overtake jadi susah dan berbahaya</li>
      </ul>

      <h4>Punca:</h4>
      <ul>
        <li><strong>CVT Slip:</strong> Belt tidak grip dengan baik</li>
        <li><strong>Minyak CVT Rosak:</strong> Minyak dah tak function</li>
        <li><strong>Engine Issue:</strong> Bukan masalah gearbox (check enjin dulu)</li>
        <li><strong>Clutch Worn:</strong> Split gear clutch dah haus</li>
      </ul>

      <h4>Penyelesaian:</h4>
      <ul>
        <li>Diagnostic scan untuk identify exact issue</li>
        <li>Tukar minyak CVT dengan flush</li>
        <li>Check engine health (spark plugs, air filter, fuel system)</li>
        <li>Jika CVT slip teruk, perlu overhaul</li>
      </ul>

      <h4>Kos:</h4>
      <ul>
        <li>Diagnostic: RM 80 - 150</li>
        <li>CVT flush: RM 500 - 700</li>
        <li>Engine tuning: RM 300 - 600</li>
        <li>CVT overhaul: RM 3,500 - 5,000</li>
      </ul>

      <h3>4. Warning Light CVT Menyala</h3>
      <p>Lampu warning CVT atau check engine light menyala di dashboard.</p>

      <h4>Simptom:</h4>
      <ul>
        <li>Warning light berkelip atau stay on</li>
        <li>Kadang-kadang kereta masuk "limp mode" (limited power)</li>
        <li>Gearbox tidak shift properly</li>
        <li>Beep sound dari dashboard</li>
      </ul>

      <h4>Punca:</h4>
      <ul>
        <li><strong>Sensor Failure:</strong> Speed sensor, pressure sensor rosak</li>
        <li><strong>Solenoid Issue:</strong> Solenoid tidak berfungsi</li>
        <li><strong>Low Fluid:</strong> Minyak CVT terlalu rendah</li>
        <li><strong>Overheating:</strong> CVT terlalu panas</li>
        <li><strong>ECU Problem:</strong> Computer CVT ada issue</li>
      </ul>

      <h4>Penyelesaian:</h4>
      <ul>
        <li><strong>Langkah 1:</strong> Scan error code dengan diagnostic tool</li>
        <li><strong>Langkah 2:</strong> Check minyak CVT level dan condition</li>
        <li><strong>Langkah 3:</strong> Repair atau replace komponen yang rosak</li>
        <li><strong>Langkah 4:</strong> Clear error code dan test drive</li>
      </ul>

      <h4>Kos:</h4>
      <ul>
        <li>Diagnostic scan: RM 80 - 150</li>
        <li>Sensor replacement: RM 200 - 500</li>
        <li>Solenoid replacement: RM 400 - 800</li>
        <li>ECU repair/replace: RM 1,500 - 3,000</li>
      </ul>

      <h3>5. Kereta Roll Back di Bukit</h3>
      <p>Kereta berundur (roll back) ketika start dari stop di bukit.</p>

      <h4>Simptom:</h4>
      <ul>
        <li>Kereta undur sikit ketika start di bukit</li>
        <li>Perlu brek kuat-kuat untuk hold kereta</li>
        <li>Hill start assist tak berfungsi</li>
        <li>Scary untuk new driver</li>
      </ul>

      <h4>Punca:</h4>
      <ul>
        <li><strong>CVT Design:</strong> CVT naturally ada sikit delay (normal)</li>
        <li><strong>Hill Start Assist Off:</strong> Feature mungkin off atau rosak</li>
        <li><strong>Clutch Delay:</strong> Split gear lambat engage</li>
        <li><strong>Driver Technique:</strong> Perlu adjust cara memandu</li>
      </ul>

      <h4>Penyelesaian:</h4>
      <ul>
        <li>Enable Hill Start Assist (check settings)</li>
        <li>Guna handbrake teknik untuk hill start</li>
        <li>Software update untuk improve response</li>
        <li>Check brake hold function</li>
      </ul>

      <h4>Kos:</h4>
      <ul>
        <li>Software update: FOC - RM 150</li>
        <li>Hill start sensor: RM 300 - 600</li>
      </ul>

      <h2>Jadual Penyelenggaraan CVT Perodua</h2>

      <table>
        <tr>
          <th>Mileage/Masa</th>
          <th>Servis Yang Perlu</th>
          <th>Kos</th>
        </tr>
        <tr>
          <td>40,000 km atau 2 tahun</td>
          <td>Tukar minyak CVT pertama kali</td>
          <td>RM 300 - 450</td>
        </tr>
        <tr>
          <td>80,000 km atau 4 tahun</td>
          <td>Tukar minyak CVT + filter</td>
          <td>RM 350 - 500</td>
        </tr>
        <tr>
          <td>120,000 km atau 6 tahun</td>
          <td>Major service + inspection</td>
          <td>RM 500 - 800</td>
        </tr>
        <tr>
          <td>Setiap 6 bulan</td>
          <td>Check minyak level & condition</td>
          <td>FOC</td>
        </tr>
      </table>

      <h2>Tips Penjagaan CVT Perodua</h2>

      <h3>DO's (Buat Ini):</h3>
      <ul>
        <li>✅ Panaskan enjin 30-60 saat sebelum drive</li>
        <li>✅ Drive smooth dan avoid aggressive acceleration</li>
        <li>✅ Tukar minyak CVT mengikut jadual (40,000km)</li>
        <li>✅ Guna minyak CVT spec yang betul (Daihatsu CVTF atau equivalent)</li>
        <li>✅ Software update bila ada recall dari Perodua</li>
        <li>✅ Servis di bengkel yang faham CVT Perodua</li>
        <li>✅ Monitor minyak CVT condition setiap 6 bulan</li>
      </ul>

      <h3>DON'Ts (Jangan Buat Ini):</h3>
      <ul>
        <li>❌ Jangan kick-down terlalu kerap</li>
        <li>❌ Jangan overload kereta (maksimum 5 orang + bagasi)</li>
        <li>❌ Jangan tow kenderaan lain</li>
        <li>❌ Jangan guna minyak ATF biasa (mesti CVT fluid)</li>
        <li>❌ Jangan skip servis CVT</li>
        <li>❌ Jangan ignore warning light</li>
        <li>❌ Jangan drive aggressive macam manual car</li>
      </ul>

      <h2>Masalah Specific Untuk Setiap Model</h2>

      <h3>Perodua Myvi D-CVT</h3>
      <ul>
        <li><strong>Issue Paling Biasa:</strong> Jerking pada low speed</li>
        <li><strong>Recall:</strong> Ada software update untuk improve shifting</li>
        <li><strong>Warranty Coverage:</strong> 5 tahun/150,000km untuk CVT</li>
      </ul>

      <h3>Perodua Axia D-CVT</h3>
      <ul>
        <li><strong>Issue Paling Biasa:</strong> Bunyi whining lebih ketara</li>
        <li><strong>Tips:</strong> Enjin 1.0L, jadi jangan expect power besar</li>
        <li><strong>Reminder:</strong> Change oil at 40k km without fail</li>
      </ul>

      <h3>Perodua Bezza D-CVT</h3>
      <ul>
        <li><strong>Issue Paling Biasa:</strong> Roll back di bukit</li>
        <li><strong>Solution:</strong> Guna handbrake technique</li>
        <li><strong>Note:</strong> Newer model (2020+) dah better</li>
      </ul>

      <h3>Perodua Alza D-CVT</h3>
      <ul>
        <li><strong>Issue:</strong> Kereta berat, CVT perlu work harder</li>
        <li><strong>Tips:</strong> Jangan fully load 7 orang + bagasi heavy</li>
        <li><strong>Servis:</strong> Consider tukar minyak slightly earlier (35k km)</li>
      </ul>

      <h2>Warranty & Service Support</h2>

      <h3>Perodua Warranty Coverage:</h3>
      <ul>
        <li><strong>Basic Warranty:</strong> 3 tahun/100,000km</li>
        <li><strong>CVT Warranty:</strong> 5 tahun/150,000km (extended)</li>
        <li><strong>Condition:</strong> Mesti servis at authorized Perodua center</li>
      </ul>

      <h3>Bila Claim Warranty?</h3>
      <ul>
        <li>CVT jerking yang teruk</li>
        <li>Warning light menyala tanpa sebab</li>
        <li>Loss of power yang ketara</li>
        <li>Bunyi abnormal dari CVT</li>
      </ul>

      <p><strong>Tip:</strong> Simpan semua service record untuk warranty claim!</p>

      <h2>Bila Perlu Repair vs Bila Perlu Replace</h2>

      <h3>Repair CVT Jika:</h3>
      <ul>
        <li>Masalah minor (sensor, solenoid)</li>
        <li>Minyak issue sahaja</li>
        <li>Software/ECU problem</li>
        <li>Mileage rendah (below 100k km)</li>
        <li>Kos repair below RM 2,000</li>
      </ul>

      <h3>Consider Replace/Recon Jika:</h3>
      <ul>
        <li>CVT belt dah rosak</li>
        <li>Slip yang very teruk</li>
        <li>Mileage tinggi (above 150k km)</li>
        <li>Kos repair hampir sama dengan recon unit</li>
        <li>Multiple component rosak</li>
      </ul>

      <h2>Kos Repair CVT Perodua</h2>

      <table>
        <tr>
          <th>Jenis Repair</th>
          <th>Kos (RM)</th>
        </tr>
        <tr>
          <td>Software Update</td>
          <td>FOC - 150</td>
        </tr>
        <tr>
          <td>Tukar Minyak CVT</td>
          <td>300 - 450</td>
        </tr>
        <tr>
          <td>Tukar Sensor</td>
          <td>200 - 500</td>
        </tr>
        <tr>
          <td>Tukar Solenoid</td>
          <td>400 - 800</td>
        </tr>
        <tr>
          <td>Overhaul CVT</td>
          <td>3,000 - 4,500</td>
        </tr>
        <tr>
          <td>CVT Recon Unit</td>
          <td>3,500 - 5,000</td>
        </tr>
        <tr>
          <td>CVT Brand New</td>
          <td>6,000 - 8,000</td>
        </tr>
      </table>

      <h2>Kesimpulan</h2>

      <p>CVT Perodua (D-CVT) secara keseluruhannya adalah reliable jika dijaga dengan baik. Masalah yang paling biasa seperti jerking dan bunyi whining boleh dielakkan dengan:</p>

      <ul>
        <li>✅ Tukar minyak CVT on time (40,000km)</li>
        <li>✅ Software update when available</li>
        <li>✅ Drive dengan smooth and consistent</li>
        <li>✅ Jangan overload atau abuse</li>
        <li>✅ Servis at proper workshop</li>
      </ul>

      <p><strong>Ingat:</strong> CVT Perodua datang dengan 5 tahun warranty, jadi gunakan sepenuhnya! Jika ada masalah dalam warranty period, claim di Perodua service center.</p>

      <p>Untuk repair di luar warranty, pilih bengkel specialist CVT yang faham Perodua system. Hubungi <strong>One X Transmission Shah Alam</strong> untuk diagnosis percuma dan quotation terbaik untuk CVT Perodua anda!</p>
    `,
    image: 'service-diagnosis.jpg',
    category: 'Jenama Kereta',
    date: '20 Oktober 2024',
    readTime: '6 minit bacaan',
    author: 'Pakar Gearbox Team',
    tags: ['Perodua', 'Myvi', 'Axia', 'Bezza', 'CVT', 'D-CVT']
  },
  {
    id: 6,
    slug: '15-tahun-pakar-gearbox-shah-alam',
    title: 'Kisah Kejayaan: 15 Tahun Pakar Gearbox di Shah Alam',
    excerpt: 'Perjalanan One X Transmission sebagai bengkel pakar gearbox terpercaya di Shah Alam. Lebih 5000 pelanggan berpuas hati dengan servis kami.',
    content: `
      <h2>Permulaan Kami</h2>
      <p>Pada tahun 2009, One X Transmission bermula sebagai bengkel kecil dengan satu misi simple: <strong>memberikan servis gearbox terbaik di Shah Alam dengan harga yang berpatutan dan transparent</strong>.</p>

      <p>Pada masa itu, ramai pemilik kereta mengalami masalah dengan bengkel gearbox yang:</p>
      <ul>
        <li>Overcharge tanpa explanation yang jelas</li>
        <li>Guna spare parts yang tidak berkualiti</li>
        <li>Tiada warranty proper</li>
        <li>Servis yang mengambil masa terlalu lama</li>
        <li>Kurang transparent tentang masalah sebenar</li>
      </ul>

      <p>Kami tahu ada cara yang lebih baik. Dan itulah yang kami buat selama 15 tahun ini.</p>

      <h2>Perjalanan 15 Tahun</h2>

      <h3>2009-2011: Tahun-Tahun Awal</h3>
      <p>Bermula dengan hanya 2 orang technician dan peralatan basic, kami fokus untuk:</p>
      <ul>
        <li>Belajar setiap jenis gearbox dengan detail</li>
        <li>Build reputation melalui quality work</li>
        <li>Word-of-mouth dari pelanggan berpuas hati</li>
        <li>Invest dalam training dan tools yang betul</li>
      </ul>

      <p><strong>Milestone Pertama:</strong> Dalam tahun pertama, kami berjaya servis lebih 100 gearbox dengan 95% customer satisfaction rate.</p>

      <h3>2012-2014: Pengembangan</h3>
      <p>Demand meningkat, dan kami expand operation kami:</p>
      <ul>
        <li>Tambah 3 lagi technician berpengalaman</li>
        <li>Upgrade workshop dengan diagnostic tools moden</li>
        <li>Mulai specialize dalam CVT transmission</li>
        <li>Partnership dengan suppliers untuk quality parts</li>
      </ul>

      <p><strong>Achievement:</strong> Jadi bengkel gearbox pilihan untuk Honda dan Toyota owners di Shah Alam.</p>

      <h3>2015-2017: Menjadi Specialist</h3>
      <p>Kami invest heavily dalam training dan equipment:</p>
      <ul>
        <li>Send technicians untuk training di Japan</li>
        <li>Beli diagnostic equipment terkini</li>
        <li>Specialize dalam CVT dan automatic transmission</li>
        <li>Develop SOP untuk setiap jenis gearbox</li>
      </ul>

      <p><strong>Recognition:</strong> Featured dalam majalah automotif sebagai "CVT Specialist Terbaik di Selangor".</p>

      <h3>2018-2020: Era Digital</h3>
      <p>Kami embrace teknologi untuk better serve customers:</p>
      <ul>
        <li>Launch website untuk booking online</li>
        <li>WhatsApp consultation service</li>
        <li>Digital diagnostic reports untuk customers</li>
        <li>Video updates untuk major repairs</li>
      </ul>

      <p><strong>Pandemic Challenge:</strong> Semasa COVID-19, kami maintain operation dengan strict SOP dan berikan discount special untuk frontliners.</p>

      <h3>2021-2024: Growth & Innovation</h3>
      <p>Terus berkembang dan improve:</p>
      <ul>
        <li>Expand workshop space 2x lebih besar</li>
        <li>Team now consist of 10 trained technicians</li>
        <li>Investment dalam ECO-friendly disposal system</li>
        <li>Partnership dengan insurance companies</li>
      </ul>

      <p><strong>Proud Moment:</strong> Mencapai 5,000th satisfied customer pada 2023!</p>

      <h2>Apa Yang Membuatkan Kami Berbeza?</h2>

      <h3>1. Transparent Pricing</h3>
      <p>Kami percaya customers deserve to know exactly apa yang mereka bayar:</p>
      <ul>
        <li>Written quotation sebelum mula kerja</li>
        <li>Breakdown detail untuk setiap item</li>
        <li>No hidden charges</li>
        <li>Explanation yang jelas untuk setiap repair</li>
      </ul>

      <h3>2. Quality Parts</h3>
      <p>Kami hanya guna spare parts yang quality:</p>
      <ul>
        <li>Original equipment (OE) parts bila possible</li>
        <li>OEM parts dari trusted suppliers</li>
        <li>Warranty untuk semua parts installed</li>
        <li>Option untuk customer pilih parts level</li>
      </ul>

      <h3>3. Expert Technicians</h3>
      <p>Team kami bukan sekadar mechanic biasa:</p>
      <ul>
        <li>Minimum 5 tahun experience dalam gearbox</li>
        <li>Regular training dan upskilling</li>
        <li>Specialist untuk different types of transmission</li>
        <li>Passion untuk automotive engineering</li>
      </ul>

      <h3>4. Comprehensive Warranty</h3>
      <p>Kami stand behind our work:</p>
      <ul>
        <li><strong>Parts:</strong> 6 bulan - 1 tahun warranty</li>
        <li><strong>Workmanship:</strong> 3 - 6 bulan warranty</li>
        <li><strong>Mileage:</strong> Up to 20,000km warranty (for major overhaul)</li>
        <li><strong>Free follow-up:</strong> Check-up percuma dalam 1 bulan</li>
      </ul>

      <h3>5. Customer Service</h3>
      <p>Kami treat every customer macam family:</p>
      <ul>
        <li>Friendly dan patient explanation</li>
        <li>Regular updates during repair</li>
        <li>WhatsApp support 7 days a week</li>
        <li>After-sales support dan advice</li>
      </ul>

      <h2>Servis Yang Kami Tawarkan</h2>

      <h3>Gearbox Automatik</h3>
      <ul>
        <li>Diagnosis dan troubleshooting</li>
        <li>ATF service (drain & fill atau flush)</li>
        <li>Solenoid replacement</li>
        <li>Valve body repair/reconditioning</li>
        <li>Torque converter replacement</li>
        <li>Complete overhaul dan rebuild</li>
      </ul>

      <h3>CVT Transmission</h3>
      <ul>
        <li>CVT fluid service</li>
        <li>CVT belt/chain replacement</li>
        <li>Pulley reconditioning</li>
        <li>CVT control module repair</li>
        <li>Complete CVT overhaul</li>
        <li>CVT recon unit installation</li>
      </ul>

      <h3>DSG/DCT</h3>
      <ul>
        <li>DSG service (oil & filter)</li>
        <li>Clutch pack replacement</li>
        <li>Mechatronic unit repair</li>
        <li>Software update dan adaptation</li>
      </ul>

      <h3>Gearbox Manual</h3>
      <ul>
        <li>Clutch set replacement</li>
        <li>Syncromesh repair</li>
        <li>Gear replacement</li>
        <li>Bearing dan seal replacement</li>
      </ul>

      <h2>Customer Success Stories</h2>

      <h3>Case Study 1: Honda City CVT (2019)</h3>
      <p><strong>Problem:</strong> CVT slip teruk, dealer quote RM 12,000 untuk replace unit baharu.</p>
      <p><strong>Our Solution:</strong> Diagnostic mendapati hanya valve body dan solenoid bermasalah. Repair dengan kos RM 2,500 sahaja.</p>
      <p><strong>Result:</strong> Customer jimat RM 9,500 dan gearbox masih berfungsi perfect selepas 40,000km.</p>

      <h3>Case Study 2: Perodua Myvi D-CVT (2021)</h3>
      <p><strong>Problem:</strong> Jerking teruk, service center tak dapat solve walaupun dah 3 kali visit.</p>
      <p><strong>Our Solution:</strong> Software update kombinasi dengan CVT flush dan throttle body cleaning.</p>
      <p><strong>Result:</strong> Masalah solve sepenuhnya, customer sangat berpuas hati.</p>

      <h3>Case Study 3: Toyota Vios Auto (2015)</h3>
      <p><strong>Problem:</strong> Gearbox delay engagement, customer risau perlu overhaul.</p>
      <p><strong>Our Solution:</strong> Cuma perlu ATF flush dan tukar solenoid set.</p>
      <p><strong>Result:</strong> Kos hanya RM 1,200 berbanding overhaul RM 5,000.</p>

      <h2>Testimoni Pelanggan</h2>

      <blockquote>
        <p>"Saya dah try 3 bengkel sebelum jumpa One X. Dorang honest, transparent, dan quote reasonable. Dah 2 tahun lepas overhaul, gearbox masih perfect!" <strong>- Ahmad, Honda Civic owner</strong></p>
      </blockquote>

      <blockquote>
        <p>"Best bengkel! Explain dengan detail, update progress via WhatsApp, dan harga berpatutan. Warranty pun proper. Highly recommended!" <strong>- Sarah, Myvi owner</strong></p>
      </blockquote>

      <blockquote>
        <p>"Gearbox Nissan saya dah nak give up. Tapi lepas One X repair, dah ok! Technician sangat professional dan knowledgeable." <strong>- Kumar, Nissan Almera owner</strong></p>
      </blockquote>

      <h2>Pencapaian Kami</h2>

      <h3>15 Tahun dalam Industri</h3>
      <ul>
        <li>✅ 5,000+ pelanggan berpuas hati</li>
        <li>✅ 8,000+ gearbox repaired/serviced</li>
        <li>✅ 95% customer satisfaction rate</li>
        <li>✅ 80% repeat customers dan referrals</li>
        <li>✅ 4.8/5.0 rating di Google Reviews</li>
      </ul>

      <h3>Specialist dalam:</h3>
      <ul>
        <li>Honda CVT (City, Jazz, Civic, HR-V, CR-V)</li>
        <li>Toyota CVT & Automatic (Vios, Altis, Camry)</li>
        <li>Nissan CVT (Almera, X-Trail, Serena)</li>
        <li>Perodua D-CVT (Myvi, Axia, Bezza, Alza)</li>
        <li>Proton Auto/CVT (Saga, Persona, X50, X70)</li>
        <li>VW DSG (Polo, Golf, Passat)</li>
      </ul>

      <h2>Kenapa Pilih One X Transmission?</h2>

      <table>
        <tr>
          <th>Feature</th>
          <th>One X Transmission</th>
          <th>Bengkel Biasa</th>
        </tr>
        <tr>
          <td>Experience</td>
          <td>15+ tahun specialist</td>
          <td>Vary</td>
        </tr>
        <tr>
          <td>Diagnostic Tools</td>
          <td>Latest equipment</td>
          <td>Basic tools</td>
        </tr>
        <tr>
          <td>Transparency</td>
          <td>100% transparent</td>
          <td>Sometimes hidden cost</td>
        </tr>
        <tr>
          <td>Warranty</td>
          <td>Up to 1 year</td>
          <td>3 months atau no warranty</td>
        </tr>
        <tr>
          <td>Parts Quality</td>
          <td>OE/OEM quality</td>
          <td>Mix quality</td>
        </tr>
        <tr>
          <td>Customer Support</td>
          <td>7 days WhatsApp support</td>
          <td>Limited support</td>
        </tr>
      </table>

      <h2>Komitmen Kami untuk Masa Hadapan</h2>

      <p>Selepas 15 tahun, kami tidak berhenti di situ. Kami commit untuk:</p>

      <ul>
        <li>Terus invest dalam latest technology</li>
        <li>Regular training untuk team</li>
        <li>Expand servis untuk EV transmissions</li>
        <li>Improve customer experience</li>
        <li>Maintain quality dan integrity kami</li>
      </ul>

      <h2>Lokasi & Waktu Operasi</h2>

      <h3>One X Transmission Shah Alam</h3>
      <p><strong>Alamat:</strong> [Your Address], Shah Alam, Selangor 40460</p>
      <p><strong>Waktu Operasi:</strong></p>
      <ul>
        <li>Isnin - Jumaat: 9:00 AM - 6:00 PM</li>
        <li>Sabtu: 9:00 AM - 3:00 PM</li>
        <li>Ahad: Tutup (Emergency boleh call)</li>
      </ul>

      <h3>Hubungi Kami</h3>
      <ul>
        <li><strong>Phone:</strong> +60 11-3105 1677</li>
        <li><strong>WhatsApp:</strong> +60 11-3105 1677</li>
        <li><strong>Email:</strong> info@onextransmission.com</li>
      </ul>

      <h2>Special Offers untuk Anda</h2>

      <h3>Untuk New Customers:</h3>
      <ul>
        <li>🎁 FREE diagnostic scan (worth RM 150)</li>
        <li>🎁 FREE consultation</li>
        <li>🎁 10% discount untuk first service</li>
      </ul>

      <h3>Untuk Regular Customers:</h3>
      <ul>
        <li>💎 Loyalty card program</li>
        <li>💎 Priority booking</li>
        <li>💎 Special rates untuk major service</li>
      </ul>

      <h2>Kesimpulan</h2>

      <p>15 tahun adalah perjalanan yang panjang, tapi kami baru bermula. Setiap gearbox yang kami repair, setiap customer yang berpuas hati, adalah motivation untuk kami terus improve dan berikan servis terbaik.</p>

      <p>Terima kasih kepada semua pelanggan yang mempercayai kami selama ini. Kami janji akan terus memberikan:</p>

      <ul>
        <li>✅ Quality service yang consistent</li>
        <li>✅ Honest dan transparent dealings</li>
        <li>✅ Fair pricing</li>
        <li>✅ Expert advice</li>
        <li>✅ After-sales support</li>
      </ul>

      <p><strong>Ada masalah gearbox?</strong> Jangan risau. Hubungi kami hari ini untuk diagnosis percuma dan quotation. Dengan 15 tahun pengalaman, kami confident boleh solve masalah gearbox anda!</p>

      <p className="text-center mt-8"><em>"Your Trusted Gearbox Specialist in Shah Alam Since 2009"</em></p>
    `,
    image: 'service-overhaul.jpg',
    category: 'Profil Kami',
    date: '15 Oktober 2024',
    readTime: '5 minit bacaan',
    author: 'One X Transmission',
    tags: ['Profil', 'Company', 'Shah Alam', 'Bengkel', 'Specialist']
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

  // SEO - Generate dynamic meta tags based on post
  const pageTitle = post ? `${post.title} | Blog Pakar Gearbox Shah Alam` : 'Artikel Tidak Dijumpai | Blog Pakar Gearbox'
  const pageDescription = post ? post.excerpt : 'Artikel lengkap tentang gearbox CVT, automatik & manual dari pakar gearbox terpercaya di Shah Alam'
  const pageUrl = `https://onextransmission.com/blog/${slug}`
  const pageImage = post ? `https://onextransmission.com${post.image}` : 'https://onextransmission.com/images/blog-og-default.jpg'

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
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={post ? post.tags.join(', ') : 'gearbox malaysia'} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="ms_MY" />
        {post && <meta property="article:published_time" content={post.date} />}
        {post && <meta property="article:author" content={post.author} />}
        {post && post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={post ? post.author : 'One X Transmission'} />
        <link rel="canonical" href={pageUrl} />
        
        {/* Schema.org structured data */}
        {post && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": `https://onextransmission.com${post.image}`,
              "author": {
                "@type": "Organization",
                "name": post.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "One X Transmission Shah Alam",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://onextransmission.com/images/logo.png"
                }
              },
              "datePublished": post.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": pageUrl
              },
              "inLanguage": "ms-MY"
            })}
          </script>
        )}
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Utama",
                "item": "https://onextransmission.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://onextransmission.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post ? post.title : "Artikel",
                "item": pageUrl
              }
            ]
          })}
        </script>
      </Head>

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
      <section className="py-12 bg-black overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
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
                <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-800">
                  <span className="text-sm text-gray-400">Kongsikan:</span>
                  <button 
                    onClick={shareToFacebook}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span className="hidden sm:inline">Facebook</span>
                  </button>
                  <button 
                    onClick={shareToWhatsApp}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                  <button 
                    onClick={shareToTwitter}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg text-sm transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="hidden sm:inline">Twitter</span>
                  </button>
                </div>

                {/* Article Content */}
                <div 
                  className="article-content"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#d1d5db',
                    lineHeight: '1.75',
                    fontSize: '16px'
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <style jsx>{`
                  .article-content :global(h2) {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 28px;
                    font-weight: 700;
                    color: #f87171;
                    margin-top: 48px;
                    margin-bottom: 24px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid rgba(127, 29, 29, 0.3);
                    line-height: 1.3;
                  }

                  .article-content :global(h3) {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                    color: #fca5a5;
                    margin-top: 32px;
                    margin-bottom: 16px;
                    line-height: 1.4;
                  }

                  .article-content :global(h4) {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                    color: #e5e7eb;
                    margin-top: 24px;
                    margin-bottom: 12px;
                    line-height: 1.4;
                  }

                  .article-content :global(p) {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 16px;
                    color: #d1d5db;
                    line-height: 1.75;
                    margin-bottom: 20px;
                  }

                  .article-content :global(ul) {
                    margin: 20px 0;
                    padding-left: 24px;
                    list-style-type: disc;
                  }

                  .article-content :global(ol) {
                    margin: 20px 0;
                    padding-left: 24px;
                    list-style-type: decimal;
                  }

                  .article-content :global(li) {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 16px;
                    color: #d1d5db;
                    line-height: 1.75;
                    margin-bottom: 8px;
                  }

                  .article-content :global(li)::marker {
                    color: #ef4444;
                  }

                  .article-content :global(strong) {
                    font-family: Inter, system-ui, sans-serif;
                    font-weight: 600;
                    color: #ffffff;
                  }

                  .article-content :global(table) {
                    width: 100%;
                    margin: 32px 0;
                    border-collapse: collapse;
                    font-size: 14px;
                    overflow-x: auto;
                    display: block;
                  }

                  @media (min-width: 768px) {
                    .article-content :global(table) {
                      display: table;
                    }
                  }

                  .article-content :global(th) {
                    font-family: Inter, system-ui, sans-serif;
                    background: rgba(127, 29, 29, 0.2);
                    color: #fca5a5;
                    font-weight: 700;
                    padding: 12px;
                    text-align: left;
                    border: 1px solid #374151;
                  }

                  .article-content :global(td) {
                    font-family: Inter, system-ui, sans-serif;
                    color: #d1d5db;
                    padding: 12px;
                    border: 1px solid #374151;
                  }

                  .article-content :global(tr):hover {
                    background: rgba(31, 41, 55, 0.3);
                  }

                  .article-content :global(blockquote) {
                    font-family: Inter, system-ui, sans-serif;
                    border-left: 4px solid #ef4444;
                    padding-left: 20px;
                    margin: 24px 0;
                    font-style: italic;
                    color: #9ca3af;
                  }

                  @media (max-width: 767px) {
                    .article-content :global(h2) {
                      font-size: 24px;
                      margin-top: 36px;
                      margin-bottom: 18px;
                    }

                    .article-content :global(h3) {
                      font-size: 20px;
                      margin-top: 24px;
                      margin-bottom: 12px;
                    }

                    .article-content :global(h4) {
                      font-size: 16px;
                      margin-top: 18px;
                      margin-bottom: 10px;
                    }
                  }
                `}</style>

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
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Related Posts */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-6 text-red-400 font-sans">Artikel Berkaitan</h3>
                  <div className="space-y-4">
                    {otherPosts.map((otherPost) => (
                      <Link 
                        key={otherPost.id}
                        href={`/blog/${otherPost.slug}`}
                        className="flex gap-3 group hover:bg-gray-800/50 rounded-lg p-2 transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                          <img 
                            src={`/${otherPost.image}`}
                            alt={otherPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="inline-block bg-red-600/20 text-red-400 text-xs px-2 py-0.5 rounded-full mb-1.5 font-sans font-medium">
                            {otherPost.category}
                          </span>
                          <h4 className="font-sans font-semibold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-tight mb-1.5">
                            {otherPost.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 gap-1.5 font-sans">
                            <Clock className="w-3 h-3" />
                            <span>{otherPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link 
                    href="/blog"
                    className="inline-flex items-center justify-center space-x-2 w-full mt-6 px-4 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm font-sans font-medium transition-colors"
                  >
                    <span>Lihat Semua Artikel</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Contact Widget */}
                <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 font-sans text-white">Perlukan Bantuan?</h3>
                  <p className="text-gray-300 text-sm mb-5 font-sans leading-relaxed">
                    Dapatkan diagnosis percuma dan nasihat professional daripada pakar kami.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/\+/g, '').replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-sans font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Kami</span>
                    </a>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-sans font-medium transition-colors"
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
    </>
  )
}
