    </main>

    <!-- Mobile Sticky Action Bar -->
    <div class="mobile-sticky-bar" id="mobile-sticky-bar">
        <div class="container">
            <div class="sticky-bar-actions">
                <a href="tel:<?php echo esc_attr(get_pakar_gearbox_config('phone')); ?>" 
                   class="btn btn-primary"
                   onclick="gtag('event', 'phone_click', {'branch': 'Shah Alam'});">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Call
                </a>
                
                <a href="https://wa.me/<?php echo str_replace(['+', '-', ' '], '', get_pakar_gearbox_config('whatsapp')); ?>?text=Hi%20Pakar%20Gearbox%20Shah%20Alam,%20saya%20nak%20tanya%20tentang%20perkhidmatan%20gearbox." 
                   class="btn btn-secondary"
                   target="_blank"
                   rel="noopener"
                   onclick="gtag('event', 'whatsapp_click', {'branch': 'Shah Alam'});">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                </a>
                
                <a href="https://maps.google.com/?q=<?php echo urlencode(get_pakar_gearbox_config('address')); ?>" 
                   class="btn btn-secondary"
                   target="_blank"
                   rel="noopener"
                   onclick="gtag('event', 'map_click', {'branch': 'Shah Alam'});">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Maps
                </a>
            </div>
        </div>
    </div>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Business Info -->
                    <div class="footer-section">
                        <h3><?php echo esc_html(get_pakar_gearbox_config('business_name')); ?></h3>
                        <div class="footer-info">
                            <p class="footer-description">
                                Pakar pembaikan gearbox dan CVT di Shah Alam. 
                                Diagnosis tepat, jaminan kerja, harga berpatutan.
                            </p>
                            
                            <div class="footer-contact">
                                <div class="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                    <span><?php echo esc_html(get_pakar_gearbox_config('address')); ?></span>
                                </div>
                                
                                <div class="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                    </svg>
                                    <a href="tel:<?php echo esc_attr(get_pakar_gearbox_config('phone')); ?>">
                                        <?php echo esc_html(get_pakar_gearbox_config('phone')); ?>
                                    </a>
                                </div>
                                
                                <div class="contact-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    <a href="https://wa.me/<?php echo str_replace(['+', '-', ' '], '', get_pakar_gearbox_config('whatsapp')); ?>" target="_blank" rel="noopener">
                                        WhatsApp: <?php echo esc_html(get_pakar_gearbox_config('whatsapp')); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Services -->
                    <div class="footer-section">
                        <h3>Perkhidmatan</h3>
                        <ul>
                            <li><a href="<?php echo home_url('/perkhidmatan/overhaul-cvt'); ?>">Overhaul CVT</a></li>
                            <li><a href="<?php echo home_url('/perkhidmatan/diagnosis-gearbox'); ?>">Diagnosis Gearbox</a></li>
                            <li><a href="<?php echo home_url('/perkhidmatan/servis-gearbox'); ?>">Servis Gearbox</a></li>
                            <li><a href="<?php echo home_url('/perkhidmatan/tukar-minyak-gearbox'); ?>">Tukar Minyak Gearbox</a></li>
                            <li><a href="<?php echo home_url('/perkhidmatan/pembaikan-gearbox-manual'); ?>">Gearbox Manual</a></li>
                        </ul>
                    </div>
                    
                    <!-- Quick Links -->
                    <div class="footer-section">
                        <h3>Pautan Pantas</h3>
                        <ul>
                            <li><a href="<?php echo home_url('/'); ?>">Utama</a></li>
                            <li><a href="<?php echo home_url('/tentang-kami'); ?>">Tentang Kami</a></li>
                            <li><a href="<?php echo home_url('/blog'); ?>">Blog & Tips</a></li>
                            <li><a href="<?php echo home_url('/hubungi-kami'); ?>">Hubungi Kami</a></li>
                            <li><a href="<?php echo home_url('/testimoni'); ?>">Testimoni Pelanggan</a></li>
                        </ul>
                    </div>
                    
                    <!-- Business Hours -->
                    <div class="footer-section">
                        <h3>Waktu Operasi</h3>
                        <div class="business-hours">
                            <div class="hours-item">
                                <span class="day">Isnin - Jumaat</span>
                                <span class="time">9:00 - 18:00</span>
                            </div>
                            <div class="hours-item">
                                <span class="day">Sabtu</span>
                                <span class="time">9:00 - 17:00</span>
                            </div>
                            <div class="hours-item">
                                <span class="day">Ahad</span>
                                <span class="time">Tutup</span>
                            </div>
                        </div>
                        
                        <div class="emergency-note">
                            <small><strong>Kecemasan?</strong><br>
                            WhatsApp kami di <a href="https://wa.me/<?php echo str_replace(['+', '-', ' '], '', get_pakar_gearbox_config('whatsapp')); ?>" target="_blank" rel="noopener"><?php echo esc_html(get_pakar_gearbox_config('whatsapp')); ?></a></small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; <?php echo date('Y'); ?> <?php echo esc_html(get_pakar_gearbox_config('business_name')); ?>. Hak cipta terpelihara.</p>
                    </div>
                    
                    <div class="footer-badges">
                        <div class="badge-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>Rating 4.8/5</span>
                        </div>
                        
                        <div class="badge-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>Jaminan 6 Bulan</span>
                        </div>
                        
                        <div class="badge-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <span>Dipercayai Sejak 2015</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>

    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
        
        // Track phone clicks
        document.querySelectorAll('a[href^="tel:"]').forEach(function(element) {
            element.addEventListener('click', function() {
                gtag('event', 'phone_click', {
                    'branch': 'Shah Alam',
                    'phone_number': '<?php echo esc_js(get_pakar_gearbox_config('phone')); ?>'
                });
            });
        });
        
        // Track WhatsApp clicks
        document.querySelectorAll('a[href*="wa.me"]').forEach(function(element) {
            element.addEventListener('click', function() {
                gtag('event', 'whatsapp_click', {
                    'branch': 'Shah Alam',
                    'whatsapp_number': '<?php echo esc_js(get_pakar_gearbox_config('whatsapp')); ?>'
                });
            });
        });
        
        // Track map clicks
        document.querySelectorAll('a[href*="maps.google.com"]').forEach(function(element) {
            element.addEventListener('click', function() {
                gtag('event', 'map_click', {
                    'branch': 'Shah Alam',
                    'address': '<?php echo esc_js(get_pakar_gearbox_config('address')); ?>'
                });
            });
        });
    </script>

