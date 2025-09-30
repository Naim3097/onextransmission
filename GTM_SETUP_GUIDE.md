# 🏷️ GTM Configuration Guide

## **IMPORTANT: Complete This Setup in GTM Dashboard**

Your GTM container `GTM-MDXQ86XF` is installed but needs configuration.

### **Step 1: Configure GA4 in GTM**

1. **Go to GTM Dashboard**: [tagmanager.google.com](https://tagmanager.google.com)
2. **Select Container**: `GTM-MDXQ86XF`

### **Step 2: Create GA4 Configuration Tag**

**Add New Tag:**
- **Tag Type**: Google Analytics: GA4 Configuration
- **Measurement ID**: `G-3MR8MD04GW`
- **Trigger**: All Pages
- **Tag Name**: "GA4 Configuration"

### **Step 3: Create GA4 Event Tags**

**Phone Call Event:**
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: [Select GA4 Configuration tag]
- **Event Name**: `phone_call`
- **Trigger**: Custom Event → `phone_call`

**WhatsApp Event:**
- **Tag Type**: Google Analytics: GA4 Event  
- **Configuration Tag**: [Select GA4 Configuration tag]
- **Event Name**: `whatsapp_click`
- **Trigger**: Custom Event → `whatsapp_click`

### **Step 4: Create Custom Triggers**

**Phone Call Trigger:**
- **Trigger Type**: Custom Event
- **Event Name**: `phone_call`

**WhatsApp Trigger:**
- **Trigger Type**: Custom Event  
- **Event Name**: `whatsapp_click`

### **Step 5: Publish Container**

1. **Click "Submit"** in GTM
2. **Add Version Name**: "GA4 Setup"
3. **Publish Changes**

### **Step 6: Test**

After publishing, test again with GA4 Tag Assistant.

---

## **Quick Setup Alternative: Use GA4 Direct**

If GTM setup is too complex, we can switch to **direct GA4** implementation:

1. Remove GTM completely
2. Use only Google Analytics 4 
3. Simpler but less flexible

**Let me know which approach you prefer!**