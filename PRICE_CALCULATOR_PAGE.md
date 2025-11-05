# Kalkulator Harga Gearbox - Implementation Guide

## 📋 Overview
Create an interactive price calculator page that helps users estimate gearbox repair costs for their specific car model. This page will provide value while naturally linking to hargarepairgearbox.com for detailed pricing.

---

## 🎯 Page Details

### URL Structure
- **Route:** `/kalkulator-harga` or `/semak-harga`
- **File Location:** `src/app/kalkulator-harga/page.tsx`
- **Navigation:** Add to main header navigation

### SEO Metadata
```typescript
title: 'Kalkulator Harga Repair Gearbox | Semak Kos Gearbox Malaysia'
description: 'Kalkulator harga gearbox untuk semua jenama kereta di Malaysia. Dapatkan anggaran kos repair, overhaul, dan servis gearbox CVT & automatik secara percuma.'
keywords: 'kalkulator harga gearbox, semak harga repair gearbox, kos gearbox malaysia, harga overhaul gearbox, calculator harga cvt'
```

---

## 🎨 Design & Layout Structure

### Section 1: Hero Section
**Background:** Same gradient as other pages `bg-gradient-to-br from-red-900/20 via-black to-black`

**Content:**
```
H1: Kalkulator Harga Gearbox
Subtitle: Semak anggaran kos repair gearbox untuk kereta anda dalam beberapa saat
Icons: Calculator, DollarSign, TrendingDown (from lucide-react)
```

**Hero Features (3 cards):**
1. **Percuma & Pantas** 
   - Icon: Zap
   - Text: "Dapatkan anggaran harga dalam 30 saat"

2. **200+ Model Kereta**
   - Icon: Car
   - Text: "Semua jenama popular di Malaysia"

3. **Harga Transparent**
   - Icon: Shield
   - Text: "Tiada caj tersembunyi"

---

### Section 2: Calculator Form (Main Section)

**Container:** 
- Max width: `max-w-4xl mx-auto`
- Background: `bg-gray-900/50 backdrop-blur-sm`
- Border: `border border-gray-800`
- Rounded: `rounded-2xl`
- Padding: `p-8 md:p-12`

#### Form Fields:

**1. Jenama Kereta (Car Brand)**
```javascript
const carBrands = [
  { value: '', label: 'Pilih Jenama Kereta' },
  { value: 'perodua', label: 'Perodua', icon: '🚗' },
  { value: 'proton', label: 'Proton', icon: '🚗' },
  { value: 'honda', label: 'Honda', icon: '🚗' },
  { value: 'toyota', label: 'Toyota', icon: '🚗' },
  { value: 'nissan', label: 'Nissan', icon: '🚗' },
  { value: 'mazda', label: 'Mazda', icon: '🚗' },
  { value: 'bmw', label: 'BMW', icon: '🚗' },
  { value: 'mercedes', label: 'Mercedes-Benz', icon: '🚗' },
  { value: 'volkswagen', label: 'Volkswagen', icon: '🚗' },
  { value: 'others', label: 'Lain-lain', icon: '🚗' }
]
```

**Styling:**
- Custom select dropdown with Framer Motion animation
- Background: `bg-gray-800`
- Border: `border-gray-700`
- Focus: `focus:border-red-500 focus:ring-2 focus:ring-red-500/20`
- Hover: `hover:border-red-500/50`

