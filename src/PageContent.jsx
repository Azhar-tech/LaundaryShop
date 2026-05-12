import { useMemo } from 'react';
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';

/** Map static HTML filenames to SPA paths (homepage markup still uses *.html links). */
function rewriteStaticLinks(html) {
  return html.replace(
    /href="(index|services|about|contact)\.html(#[^"]*)?"/g,
    (_, page, fragment = '') => {
      const path =
        page === 'index' ? '/' : page === 'services' ? '/services' : page === 'about' ? '/about' : '/contact';
      return `href="${path}${fragment || ''}"`;
    },
  );
}

export function PageContent({ html }) {
  const content = useMemo(() => rewriteStaticLinks(html), [html]);

  const options = {
    replace(domNode) {
      if (domNode.type !== 'tag' || domNode.name !== 'a' || !domNode.attribs?.href) return undefined;
      const href = domNode.attribs.href;
      if (!(href.startsWith('/') && !href.startsWith('//'))) return undefined;

      const props = attributesToProps(domNode.attribs);
      delete props.href;

      return (
        <Link {...props} to={href}>
          {domToReact(domNode.children, options)}
        </Link>
      );
    },
  };

  return <>{parse(content, options)}</>;
}
