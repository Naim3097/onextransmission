<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <meta name="theme-color" content="#111111">
    
    <!-- Preload critical resources -->
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/assets/images/hero-bg.webp" as="image">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container">
        <nav class="navbar">
            <!-- Logo -->
            <div class="logo">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                    <span class="logo-text">Pakar Gearbox</span>
                    <span class="logo-location">Shah Alam</span>
                </a>
            </div>
            
            <!-- Desktop Navigation -->
            <div class="nav-desktop">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                    'walker'         => new Pakar_Gearbox_Walker_Nav_Menu(),
                    'fallback_cb'    => function() {
                        echo '<ul class="nav-menu">';
                        echo '<li class="nav-item"><a href="' . home_url('/') . '">Utama</a></li>';
                        echo '<li class="nav-item"><a href="' . home_url('/perkhidmatan') . '">Perkhidmatan</a></li>';
                        echo '<li class="nav-item"><a href="' . home_url('/blog') . '">Blog</a></li>';
                        echo '<li class="nav-item"><a href="' . home_url('/hubungi-kami') . '">Hubungi Kami</a></li>';
                        echo '</ul>';
                    }
                ));
                ?>
            </div>
            
            <!-- Header CTA -->
            <div class="header-cta">
                <a href="tel:<?php echo esc_attr(get_pakar_gearbox_config('phone')); ?>" 
                   class="btn btn-primary btn-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Call Sekarang
                </a>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </nav>
    </div>
</header>

<!-- Mobile Navigation Overlay -->
<div class="mobile-nav-overlay" id="mobile-nav-overlay">
    <div class="mobile-nav-content">
        <div class="mobile-nav-header">
            <div class="mobile-logo">Pakar Gearbox Shah Alam</div>
            <button class="mobile-nav-close" id="mobile-nav-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
            </button>
        </div>
        
        <nav class="mobile-nav-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class'     => 'mobile-nav-list',
                'container'      => false,
                'fallback_cb'    => function() {
                    echo '<ul class="mobile-nav-list">';
                    echo '<li><a href="' . home_url('/') . '">Utama</a></li>';
                    echo '<li><a href="' . home_url('/perkhidmatan') . '">Perkhidmatan</a></li>';
                    echo '<li><a href="' . home_url('/blog') . '">Blog</a></li>';
                    echo '<li><a href="' . home_url('/hubungi-kami') . '">Hubungi Kami</a></li>';
                    echo '</ul>';
                }
            ));
            ?>
        </nav>
        
        <div class="mobile-nav-cta">
            <div class="mobile-nav-contact">
                <div class="contact-info">
                    <div class="contact-item">
                        <strong><?php echo esc_html(get_pakar_gearbox_config('business_name')); ?></strong>
                    </div>
                    <div class="contact-item">
                        <small><?php echo esc_html(get_pakar_gearbox_config('address')); ?></small>
                    </div>
                </div>
                
                <div class="mobile-cta-buttons">
                    <a href="tel:<?php echo esc_attr(get_pakar_gearbox_config('phone')); ?>" 
                       class="btn btn-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        Call Sekarang
                    </a>
                    
                    <a href="https://wa.me/<?php echo str_replace(['+', '-', ' '], '', get_pakar_gearbox_config('whatsapp')); ?>?text=Hi%20Pakar%20Gearbox%20Shah%20Alam,%20saya%20nak%20tanya%20tentang%20perkhidmatan%20gearbox." 
                       class="btn btn-secondary"
                       target="_blank"
                       rel="noopener">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<main class="site-content" id="site-content">

<style>
/* Header Additional Styles */
.site-header {
    transition: all 0.3s ease;
}

.site-header.scrolled {
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    min-height: 72px;
}

.logo {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--color-black);
}

.logo-text {
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1;
}

.logo-location {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-gray-600);
    line-height: 1;
}

.nav-desktop {
    display: flex;
    align-items: center;
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.nav-item a {
    color: var(--color-gray-700);
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    transition: color 0.2s ease;
    position: relative;
}

.nav-item a:hover,
.nav-item a.active {
    color: var(--color-black);
}

.nav-item a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width 0.2s ease;
}

.nav-item a:hover::after,
.nav-item a.active::after {
    width: 100%;
}

.header-cta {
    display: flex;
    align-items: center;
}

.btn-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
}

.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
}

.hamburger {
    display: flex;
    flex-direction: column;
    width: 24px;
    height: 18px;
    justify-content: space-between;
}

.hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--color-black);
    transition: all 0.3s ease;
    transform-origin: center;
}

.nav-toggle.active .hamburger span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.nav-toggle.active .hamburger span:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active .hamburger span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation */
.mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-nav-overlay.active {
    opacity: 1;
    visibility: visible;
}

.mobile-nav-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 320px;
    max-width: 90vw;
    height: 100vh;
    background-color: var(--color-white);
    padding: 1.5rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
}

.mobile-nav-overlay.active .mobile-nav-content {
    transform: translateX(0);
}

.mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-gray-200);
}

.mobile-logo {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-black);
}

.mobile-nav-close {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-gray-600);
    padding: 0.25rem;
    border-radius: 0.25rem;
}

.mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mobile-nav-list li {
    margin-bottom: 0.5rem;
}

.mobile-nav-list a {
    display: block;
    padding: 1rem 0;
    color: var(--color-gray-700);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.2s ease;
    border-bottom: 1px solid var(--color-gray-100);
}

.mobile-nav-list a:hover {
    color: var(--color-black);
}

.mobile-nav-cta {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-gray-200);
}

.contact-info {
    margin-bottom: 1.5rem;
}

.contact-item {
    margin-bottom: 0.5rem;
}

.mobile-cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.mobile-cta-buttons .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.2s ease;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .nav-desktop {
        display: none;
    }
    
    .header-cta {
        display: none;
    }
    
    .nav-toggle {
        display: block;
    }
    
    .navbar {
        padding: 1rem 0;
    }
}

@media (min-width: 769px) {
    .mobile-nav-overlay {
        display: none !important;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    
    function openMobileNav() {
        mobileNavOverlay.classList.add('active');
        navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileNav() {
        mobileNavOverlay.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (navToggle) {
        navToggle.addEventListener('click', openMobileNav);
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }
    
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === mobileNavOverlay) {
                closeMobileNav();
            }
        });
    }
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.getElementById('site-header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Close mobile nav on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });
});
</script>
