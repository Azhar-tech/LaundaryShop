/* Shared header + footer for every page.
   Reads data-page from <body> to highlight the active link. */

(function () {
  const phone = "0323 555 7878";
  const phoneRaw = "+923235557878";
  const address = "F10/2, Idrees Market, Islamabad";
  const hours = "Open 8:00am – 10:00pm, daily";

  const LOGO_SVG = `
    <span class="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2c2.2 2.2 3.3 4.4 3.3 6.6 0 1.8-1.5 3.3-3.3 3.3S8.7 10.4 8.7 8.6c0-2.2 1.1-4.4 3.3-6.6Z" fill="currentColor"/>
        <path d="M5 14c1.5-1 3-1.4 4.5-1.4 1.2 0 2 .35 2.5.8.5-.45 1.3-.8 2.5-.8 1.5 0 3 .4 4.5 1.4 1.3.9 2 2.1 2 3.3 0 1.3-.8 2.6-2.4 3.4-1.6.8-3.8 1.3-6.6 1.3s-5-.5-6.6-1.3C3.8 19.9 3 18.6 3 17.3 3 16.1 3.7 14.9 5 14Z" fill="currentColor" opacity=".85"/>
      </svg>
    </span>
  `;

  const LOGO = `
    <a class="logo" href="index.html" aria-label="New Way Dry Cleaners — Home">
      ${LOGO_SVG}
      <span class="logo-text">
        <span class="a">New Way</span>
        <span class="b">Dry Cleaners</span>
      </span>
    </a>
  `;

  const NAV_LINKS = [
    { href: "index.html", key: "home", label: "Home" },
    { href: "services.html", key: "services", label: "Services" },
    { href: "about.html", key: "about", label: "About" },
    { href: "contact.html", key: "contact", label: "Contact" },
  ];

  function header(activeKey) {
    return `
      <header class="site-header">
        <div class="container nav">
          ${LOGO}
          <nav class="nav-links" aria-label="Primary">
            ${NAV_LINKS.map(l =>
              `<a href="${l.href}" class="${l.key === activeKey ? 'active' : ''}">${l.label}</a>`
            ).join('')}
          </nav>
          <div class="nav-cta">
            <a class="nav-phone" href="tel:${phoneRaw}" title="Call us">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              ${phone}
            </a>
            <a class="btn btn-primary" href="contact.html#book">
              Book pickup
              <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </header>
    `;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="foot-grid">
            <div>
              ${LOGO}
              <p class="blurb" style="margin-top:18px">
                Trusted dry cleaning, washing &amp; steam press in F10 Islamabad — with free pickup &amp; delivery anywhere in the twin cities.
              </p>
              <div class="foot-social" style="margin-top:18px">
                <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.34 11.892-11.894 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="services.html#dry-cleaning">Dry Cleaning</a></li>
                <li><a href="services.html#washing">Wash &amp; Fold</a></li>
                <li><a href="services.html#steam">Steam Press</a></li>
                <li><a href="services.html#sofa">Sofa Cleaning</a></li>
                <li><a href="services.html#carpet">Carpet Cleaning</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="contact.html#book">Book pickup</a></li>
                <li><a href="services.html">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit / Call</h4>
              <ul>
                <li>${address}</li>
                <li><a href="tel:${phoneRaw}">${phone}</a></li>
                <li>${hours}</li>
              </ul>
            </div>
          </div>
          <div class="foot-bot">
            <span>© ${new Date().getFullYear()} New Way Dry Cleaners. All rights reserved.</span>
            <span>Made with care in Islamabad</span>
          </div>
        </div>
      </footer>
    `;
  }

  // Inject when DOM is ready
  function inject() {
    const body = document.body;
    const page = body.dataset.page || "";
    // Header at top
    const headerHolder = document.createElement('div');
    headerHolder.innerHTML = header(page);
    body.insertBefore(headerHolder.firstElementChild, body.firstChild);
    // Footer at bottom (but before any tweaks panel root)
    const footerHolder = document.createElement('div');
    footerHolder.innerHTML = footer();
    body.appendChild(footerHolder.firstElementChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
