import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteContent';

export default function Footer({ showCredits = true }: { showCredits?: boolean }) {
  return (
    <footer className="site-footer" id="colophon">
      <div className="footer-container">
        <p className="footer-nap">
          <strong>{SITE_CONFIG.name}</strong>
          <span>{SITE_CONFIG.cityState}</span>
          <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneDisplay}</a>
          <a href={SITE_CONFIG.mapExternalUrl} target="_blank" rel="noopener noreferrer">
            Map
          </a>
          <span>·</span>
          <Link href="/privacy">Privacy</Link>
        </p>
        {showCredits && <p className="footer-summary">{SITE_CONFIG.footerSummary}</p>}
        <p className="footer-copy">© {SITE_CONFIG.name}</p>
        {showCredits && <p className="footer-credits">{SITE_CONFIG.photoDisclaimer}</p>}
      </div>
    </footer>
  );
}
