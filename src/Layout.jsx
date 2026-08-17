import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakToggle,
  TweakRadio,
  useTweaks,
} from './tweak/tweaksPanel.jsx';
import { HOURS_LABEL, LOCATIONS, SOCIAL_LINKS } from './seo/constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

const TWEAK_DEFAULTS = {
  theme: 'default',
  font: 'warm',
  heroVariant: 'illustration',
  dark: false,
};

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <img
        src="/logo.png"
        alt="LaundryCare.pk — New Way & Pakway Dry Cleaners, Islamabad"
        width="440"
        height="104"
        decoding="async"
      />
    </span>
  );
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`nav-dropdown${open ? ' is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="nav-dropdown-menu" role="menu">
        {items.map(({ to, label: itemLabel }) => (
          <Link key={to} to={to} role="menuitem" className="nav-dropdown-item" onClick={() => setOpen(false)}>
            {itemLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}

const SHOP_NAV_ITEMS = [
  { to: '/new-way-dry-cleaners-f10', label: 'New Way — F10' },
  { to: '/pakway-dry-cleaners-g15', label: 'Pakway — G15' },
];

const ISLAMABAD_NAV_ITEMS = [
  { to: '/laundry-near-me-islamabad', label: 'Laundry near me' },
  { to: '/dry-cleaners-near-me-islamabad', label: 'Dry cleaners near me' },
  { to: '/laundry-service-islamabad', label: 'Laundry pickup' },
  { to: '/dry-cleaning-islamabad', label: 'Dry cleaning' },
  { to: '/ironing-service-islamabad', label: 'Ironing / steam press' },
];

function NavLinkItem({ to, label, end, drawer = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          drawer ? 'nav-drawer-link' : undefined,
          isActive ? 'active' : undefined,
        ]
          .filter(Boolean)
          .join(' ')
      }
    >
      {label}
    </NavLink>
  );
}

function SiteTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.dark ? 'midnight' : t.theme);
    document.documentElement.setAttribute('data-font', t.font);
    const card = document.querySelector('.hero-main-card');
    if (card) card.style.display = t.heroVariant === 'illustration' ? '' : 'none';
    const visual = document.querySelector('.hero-visual');
    const grid = document.querySelector('.hero-grid');
    if (visual && grid) {
      if (t.heroVariant === 'none') {
        visual.style.display = 'none';
        grid.style.gridTemplateColumns = '1fr';
      } else {
        visual.style.display = '';
        grid.style.gridTemplateColumns = '';
      }
    }
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Colour palette" />
      <TweakColor
        label="Theme"
        value={t.theme}
        options={[
          ['#1E4FD9', '#E6F0FF', '#B9E8D8'],
          ['#0C7CC4', '#E1F2FB', '#C8EFE5'],
          ['#0E7A6A', '#DCF3EE', '#FFD79A'],
        ]}
        onChange={(v) => {
          const palette = [
            ['#1E4FD9', '#E6F0FF', '#B9E8D8'],
            ['#0C7CC4', '#E1F2FB', '#C8EFE5'],
            ['#0E7A6A', '#DCF3EE', '#FFD79A'],
          ];
          const map = { 0: 'default', 1: 'ocean', 2: 'lagoon' };
          const idx = palette.findIndex((p) => JSON.stringify(p) === JSON.stringify(v));
          setTweak('theme', map[idx] || 'default');
        }}
      />
      <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak('dark', v)} />

      <TweakSection label="Typography" />
      <TweakRadio
        label="Headings"
        value={t.font}
        options={['warm', 'classic', 'techy']}
        onChange={(v) => setTweak('font', v)}
      />

      <TweakSection label="Hero" />
      <TweakRadio
        label="Visual"
        value={t.heroVariant}
        options={['illustration', 'none']}
        onChange={(v) => setTweak('heroVariant', v)}
      />
    </TweaksPanel>
  );
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    queueMicrotask(() => {
      setMenuOpen(false);
    });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link className="logo" to="/" aria-label="LaundryCare.pk — Home">
            <LogoMark />
            <span className="logo-text">
              <span className="a">LaundryCare.pk</span>
              <span className="b">New Way &amp; Pakway</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <NavLinkItem to="/" label="Home" end />
            <NavLinkItem to="/services" label="Services" />
            <NavDropdown label="Our shops" items={[...SHOP_NAV_ITEMS, ...ISLAMABAD_NAV_ITEMS]} />
            <NavLinkItem to="/about" label="About" />
            <NavLinkItem to="/contact" label="Contact" />
          </nav>
          <div className="nav-trailing">
            <button
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-nav-drawer"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
            <div className="nav-cta">
            <a className="nav-phone" href={`tel:${NW.phone}`} title="Call New Way">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {NW.phoneDisplay}
            </a>
            <Link className="btn btn-primary nav-book-btn" to="/contact#book">
              Book pickup
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="nav-mobile-root">
          <div
            role="presentation"
            className="nav-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="site-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="nav-drawer"
          >
            <div className="nav-drawer-inner">
              <div className="nav-drawer-top">
                <span className="nav-drawer-title">Menu</span>
                <button type="button" className="nav-drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="nav-drawer-links" aria-label="Primary mobile">
                <NavLinkItem to="/" label="Home" end drawer />
                <NavLinkItem to="/services" label="Services" drawer />
                <NavLinkItem to="/about" label="About" drawer />
                <NavLinkItem to="/contact" label="Contact" drawer />
                <NavLinkItem to="/new-way-dry-cleaners-f10" label="New Way — F10" drawer />
                <NavLinkItem to="/pakway-dry-cleaners-g15" label="Pakway — G15" drawer />
                <NavLinkItem to="/laundry-near-me-islamabad" label="Laundry near me" drawer />
                <NavLinkItem to="/dry-cleaners-near-me-islamabad" label="Dry cleaners near me" drawer />
                <NavLinkItem to="/laundry-service-islamabad" label="Laundry — Islamabad" drawer />
                <NavLinkItem to="/dry-cleaning-islamabad" label="Dry cleaning — Islamabad" drawer />
                <NavLinkItem to="/ironing-service-islamabad" label="Ironing — Islamabad" drawer />
              </nav>
              <div className="nav-drawer-cta">
                <a className="btn btn-ghost btn-block" href={`tel:${NW.phone}`}>
                  Call New Way {NW.phoneDisplay}
                </a>
                <a className="btn btn-ghost btn-block" href={`tel:${PW.phone}`}>
                  Call Pakway {PW.phoneDisplay}
                </a>
                <Link className="btn btn-primary btn-block" to="/contact#book">
                  Book pickup
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Outlet />

      <footer className="site-footer">
        <div className="container">
          <div className="foot-grid">
            <div>
              <Link className="logo" to="/" aria-label="LaundryCare.pk — Home">
                <LogoMark />
                <span className="logo-text">
                  <span className="a">LaundryCare.pk</span>
                  <span className="b">New Way &amp; Pakway</span>
                </span>
              </Link>
              <p className="blurb" style={{ marginTop: '18px' }}>
                Dry cleaning, washing &amp; steam press at two Islamabad locations — F-10 Idrees Market and G-15 Century Mall Plaza.
              </p>
              <div className="foot-social" style={{ marginTop: '18px' }}>
                <a href={`https://wa.me/${NW.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp New Way">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.34 11.892-11.894 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
                  </svg>
                </a>
                {SOCIAL_LINKS.instagram ? (
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                ) : null}
                {SOCIAL_LINKS.facebook ? (
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/services#dry-cleaning">Dry Cleaning</Link>
                </li>
                <li>
                  <Link to="/services#washing">Wash & Fold</Link>
                </li>
                <li>
                  <Link to="/services#steam">Steam Press</Link>
                </li>
                <li>
                  <Link to="/services#sofa">Sofa Cleaning</Link>
                </li>
                <li>
                  <Link to="/services#carpet">Carpet Cleaning</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Our shops</h4>
              <ul>
                <li>
                  <Link to="/new-way-dry-cleaners-f10">New Way — F10</Link>
                </li>
                <li>
                  <Link to="/pakway-dry-cleaners-g15">Pakway — G15</Link>
                </li>
                <li>
                  <Link to="/laundry-near-me-islamabad">Laundry near me</Link>
                </li>
                <li>
                  <Link to="/dry-cleaners-near-me-islamabad">Dry cleaners near me</Link>
                </li>
                <li>
                  <Link to="/contact#book">Book pickup</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Popular in Islamabad</h4>
              <ul>
                <li>
                  <Link to="/laundry-service-islamabad">Laundry pickup Islamabad</Link>
                </li>
                <li>
                  <Link to="/dry-cleaning-islamabad">Dry cleaning Islamabad</Link>
                </li>
                <li>
                  <Link to="/ironing-service-islamabad">Ironing / steam press</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact#book">Book pickup</Link>
                </li>
                <li>
                  <Link to="/services">Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>New Way — F10</h4>
              <ul>
                <li>{NW.fullAddress}</li>
                <li>
                  <a href={`tel:${NW.phone}`}>{NW.phoneDisplay}</a>
                </li>
                <li>{HOURS_LABEL}</li>
              </ul>
            </div>
            <div>
              <h4>Pakway — G15</h4>
              <ul>
                <li>{PW.fullAddress}</li>
                <li>
                  <a href={`tel:${PW.phone}`}>{PW.phoneDisplay}</a>
                </li>
                <li>{HOURS_LABEL}</li>
              </ul>
            </div>
          </div>
          <div className="foot-bot">
            <span>© {new Date().getFullYear()} LaundryCare.pk — New Way &amp; Pakway Dry Cleaners.</span>
            <span>Made with care in Islamabad</span>
          </div>
        </div>
      </footer>

      <SiteTweaks />
    </>
  );
}
