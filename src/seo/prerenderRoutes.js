import { BLOG_POSTS } from '../content/blog/posts.js';

/** Canonical pathnames (no trailing slash except home). */
export const STATIC_PATHS = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/services',
  '/new-way-dry-cleaners-f10',
  '/pak-way-dry-cleaners-g15',
  '/laundry-service-islamabad',
  '/dry-cleaning-islamabad',
  '/ironing-service-islamabad',
  '/laundry-near-me-islamabad',
  '/dry-cleaners-near-me-islamabad',
];

export function getPrerenderPaths() {
  return [...STATIC_PATHS, ...BLOG_POSTS.map((p) => `/blog/${p.slug}`)];
}
