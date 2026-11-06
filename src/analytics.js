import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LOCATIONS } from './seo/constants.js';

const SHOP_LABEL = {
  newWay: 'new_way',
  pakway: 'pak_way',
};

let scriptRequested = false;
let clicksBound = false;

function measurementId() {
  return String(import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();
}

function digits(value) {
  return String(value || '').replace(/\D/g, '');
}

function shopIndex() {
  const byDigits = new Map();
  const coords = [];
  for (const loc of Object.values(LOCATIONS)) {
    const shop = SHOP_LABEL[loc.id] || 'unknown';
    for (const raw of [loc.phone, loc.phoneSecondary]) {
      const d = digits(raw);
      if (!d) continue;
      byDigits.set(d, shop);
      if (d.startsWith('92') && d.length > 2) byDigits.set(`0${d.slice(2)}`, shop);
    }
    if (loc.latitude != null && loc.longitude != null) {
      coords.push({ shop, lat: String(loc.latitude), lng: String(loc.longitude) });
    }
  }
  return { byDigits, coords };
}

const SHOPS = shopIndex();

export function shopFromHref(href, pathname = '') {
  const url = String(href || '');
  const d = digits(url.split('?')[0]);
  if (d && SHOPS.byDigits.has(d)) return SHOPS.byDigits.get(d);

  const mapsHit = SHOPS.coords.find(
    ({ lat, lng }) => url.includes(lat) && url.includes(lng),
  );
  if (mapsHit) return mapsHit.shop;

  if (pathname.includes('new-way-dry-cleaners-f10')) return 'new_way';
  if (pathname.includes('pak-way-dry-cleaners-g15')) return 'pak_way';
  return 'unknown';
}

function closestAnchor(node) {
  let el = node;
  while (el && el !== document && el.nodeType === 1) {
    if (el.tagName === 'A' && el.href) return el;
    el = el.parentElement;
  }
  return null;
}

function emit(name, params) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

export function trackPageView(pathname) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: pathname,
    page_title: document.title,
    page_location: window.location.href,
  });
}

function onDelegatedClick(event) {
  const anchor = closestAnchor(event.target);
  if (!anchor) return;
  const href = anchor.href || '';
  const page = window.location.pathname;
  const shop = shopFromHref(href, page);

  if (/^tel:/i.test(href) || anchor.getAttribute('href')?.startsWith('tel:')) {
    emit('call_click', { shop, number: digits(href), page });
    return;
  }
  if (href.includes('wa.me')) {
    emit('whatsapp_click', { shop, page });
    return;
  }
  if (href.includes('google.com/maps') || href.includes('maps.google.com')) {
    emit('directions_click', { shop, page });
  }
}

export function bindDelegatedClicks() {
  if (typeof document === 'undefined' || clicksBound) return;
  document.addEventListener('click', onDelegatedClick);
  clicksBound = true;
}

function installGtagStub() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
}

function injectGtag(id) {
  if (scriptRequested) return;
  scriptRequested = true;
  installGtagStub();
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', id, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

function scheduleInject(id) {
  const run = () => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(() => injectGtag(id), { timeout: 3500 });
    } else {
      window.setTimeout(() => injectGtag(id), 1);
    }
  };
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run, { once: true });
}

/** Load gtag.js after window load + idle. No-op during SSR or when the ID is unset. */
export function loadAnalytics() {
  if (typeof window === 'undefined') return;
  const id = measurementId();
  if (!id) return;
  scheduleInject(id);
}

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    bindDelegatedClicks();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
}
