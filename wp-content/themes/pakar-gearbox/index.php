<?php
/**
 * Home Page Template
 * Pakar Gearbox Shah Alam
 * 
 * Following Development Rules:
 * - Fully SEO Optimised for "pakar gearbox shah alam"
 * - All content in Bahasa Malaysia
 * - Lucid Motors aesthetic with premium white space
 * - Mobile-first responsive design
 * - World-class performance and UX
 */

get_header(); ?>

<!-- Hero Section -->
<section class="hero section-lg">
    <div class="container">
        <div class="hero-content text-center">
            <h1 class="hero-title">
                Pakar Gearbox Shah Alam.<br>
                <span class="text-accent">Baiki Elok, Jalan Tenang.</span>
            </h1>
            
            <p class="hero-subtitle">
                Khusus CVT dan automatik. Diagnosis tepat, jaminan kerja, terus WhatsApp bila sedia.
            </p>
            
            <div class="hero-cta">
                <a href="tel:<?php echo esc_attr(get_pakar_gearbox_config('phone')); ?>" 
                   class="btn btn-primary btn-lg"
                   onclick="gtag('event', 'hero_phone_click', {'branch': 'Shah Alam'});">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Call Sekarang
                </a>
                
                <a href="https://wa.me/<?php echo str_replace(['+', '-', ' '], '', get_pakar_gearbox_config('whatsapp')); ?>?text=Hi%20Pakar%20Gearbox%20Shah%20Alam,%20saya%20nak%20tanya%20tentang%20perkhidmatan%20gearbox." 
                   class="btn btn-secondary btn-lg"
                   target="_blank"
                   rel="noopener"
                   onclick="gtag('event', 'hero_whatsapp_click', {'branch': 'Shah Alam'});">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp Sekarang
                </a>
            </div>
            
            <div class="hero-stats">
                <div class="hero-stat">
                    <span class="hero-stat-number">500+</span>
                    <span class="hero-stat-label">Kereta Dibaiki</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-number">4.8★</span>
                    <span class="hero-stat-label">Rating Pelanggan</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-number">6 Bulan</span>
                    <span class="hero-stat-label">Jaminan Kerja</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-number">9+ Tahun</span>
                    <span class="hero-stat-label">Pengalaman</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services section" id="perkhidmatan">
    <div class="container">
        <div class="section-header">
            <h2>Perkhidmatan Pakar Gearbox Kami</h2>
            <p class="section-subtitle">
                Khusus dalam pembaikan gearbox CVT dan automatik untuk semua jenama kereta di Shah Alam.
            </p>
        </div>
        
        <div class="grid grid-cols-3 gap-8">
            <div class="card service-card">
                <div class="service-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                <div class="card-body">
                    <h3 class="service-title">Overhaul CVT Lengkap</h3>
                    <p class="service-description">
                        Overhaul menyeluruh untuk CVT yang bermasalah. Ganti semua komponen yang rosak, 
                        test drive menyeluruh, jaminan 6 bulan.
                    </p>
                    <div class="service-price">
                        <span class="price-from">Dari RM</span>
                        <span class="price-amount">1,800</span>
                    </div>
                    <a href="<?php echo home_url('/perkhidmatan/overhaul-cvt'); ?>" class="btn btn-primary">
                        Ketahui Lanjut
                    </a>
                </div>
            </div>
            
            <div class="card service-card">
                <div class="service-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                </div>
                <div class="card-body">
                    <h3 class="service-title">Diagnosis & Scan</h3>
                    <p class="service-description">
                        Scan komputer untuk kesan masalah gearbox dengan tepat. Diagnosis berdata, 
                        bukan teka. Report lengkap diberikan.
                    </p>
                    <div class="service-price">
                        <span class="price-from">Dari RM</span>
                        <span class="price-amount">80</span>
                    </div>
                    <a href="<?php echo home_url('/perkhidmatan/diagnosis-gearbox'); ?>" class="btn btn-primary">
                        Ketahui Lanjut
                    </a>
                </div>
            </div>
            
            <div class="card service-card">
                <div class="service-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                    </svg>
                </div>
                <div class="card-body">
                    <h3 class="service-title">Servis & Maintenance</h3>
                    <p class="service-description">
                        Tukar minyak gearbox, filter, dan komponen yang perlu diganti. Maintenance berkala 
                        untuk pastikan gearbox tahan lama.
                    </p>
                    <div class="service-price">
                        <span class="price-from">Dari RM</span>
                        <span class="price-amount">180</span>
                    </div>
                    <a href="<?php echo home_url('/perkhidmatan/servis-gearbox'); ?>" class="btn btn-primary">
                        Ketahui Lanjut
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-us section" style="background-color: var(--color-gray-50);">
    <div class="container">
        <div class="section-header">
            <h2>Kenapa Pilih Pakar Gearbox Shah Alam?</h2>
            <p class="section-subtitle">
                Kami fokus kepada kualiti kerja dan kepuasan pelanggan. Inilah yang membezakan kami.
            </p>
        </div>
        
        <div class="grid grid-cols-2 gap-8">
            <div class="why-us-item">
                <div class="why-us-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <div class="why-us-content">
                    <h3>Diagnosis Berdata, Bukan Teka</h3>
                    <p>Kami guna alatan scan komputer untuk diagnosis yang tepat. Tiada teka-teki, semua berdasarkan data.</p>
                </div>
            </div>
            
            <div class="why-us-item">
                <div class="why-us-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                    </svg>
                </div>
                <div class="why-us-content">
                    <h3>Alatan Khusus CVT</h3>
                    <p>Pelaburan dalam alatan khusus untuk CVT memastikan kerja berkualiti tinggi dan masa siap yang pantas.</p>
                </div>
            </div>
            
            <div class="why-us-item">
                <div class="why-us-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div class="why-us-content">
                    <h3>Jaminan Selepas Baiki</h3>
                    <p>Jaminan 6 bulan untuk kerja overhaul dan 3 bulan untuk servis. Kami yakin dengan kualiti kerja kami.</p>
                </div>
            </div>
            
            <div class="why-us-item">
                <div class="why-us-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                </div>
                <div class="why-us-content">
                    <h3>Terus Terang Tentang Kos</h3>
                    <p>Tiada caj tersembunyi. Sebutharga jelas sebelum kerja bermula. Bayar mengikut kerja yang dibuat sahaja.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="process section">
    <div class="container">
        <div class="section-header">
            <h2>Proses Kerja Kami</h2>
            <p class="section-subtitle">
                4 langkah mudah untuk dapatkan gearbox anda seperti baru semula.
            </p>
        </div>
        
        <div class="process-steps">
            <div class="process-step">
                <div class="process-number">1</div>
                <div class="process-content">
                    <h3>Scan</h3>
                    <p>Diagnosis komputer untuk kesan masalah dengan tepat. Tiada teka-teki.</p>
                </div>
            </div>
            
            <div class="process-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
            </div>
            
            <div class="process-step">
                <div class="process-number">2</div>
                <div class="process-content">
                    <h3>Diagnosis</h3>
                    <p>Analisa hasil scan dan beri report lengkap kepada pelanggan.</p>
                </div>
            </div>
            
            <div class="process-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
            </div>
            
            <div class="process-step">
                <div class="process-number">3</div>
                <div class="process-content">
                    <h3>Sebutharga</h3>
                    <p>Beri sebutharga yang jelas dan detail. Tiada caj tersembunyi.</p>
                </div>
            </div>
            
            <div class="process-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
            </div>
            
            <div class="process-step">
                <div class="process-number">4</div>
                <div class="process-content">
                    <h3>Membaiki</h3>
                    <p>Kerja pembaikan menggunakan alatan khusus dan spare part berkualiti.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Form Section -->
