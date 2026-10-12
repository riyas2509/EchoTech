/**
 * EchoTech Analytics & Conversion Tracking Utility
 * Provides lightweight, privacy-conscious event measurement.
 * Dispatches to window.gtag if present, custom DOM events for GTM/listeners, and console in dev.
 */

export type ConversionEventName =
  | 'cta_click'
  | 'product_card_select'
  | 'outbound_product_click'
  | 'contact_inquiry_click'
  | 'navigation_click';

export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (eventName: ConversionEventName, params?: EventParams): void => {
  try {
    // 1. Dispatch custom window event for tag managers / pluggable listeners
    if (typeof window !== 'undefined') {
      const customEvent = new CustomEvent('echotech_analytics', {
        detail: { event: eventName, params: params || {} }
      });
      window.dispatchEvent(customEvent);

      // 2. Google Analytics (gtag.js) if loaded externally
      const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
      if (typeof win.gtag === 'function') {
        win.gtag('event', eventName, params);
      } else if (Array.isArray(win.dataLayer)) {
        win.dataLayer.push({ event: eventName, ...params });
      }

      // 3. Development logging
      if (import.meta.env.DEV) {
        console.log(`[Analytics Event: ${eventName}]`, params);
      }
    }
  } catch (err) {
    // Fail silently without disrupting user interaction
    console.debug('Analytics error:', err);
  }
};
