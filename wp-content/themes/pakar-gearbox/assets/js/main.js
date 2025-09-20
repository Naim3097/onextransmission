/**
 * Main JavaScript for Pakar Gearbox Shah Alam
 * Handles mobile interactions, WhatsApp integration, and performance optimizations
 * Following Development Rules for world-class UX and mobile optimization
 */

(function() {
    'use strict';
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeMobileNavigation();
        initializeScrollEffects();
        initializeWhatsAppIntegration();
        initializeFormEnhancements();
        initializePerformanceOptimizations();
        initializeSEOEnhancements();
    });
    
    /**
     * Mobile Navigation
     */
    function initializeMobileNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
        const mobileNavClose = document.getElementById('mobile-nav-close');
        const body = document.body;
        
        if (!navToggle || !mobileNavOverlay) return;
        
        function openMobileNav() {
            mobileNavOverlay.classList.add('active');
            navToggle.classList.add('active');
            body.style.overflow = 'hidden';
            
            // Track mobile nav open
            if (typeof gtag !== 'undefined') {
                gtag('event', 'mobile_nav_open', {
                    'branch': 'Shah Alam'
                });
            }
        }
        
        function closeMobileNav() {
            mobileNavOverlay.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
        
        // Toggle mobile navigation
        navToggle.addEventListener('click', openMobileNav);
        
        if (mobileNavClose) {
            mobileNavClose.addEventListener('click', closeMobileNav);
        }
        
        // Close on overlay click
        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === mobileNavOverlay) {
                closeMobileNav();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
                closeMobileNav();
            }
        });
        
        // Close mobile nav when clicking on nav links
        const mobileNavLinks = mobileNavOverlay.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Small delay to allow navigation to start
                setTimeout(closeMobileNav, 100);
            });
        });
    }
    
    /**
     * Scroll Effects
     */
    function initializeScrollEffects() {
        const header = document.getElementById('site-header');
        const mobileSticky = document.getElementById('mobile-sticky-bar');
        let lastScroll = 0;
        let ticking = false;
        
        function updateScrollEffects() {
            const currentScroll = window.pageYOffset;
            const scrollDirection = currentScroll > lastScroll ? 'down' : 'up';
            
            // Header background effect
            if (currentScroll > 50) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
            
            // Hide/show mobile sticky bar on scroll down/up
            if (window.innerWidth <= 768 && mobileSticky) {
                if (scrollDirection === 'down' && currentScroll > 200) {
                    mobileSticky.style.transform = 'translateY(100%)';
                } else if (scrollDirection === 'up') {
                    mobileSticky.style.transform = 'translateY(0)';
                }
            }
            
            // Animate elements on scroll (intersection observer alternative for better performance)
            const animatedElements = document.querySelectorAll('.fade-in-up:not(.animated)');
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animated');
                }
            });
            
            lastScroll = currentScroll;
            ticking = false;
        }
        
        function requestScrollUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestScrollUpdate);
        
        // Initial call
        updateScrollEffects();
    }
    
    /**
     * WhatsApp Integration
     */
    function initializeWhatsAppIntegration() {
        // Enhanced WhatsApp link generation
        function generateWhatsAppLink(customMessage = '') {
            const config = window.pakar_gearbox_ajax || {};
            const whatsappNumber = config.whatsapp_number || '+60195183330';
            const businessName = config.business_name || 'Pakar Gearbox Shah Alam';
            
            const defaultMessage = customMessage || 
                `Hi ${businessName}, saya nak tanya tentang perkhidmatan gearbox.`;
            
            const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');
            const encodedMessage = encodeURIComponent(defaultMessage);
            
            return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
        }
        
        // Update existing WhatsApp links
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        whatsappLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Track WhatsApp clicks
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'whatsapp_click', {
                        'branch': 'Shah Alam',
                        'source': this.closest('section')?.className || 'unknown'
                    });
                }
            });
        });
        
        // Create floating WhatsApp button (optional enhancement)
        createFloatingWhatsAppButton();
    }
    
    /**
     * Create Floating WhatsApp Button
     */
    function createFloatingWhatsAppButton() {
        // Only show on desktop, mobile has sticky bar
        if (window.innerWidth <= 768) return;
        
        const floatingBtn = document.createElement('div');
        floatingBtn.className = 'floating-whatsapp';
        floatingBtn.innerHTML = `
            <a href="${generateWhatsAppLink()}" 
               target="_blank" 
               rel="noopener"
               title="Chat WhatsApp"
               onclick="gtag('event', 'floating_whatsapp_click', {'branch': 'Shah Alam'});">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            </a>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .floating-whatsapp {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                display: none;
            }
            
            .floating-whatsapp a {
                display: flex;
                width: 60px;
                height: 60px;
                background-color: #25d366;
                color: white;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                transition: all 0.3s ease;
                animation: pulse 2s infinite;
            }
            
            .floating-whatsapp a:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
            }
            
            @keyframes pulse {
                0% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
                50% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1); }
                100% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
            }
            
            @media (min-width: 769px) {
                .floating-whatsapp {
                    display: block;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(floatingBtn);
    }
    
    /**
     * Generate WhatsApp Link
     */
    function generateWhatsAppLink(customMessage = '') {
        const config = window.pakar_gearbox_ajax || {};
        const whatsappNumber = config.whatsapp_number || '+60195183330';
        const businessName = config.business_name || 'Pakar Gearbox Shah Alam';
        
        const defaultMessage = customMessage || 
            `Hi ${businessName}, saya nak tanya tentang perkhidmatan gearbox.`;
        
        const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');
        const encodedMessage = encodeURIComponent(defaultMessage);
        
        return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    }
    
    /**
     * Form Enhancements
     */
    function initializeFormEnhancements() {
        // Phone number formatting for Malaysian numbers
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                // Format Malaysian phone numbers
                if (value.startsWith('60')) {
                    value = '+' + value;
                } else if (value.startsWith('01')) {
                    // Format as 01X-XXX XXXX
                    if (value.length > 3) {
                        value = value.slice(0, 3) + '-' + value.slice(3);
                    }
                    if (value.length > 7) {
                        value = value.slice(0, 7) + ' ' + value.slice(7);
                    }
                }
                
                e.target.value = value.slice(0, 14); // Limit length
            });
        });
        
        // Form validation enhancement
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const phoneInput = form.querySelector('input[type="tel"]');
                if (phoneInput) {
                    const phoneValue = phoneInput.value.replace(/\D/g, '');
                    
                    // Basic Malaysian phone validation
                    if (phoneValue && !phoneValue.match(/^(601[0-46-9]\d{7,8}|01[0-46-9]\d{7,8})$/)) {
                        e.preventDefault();
                        alert('Sila masukkan nombor telefon Malaysia yang sah (cth: 012-345 6789)');
                        phoneInput.focus();
                        return false;
                    }
                }
            });
        });
        
        // Auto-resize textareas
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        });
    }
    
    /**
     * Performance Optimizations
     */
    function initializePerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
        
        // Preload important pages on hover
        const importantLinks = document.querySelectorAll('a[href*="/perkhidmatan"], a[href*="/hubungi-kami"]');
        importantLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const linkElement = document.createElement('link');
                linkElement.rel = 'prefetch';
                linkElement.href = this.href;
                document.head.appendChild(linkElement);
            }, { once: true });
        });
        
        // Optimize images on load
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    }
    
    /**
     * SEO and Analytics Enhancements
     */
    function initializeSEOEnhancements() {
        // Track scroll depth for SEO insights
        let maxScroll = 0;
        let scrollDepthTracked = [];
        
        function trackScrollDepth() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            maxScroll = Math.max(maxScroll, scrollPercent);
            
            // Track 25%, 50%, 75%, 100% scroll depths
            [25, 50, 75, 90].forEach(depth => {
                if (scrollPercent >= depth && !scrollDepthTracked.includes(depth)) {
                    scrollDepthTracked.push(depth);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth', {
                            'percent_scrolled': depth,
                            'page_location': window.location.href
                        });
                    }
                }
            });
        }
        
        let scrollTicking = false;
        window.addEventListener('scroll', function() {
            if (!scrollTicking) {
                requestAnimationFrame(function() {
                    trackScrollDepth();
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        });
        
        // Track time on page for engagement metrics
        let startTime = Date.now();
        let engagementTracked = false;
        
        window.addEventListener('beforeunload', function() {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            if (timeOnPage > 30 && !engagementTracked && typeof gtag !== 'undefined') {
                gtag('event', 'engagement_time', {
                    'time_on_page': timeOnPage,
                    'max_scroll_percent': maxScroll
                });
                engagementTracked = true;
            }
        });
    }
    
    /**
     * Smooth scroll for anchor links
     */
    function initializeSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.getElementById('site-header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Initialize smooth scroll
    initializeSmoothScroll();
    
    // Utility functions for global access
    window.PakarGearbox = {
        generateWhatsAppLink: generateWhatsAppLink,
        trackEvent: function(eventName, parameters) {
            if (typeof gtag !== 'undefined') {
                gtag('event', eventName, parameters);
            }
        }
    };
    
})();
