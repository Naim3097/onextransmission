# Blog Page Redesign & SEO Optimization Plan
**Project:** One X Transmission - Blog Enhancement
**Date:** November 5, 2025
**Status:** Planning Phase

---

## 🎯 Project Objectives

1. Align blog design with existing site aesthetic
2. Implement SEO-optimized category structure
3. Fix broken layouts and improve readability
4. Ensure full mobile responsiveness
5. Maximize SEO potential for search rankings

---

## 📊 Current Issues Identified

### Main Blog Page (`/blog/page.tsx`)
- ❌ Design not aligned with other pages (color scheme, spacing, typography)
- ❌ Category structure not SEO-optimized
- ❌ Mobile responsiveness needs improvement
- ❌ Card design inconsistent with site style

### Individual Blog Post Page (`/blog/[slug]/page.tsx`)
- ❌ Design not aligned with site aesthetic
- ❌ Body text not properly formatted (poor spacing, structure)
- ❌ "Artikel Berkaitan" sidebar is broken/misplaced
- ❌ Content readability issues
- ❌ Missing SEO elements

---

## 🏗️ New Blog Category Structure (SEO-Optimized)

### Current Categories (To Be Replaced)
- Tips & Panduan
- Penyelenggaraan
- Spare Parts
- Kos & Budget

### New Categories (SEO-Optimized)
1. **Panduan & Tips** (Guides & Tips)
   - Target: Educational content, how-to guides
   - Keywords: "cara", "panduan", "tips", "langkah"

2. **Masalah Gearbox** (Gearbox Problems)
   - Target: Problem identification, troubleshooting
   - Keywords: "masalah", "kerosakan", "simptom", "tanda"

3. **Penyelenggaraan** (Maintenance)
   - Target: Regular maintenance, preventive care
   - Keywords: "servis", "penyelenggaraan", "penjagaan"

4. **Kos & Harga** (Cost & Pricing)
   - Target: Pricing guides, cost breakdowns
   - Keywords: "kos", "harga", "budget", "berapa"

5. **Jenama Kereta** (Car Brands)
   - Target: Brand-specific content
   - Keywords: "Perodua", "Proton", "Honda", "Toyota", "Nissan"

6. **Profil Kami** (Our Profile)
   - Target: Company updates, case studies, testimonials
   - Keywords: "bengkel", "pakar", "pengalaman", "kejayaan"

---

## 📝 Sample Blog Posts to Create (6 Posts - One Per Category)

### 1. Panduan & Tips
**Title:** "5 Langkah Mudah Menjaga Gearbox CVT Anda"
**Slug:** `5-langkah-mudah-jaga-gearbox-cvt`
**Excerpt:** "Panduan lengkap untuk pemilik kereta dengan gearbox CVT. Ikuti 5 langkah mudah ini untuk memastikan gearbox anda tahan lama."
**Keywords:** panduan CVT, tips gearbox, cara jaga CVT

### 2. Masalah Gearbox
**Title:** "7 Tanda Gearbox Automatik Anda Bermasalah"
**Slug:** `7-tanda-gearbox-automatik-bermasalah`
**Excerpt:** "Kenali tanda-tanda awal masalah gearbox automatik sebelum terlambat. Jimat ribuan ringgit dengan diagnosis awal."
**Keywords:** masalah gearbox, tanda gearbox rosak, simptom gearbox

### 3. Penyelenggaraan
**Title:** "Jadual Servis Gearbox: Bila Masa Yang Sesuai?"
**Slug:** `jadual-servis-gearbox-masa-sesuai`
**Excerpt:** "Ketahui jadual servis yang betul untuk gearbox anda. Penyelenggaraan berkala dapat mengelakkan masalah besar."
**Keywords:** servis gearbox, jadual maintenance, penyelenggaraan CVT

### 4. Kos & Harga
**Title:** "Panduan Lengkap Kos Repair Gearbox di Malaysia 2024"
**Slug:** `panduan-kos-repair-gearbox-malaysia`
**Excerpt:** "Berapa kos sebenar untuk repair atau overhaul gearbox? Panduan lengkap dengan breakdown harga untuk semua jenama kereta."
**Keywords:** harga repair gearbox, kos overhaul, budget gearbox

### 5. Jenama Kereta
**Title:** "Masalah Biasa Gearbox CVT Perodua: Myvi, Axia & Bezza"
**Slug:** `masalah-gearbox-cvt-perodua`
**Excerpt:** "Panduan khas untuk pemilik Perodua. Ketahui masalah biasa gearbox CVT dan cara mengatasinya."
**Keywords:** gearbox Perodua, CVT Myvi, masalah Axia

### 6. Profil Kami
**Title:** "Kisah Kejayaan: 15 Tahun Pakar Gearbox di Shah Alam"
**Slug:** `15-tahun-pakar-gearbox-shah-alam`
**Excerpt:** "Perjalanan One X Transmission sebagai bengkel pakar gearbox terpercaya di Shah Alam. Lebih 5000 pelanggan berpuas hati."
**Keywords:** bengkel gearbox Shah Alam, pakar CVT, One X Transmission

