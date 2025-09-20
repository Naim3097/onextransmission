<?php
/**
 * Theme Functions and Definitions
 * Pakar Gearbox Shah Alam - Premium Automotive Website
 * 
 * Following Development Rules:
 * 1. Fully SEO Optimised
 * 2. Malay Language
 * 3. Best UI/UX
 * 4. Lucid Aesthetic
 * 5. World Class Standard
 * 6. Desktop & Mobile Optimised
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function pakar_gearbox_setup() {
    // Add theme support for various features
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('responsive-embeds');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Utama', 'pakar-gearbox'),
        'footer' => __('Menu Footer', 'pakar-gearbox'),
    ));
    
    // Add image sizes
    add_image_size('hero-image', 1920, 1080, true);
    add_image_size('service-image', 400, 300, true);
    add_image_size('blog-thumbnail', 350, 220, true);
}
add_action('after_setup_theme', 'pakar_gearbox_setup');

// Enqueue styles and scripts
function pakar_gearbox_scripts() {
    // Main stylesheet
    wp_enqueue_style('pakar-gearbox-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts - Inter for Lucid aesthetic
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', array(), null);
    
    // Main JavaScript
    wp_enqueue_script('pakar-gearbox-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX and WhatsApp integration
    wp_localize_script('pakar-gearbox-main', 'pakar_gearbox_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('pakar_gearbox_nonce'),
        'whatsapp_number' => '+60195183330',
        'phone_number' => '+60351918330',
        'business_name' => 'Pakar Gearbox Shah Alam',
        'address' => 'No 15, Jalan Industri 16/12, Seksyen 16, 40200 Shah Alam, Selangor'
    ));
}
add_action('wp_enqueue_scripts', 'pakar_gearbox_scripts');

// Custom Post Types
function pakar_gearbox_custom_post_types() {
    // Services Post Type
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Perkhidmatan',
            'singular_name' => 'Perkhidmatan',
            'add_new' => 'Tambah Perkhidmatan',
            'add_new_item' => 'Tambah Perkhidmatan Baru',
            'edit_item' => 'Edit Perkhidmatan',
            'new_item' => 'Perkhidmatan Baru',
            'view_item' => 'Lihat Perkhidmatan',
            'search_items' => 'Cari Perkhidmatan',
            'not_found' => 'Tiada perkhidmatan dijumpai',
            'not_found_in_trash' => 'Tiada perkhidmatan di trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'perkhidmatan'),
        'show_in_rest' => true
    ));
    
    // Testimonials Post Type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Testimoni',
            'singular_name' => 'Testimoni',
            'add_new' => 'Tambah Testimoni',
            'add_new_item' => 'Tambah Testimoni Baru',
            'edit_item' => 'Edit Testimoni',
            'new_item' => 'Testimoni Baru',
            'view_item' => 'Lihat Testimoni',
            'search_items' => 'Cari Testimoni',
            'not_found' => 'Tiada testimoni dijumpai',
            'not_found_in_trash' => 'Tiada testimoni di trash'
        ),
        'public' => true,
        'menu_icon' => 'dashicons-format-chat',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'show_in_rest' => true
    ));
}
add_action('init', 'pakar_gearbox_custom_post_types');

// SEO Meta Tags
function pakar_gearbox_meta_tags() {
    if (is_home() || is_front_page()) {
        echo '<meta name="description" content="Pakar Gearbox Shah Alam - Khusus CVT dan automatik. Diagnosis tepat, jaminan kerja. Call +603-5191 8330 atau WhatsApp +6019-518 3330 untuk tempahan.">' . "\n";
        echo '<meta name="keywords" content="pakar gearbox shah alam, gearbox repair shah alam, cvt specialist shah alam, gearbox overhaul shah alam, gearbox service shah alam">' . "\n";
        echo '<meta property="og:title" content="Pakar Gearbox Shah Alam - Diagnosis Tepat, Baiki Sekali Jalan">' . "\n";
        echo '<meta property="og:description" content="Khusus CVT dan automatik. Diagnosis tepat, jaminan kerja, terus WhatsApp bila sedia.">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:url" content="' . home_url() . '">' . "\n";
    }
    
    // Viewport and mobile optimization
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">' . "\n";
    echo '<meta name="theme-color" content="#111111">' . "\n";
    
    // Performance hints
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
    echo '<link rel="dns-prefetch" href="//www.google-analytics.com">' . "\n";
}
add_action('wp_head', 'pakar_gearbox_meta_tags');

// Structured Data JSON-LD
function pakar_gearbox_json_ld() {
    if (is_home() || is_front_page()) {
        $business_data = array(
            '@context' => 'https://schema.org',
            '@type' => 'AutoRepair',
            '@id' => home_url() . '#business',
            'name' => 'Pakar Gearbox Shah Alam',
            'description' => 'Pakar pembaikan gearbox dan CVT di Shah Alam. Diagnosis tepat, jaminan kerja.',
            'url' => home_url(),
            'telephone' => '+60351918330',
            'email' => 'info@pakargearboxshahalam.com',
            'address' => array(
                '@type' => 'PostalAddress',
                'streetAddress' => 'No 15, Jalan Industri 16/12, Seksyen 16',
                'addressLocality' => 'Shah Alam',
                'addressRegion' => 'Selangor',
                'postalCode' => '40200',
                'addressCountry' => 'MY'
            ),
            'geo' => array(
                '@type' => 'GeoCoordinates',
                'latitude' => '3.0738',
                'longitude' => '101.5183'
            ),
            'openingHours' => array(
                'Mo-Fr 09:00-18:00',
                'Sa 09:00-17:00'
            ),
            'priceRange' => '$$',
            'areaServed' => array(
                '@type' => 'City',
                'name' => 'Shah Alam'
            ),
            'serviceType' => array(
                'Pembaikan Gearbox',
                'Overhaul CVT',
                'Diagnosis Gearbox',
                'Servis Gearbox Automatik'
            ),
            'aggregateRating' => array(
                '@type' => 'AggregateRating',
                'ratingValue' => '4.8',
                'reviewCount' => '127'
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($business_data, JSON_UNESCAPED_SLASHES) . '</script>' . "\n";
    }
}
add_action('wp_head', 'pakar_gearbox_json_ld');

// Contact Form Handler
function pakar_gearbox_handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'pakar_gearbox_nonce')) {
        wp_die('Security check failed');
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $phone = sanitize_text_field($_POST['phone']);
    $car_make = sanitize_text_field($_POST['car_make']);
    $car_model = sanitize_text_field($_POST['car_model']);
    $car_year = sanitize_text_field($_POST['car_year']);
    $issue = sanitize_textarea_field($_POST['issue']);
    
    // Validate required fields
    if (empty($name) || empty($phone)) {
        wp_send_json_error('Nama dan nombor telefon adalah wajib.');
    }
    
    // Validate Malaysian phone number
    if (!preg_match('/^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/', $phone)) {
        wp_send_json_error('Sila masukkan nombor telefon Malaysia yang sah.');
    }
    
    // Prepare email
    $to = 'info@pakargearboxshahalam.com';
    $subject = 'Pertanyaan Baru dari Website - ' . $name;
    $message = "Pertanyaan baru dari website:\n\n";
    $message .= "Nama: " . $name . "\n";
    $message .= "Telefon: " . $phone . "\n";
    $message .= "Kereta: " . $car_make . " " . $car_model . " (" . $car_year . ")\n";
    $message .= "Masalah: " . $issue . "\n";
    $message .= "Masa: " . current_time('mysql') . "\n";
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: Website <noreply@pakargearboxshahalam.com>',
        'Reply-To: ' . $name . ' <' . $phone . '@pakargearboxshahalam.com>'
    );
    
    // Send email
    $sent = wp_mail($to, $subject, $message, $headers);
    
    if ($sent) {
        // Generate WhatsApp message
        $whatsapp_message = urlencode("Hi Pakar Gearbox Shah Alam, kereta saya {$car_make} {$car_model} {$car_year}. Isu: {$issue}. Nama saya {$name}.");
        $whatsapp_url = "https://wa.me/60195183330?text={$whatsapp_message}";
        
        wp_send_json_success(array(
            'message' => 'Pertanyaan anda telah dihantar. Kami akan hubungi anda tidak lama lagi.',
            'whatsapp_url' => $whatsapp_url
        ));
    } else {
        wp_send_json_error('Maaf, ada masalah menghantar mesej. Sila cuba lagi.');
    }
}
add_action('wp_ajax_pakar_gearbox_contact', 'pakar_gearbox_handle_contact_form');
add_action('wp_ajax_nopriv_pakar_gearbox_contact', 'pakar_gearbox_handle_contact_form');

// Performance Optimizations
function pakar_gearbox_performance_optimizations() {
    // Remove query strings from static resources
    function remove_query_strings($src) {
        return preg_split("/(&ver|\?ver)/", $src)[0];
    }
    add_filter('script_loader_src', 'remove_query_strings', 15, 1);
    add_filter('style_loader_src', 'remove_query_strings', 15, 1);
    
    // Disable emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Defer non-critical JavaScript
    function defer_non_critical_scripts($tag, $handle, $src) {
        if (is_admin()) return $tag;
        
        $defer_scripts = array('pakar-gearbox-main');
        
        if (in_array($handle, $defer_scripts)) {
            return str_replace('<script ', '<script defer ', $tag);
        }
        
        return $tag;
    }
    add_filter('script_loader_tag', 'defer_non_critical_scripts', 10, 3);
}
add_action('init', 'pakar_gearbox_performance_optimizations');

// Security enhancements
function pakar_gearbox_security() {
    // Hide WordPress version
    function remove_version_info() {
        return '';
    }
    add_filter('the_generator', 'remove_version_info');
    
    // Remove default WordPress login errors
    function no_wordpress_errors() {
        return 'Maklumat login salah!';
    }
    add_filter('login_errors', 'no_wordpress_errors');
}
add_action('init', 'pakar_gearbox_security');

// Custom excerpt length
function pakar_gearbox_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'pakar_gearbox_excerpt_length');

// Custom excerpt more
function pakar_gearbox_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'pakar_gearbox_excerpt_more');

// Add custom body classes for styling
function pakar_gearbox_body_classes($classes) {
    if (is_mobile()) {
        $classes[] = 'is-mobile';
    }
    
    if (is_home() || is_front_page()) {
        $classes[] = 'is-homepage';
    }
    
    return $classes;
}
add_filter('body_class', 'pakar_gearbox_body_classes');

// Custom walker for navigation menu
class Pakar_Gearbox_Walker_Nav_Menu extends Walker_Nav_Menu {
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'nav-item';
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= '<li' . $id . $class_names .'>';
        
        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target     ) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn        ) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url        ) .'"' : '';
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

// Utility function to get config data
function get_pakar_gearbox_config($key = null) {
    static $config = null;
    
    if ($config === null) {
        $config_file = get_template_directory() . '/../../shah-alam-config.json';
        if (file_exists($config_file)) {
            $config = json_decode(file_get_contents($config_file), true);
        } else {
            // Fallback config
            $config = array(
                'business_name' => 'Pakar Gearbox Shah Alam',
                'phone' => '+60351918330',
                'whatsapp' => '+60195183330',
                'city' => 'Shah Alam',
                'address' => 'No 15, Jalan Industri 16/12, Seksyen 16, 40200 Shah Alam, Selangor'
            );
        }
    }
    
    return $key ? ($config[$key] ?? '') : $config;
}

// Enqueue critical CSS inline
function pakar_gearbox_critical_css() {
    if (is_home() || is_front_page()) {
        echo '<style id="critical-css">';
        echo 'body{font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;margin:0;color:#111827;background:#fff}';
        echo '.site-header{background:rgba(255,255,255,.95);border-bottom:1px solid #e5e7eb;position:fixed;top:0;left:0;right:0;z-index:1000}';
        echo '.hero{background:linear-gradient(135deg,#f9fafb 0%,#fff 100%);padding:6rem 0;position:relative}';
        echo '.container{max-width:1280px;margin:0 auto;padding:0 1rem}';
        echo '@media(min-width:640px){.container{padding:0 1.5rem}}';
        echo '</style>';
    }
}
add_action('wp_head', 'pakar_gearbox_critical_css', 1);

// Register widgets
function pakar_gearbox_widgets_init() {
    register_sidebar(array(
        'name'          => 'Footer Widget Area',
        'id'            => 'footer-widgets',
        'description'   => 'Widget area in footer',
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'pakar_gearbox_widgets_init');

?>