<style>
/* Footer Styles */
.site-footer {
    background-color: var(--color-gray-900);
    color: var(--color-gray-300);
    padding: var(--spacing-16) 0 var(--spacing-8) 0;
    margin-top: auto;
}

.footer-content {
    margin-bottom: var(--spacing-8);
}

.footer-section h3 {
    color: var(--color-white);
    margin-bottom: var(--spacing-4);
    font-size: var(--font-size-lg);
    font-weight: 600;
}

.footer-description {
    margin-bottom: var(--spacing-6);
    line-height: 1.6;
}

.footer-contact .contact-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-3);
}

.footer-contact .contact-item svg {
    color: var(--color-accent);
    margin-top: 2px;
    flex-shrink: 0;
}

.footer-contact .contact-item a {
    color: var(--color-gray-300);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-contact .contact-item a:hover {
    color: var(--color-white);
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section ul li {
    margin-bottom: var(--spacing-2);
}

.footer-section ul li a {
    color: var(--color-gray-400);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-section ul li a:hover {
    color: var(--color-white);
}

.business-hours {
    margin-bottom: var(--spacing-6);
}

.hours-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-2);
    font-size: var(--font-size-sm);
}

.hours-item .day {
    color: var(--color-gray-400);
}

.hours-item .time {
    color: var(--color-white);
    font-weight: 500;
}

.emergency-note {
    padding: var(--spacing-3);
    background-color: var(--color-gray-800);
    border-radius: var(--radius-lg);
    margin-top: var(--spacing-4);
}

.emergency-note a {
    color: var(--color-accent);
    text-decoration: none;
}

.footer-bottom {
    border-top: 1px solid var(--color-gray-800);
    padding-top: var(--spacing-8);
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-4);
}

.copyright {
    color: var(--color-gray-500);
    font-size: var(--font-size-sm);
}

.footer-badges {
    display: flex;
    gap: var(--spacing-6);
    flex-wrap: wrap;
}

.badge-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    font-size: var(--font-size-sm);
    color: var(--color-gray-400);
}

.badge-item svg {
    color: var(--color-accent);
}

/* Mobile Sticky Bar Styles */
.mobile-sticky-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-gray-200);
    padding: var(--spacing-3);
    z-index: 1000;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    display: none;
}

.sticky-bar-actions {
    display: flex;
    gap: var(--spacing-2);
}

.sticky-bar-actions .btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-1);
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: var(--spacing-3) var(--spacing-2);
    min-height: 44px;
    text-decoration: none;
    border-radius: var(--radius-lg);
}

@media (max-width: 768px) {
    .mobile-sticky-bar {
        display: block;
    }
    
    .site-content {
        padding-bottom: 80px;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-badges {
        justify-content: center;
    }
    
    .grid.md\:grid-cols-4 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: var(--spacing-8);
    }
}

@media (min-width: 768px) {
    .grid.md\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

/* Responsive adjustments */
@media (max-width: 480px) {
    .sticky-bar-actions .btn {
        font-size: 0.8rem;
        padding: var(--spacing-2);
    }
    
    .sticky-bar-actions .btn svg {
        width: 14px;
        height: 14px;
    }
}
</style>

</body>
</html>
