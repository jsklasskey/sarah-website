import { useEffect } from 'react';

interface AnalyticsHook {
  trackEvent: (category: string, action: string, label: string) => void;
}

export function useAnalytics(): AnalyticsHook {
  // Track page views
  useEffect(() => {
    const trackPageView = (): void => {
      const path = window.location.pathname + window.location.hash;
      console.log(`Page View: ${path}`);
      // In a real app, you'd use:
      // if (typeof window.gtag === 'function') {
      //   window.gtag('config', 'G-XXXXXXXXXX', {
      //     page_path: path
      //   });
      // }
    };

    // Track on mount
    trackPageView();

    // Track on hash change
    const handleHashChange = (): void => {
      trackPageView();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to track events
  const trackEvent = (category: string, action: string, label: string): void => {
    console.log(`Analytics Event: ${category} - ${action} - ${label}`);
    // In a real app, you'd use:
    // if (typeof window.gtag === 'function') {
    //   window.gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    //   });
    // }
  };

  return { trackEvent };
}