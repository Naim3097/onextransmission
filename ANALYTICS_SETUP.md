# 📊 Google Analytics & GTM Setup Guide

## Phase 1: Google Analytics 4 Setup

### Step 1: Create GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click **"Start measuring"**
4. **Account Setup:**
   - Account Name: `Pakar Gearbox Shah Alam`
   - Country: `Malaysia`
   - Data sharing settings: Check recommended options
5. **Property Setup:**
   - Property Name: `One X Transmission Website`  
   - Reporting time zone: `(GMT+08:00) Kuala Lumpur`
   - Currency: `Malaysian Ringgit (MYR)`
6. **Business Information:**
   - Industry Category: `Automotive`
   - Business size: `Small (1-10 employees)`
   - Business objectives: Check "Get customer insights"
7. Click **Create** and accept Terms of Service
8. **IMPORTANT:** Copy your **Measurement ID**: `G-XXXXXXXXXX`

---

## Phase 2: Google Tag Manager Setup

### Step 2: Create GTM Container
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Click **"Create Account"**
3. **Account Setup:**
   - Account Name: `Pakar Gearbox Shah Alam`
   - Country: `Malaysia`
   - Share data anonymously: Leave checked
4. **Container Setup:**
   - Container Name: `onextransmission.com` (your domain)
   - Target Platform: **Web**
5. Click **Create**
6. **IMPORTANT:** Copy your **Container ID**: `GTM-XXXXXXX`

---

## Phase 3: Configure Environment Variables

### Step 3: Update .env.local File
Replace the placeholder values in your `.env.local` file:

```env
# Replace with your actual IDs
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Update with your actual domain when ready
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

---

## Phase 4: Configure GTM Tags

### Step 4: Add GA4 Configuration in GTM
1. **In GTM Dashboard**, click **"Add a new tag"**
2. **Tag Configuration:**
   - Choose **"Google Analytics: GA4 Configuration"**
   - Measurement ID: Enter your `G-XXXXXXXXXX`
3. **Triggering:**
   - Choose **"All Pages"**
4. **Name the tag:** `GA4 - Configuration`
5. Click **Save**

### Step 5: Add GA4 Event Tags
1. **Add another tag** for tracking events
2. **Tag Configuration:**
   - Choose **"Google Analytics: GA4 Event"**
   - Configuration Tag: Select your GA4 Configuration tag
   - Event Name: `phone_call`
   - Parameters:
     - `event_category`: `contact`
     - `event_label`: `header_phone_click`
3. **Triggering:**
   - Create new trigger: **"Click - All Elements"**
   - Configure trigger: `Click URL contains tel:`
4. **Name:** `GA4 - Phone Call`
5. **Repeat for WhatsApp events**

---

## Phase 5: Test & Deploy

### Step 6: Test Your Setup
1. **In GTM**, click **"Preview"**
2. Enter your website URL
3. **Test these actions:**
   - Page views
   - Phone button clicks  
   - WhatsApp button clicks
   - Form submissions
4. **Verify in Preview mode** that events fire correctly

### Step 7: Publish GTM Container
1. When tests pass, click **"Submit"** in GTM
2. Add version name: `Initial Analytics Setup`
3. Click **"Publish"**

---

## Phase 6: Advanced Tracking (Optional)

### Conversion Goals in GA4
1. **In GA4**, go to **Configure → Events**
2. **Mark as conversions:**
   - `phone_call`
   - `whatsapp_click`
   - `quote_request`
   - `service_inquiry`

### Enhanced Ecommerce for Services
Set up service tracking as products:
- CVT Overhaul: RM 2,500 
- Gearbox Diagnosis: RM 150
- Automatic Service: RM 800

---

## Key Events Already Implemented

Your website will automatically track:
- ✅ **Page views** - All page visits
- ✅ **Phone calls** - Header & mobile menu clicks
- ✅ **WhatsApp clicks** - All WhatsApp button clicks  
- ✅ **Service inquiries** - Service page interactions
- ✅ **Quote requests** - Contact form submissions

---

## Quick Reference

**Your Analytics URLs:**
- GA4 Dashboard: https://analytics.google.com/
- GTM Dashboard: https://tagmanager.google.com/
- Real-time reports: GA4 → Reports → Realtime

**Test Commands:**
```bash
# Test locally
npm run dev

# Check console for GTM data
# Open Developer Tools → Console → Look for "dataLayer" events
```

**Verification Checklist:**
- [ ] GA4 property created with correct Measurement ID
- [ ] GTM container created with correct Container ID  
- [ ] Environment variables updated in .env.local
- [ ] GTM published with GA4 configuration
- [ ] Phone/WhatsApp tracking tested and working
- [ ] Real-time data showing in GA4 dashboard

---

## 🚨 Important Notes

1. **Replace placeholder IDs** in `.env.local` with your actual values
2. **Test in Preview mode** before publishing GTM changes
3. **Data may take 24-48 hours** to appear in full GA4 reports
4. **Real-time data** shows immediately for testing
5. **Keep your IDs secure** - don't share publicly