**2. Model Kereta (Car Model)**
```javascript
// Dynamic based on brand selection
const carModels = {
  perodua: [
    { value: '', label: 'Pilih Model' },
    { value: 'myvi', label: 'Myvi (All Gen)', popular: true },
    { value: 'axia', label: 'Axia', popular: true },
    { value: 'bezza', label: 'Bezza', popular: true },
    { value: 'alza', label: 'Alza', popular: true },
    { value: 'aruz', label: 'Aruz' },
    { value: 'viva', label: 'Viva' },
    { value: 'kancil', label: 'Kancil' },
    { value: 'kelisa', label: 'Kelisa' },
    { value: 'kenari', label: 'Kenari' }
  ],
  proton: [
    { value: '', label: 'Pilih Model' },
    { value: 'saga', label: 'Saga', popular: true },
    { value: 'persona', label: 'Persona', popular: true },
    { value: 'iriz', label: 'Iriz', popular: true },
    { value: 'x50', label: 'X50', popular: true },
    { value: 'x70', label: 'X70', popular: true },
    { value: 'exora', label: 'Exora' },
    { value: 'preve', label: 'Preve' },
    { value: 'inspira', label: 'Inspira' },
    { value: 'waja', label: 'Waja' },
    { value: 'gen2', label: 'Gen-2' },
    { value: 'satria', label: 'Satria Neo' }
  ],
  honda: [
    { value: '', label: 'Pilih Model' },
    { value: 'city', label: 'City', popular: true },
    { value: 'civic', label: 'Civic', popular: true },
    { value: 'accord', label: 'Accord', popular: true },
    { value: 'crv', label: 'CR-V', popular: true },
    { value: 'hrv', label: 'HR-V', popular: true },
    { value: 'jazz', label: 'Jazz' },
    { value: 'brv', label: 'BR-V' },
    { value: 'odyssey', label: 'Odyssey' }
  ],
  toyota: [
    { value: '', label: 'Pilih Model' },
    { value: 'vios', label: 'Vios', popular: true },
    { value: 'yaris', label: 'Yaris', popular: true },
    { value: 'altis', label: 'Altis/Corolla', popular: true },
    { value: 'camry', label: 'Camry' },
    { value: 'fortuner', label: 'Fortuner' },
    { value: 'hilux', label: 'Hilux' },
    { value: 'innova', label: 'Innova' },
    { value: 'rush', label: 'Rush' },
    { value: 'avanza', label: 'Avanza' },
    { value: 'veloz', label: 'Veloz' }
  ],
  nissan: [
    { value: '', label: 'Pilih Model' },
    { value: 'almera', label: 'Almera', popular: true },
    { value: 'navara', label: 'Navara', popular: true },
    { value: 'xtrail', label: 'X-Trail', popular: true },
    { value: 'serena', label: 'Serena' },
    { value: 'teana', label: 'Teana' },
    { value: 'sylphy', label: 'Sylphy' },
    { value: 'livina', label: 'Livina' },
    { value: 'grand-livina', label: 'Grand Livina' }
  ],
  mazda: [
    { value: '', label: 'Pilih Model' },
    { value: 'mazda2', label: 'Mazda 2', popular: true },
    { value: 'mazda3', label: 'Mazda 3', popular: true },
    { value: 'cx3', label: 'CX-3', popular: true },
    { value: 'cx5', label: 'CX-5', popular: true },
    { value: 'cx30', label: 'CX-30' },
    { value: 'mazda6', label: 'Mazda 6' },
    { value: 'biante', label: 'Biante' }
  ],
  bmw: [
    { value: '', label: 'Pilih Model' },
    { value: '3series', label: '3 Series', popular: true },
    { value: '5series', label: '5 Series', popular: true },
    { value: 'x1', label: 'X1' },
    { value: 'x3', label: 'X3' },
    { value: 'x5', label: 'X5' },
    { value: '1series', label: '1 Series' },
    { value: '7series', label: '7 Series' }
  ],
  mercedes: [
    { value: '', label: 'Pilih Model' },
    { value: 'c-class', label: 'C-Class', popular: true },
    { value: 'e-class', label: 'E-Class', popular: true },
    { value: 'a-class', label: 'A-Class' },
    { value: 's-class', label: 'S-Class' },
    { value: 'glc', label: 'GLC' },
    { value: 'gla', label: 'GLA' },
    { value: 'gle', label: 'GLE' }
  ],
  volkswagen: [
    { value: '', label: 'Pilih Model' },
    { value: 'polo', label: 'Polo', popular: true },
    { value: 'vento', label: 'Vento', popular: true },
    { value: 'golf', label: 'Golf' },
    { value: 'jetta', label: 'Jetta' },
    { value: 'passat', label: 'Passat' },
    { value: 'tiguan', label: 'Tiguan' }
  ],
  others: [
    { value: '', label: 'Pilih Model' },
    { value: 'other', label: 'Model Lain' }
  ]
}
```

