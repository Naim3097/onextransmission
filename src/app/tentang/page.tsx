import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Pakar Gearbox Shah Alam',
  description: 'Ketahui lebih lanjut tentang Pakar Gearbox Shah Alam - pakar dalam pembaikan dan servis gearbox automatik dan manual dengan pengalaman bertahun-tahun.',
  keywords: 'tentang pakar gearbox, shah alam, pengalaman, sejarah syarikat',
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Tentang Kami
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Pakar terpercaya dalam pembaikan dan servis gearbox di Shah Alam
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Pengalaman Bertahun-tahun dalam Industri Gearbox
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  Pakar Gearbox Shah Alam telah beroperasi selama bertahun-tahun sebagai 
                  pusat pembaikan gearbox yang terpercaya di kawasan Shah Alam dan sekitarnya. 
                  Kami mengkhususkan diri dalam pembaikan gearbox automatik dan manual untuk 
                  pelbagai jenis kenderaan.
                </p>
                <p>
                  Dengan pengalaman yang mendalam dan peralatan yang canggih, kami mampu 
                  menangani pelbagai masalah gearbox dari diagnosis hingga pembaikan lengkap. 
                  Tim kami terdiri daripada teknisi yang berpengalaman dan terlatih dalam 
                  menangani sistem transmisi moden.
                </p>
                <p>
                  Kepercayaan pelanggan adalah keutamaan kami. Setiap kerja yang dilakukan 
                  dijamin berkualiti tinggi dengan menggunakan alat ganti yang berkualiti 
                  dan prosedur kerja yang standard.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/pakar-gearbox shah-alam-team.jpg"
                  alt="Tim Pakar Gearbox Shah Alam"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Komitmen kami terhadap kualiti dan kepuasan pelanggan menjadikan kami pilihan utama
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Pengalaman Terpercaya
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bertahun-tahun pengalaman dalam industri pembaikan gearbox
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Peralatan Canggih
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Menggunakan peralatan dan teknologi terkini untuk diagnosis dan pembaikan
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Harga Berpatutan
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Menawarkan perkhidmatan berkualiti dengan harga yang kompetitif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-red-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Hubungi Kami Hari Ini
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Dapatkan perkhidmatan terbaik untuk gearbox kenderaan anda
          </p>
          <a
            href="/hubungi"
            className="inline-block bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}