<section class="contact-form section" style="background-color: var(--color-gray-50);" id="hubungi-kami">
    <div class="container">
        <div class="grid grid-cols-2 gap-12">
            <div class="contact-info">
                <h2>Dapatkan Sebutharga Percuma</h2>
                <p>Isi borang di sebelah atau terus WhatsApp kami untuk mendapatkan sebutharga dan tempahan.</p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </div>
                        <div class="contact-content">
                            <h4>Telefon</h4>
                            <a href="tel:<?php echo esc_attr(get_pakar_gearbox_config('phone')); ?>">
                                <?php echo esc_html(get_pakar_gearbox_config('phone')); ?>
                            </a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                        </div>
                        <div class="contact-content">
                            <h4>WhatsApp</h4>
                            <a href="https://wa.me/<?php echo str_replace(['+', '-', ' '], '', get_pakar_gearbox_config('whatsapp')); ?>" target="_blank" rel="noopener">
                                <?php echo esc_html(get_pakar_gearbox_config('whatsapp')); ?>
                            </a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </div>
                        <div class="contact-content">
                            <h4>Alamat</h4>
                            <p><?php echo esc_html(get_pakar_gearbox_config('address')); ?></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="form-container">
                <form id="contact-form" class="contact-form-inner" method="post">
                    <div class="form-group">
                        <label for="name" class="form-label">Nama *</label>
                        <input type="text" id="name" name="name" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone" class="form-label">Nombor Telefon *</label>
                        <input type="tel" id="phone" name="phone" class="form-input" placeholder="01X-XXX XXXX" required>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div class="form-group">
                            <label for="car_make" class="form-label">Jenama Kereta</label>
                            <select id="car_make" name="car_make" class="form-select">
                                <option value="">Pilih Jenama</option>
                                <option value="Perodua">Perodua</option>
                                <option value="Proton">Proton</option>
                                <option value="Honda">Honda</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Nissan">Nissan</option>
                                <option value="Mazda">Mazda</option>
                                <option value="Mitsubishi">Mitsubishi</option>
                                <option value="Lain-lain">Lain-lain</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="car_model" class="form-label">Model</label>
                            <input type="text" id="car_model" name="car_model" class="form-input" placeholder="Cth: Myvi, Saga">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="car_year" class="form-label">Tahun</label>
                        <input type="number" id="car_year" name="car_year" class="form-input" placeholder="Cth: 2015" min="1990" max="2025">
                    </div>
                    
                    <div class="form-group">
                        <label for="issue" class="form-label">Masalah Gearbox</label>
                        <textarea id="issue" name="issue" class="form-textarea" placeholder="Terangkan masalah yang dialami..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                        Hantar Pertanyaan
                    </button>
                    
                    <p class="form-note">
                        <small>* Wajib diisi. Kami akan hubungi anda dalam masa 1 jam semasa waktu operasi.</small>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq section" id="faq">
    <div class="container">
        <div class="section-header">
            <h2>Soalan Yang Kerap Ditanya</h2>
            <p class="section-subtitle">
                Jawapan kepada soalan-soalan yang paling kerap ditanya tentang perkhidmatan gearbox kami.
            </p>
        </div>
        
        <div class="faq-container">
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Berapa kos asas untuk overhaul gearbox CVT?</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Kos overhaul CVT bermula dari RM1,800 bergantung kepada model kereta dan tahap kerosakan. Kami akan beri diagnosis percuma dan sebutharga yang jelas sebelum kerja bermula. Tiada caj tersembunyi.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Apa tanda-tanda gearbox CVT bermasalah?</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Tanda-tanda biasa termasuk jerk ketika bertukar gear, bunyi dengung, lambat masuk gear, RPM melambung tanpa power, atau lampu warning menyala. Jika alami simptom ini, datang untuk diagnosis segera.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Berapa lama masa yang diperlukan untuk overhaul?</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Overhaul CVT mengambil masa 3-5 hari kerja bergantung kepada ketersediaan spare part. Untuk servis biasa, 4-6 jam sahaja. Kami akan update progress melalui WhatsApp.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Ada jaminan untuk kerja yang dibuat?</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Ya, kami beri jaminan 6 bulan untuk kerja overhaul dan 3 bulan untuk servis. Jaminan meliputi kerja dan spare part yang dipasang. Syarat dan terma tertakluk kepada penggunaan normal.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Boleh servis semua jenama kereta?</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Kami khusus dalam gearbox CVT dan automatik untuk semua jenama - Perodua, Proton, Honda, Toyota, Nissan, Mazda, dan lain-lain. Pengalaman 9+ tahun dengan pelbagai model.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <button class="faq-question" onclick="toggleFAQ(this)">
                    <span>Boleh datang untuk diagnosis sahaja?</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Boleh! Diagnosis komputer berharga RM80 sahaja. Jika proceed dengan kerja pembaikan, caj diagnosis akan ditolak dari jumlah bil. Anda akan dapat report lengkap masalah gearbox.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