**3. Jenis Gearbox (Gearbox Type)**
```javascript
const gearboxTypes = [
  { value: '', label: 'Pilih Jenis Gearbox' },
  { value: 'cvt', label: 'CVT (Continuously Variable)', icon: '⚙️', popular: true },
  { value: 'automatic', label: 'Automatik (AT)', icon: '⚙️', popular: true },
  { value: 'dct', label: 'DCT (Dual Clutch)', icon: '⚙️' },
  { value: 'manual', label: 'Manual', icon: '⚙️' },
  { value: 'not-sure', label: 'Tidak Pasti', icon: '❓' }
]
```

**4. Jenis Servis (Service Type)**
```javascript
const serviceTypes = [
  { 
    value: '', 
    label: 'Pilih Jenis Servis',
    description: ''
  },
  { 
    value: 'service', 
    label: 'Servis Biasa',
    description: 'Tukar minyak gearbox, filter, checkup',
    icon: '🔧',
    priceMultiplier: 1
  },
  { 
    value: 'repair', 
    label: 'Repair/Pembaikan',
    description: 'Betulkan masalah specific (jerking, slip, bunyi)',
    icon: '🛠️',
    priceMultiplier: 2
  },
  { 
    value: 'overhaul', 
    label: 'Overhaul Lengkap',
    description: 'Buka dan baiki dalaman gearbox sepenuhnya',
    icon: '⚙️',
    priceMultiplier: 4
  },
  { 
    value: 'replacement', 
    label: 'Replacement/Ganti',
    description: 'Ganti gearbox baru atau reconditioned',
    icon: '🔄',
    priceMultiplier: 6
  }
]
```

**5. Masalah/Simptom (Optional - helps with accuracy)**
```javascript
const symptoms = [
  { value: 'none', label: 'Tiada masalah (servis sahaja)' },
  { value: 'jerking', label: 'Jerking/sentap masa tukar gear' },
  { value: 'slip', label: 'Gear slip/tak makan' },
  { value: 'noise', label: 'Bunyi pelik dari gearbox' },
  { value: 'leak', label: 'Bocor minyak gearbox' },
  { value: 'warning', label: 'Warning light gearbox menyala' },
  { value: 'overheat', label: 'Gearbox terlalu panas' },
  { value: 'delayed', label: 'Delay masa shift gear' },
  { value: 'vibration', label: 'Gegaran berlebihan' },
  { value: 'multiple', label: 'Beberapa masalah sekaligus' }
]
```

---

### Section 3: Price Estimation Result

**Display Trigger:** After all required fields filled (brand, model, gearbox type, service type)

**Animation:** 
- Framer Motion slide up with fade
- Duration: 0.5s
- Stagger children by 0.1s

**Result Card Design:**
```
Container:
- Background: bg-gradient-to-br from-red-900/20 to-red-950/10
- Border: border-2 border-red-500/30
- Glow effect: shadow-2xl shadow-red-500/20
- Padding: p-8
- Rounded: rounded-2xl
```

**Content Structure:**

**Header:**
```
Icon: CheckCircle (green)
Text: "Anggaran Harga Untuk [Brand] [Model]"
```

**Price Display:**
```html
<div class="text-center py-6">
  <p class="text-gray-400 text-sm mb-2">Anggaran Kos</p>
  <div class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
    RM [MIN_PRICE] - RM [MAX_PRICE]
  </div>
  <p class="text-gray-500 text-xs mt-2">*Harga sebenar bergantung pada diagnosis</p>
</div>
```

**Price Breakdown (Expandable):**
```javascript
// Show breakdown with icons
{
  'Parts & Komponen': 'RM XXX - RM XXX',
  'Labour/Upah Kerja': 'RM XXX - RM XXX', 
  'Minyak Gearbox': 'RM XXX - RM XXX',
  'Warranty 6-12 Bulan': 'Included ✓'
}
```

**What's Included Section:**
```javascript
const includedServices = [
  '✓ Diagnosis komputer percuma',
  '✓ Minyak gearbox spec original',
  '✓ Parts berkualiti (original/OEM)',
  '✓ Warranty 6 hingga 12 bulan',
  '✓ Test drive selepas servis',
  '✓ Nasihat penyelenggaraan percuma'
]
```

