import { post as washFold } from './postWashFoldVsLaundromatIslamabad.js';
import { post as dryCleanSuits } from './postDryCleaningSuitsIslamabad.js';
import { post as pickupAreas } from './postLaundryPickupAreasIslamabad.js';

/** @typedef {typeof washFold} BlogPost */

const ALL_POSTS = [washFold, dryCleanSuits, pickupAreas];

/** Newest first */
export const BLOG_POSTS = [...ALL_POSTS].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
);

/** @param {string} slug */
export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export function formatPostDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-PK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
