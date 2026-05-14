import { Helmet } from 'react-helmet-async';

/** JSON-LD script for structured data (merge-safe with other Helmet tags). */
export function JsonLdScript({ id, json }) {
  const text = JSON.stringify(json);
  return (
    <Helmet>
      <script id={id} type="application/ld+json">
        {text}
      </script>
    </Helmet>
  );
}