**Price Factors Alert:**
```
⚠️ Harga Bergantung Pada:
- Tahun kereta (older = more expensive parts)
- Severity masalah (diagnosis tepat diperlukan)
- Jenis parts (original vs OEM vs recond)
- Lokasi/availability parts
```

---

### Section 4: Action Buttons (in Result Card)

**Primary Button (Red):**
```
Text: "📞 Dapatkan Quotation Tepat Percuma"
Action: Scroll to contact form / Open WhatsApp
Style: Full width, large size, prominent
WhatsApp message: "Hai, saya nak quotation untuk [Brand] [Model] [Service Type]. Masalah: [Symptom]"
```

**Secondary Button (Outline):**
```
Text: "📊 Lihat Harga Lengkap 200+ Model Kereta"
Action: Open hargarepairgearbox.com in new tab
Target: _blank
Rel: noopener
Style: Outline red border, hover fill
Icon: ExternalLink
```

**Tertiary Button (Text link):**
```
Text: "📍 Lawati Bengkel Kami"
Action: Scroll to map/contact section
Style: Text link with underline
```

---

### Section 5: Why Prices Vary (Educational)

**Grid Layout: 2 columns on desktop, 1 on mobile**

```javascript
const priceFactors = [
  {
    icon: Calendar,
    title: 'Tahun Kereta',
    description: 'Model lama mungkin susah cari parts, model baru parts mahal'
  },
  {
    icon: AlertCircle,
    title: 'Severity Masalah',
    description: 'Masalah ringan vs masalah besar - harga berbeza'
  },
  {
    icon: Package,
    title: 'Jenis Parts',
    description: 'Original parts vs OEM vs reconditioned affect price'
  },
  {
    icon: Award,
    title: 'Warranty Included',
    description: 'Kami provide 6-12 bulan warranty, bengkel lain mungkin tidak'
  },
  {
    icon: Wrench,
    title: 'Scope Kerja',
    description: 'Simple service vs full overhaul - complexity matters'
  },
  {
    icon: TrendingUp,
    title: 'Market Price',
    description: 'Harga parts fluctuate based on availability & demand'
  }
]
```

**Styling:**
- Cards with hover effect
- Icon in red circle
- Gray background
- Smooth transitions

---

### Section 6: Price Comparison Table (Optional Enhancement)

**Table showing typical price ranges:**

| Jenis Servis | Kereta Local | Kereta Jepun | Kereta Continental |
|--------------|--------------|--------------|-------------------|
| Servis Biasa | RM 250-450 | RM 350-650 | RM 500-900 |
| Repair | RM 800-2,500 | RM 1,200-3,500 | RM 2,000-5,000 |
| Overhaul CVT | RM 2,500-4,500 | RM 3,500-6,000 | RM 5,000-9,000 |
| Overhaul AT | RM 3,000-5,500 | RM 4,000-7,500 | RM 6,000-12,000 |
| Replacement | RM 4,000-8,000 | RM 5,500-10,000 | RM 9,000-18,000 |

**Note below table:**
```
💡 Nak tahu harga exact untuk model kereta anda?
Layari database lengkap kami dengan 200+ model kereta di hargarepairgearbox.com
```

---

### Section 7: Popular Car Models Quick Links

**Grid of popular models (3x3 or 4x4):**

```javascript
const popularModels = [
  { brand: 'Perodua', model: 'Myvi', avgPrice: 'RM 2,800-4,200' },
  { brand: 'Perodua', model: 'Axia', avgPrice: 'RM 2,500-3,800' },
  { brand: 'Perodua', model: 'Bezza', avgPrice: 'RM 2,600-4,000' },
  { brand: 'Honda', model: 'City', avgPrice: 'RM 3,500-5,500' },
  { brand: 'Honda', model: 'Civic', avgPrice: 'RM 4,000-6,500' },
  { brand: 'Toyota', model: 'Vios', avgPrice: 'RM 3,800-5,800' },
  { brand: 'Proton', model: 'X50', avgPrice: 'RM 3,200-5,000' },
  { brand: 'Proton', model: 'X70', avgPrice: 'RM 3,500-5,500' },
  { brand: 'Nissan', model: 'Almera', avgPrice: 'RM 3,200-4,800' }
]
```

