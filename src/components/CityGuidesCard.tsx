import Link from 'next/link';
import { LOCATION_PAGES, SERVICE_PAGES } from '@/data/allSubPages';

export default function CityGuidesCard({ currentSlug = '' }: { currentSlug?: string }) {
  return (
    <div className="city-guides-card reveal-up" style={{ marginTop: '36px' }}>
      <h2 className="city-guides-title">
        More Memphis SR-22 Guides &amp; Mid-South Service Areas
      </h2>
      <p className="city-guides-sub">
        The Tennessee DPS SR-22 filing is statewide, while your quote depends on how you
        drive and what is printed on your state notice. Explore dedicated local guides and
        specialized Tennessee filing pages below:
      </p>

      <div className="city-guides-divider" />

      <p
        className="city-guides-sub"
        style={{ marginTop: '12px', marginBottom: '10px', fontWeight: 700, color: '#ffffff' }}
      >
        Specialized Tennessee SR-22 Service Guides:
      </p>
      <ul className="city-guides-grid" style={{ marginBottom: '18px' }}>
        {SERVICE_PAGES.map((srv) => {
          const isCurrent = srv.slug === currentSlug;
          return (
            <li key={srv.slug}>
              <Link
                href={`/${srv.slug}`}
                className={isCurrent ? 'is-current' : ''}
              >
                {srv.shortTitle}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="city-guides-divider" />

      <p
        className="city-guides-sub"
        style={{ marginTop: '12px', marginBottom: '10px', fontWeight: 700, color: '#ffffff' }}
      >
        Memphis &amp; Mid-South Communities We Help:
      </p>
      <ul className="city-guides-grid">
        {LOCATION_PAGES.map((loc) => {
          const isCurrent = loc.slug === currentSlug;
          return (
            <li key={loc.slug}>
              <Link
                href={`/${loc.slug}`}
                className={isCurrent ? 'is-current' : ''}
              >
                {loc.shortTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