/* Additional Home Page Styles */
.text-accent {
    color: var(--color-accent);
}

.hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.1;
    margin-bottom: var(--spacing-6);
    font-weight: 800;
}

.service-price {
    margin: var(--spacing-4) 0;
    display: flex;
    align-items: baseline;
    gap: var(--spacing-1);
}

.price-from {
    font-size: var(--font-size-sm);
    color: var(--color-gray-600);
}

.price-amount {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-accent);
}

.why-us-item {
    display: flex;
    gap: var(--spacing-4);
    padding: var(--spacing-6);
    background: var(--color-white);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.why-us-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.why-us-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background-color: var(--color-accent);
    color: var(--color-white);
    border-radius: var(--radius-2xl);
    display: flex;
    align-items: center;
    justify-content: center;
}

.why-us-content h3 {
    margin-bottom: var(--spacing-2);
    color: var(--color-black);
}

.process-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-4);
    flex-wrap: wrap;
}

.process-step {
    text-align: center;
    flex: 1;
    min-width: 200px;
    max-width: 250px;
}

.process-number {
    width: 60px;
    height: 60px;
    background-color: var(--color-accent);
    color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin: 0 auto var(--spacing-4) auto;
}

.process-arrow {
    color: var(--color-gray-400);
    display: none;
}