---

## 🎨 Design Improvements

### Main Blog Page Design Elements

#### Hero Section
```
- Match gradient style from homepage
- Use consistent red-900/20 gradient
- Proper heading hierarchy (H1)
- Centered layout with max-w-7xl
- Animation: fadeInUp pattern
```

#### Category Filter Section
```
- Sticky position on scroll (optional)
- Pills/rounded button style
- Active state: bg-red-600
- Inactive state: bg-gray-900 with hover effect
- Smooth transitions
```

#### Blog Cards Grid
```
- Consistent card design with other pages
- Image aspect ratio: 16:9
- Border: border-gray-800
- Hover effect: border-red-500/50, translateY(-4px)
- Category badge: top-left corner
- Proper spacing: gap-8
- Grid: md:grid-cols-2 lg:grid-cols-3
```

#### Card Content Structure
```
1. Image (h-48)
2. Category badge (absolute position)
3. Meta info (date, read time) - text-gray-400
4. Title (text-xl, font-bold, line-clamp-2)
5. Excerpt (text-gray-300, line-clamp-3)
6. Footer (author + CTA link)
```

### Individual Blog Post Page Design Elements

#### Article Hero
```
- Breadcrumbs navigation
- Category badge
- H1 title (text-4xl md:text-5xl)
- Meta info (author, date, read time)
- Tags display
```

#### Content Layout
```
- Two column: Main content (lg:col-span-2) + Sidebar (lg:col-span-1)
- Max width: max-w-4xl
- Background: bg-black
```

#### Article Content Formatting
```
Prose classes for proper typography:
- prose-invert prose-red
- H2: text-2xl, text-red-400, border-bottom
- H3: text-xl, text-red-300
- Paragraphs: text-gray-300, leading-relaxed, mb-4
- Lists: proper spacing, red markers
- Tables: styled with borders
- Blockquotes: left border, italic
- Code blocks: bg-gray-900
- Proper line-height: leading-[1.8]
- Font size: text-base (16px)
- Paragraph spacing: mb-6
```

#### Sidebar (Fixed Issues)
```
- Sticky position: sticky top-8
- Proper width constraint
- Background: bg-gray-900
- Border: border-gray-800
- Rounded: rounded-2xl
- Padding: p-6

Sections:
1. Table of Contents (NEW)
2. Related Articles (Fixed layout)
3. Contact Widget
```

#### Related Articles Section (FIX)
```
Current Issue: Broken layout
Solution:
- Display as vertical list
- Each article: flex layout
- Image: w-20 h-20 (fixed size)
- Content: flex-1
- Proper spacing between items
- Hover state: bg-gray-800
```

---

## 🔍 SEO Enhancements to Implement

### Meta Tags (Add to both pages)
```typescript
export const metadata = {
  title: "Blog Pakar Gearbox - Tips & Panduan | One X Transmission",
  description: "Artikel lengkap tentang gearbox CVT dan automatik. Tips penyelenggaraan, panduan masalah, dan maklumat harga dari pakar gearbox Shah Alam.",
  keywords: "blog gearbox, tips CVT, panduan gearbox, pakar gearbox Shah Alam",
  openGraph: {
    title: "Blog Pakar Gearbox - One X Transmission",
    description: "Tips dan panduan lengkap tentang gearbox dari pakar",
    images: ['/og-blog-image.jpg'],
  }
}
```

### Schema Markup (Article structured data)
```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "image": post.image,
  "datePublished": post.publishDate,
  "dateModified": post.modifiedDate,
  "author": {
    "@type": "Organization",
    "name": "One X Transmission"
  },
  "publisher": {
    "@type": "Organization",
    "name": "One X Transmission",
    "logo": {
      "@type": "ImageObject",
      "url": "/one-x-transmission-logo.png"
    }
  },
  "description": post.excerpt
}
```

### Breadcrumb Schema
```typescript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://onextransmission.com"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://onextransmission.com/blog"},
    {"@type": "ListItem", "position": 3, "name": post.title}
  ]
}
```

### Image Optimization
```
- All images need alt text
- Use next/image for optimization
- Lazy loading enabled
- Proper aspect ratios
- WebP format support
```

### Internal Linking Strategy
```
Link to:
- Service pages (/khidmat)
- Contact page (/hubungi)
- Related blog posts
- Homepage for brand terms
```

### URL Structure
```
- Keep clean: /blog/[slug]
- No date in URL (flexibility)
- Slugs in Malay (target audience)
- Lowercase, hyphen-separated
```

---

## 📱 Mobile Optimization Checklist

### Responsive Breakpoints
```
- sm: 640px (mobile landscape)
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)
```