**Card Design:**
- Small cards with car emoji/icon
- Model name prominent
- Average price range below
- Click to auto-fill calculator
- Hover effect: lift and glow

---

### Section 8: FAQ Accordion

```javascript
const faqs = [
  {
    q: "Adakah harga ini final?",
    a: "Harga yang ditunjuk adalah anggaran sahaja. Harga sebenar bergantung pada diagnosis tepat di bengkel. Kami provide free diagnosis untuk dapatkan quotation exact."
  },
  {
    q: "Berapa lama proses repair/overhaul?",
    a: "Servis biasa: 2-4 jam. Repair: 1-3 hari. Overhaul lengkap: 3-7 hari bergantung pada availability parts dan complexity masalah."
  },
  {
    q: "Ada warranty ke?",
    a: "Ya! Kami provide warranty 6 bulan hingga 12 bulan bergantung pada jenis servis. Warranty cover parts dan workmanship."
  },
  {
    q: "Boleh claim insurance?",
    a: "Untuk certain cases boleh claim insurance atau takaful. Kami boleh assist dengan documentation yang diperlukan."
  },
  {
    q: "Kenapa harga berbeza dengan bengkel lain?",
    a: "Kami transparent dengan pricing. Harga include parts quality (original/OEM), technician berpengalaman, warranty, dan after-sales support. Cheap price selalunya compromise on quality."
  },
  {
    q: "Boleh installment ke?",
    a: "Ya, kami accept various payment methods. Contact kami untuk discuss payment plans yang sesuai."
  },
  {
    q: "Nak tahu harga model kereta lain?",
    a: "Layari hargarepairgearbox.com untuk database lengkap dengan 200+ model kereta di Malaysia, termasuk breakdown detail dan comparison."
  }
]
```

**Accordion Styling:**
- Smooth expand/collapse animation
- Plus/minus icon rotation
- Red accent on open state
- Gray background on hover

---

### Section 9: Trust Signals

**3-column grid of trust elements:**

1. **15+ Tahun Pengalaman**
   - Icon: Award
   - Text: "Sejak 2009, lebih 5000 pelanggan"

2. **Warranty Terjamin**
   - Icon: Shield
   - Text: "6-12 bulan warranty semua kerja"

3. **Transparent Pricing**
   - Icon: Eye
   - Text: "No hidden charges, clear quotation"

4. **Google Rating 4.8/5**
   - Icon: Star
   - Text: "Ratusan review positif"

5. **Free Diagnosis**
   - Icon: Search
   - Text: "Checkup & quotation percuma"

6. **Quality Parts**
   - Icon: CheckCircle
   - Text: "Original/OEM parts guaranteed"

---

### Section 10: CTA - Contact Form / Booking

**Same design as other pages' contact sections**

**Form Fields:**
1. Nama
2. Telefon
3. Model Kereta (auto-filled from calculator)
4. Jenis Servis (auto-filled from calculator)
5. Masalah/Notes (optional)

**Buttons:**
- WhatsApp (pre-filled message)
- Submit Form
- Call Now

---

### Section 11: Related Resources

**Grid of blog article cards linking to existing blog posts:**

- "5 Langkah Mudah Jaga Gearbox CVT"
- "7 Tanda Gearbox Automatik Bermasalah"
- "Panduan Kos Repair Gearbox Malaysia"

**Plus:** 
- Link to full blog
- Link to hargarepairgearbox.com database

---

## 🔧 Technical Implementation Details

### State Management
```typescript
const [selectedBrand, setSelectedBrand] = useState('')
const [selectedModel, setSelectedModel] = useState('')
const [gearboxType, setGearboxType] = useState('')
const [serviceType, setServiceType] = useState('')
const [symptom, setSymptom] = useState('')
const [showResult, setShowResult] = useState(false)
const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 })
```

