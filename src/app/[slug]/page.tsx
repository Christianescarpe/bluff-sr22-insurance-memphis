import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PhoneButton from '@/components/PhoneButton';
import FaqAccordion from '@/components/FaqAccordion';
import CityGuidesCard from '@/components/CityGuidesCard';
import Footer from '@/components/Footer';
import { ALL_SUB_PAGES, SUB_PAGES_BY_SLUG } from '@/data/allSubPages';
import { IMAGES, SITE_CONFIG } from '@/data/siteContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SUB_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SUB_PAGES_BY_SLUG[slug];
  if (!page) return {};

  const canonicalUrl = `${SITE_CONFIG.siteUrl}/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: page.metaTitle,
      description: page.metaDesc,
      images: [
        {
          url: '/assets/photo-keys.webp',
          width: 1200,
          height: 800,
          alt: page.h1,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDesc,
      images: ['/assets/photo-keys.webp'],
    },
  };
}

export default async function SubPage({ params }: PageProps) {
  const { slug } = await params;
  const page = SUB_PAGES_BY_SLUG[slug];

  if (!page) {
    notFound();
  }

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: SITE_CONFIG.name,
        url: `${SITE_CONFIG.siteUrl}/${page.slug}`,
        telephone: SITE_CONFIG.phoneSchema,
        image: `${SITE_CONFIG.siteUrl}/assets/logo.svg`,
        description: page.metaDesc,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Memphis',
          addressRegion: 'TN',
          addressCountry: 'US',
        },
        areaServed: page.areaLabel
          ? [page.areaLabel, 'Memphis', 'Tennessee']
          : ['Memphis', 'Tennessee'],
        hasMap: SITE_CONFIG.mapExternalUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.schemaAnswer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <main id="primary" className="site-main">
        {/* 1. HERO SECTION */}
        <section
          className="hero-section"
          style={{ '--hero-bg': `url('${IMAGES.heroBg}')` } as CSSProperties}
        >
          <div className="hero-container">
            <div className="hero-col-text reveal-up">
              <h1 className="hero-title">{page.h1}</h1>
              <p className="hero-subtitle">{page.heroSubtitle}</p>
              <div className="hero-cta-wrap">
                <PhoneButton variant="white" />
              </div>

              <div className="hero-call-card">
                <p className="hero-call-kicker">Call for a filing-ready quote</p>
                <ul className="hero-call-list">
                  {page.heroBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hero-col-image reveal-up">
              <div className="leaf-image-frame">
                <img
                  src={page.heroImage}
                  alt={page.h1}
                  width={540}
                  height={370}
                  fetchPriority="high"
                />
              </div>
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

        {/* 2. INTRO SECTION */}
        <section className="intro-section">
          <div className="decor-circle-intro" />
          <div className="editorial-container reveal-up">
            <h2 className="editorial-h2">{page.introHeading}</h2>
            <div className="intro-prose">
              {page.introParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              {page.introInternalLink && (
                <p>
                  Review{' '}
                  <Link href={page.introInternalLink.href}>
                    {page.introInternalLink.label}
                  </Link>
                  {page.introInternalLink.contextAfter}
                </p>
              )}
            </div>
            <div className="intro-cta-wrap">
              <PhoneButton variant="blue" />
            </div>
          </div>
        </section>

        {/* 3. BLUE WAVE SPLIT 1 */}
        <section
          className="section-blue-wave"
          style={
            { '--bg-photo': `url('${page.blueWave1Images[0]}')` } as CSSProperties
          }
        >
          <div className="wave-top" aria-hidden="true">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0,0 L1440,42 L1440,60 L0,60 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="section-blue-inner">
            <div className="split-container reveal-up">
              <div className="split-col-images">
                {page.blueWave1Images.map((img, i) => (
                  <div key={i} className="split-stack-img-wrap">
                    <img
                      src={img}
                      alt={`${page.shortTitle} SR-22 policy guidance`}
                      loading="lazy"
                      width={360}
                      height={200}
                    />
                  </div>
                ))}
              </div>
              <div className="split-col-content">
                <div className="split-text-block">
                  <h2 className="split-h2-light">{page.blueWave1.title}</h2>
                  <div className="split-body-light">
                    {page.blueWave1.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {page.blueWave1.externalLink && (
                      <p>
                        {page.blueWave1.externalLink.before}
                        <a
                          href={page.blueWave1.externalLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {page.blueWave1.externalLink.label}
                        </a>
                        {page.blueWave1.externalLink.after}
                      </p>
                    )}
                  </div>
                </div>
                <div className="split-cta-row">
                  <PhoneButton variant="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="wave-bottom" aria-hidden="true">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0,0 L1440,0 L1440,18 L0,60 Z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* 4. LIGHT FADED-PHOTO SPLIT */}
        <section
          className="section-light-split"
          style={
            { '--bg-photo': `url('${page.lightSplitImages[0]}')` } as CSSProperties
          }
        >
          <div className="decor-circle-left" />
          <div className="split-container reveal-up">
            <div className="split-col-images">
              {page.lightSplitImages.map((img, i) => (
                <div key={i} className="split-stack-img-wrap">
                  <img
                    src={img}
                    alt={`Tennessee DPS SR-22 filing rules for ${page.shortTitle}`}
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
              ))}
            </div>
            <div className="split-col-content">
              <div className="split-text-block">
                <h2 className="split-h2-dark">{page.lightSplit.title}</h2>
                <div className="split-body-dark">
                  {page.lightSplit.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {page.lightSplit.bullets && (
                    <ul className="split-bullets-dark">
                      {page.lightSplit.bullets.map((b) => (
                        <li key={b.lead}>
                          <strong>{b.lead}</strong> {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="split-cta-row">
                <PhoneButton variant="blue" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. BLUE WAVE SPLIT 2 */}
        <section
          className="section-blue-wave"
          style={
            { '--bg-photo': `url('${page.blueWave2Images[0]}')` } as CSSProperties
          }
        >
          <div className="wave-top" aria-hidden="true">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0,0 L1440,42 L1440,60 L0,60 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="section-blue-inner">
            <div className="split-container reveal-up">
              <div className="split-col-images">
                {page.blueWave2Images.map((img, i) => (
                  <div key={i} className="split-stack-img-wrap">
                    <img
                      src={img}
                      alt={`Continuous Tennessee SR-22 compliance — ${page.shortTitle}`}
                      loading="lazy"
                      width={360}
                      height={200}
                    />
                  </div>
                ))}
              </div>
              <div className="split-col-content">
                <div className="split-text-block">
                  <h2 className="split-h2-light">{page.blueWave2.title}</h2>
                  <div className="split-body-light">
                    {page.blueWave2.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="split-cta-row">
                  <PhoneButton variant="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="wave-bottom" aria-hidden="true">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0,0 L1440,0 L1440,18 L0,60 Z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* 6. WHITE EDITORIAL CHECKLIST SECTION */}
        <section className="section-white-editorial">
          <div className="editorial-container reveal-up">
            <div className="editorial-block">
              <h2 className="editorial-h2">{page.checklistSection.title}</h2>
              <div className="editorial-body">
                <p>{page.checklistSection.intro}</p>
                <ul>
                  {page.checklistSection.items.map((item) => (
                    <li key={item.lead}>
                      <strong>{item.lead}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ ACCORDION + CITY & SERVICE GUIDES DIRECTORY */}
        <section
          className="section-white-editorial section-faq"
          style={{ paddingTop: '8px' }}
        >
          <div className="editorial-container reveal-up">
            <h2 className="editorial-h2">
              Frequently Asked Questions — {page.shortTitle}
            </h2>
            <p className="section-lede">
              Plain answers aligned with Tennessee DPS rules. Your state notice always
              controls the details.
            </p>
            <FaqAccordion items={page.faqs} />
            <CityGuidesCard currentSlug={page.slug} />
          </div>
        </section>

        {/* 8. PRE-FOOTER BLUE WAVE CTA BANNER */}
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
                Call <strong>{SITE_CONFIG.name}</strong> for a filing-ready SR-22 quote
                that meets Tennessee DPS requirements.
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
