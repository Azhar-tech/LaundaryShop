import { Link } from 'react-router-dom';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function NotFound() {
  return (
    <>
      <SeoHead
        title="Page not found"
        description="That page is not on LaundryCare.pk. Go home or contact New Way or Pak Way to book laundry pickup in Islamabad."
        path="/404"
        robots="noindex"
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ marginBottom: 14 }}>
            404
          </span>
          <h1>Page not found</h1>
          <p className="lede">
            The link may be old or typed incorrectly. Head back to the homepage, or message a shop to book pickup.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