### Price Calculation Logic
```typescript
const calculatePrice = () => {
  let basePrice = 500 // base price
  
  // Adjust by brand (continental more expensive)
  if (['bmw', 'mercedes', 'volkswagen'].includes(selectedBrand)) {
    basePrice *= 2
  } else if (['honda', 'toyota', 'nissan', 'mazda'].includes(selectedBrand)) {
    basePrice *= 1.5
  }
  
  // Adjust by gearbox type
  if (gearboxType === 'cvt') {
    basePrice *= 1.3 // CVT more complex
  } else if (gearboxType === 'dct') {
    basePrice *= 1.5 // DCT most expensive
  }
  
  // Adjust by service type
  const serviceMultipliers = {
    service: 1,
    repair: 2.5,
    overhaul: 5,
    replacement: 8
  }
  basePrice *= serviceMultipliers[serviceType]
  
  // Adjust by symptom severity
  if (['multiple', 'warning'].includes(symptom)) {
    basePrice *= 1.2
  }
  
  // Calculate range (±20%)
  const minPrice = Math.round(basePrice * 0.8 / 50) * 50 // round to nearest 50
  const maxPrice = Math.round(basePrice * 1.2 / 50) * 50
  
  return { min: minPrice, max: maxPrice }
}
```

### Analytics Tracking
```typescript
// Track calculator usage
const trackCalculation = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'calculator_complete', {
      brand: selectedBrand,
      model: selectedModel,
      service_type: serviceType,
      price_range: `${estimatedPrice.min}-${estimatedPrice.max}`
    })
  }
}

// Track external link click
const trackExternalLinkClick = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'external_link_click', {
      destination: 'hargarepairgearbox.com',
      source_page: 'calculator'
    })
  }
}
```

### Form Validation
```typescript
const isFormValid = () => {
  return selectedBrand !== '' && 
         selectedModel !== '' && 
         gearboxType !== '' && 
         serviceType !== ''
}

useEffect(() => {
  if (isFormValid()) {
    const prices = calculatePrice()
    setEstimatedPrice(prices)
    setShowResult(true)
    trackCalculation()
  } else {
    setShowResult(false)
  }
}, [selectedBrand, selectedModel, gearboxType, serviceType, symptom])
```

---

## 🎨 Styling Guidelines

### Colors (Match existing theme)
```css
Primary Red: #DC2626 (red-600)
Accent Red: #EF4444 (red-500)
Dark Background: #000000
Card Background: #1F2937 (gray-800)
Border: #374151 (gray-700)
Text Primary: #FFFFFF
Text Secondary: #D1D5DB (gray-300)
Text Muted: #9CA3AF (gray-400)
```

### Typography
```css
H1: text-4xl md:text-5xl lg:text-6xl font-light tracking-tight
H2: text-3xl md:text-4xl font-light
H3: text-2xl md:text-3xl font-semibold
Body: text-base md:text-lg
Small: text-sm
Labels: text-sm font-medium text-gray-300
```

### Spacing
```css
Section padding: py-16 md:py-24
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card padding: p-6 md:p-8
Gap between cards: gap-6 md:gap-8
```

### Animations
```typescript
// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleUp = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
}
```

---

## 📱 Mobile Responsiveness

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Mobile Adjustments
1. **Hero**: Stack features vertically
2. **Calculator Form**: Full width inputs, larger touch targets (min 44px)
3. **Price Result**: Reduce font sizes, stack breakdown vertically
4. **Popular Models Grid**: 2 columns instead of 4
5. **FAQ**: Full width, larger accordion tap area
6. **Navigation**: Ensure link is accessible in mobile menu

---

## 🔗 SEO Optimization

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Kalkulator Harga Gearbox",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "MYR"
  },
  "description": "Kalkulator percuma untuk mengira anggaran kos repair gearbox untuk semua jenama kereta di Malaysia"
}
```

### Meta Tags
```html
<meta property="og:title" content="Kalkulator Harga Repair Gearbox Malaysia | One X Transmission" />
<meta property="og:description" content="Semak anggaran harga gearbox untuk kereta anda. Percuma, pantas, dan tepat." />
<meta property="og:image" content="/calculator-og-image.jpg" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### Internal Linking Strategy
```
Homepage → Kalkulator Harga
Khidmat Page → Kalkulator Harga
Blog Posts → Kalkulator Harga
Footer → Kalkulator Harga
```

### External Link (to hargarepairgearbox.com)
```html
<a 
  href="https://hargarepairgearbox.com" 
  target="_blank" 
  rel="noopener"
  className="..."
  onClick={trackExternalLinkClick}
>
  📊 Lihat Harga Lengkap 200+ Model Kereta
  <ExternalLink className="w-4 h-4 ml-2" />
</a>
```

