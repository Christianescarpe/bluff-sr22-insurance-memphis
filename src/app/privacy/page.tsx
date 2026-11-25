import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PhoneButton from '@/components/PhoneButton';
import { SITE_CONFIG } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Privacy — Bluff SR22 Insurance Memphis',
  description:
    'Privacy information for Bluff SR22 Insurance Memphis in Memphis, TN. Call (901) 695-4119.',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/privacy`,
  },
  openGraph: {
    title: 'Privacy — Bluff SR22 Insurance Memphis',
    description:
      'Privacy information for Bluff SR22 Insurance Memphis in Memphis, TN. Call (901) 695-4119.',
    url: `${SITE_CONFIG.siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="site-main">
        <section className="subpage-hero">
          <div className="editorial-container reveal-up">
            <h1>Privacy</h1>
            <p>{SITE_CONFIG.name} · Memphis, TN</p>
          </div>
          <div className="hero-wave-bottom" aria-hidden="true">
            <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
              <path
                d="M0,38 Q460,75 920,42 T1440,12 L1440,70 L0,70 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        <section className="section-white-editorial">
          <div className="editorial-container reveal-up">
            <div className="editorial-body">
              <p>
                Bluff SR22 Insurance Memphis (Memphis, TN) helps drivers get a filing-ready
                SR-22 quote by phone. This site has no quote forms, no email collection,
                and no submit buttons. If you call{' '}
                <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneDisplay}</a>, we use the
                information you share on that call to help an insurer quote coverage that
                can be filed with the Tennessee Department of Safety and Homeland Security.
              </p>
              <p>
                The website may log standard server data used to host and secure the pages
                (for example, IP address, browser type, and pages requested). We do not
                sell personal information from this site. We do not run an account login or
                mailing list here.
              </p>
              <p>
                Official Tennessee DPS SR-22 rules live on the state’s sites, not on ours.
                For questions about this page, call {SITE_CONFIG.phoneDisplay}. Address:{' '}
                {SITE_CONFIG.cityState}.
              </p>
              <p style={{ marginTop: '24px' }}>
                <Link href="/">← Back to SR22 Insurance in Memphis, TN</Link>
              </p>
            </div>
            <div style={{ marginTop: '28px' }}>
              <PhoneButton variant="blue" />
            </div>
          </div>
        </section>
      </main>

      <Footer showCredits={false} />
    </>
  );
}