.contact-details {
    margin-top: var(--spacing-8);
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-6);
}

.contact-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background-color: var(--color-accent);
    color: var(--color-white);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-content h4 {
    margin-bottom: var(--spacing-1);
    color: var(--color-black);
}

.contact-content a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
}

.form-container {
    background: var(--color-white);
    padding: var(--spacing-8);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-lg);
}

.form-note {
    text-align: center;
    margin-top: var(--spacing-4);
    color: var(--color-gray-600);
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    border-bottom: 1px solid var(--color-gray-200);
}

.faq-question {
    width: 100%;
    background: none;
    border: none;
    padding: var(--spacing-6) 0;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-black);
}

.faq-icon {
    transition: transform var(--transition-base);
    color: var(--color-gray-400);
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
}

.faq-item.active .faq-answer {
    max-height: 200px;
}

.faq-answer p {
    padding-bottom: var(--spacing-6);
    color: var(--color-gray-700);
    line-height: 1.6;
}

@media (min-width: 768px) {
    .process-arrow {
        display: block;
    }
    
    .grid.grid-cols-2.gap-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--spacing-4);
    }
}

@media (max-width: 767px) {
    .grid.grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
    .grid.grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
    .process-steps {
        flex-direction: column;
        gap: var(--spacing-6);
    }
    
    .why-us-item {
        flex-direction: column;
        text-align: center;
    }
    
    .contact-item {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    
    .form-container {
        margin-top: var(--spacing-8);
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            formData.append('action', 'pakar_gearbox_contact');
            formData.append('nonce', pakar_gearbox_ajax.nonce);
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Menghantar...';
            submitBtn.disabled = true;
            
            fetch(pakar_gearbox_ajax.ajax_url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Pertanyaan anda telah dihantar! Kami akan hubungi anda tidak lama lagi.');
                    this.reset();
                    
                    // Optional: Redirect to WhatsApp
                    if (data.data.whatsapp_url) {
                        if (confirm('Mahu terus ke WhatsApp untuk chat dengan kami?')) {
                            window.open(data.data.whatsapp_url, '_blank');
                        }
                    }
                } else {
                    alert('Error: ' + data.data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Maaf, ada masalah menghantar borang. Sila cuba lagi atau WhatsApp kami terus.');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}
</script>

<?php get_footer(); ?>