**Important:** DO NOT use `rel="nofollow"` - we want to pass link juice for SEO

---

## 🎯 Conversion Optimization

### Primary Goal
Get users to contact for exact quotation

### Secondary Goal
Direct relevant traffic to hargarepairgearbox.com

### CTA Hierarchy
1. **Most Prominent**: "Dapatkan Quotation Tepat Percuma" (WhatsApp/Form)
2. **Secondary**: "Lihat Harga Lengkap" (External link)
3. **Tertiary**: "Lawati Bengkel" (Contact page)

### Exit Intent Strategy (Optional Future Enhancement)
```typescript
// Show popup when user tries to leave with incomplete form
const [showExitIntent, setShowExitIntent] = useState(false)

useEffect(() => {
  const handleMouseLeave = (e) => {
    if (e.clientY <= 0 && !showResult) {
      setShowExitIntent(true)
    }
  }
  document.addEventListener('mouseleave', handleMouseLeave)
  return () => document.removeEventListener('mouseleave', handleMouseLeave)
}, [showResult])
```

---

## 🧪 Testing Checklist

### Functionality
- [ ] All dropdowns populate correctly
- [ ] Model dropdown updates based on brand selection
- [ ] Price calculation logic accurate
- [ ] Price result shows after all required fields filled
- [ ] WhatsApp link opens with pre-filled message
- [ ] External link to hargarepairgearbox.com opens in new tab
- [ ] Form submission works
- [ ] All animations smooth on desktop and mobile

### Responsiveness
- [ ] Mobile (375px - 640px): All elements stack properly
- [ ] Tablet (641px - 1024px): 2-column layouts work
- [ ] Desktop (1025px+): Full layout displays correctly
- [ ] Touch targets minimum 44px on mobile
- [ ] No horizontal scroll on any device

### SEO
- [ ] Title tag includes target keywords
- [ ] Meta description compelling and accurate
- [ ] H1 tag present and descriptive
- [ ] Alt text on all images
- [ ] Schema markup validates
- [ ] Internal links working
- [ ] External link has proper attributes (target, rel)

### Performance
- [ ] Page loads under 3 seconds
- [ ] Images optimized
- [ ] No layout shift (CLS)
- [ ] Smooth animations (60fps)
- [ ] No console errors

### Analytics
- [ ] Google Analytics tracking code present
- [ ] Calculator completion event fires
- [ ] External link clicks tracked
- [ ] Form submissions tracked
- [ ] Button clicks tracked

---

## 📊 Success Metrics

### KPIs to Track
1. **Calculator Completion Rate**: % of users who fill all fields
2. **Conversion Rate**: % who click WhatsApp/submit form after seeing price
3. **External Link CTR**: % who click through to hargarepairgearbox.com
4. **Bounce Rate**: Should be lower than other pages (engaging content)
5. **Time on Page**: Should be 2-3 minutes average
6. **Return Rate**: Track if users come back after visiting external site

### A/B Testing Ideas (Future)
1. Button text: "Dapatkan Quotation" vs "WhatsApp Sekarang"
2. External link placement: In result card vs separate section
3. Price display: Range vs "Starting from"
4. Form fields: Required vs all optional

---

## 🚀 Launch Checklist

### Pre-Launch
- [ ] Create page file: `src/app/kalkulator-harga/page.tsx`
- [ ] Test all functionality locally
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Validate HTML/CSS
- [ ] Check accessibility (WCAG AA)
- [ ] Test on multiple devices and browsers
- [ ] Setup analytics tracking
- [ ] Create OG image for social sharing

### Launch
- [ ] Add navigation link to header
- [ ] Update sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Create internal links from 3-5 existing pages
- [ ] Announce on social media (if applicable)
- [ ] Monitor analytics first 24 hours

### Post-Launch (Week 1)
- [ ] Check for any console errors
- [ ] Monitor conversion rate
- [ ] Gather user feedback
- [ ] Check mobile usability in GSC
- [ ] Review heatmaps (if using Hotjar/etc)
- [ ] Make quick fixes if needed

---

## 💡 Content Writing Tips

