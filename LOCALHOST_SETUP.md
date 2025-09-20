# Pakar Gearbox Shah Alam - Local Development Setup

## Prerequisites
- XAMPP, WAMP, or MAMP installed on your system
- Web browser (Chrome, Firefox, Safari, Edge)

## Setup Instructions

### Step 1: Start Local Server
1. **Start XAMPP/WAMP/MAMP**
2. **Start Apache and MySQL services**

### Step 2: Install WordPress
1. Download WordPress from https://wordpress.org/download/
2. Extract to your web server directory:
   - XAMPP: `C:\xampp\htdocs\pakar-gearbox`
   - WAMP: `C:\wamp64\www\pakar-gearbox`
   - MAMP: `/Applications/MAMP/htdocs/pakar-gearbox`

### Step 3: Database Setup
1. Open phpMyAdmin (usually http://localhost/phpmyadmin)
2. Create new database named: `pakar_gearbox_db`
3. Create user (optional) or use root

### Step 4: WordPress Installation
1. Navigate to: http://localhost/pakar-gearbox
2. Follow WordPress installation wizard:
   - Database Name: `pakar_gearbox_db`
   - Username: `root` (or your MySQL username)
   - Password: (leave blank for XAMPP, or your MySQL password)
   - Database Host: `localhost`
   - Table Prefix: `wp_`

3. Complete the installation with:
   - Site Title: **Pakar Gearbox Shah Alam**
   - Username: `admin`
   - Password: Choose a strong password
   - Email: Your email address

### Step 5: Install Theme
1. Copy the entire `pakar-gearbox` theme folder from:
   `pakar-gearbox-shah-alam\wp-content\themes\pakar-gearbox`
   
   To your WordPress installation:
   `[your-web-directory]\pakar-gearbox\wp-content\themes\pakar-gearbox`

2. Login to WordPress Admin: http://localhost/pakar-gearbox/wp-admin
3. Go to **Appearance > Themes**
4. Activate **Pakar Gearbox Shah Alam** theme

### Step 6: Copy Configuration
1. Copy `shah-alam-config.json` to the root of your WordPress installation
2. The theme will automatically read this configuration

### Step 7: Setup Navigation Menu
1. Go to **Appearance > Menus**
2. Create a new menu called "Main Menu"
3. Add pages/links:
   - Utama (Home)
   - Perkhidmatan (Services)  
   - Blog
   - Hubungi Kami (Contact)
4. Assign to "Menu Utama" location

### Step 8: Create Pages
Create these pages in **Pages > Add New**:

#### Home Page
- Title: `Utama`
- Set as Homepage in **Settings > Reading**

#### Services Page
- Title: `Perkhidmatan`
- Slug: `perkhidmatan`

#### Contact Page  
- Title: `Hubungi Kami`
- Slug: `hubungi-kami`

#### Blog Page
- Title: `Blog`
- Set as Posts page in **Settings > Reading**

## Quick Start Command (Windows)

If you have XAMPP installed, you can run these commands in PowerShell:

```powershell
# Navigate to XAMPP htdocs
cd C:\xampp\htdocs

# Create project directory
mkdir pakar-gearbox
cd pakar-gearbox

# Download and extract WordPress (manual step required)
# Then copy our theme files
```

## Access Your Website

After setup, visit:
- **Frontend**: http://localhost/pakar-gearbox
- **Admin**: http://localhost/pakar-gearbox/wp-admin

## Troubleshooting

### Common Issues:

1. **"Database connection error"**
   - Check if MySQL is running
   - Verify database credentials in wp-config.php

2. **"Theme not showing"**
   - Ensure theme files are in correct directory
   - Check file permissions

3. **"White screen"**
   - Enable WordPress debugging in wp-config.php:
   ```php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   ```

4. **Mobile view not working**
   - Clear browser cache
   - Check if all CSS/JS files are loaded

### Performance Tips:
- Enable WordPress caching
- Optimize images  
- Use local development domain (optional)

## File Structure Should Look Like:
```
pakar-gearbox/
├── wp-admin/
├── wp-content/
│   └── themes/
│       └── pakar-gearbox/
│           ├── style.css
│           ├── functions.php
│           ├── header.php
│           ├── footer.php
│           ├── index.php
│           └── assets/
│               └── js/
│                   └── main.js
├── wp-includes/
├── shah-alam-config.json
├── wp-config.php
└── index.php
```

## Next Steps After Setup:
1. Test mobile responsiveness
2. Check all contact forms work
3. Test WhatsApp integration  
4. Verify phone number links work
5. Test contact form submissions
6. Check Google Analytics integration (update GA ID)

Your website should now be running perfectly on localhost with all the premium features and Lucid aesthetic design!