### Main Blog Page Mobile
```
✓ Hero text: responsive font sizes (text-3xl md:text-5xl)
✓ Category filter: horizontal scroll on mobile
✓ Grid: 1 column on mobile, 2 on tablet, 3 on desktop
✓ Cards: full width on mobile with proper padding
✓ Images: responsive with proper aspect ratio
✓ Touch targets: minimum 44x44px
```

### Blog Post Page Mobile
```
✓ Single column layout on mobile
✓ Sidebar moves below content on mobile
✓ Font sizes scale appropriately
✓ Tables: horizontal scroll
✓ Images: full width, responsive
✓ Share buttons: stack vertically or scroll
✓ Proper padding: px-4 on mobile
```

### Typography Mobile Scale
```
H1: text-3xl md:text-5xl (30px → 48px)
H2: text-2xl md:text-3xl (24px → 30px)
H3: text-xl md:text-2xl (20px → 24px)
Body: text-base (16px)
Small: text-sm (14px)
```

---

## 🛠️ Implementation Steps

### Phase 1: Main Blog Page (page.tsx)
1. ✅ Update blog categories array
2. ✅ Replace all 4 sample posts with 6 new category-specific posts
3. ✅ Redesign hero section to match site style
4. ✅ Update category filter with new categories
5. ✅ Redesign blog cards with consistent styling
6. ✅ Improve mobile responsiveness
7. ✅ Add meta tags
8. ✅ Test all breakpoints

### Phase 2: Individual Blog Post Page ([slug]/page.tsx)
1. ✅ Update blogPosts data array with 6 new posts
2. ✅ Redesign article hero section
3. ✅ Fix content formatting (prose classes)
4. ✅ Fix broken "Artikel Berkaitan" sidebar
5. ✅ Add Table of Contents component
6. ✅ Improve content readability (spacing, typography)
7. ✅ Add schema markup
8. ✅ Optimize for mobile
9. ✅ Add social share functionality
10. ✅ Test all blog posts

### Phase 3: Content Creation
1. ✅ Write detailed content for all 6 blog posts
2. ✅ Include proper H2, H3 headings
3. ✅ Add lists, tables where appropriate
4. ✅ Ensure keyword optimization
5. ✅ Write compelling excerpts
6. ✅ Create engaging titles

### Phase 4: Testing & QA
1. ✅ Test on mobile devices
2. ✅ Test on tablets
3. ✅ Test on desktop (various sizes)
4. ✅ Test category filtering
5. ✅ Test all links
6. ✅ Test navigation between posts
7. ✅ Validate HTML
8. ✅ Check SEO with tools
9. ✅ Test load times
10. ✅ Cross-browser testing

---

## 📋 Files to Modify

1. **`src/app/blog/page.tsx`** - Main blog listing page
2. **`src/app/blog/[slug]/page.tsx`** - Individual blog post page
3. **`src/components/Header.tsx`** - Uncomment blog link (optional)

---

## 🎯 Success Metrics

### Design Alignment
- ✓ Visual consistency with homepage and other pages
- ✓ Matching color scheme (black, red-500, red-900)
- ✓ Consistent typography and spacing
- ✓ Unified navigation experience

### SEO Optimization
- ✓ Proper meta tags on all pages
- ✓ Schema markup implemented
- ✓ Clean URL structure
- ✓ Internal linking strategy
- ✓ Mobile-friendly (Google test)
- ✓ Fast load times (<3s)

### User Experience
- ✓ Easy to read content
- ✓ Clear navigation
- ✓ Working category filters
- ✓ Related articles showing correctly
- ✓ Smooth mobile experience
- ✓ Clear CTAs

### Technical Quality
- ✓ No broken layouts
- ✓ No console errors
- ✓ Responsive at all breakpoints
- ✓ Accessible (WCAG AA)
- ✓ Optimized images

---

## 📝 Additional Features to Consider

### Future Enhancements (Post-Launch)
- [ ] Search functionality
- [ ] Author pages
- [ ] Comments system
- [ ] Newsletter signup
- [ ] Popular posts widget
- [ ] Social media integration
- [ ] Reading progress bar
- [ ] Print-friendly version
- [ ] Dark/Light mode toggle
- [ ] Bookmark functionality
- [ ] Related products/services
- [ ] FAQ schema for Q&A posts

---

## 🚀 Ready to Implement

All planning is complete. Ready to execute the redesign with:
- 6 SEO-optimized categories
- 6 detailed sample blog posts
- Complete design overhaul
- Fixed layouts and formatting
- Full mobile optimization
- Comprehensive SEO implementation

**Estimated Time:** 2-3 hours for full implementation
**Priority:** High (SEO and brand consistency)
**Impact:** High (improved rankings and user engagement)

---

## 📞 Notes

- Keep brand voice consistent (professional, helpful, local)
- Use Malay language throughout
- Target local Shah Alam audience
- Focus on trust-building content
- Emphasize expertise and experience
- Include clear CTAs to WhatsApp/Call
- Make it easy to contact for quotes

---

**Last Updated:** November 5, 2025
**Status:** ✅ Planning Complete - Ready to Implement
