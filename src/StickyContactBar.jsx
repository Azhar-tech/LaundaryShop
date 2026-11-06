import { useLocation } from 'react-router-dom';
import { LOCATIONS, getLocationPagePath, getWhatsAppUrl } from './seo/constants.js';
import { getPrerenderPaths } from './seo/prerenderRoutes.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;
const NW_PATH = getLocationPagePath(NW);
const PW_PATH = getLocationPagePath(PW);
const KNOWN_PATHS = new Set(getPrerenderPaths());

function BarLink({ href, label, ariaLabel, kind, external }) {
  return (
    <a
      className={`sticky-contact-bar-link sticky-contact-bar-link-${kind}`}
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
    </a>
  );
}

export function StickyContactBar() {
  const { pathname } = useLocation();
  if (pathname === '/404' || !KNOWN_PATHS.has(pathname)) return null;

  let links;
  if (pathname === NW_PATH) {
    links = (
      <>
        <BarLink
          href={`tel:${NW.phone}`}
          label="Call"
          ariaLabel={`Call ${NW.name} ${NW.phoneDisplay}`}
          kind="call"
        />
        <BarLink
          href={getWhatsAppUrl(NW)}
          label="WhatsApp"
          ariaLabel={`WhatsApp ${NW.name}`}
          kind="wa"
          external
        />
      </>
    );
  } else if (pathname === PW_PATH) {
    links = (
      <>
        <BarLink
          href={`tel:${PW.phone}`}
          label="Call"
          ariaLabel={`Call ${PW.name} ${PW.phoneDisplay}`}
          kind="call"
        />
        <BarLink
          href={getWhatsAppUrl(PW)}
          label="WhatsApp"
          ariaLabel={`WhatsApp ${PW.name}`}
          kind="wa"
          external
        />
      </>
    );
  } else {
    links = (
      <>
        <BarLink
          href={getWhatsAppUrl(NW)}
          label="WhatsApp New Way"
          ariaLabel={`WhatsApp ${NW.name}`}
          kind="wa"
          external
        />
        <BarLink
          href={getWhatsAppUrl(PW)}
          label="WhatsApp Pak Way"
          ariaLabel={`WhatsApp ${PW.name}`}
          kind="wa"
          external
        />
      </>
    );
  }

  return (
    <nav className="sticky-contact-bar" aria-label="Quick contact">
      {links}
    </nav>
  );
}