### Tone of Voice
- **Friendly**: "Kami sedia membantu"
- **Transparent**: "Harga sebenar bergantung pada diagnosis"
- **Professional**: "Technician berpengalaman", "Warranty terjamin"
- **Local**: Use Bahasa Malaysia, relatable scenarios

### Key Messaging
1. **Speed**: "Dapatkan anggaran dalam 30 saat"
2. **Free**: "Percuma, tiada komitmen"
3. **Transparency**: "Harga jelas, no hidden charges"
4. **Value**: "Lihat harga lengkap 200+ model"
5. **Quality**: "Parts berkualiti, warranty included"

### Call-to-Action Examples
- ✅ "Dapatkan Quotation Tepat Percuma"
- ✅ "WhatsApp Kami Sekarang"
- ✅ "Lihat Harga Lengkap Semua Model"
- ✅ "Semak Harga Detail di Database Kami"
- ❌ "Click Here" (not descriptive)
- ❌ "Learn More" (vague)

---

## 🎬 Next Steps After This Document

1. **Review and Approve Design**
   - Confirm layout structure
   - Verify color scheme
   - Approve content tone

2. **Gather Assets**
   - Calculator icon/illustration
   - Car brand logos (if using)
   - OG image for social sharing
   - Any custom graphics

3. **Create Page File**
   - Build `src/app/kalkulator-harga/page.tsx`
   - Implement all sections
   - Add animations
   - Connect to analytics

4. **Test Thoroughly**
   - All browsers
   - All devices
   - All user flows

5. **Launch & Monitor**
   - Deploy to production
   - Monitor performance
   - Track conversions
   - Gather feedback

---

## 📝 Notes

### Why This Approach Works

1. **Provides Immediate Value**: Users get instant price estimate
2. **Captures Intent**: Shows users are serious about repair (high-intent traffic)
3. **Natural Link Context**: External link makes sense in user journey
4. **Conversion Focused**: Multiple CTAs drive to contact
5. **SEO Friendly**: Targets calculator + price keywords
6. **User-Friendly**: Simple, intuitive interface
7. **Mobile-First**: Works great on phones (where most traffic is)
8. **Trust Building**: Transparency builds credibility

### Potential Concerns & Solutions

**Concern**: Users might leave site after clicking external link
**Solution**: Ensure WhatsApp/contact CTA is most prominent, external link secondary

**Concern**: Price estimates might be inaccurate
**Solution**: Clear disclaimer, wide range, emphasize "anggaran sahaja"

**Concern**: Competitive intelligence (others see pricing)
**Solution**: Show ranges only, not exact prices. Emphasize value-adds.

**Concern**: Maintenance of car model database
**Solution**: Keep list to popular models only, use "Lain-lain" as catchall

---

## 🎓 Reference Materials

### Existing Pages to Match Style
- Homepage (`src/app/page.tsx`)
- Services Page (`src/app/khidmat/page.tsx`)
- Contact Page (`src/app/hubungi/page.tsx`)

### Libraries Used
- `framer-motion`: Animations
- `lucide-react`: Icons
- `next/link`: Internal navigation
- `react`: State management

### Color Palette Reference
```javascript
// From globals.css
background: #000000
foreground: #FFFFFF
card: #1F2937
card-foreground: #F9FAFB
primary: #DC2626
primary-foreground: #FFFFFF
secondary: #EF4444
accent: #F87171
```

---

## ✅ Final Pre-Implementation Checklist

- [ ] Document reviewed and approved
- [ ] Design mockup created (optional but recommended)
- [ ] Content written and reviewed
- [ ] Analytics tracking plan confirmed
- [ ] SEO strategy validated
- [ ] Mobile design confirmed
- [ ] CTA placements approved
- [ ] External link strategy confirmed (rel="noopener" without nofollow)
- [ ] Price calculation logic reviewed
- [ ] All required assets gathered
- [ ] Development environment ready
- [ ] Estimated timeline confirmed

---

**Estimated Development Time**: 8-12 hours (including testing)
**Priority**: High (strategic SEO value)
**Complexity**: Medium
**Dependencies**: None (standalone page)

---

**Ready to implement? Let's build this calculator page and drive that traffic! 🚀**
