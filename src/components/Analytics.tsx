'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Environment variables for tracking IDs
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Analytics 4 Component (Direct Implementation)
export function GoogleAnalytics() {
  return (
    <>
      {GA_TRACKING_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

export function GoogleTagManager() {
  return (
    <>
      {GTM_ID && (
        <>
          {/* Google Tag Manager */}
          <Script
            id="gtm-script"
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
        </>
      )}
    </>
  );
}

export function GoogleTagManagerNoScript() {
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

// Analytics events for gearbox business
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Predefined tracking events for your business
export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'contact',
    event_label: 'header_phone_click',
    value: 1
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'contact', 
    event_label: 'whatsapp_button',
    value: 1
  });
};

export const trackServiceInquiry = (serviceName: string) => {
  trackEvent('service_inquiry', {
    event_category: 'services',
    event_label: serviceName.toLowerCase().replace(/\s+/g, '_'),
    service_name: serviceName,
    value: 1
  });
};

export const trackQuoteRequest = () => {
  trackEvent('quote_request', {
    event_category: 'conversion',
    event_label: 'contact_form_submit',
    value: 5 // Higher value for conversion events
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

// Enhanced ecommerce events for service bookings
export const trackServiceView = (serviceName: string, servicePrice?: number) => {
  trackEvent('view_item', {
    currency: 'MYR',
    value: servicePrice || 0,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: 'gearbox_service',
      quantity: 1,
      price: servicePrice || 0
    }]
  });
};

export const trackServiceBooking = (serviceName: string, servicePrice?: number) => {
  trackEvent('begin_checkout', {
    currency: 'MYR',
    value: servicePrice || 0,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: 'gearbox_service',
      quantity: 1,
      price: servicePrice || 0
    }]
  });
};