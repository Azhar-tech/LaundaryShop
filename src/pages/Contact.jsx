import { PageContent } from '../PageContent.jsx';
import { SeoHead } from '../seo/SeoHead.jsx';
import { buildContactShopPanel } from '../content/seo/shopSections.js';
import { LOCATIONS } from '../seo/constants.js';

const nwPanel = buildContactShopPanel(LOCATIONS.newWay, 'new-way');
const pwPanel = buildContactShopPanel(LOCATIONS.pakway, 'pakway');

const MARKUP = `
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow" style="margin-bottom:14px">Get in touch</span>
      <h1>Contact New Way or Pakway</h1>
      <p class="lede">Two shops under LaundryCare.pk — pick the one nearest you. WhatsApp, call, or walk in. Free pickup across Islamabad with no minimum order.</p>
      <p class="lede" style="margin-top:12px;font-size:16px;max-width:52ch"><a href="/#faq">Read quick answers</a> on the homepage, then message your shop directly below.</p>
    </div>
  </section>

  <section class="section" id="book">
    <div class="container">
      ${nwPanel}
      <div style="height:48px" aria-hidden="true"></div>
      ${pwPanel}
    </div>
  </section>
`;

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact New Way & Pakway — LaundryCare.pk Islamabad"
        description="Contact LaundryCare.pk: New Way F10 (0323 555 7878) or Pakway G15 (0349 596 3359). Book laundry pickup on WhatsApp · open 8am–10pm daily."
        path="/contact"
        keywords="LaundryCare.pk contact, New Way F10, Pakway G15, book laundry pickup Islamabad WhatsApp"
      />
      <PageContent html={MARKUP} />
    </>
  );
}
