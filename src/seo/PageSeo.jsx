import { SeoHead } from './SeoHead.jsx';
import { getPageMeta } from './pageMeta.js';

export function PageSeo({ path, ...rest }) {
  const meta = getPageMeta(path);
  if (!meta) {
    throw new Error(`Missing PAGE_META for ${path}`);
  }
  return (
    <SeoHead
      path={meta.path}
      title={meta.title}
      exactTitle={meta.exactTitle}
      description={meta.description}
      keywords={meta.keywords}
      {...rest}
    />
  );
}
