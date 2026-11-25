import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import PhoneButton, { PhoneIcon } from '@/components/PhoneButton';
import CityGuidesCard from '@/components/CityGuidesCard';
import Footer from '@/components/Footer';
import { IMAGES, SITE_CONFIG } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Contact Us — Bluff SR22 Insurance Memphis | (901) 695-4119',
  description:
    'Call Bluff SR22 Insurance Memphis at (901) 695-4119 for a filing-ready Tennessee DPS SR-22 quote by phone. Service area: Memphis, TN (no online forms).',
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/contact-us`,
  },
};

export default function ContactPage() {
  return (
    <>
      <main id="primary" className="site-main">
        <section className="subpage-hero">
          <div className="editorial-container reveal-up">
            <h1>Contact Us</h1>
            <p>
              Direct phone quotes for Memphis &amp; Mid-South drivers — no online forms,
              no email collection.
            </p>
            <div style={{ marginTop: '22px' }}>
              <PhoneButton variant="white" />
            </div>
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

        <section className="contact-info-section" style={{ borderTop: 'none' }}>
          <div className="contact-info-container reveal-up">
            <div className="contact-col-left">
              <div className="contact-visual-wrap">
                <div className="contact-decor-circle" />
                <div className="leaf-image-frame">
                  <img
                    src={IMAGES.agentReview}
                    alt={SITE_CONFIG.name}
                    width={540}
                    height={360}
                  />
                </div>
              </div>
            </div>

            <div className="contact-col-right">
              <div className="contact-blue-box">
                <div className="contact-badge-pill">
                  <PhoneIcon size={15} />
                  <span>Direct Phone Assistance</span>
                </div>
                <h2 className="contact-card-heading">{SITE_CONFIG.phoneDisplay}</h2>
                <p className="contact-card-lede">
                  Have your Tennessee Department of Safety and Homeland Security notice in
                  hand when you call so your quote matches your required coverage and
                  term.
                </p>
                <div className="contact-card-divider" />
                <div className="contact-card-details">
                  <strong>Business Name:</strong> {SITE_CONFIG.name}
                  <br />
                  <strong>Service Area:</strong> {SITE_CONFIG.cityState} (no street address
                  listed)
                  <br />
                  <strong>Phone:</strong>{' '}
                  <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneDisplay}</a>
                  <br />
                  <strong>Website:</strong>{' '}
                  <a href={SITE_CONFIG.siteUrl}>sr22insurancememphistn.site</a>
                  <br />
                  <strong>Google Maps:</strong>{' '}
                  <a
                    href={SITE_CONFIG.mapExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <div className="contact-card-cta-wrap">
                  <PhoneButton variant="white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-map-section">
          <iframe
            title="Memphis, TN"
            src={SITE_CONFIG.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        <section className="section-white-editorial">
          <div className="editorial-container">
            <CityGuidesCard currentSlug="contact-us" />
          </div>
        </section>

        <section
          className="prefooter-cta-banner"
          style={{ '--bg-photo': `url('${IMAGES.agentReview}')` } as CSSProperties}
        >
          <div className="prefooter-wave-top" aria-hidden="true">
            <svg viewBox="0 0 1440 65" preserveAspectRatio="none">
              <path d="M0,65 L1440,15 L1440,65 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="prefooter-container reveal-up">
            <div className="prefooter-col-text">
              <h2 className="prefooter-heading">Need a Memphis SR-22 quote today?</h2>
              <p className="prefooter-sub">
                Call for a filing-ready SR-22 quote that meets Tennessee DPS requirements.
              </p>
              <div className="prefooter-btn-wrap">
                <PhoneButton variant="white" />
              </div>
            </div>
            <div className="prefooter-col-img">
              <div className="leaf-image-frame prefooter-leaf">
                <img
                  src={IMAGES.manDoc}
                  alt={`Call ${SITE_CONFIG.name} at ${SITE_CONFIG.phoneDisplay}`}
                  loading="lazy"
                  width={460}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showCredits={true} />
    </>
  );
}
