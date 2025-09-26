'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Google Tag Manager Head Script
export function GTMHead() {
  if (!GTM_ID) return null;

  return (
    <Script
      id="gtm-head"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}

// Google Tag Manager Body Script (noscript fallback)
export function GTMBody() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Direct GA4 Script (backup if GTM is not configured)
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              debug_mode: true,
              send_page_view: true
            });
            
            // Debug function - available in console
            window.debugAnalytics = function() {
              console.log('=== ANALYTICS DEBUG ===');
              console.log('GTM ID:', '${GTM_ID}');
              console.log('GA4 ID:', '${GA_ID}');
              console.log('DataLayer:', window.dataLayer);
              console.log('GTM Container:', document.querySelector('script[src*="googletagmanager.com/gtm.js"]'));
              console.log('GA4 Script:', document.querySelector('script[src*="gtag/js"]'));
            };
          `,
        }}
      />
    </>
  );
}

// Analytics Event Tracking Functions
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Push to dataLayer for GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });

    // Also send to GA4 directly (backup)
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }
};

// Predefined tracking events for gearbox business
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', {
    event_category: 'engagement',
    event_label: phoneNumber,
    phone_number: phoneNumber,
  });
};

export const trackWhatsAppClick = (phoneNumber: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: phoneNumber,
    whatsapp_number: phoneNumber,
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'service',
    event_label: serviceName,
    service_name: serviceName,
  });
};

export const trackQuoteRequest = () => {
  trackEvent('quote_request', {
    event_category: 'conversion',
    event_label: 'Contact Form',
  });
};