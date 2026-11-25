import { SERVICE_PAGES, SubPageData } from './servicePages';
import { LOCATION_PAGES } from './locationPages';

export const ALL_SUB_PAGES: SubPageData[] = [...SERVICE_PAGES, ...LOCATION_PAGES];

export const SUB_PAGES_BY_SLUG: Record<string, SubPageData> = Object.fromEntries(
  ALL_SUB_PAGES.map((p) => [p.slug, p])
);

export { SERVICE_PAGES, LOCATION_PAGES };
export type { SubPageData };
