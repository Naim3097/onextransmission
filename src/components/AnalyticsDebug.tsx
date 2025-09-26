'use client';

import { useEffect } from 'react';

export default function AnalyticsDebug() {
  useEffect(() => {
    // Debug logging for GTM
    console.log('🔍 Analytics Debug Information:');
    console.log('GTM ID:', process.env.NEXT_PUBLIC_GTM_ID);
    console.log('GA4 ID:', process.env.NEXT_PUBLIC_GA_ID);
    
    // Check if dataLayer exists
    if (typeof window !== 'undefined') {
      console.log('DataLayer exists:', !!window.dataLayer);
      console.log('DataLayer length:', window.dataLayer?.length || 0);
      console.log('GTAG exists:', !!window.gtag);
      
      // Send a test event
      setTimeout(() => {
        console.log('📊 Sending test event...');
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'debug_test',
            test_parameter: 'analytics_debug'
          });
        }
        if (window.gtag) {
          window.gtag('event', 'debug_test', {
            event_category: 'debug',
            event_label: 'analytics_test'
          });
        }
      }, 2000);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
      Debug: Analytics Loaded
    </div>
  );
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}