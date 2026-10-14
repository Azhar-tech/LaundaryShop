import { LOCATIONS, getWhatsAppUrl } from '../../seo/constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

/** Shared end-of-post CTA for blog articles. */
export function blogBookCtaHtml({ highlight = 'both' } = {}) {
  const nwWa = getWhatsAppUrl(NW);
  const pwWa = getWhatsAppUrl(PW);

  const shopLines =
    highlight === 'newWay'
      ? `<p style="margin-top:14px;font-size:15px;">WhatsApp <a href="${nwWa}" target="_blank" rel="noopener">${NW.phoneDisplay}</a> (New Way F10) or <a href="/contact#book">book pickup online</a>.</p>`
      : highlight === 'pakway'
        ? `<p style="margin-top:14px;font-size:15px;">WhatsApp <a href="${pwWa}" target="_blank" rel="noopener">${PW.phoneDisplay}</a> (Pak Way G15) or <a href="/contact#book">book pickup online</a>.</p>`
        : `<p style="margin-top:14px;font-size:15px;">Message <a href="${nwWa}" target="_blank" rel="noopener">New Way ${NW.phoneDisplay}</a> or <a href="${pwWa}" target="_blank" rel="noopener">Pak Way ${PW.phoneDisplay}</a> — or <a href="/contact#book">pick your shop on our contact page</a>.</p>`;

  return `
  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="cta" style="margin-top:32px;">
        <div>
          <h2 style="margin-top:6px">Ready to book pickup?</h2>
          <p style="margin-top:14px">Free collection across covered Islamabad &amp; Rawalpindi areas — no minimum order.</p>
          ${shopLines}
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary btn-lg" href="/contact#book">Book pickup</a>
          <a class="btn btn-ghost btn-lg" href="/services">See services</a>
        </div>
      </div>
    </div>
  </section>`;
}
