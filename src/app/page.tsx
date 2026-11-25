import type { CSSProperties } from 'react';
import Link from 'next/link';
import PhoneButton, { PhoneIcon } from '@/components/PhoneButton';
import FaqAccordion from '@/components/FaqAccordion';
import CityGuidesCard from '@/components/CityGuidesCard';
import Footer from '@/components/Footer';
import { LOCATION_PAGES } from '@/data/allSubPages';
import {
  FAQ_ITEMS,
  HOME_JSON_LD,
  IMAGES,
  LANDMARKS,
  PROCESS_STEPS,
  SERVICE_CARDS,
  SITE_CONFIG,
} from '@/data/siteContent';

const SERVICE_CARD_HREFS: Record<string, { href: string; label: string }> = {
  '1': { href: '/sr22-insurance-quotes', label: 'Same-day quote details →' },
  '2': { href: '/non-owner-sr22-insurance', label: 'Non-owner SR-22 guide →' },
  '3': { href: '/owner-sr22-insurance', label: 'Owner SR-22 coverage →' },
  '4': { href: '/dui-sr22-insurance', label: 'DUI & high-risk help →' },
  '5': { href: '/sr22-insurance-requirements', label: 'TN reinstatement rules →' },
  '6': { href: '/sr22-insurance-requirements', label: 'Lapse & refiling rules →' },
  '7': { href: '/sr22-insurance-requirements', label: 'Suspension-length guide →' },
  '8': { href: '/sr22-insurance-quotes', label: 'Compare TN carriers →' },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_JSON_LD) }}
      />

      <main id="primary" className="site-main">
        {/* 1. HERO SECTION */}
        <section
          className="hero-section"
          id="quote"
          style={{ '--hero-bg': `url('${IMAGES.heroBg}')` } as CSSProperties}
        >
          <div className="hero-container">
            <div className="hero-col-text reveal-up">
              <h1 className="hero-title">SR-22 Insurance Help in Memphis, Tennessee</h1>
              <p className="hero-subtitle">
                Same-day electronic filing help with Tennessee DPS
              </p>
              <div className="hero-cta-wrap">
                <PhoneButton variant="white" />
              </div>

              <div className="hero-call-card">
                <p className="hero-call-kicker">Call for a filing-ready quote</p>
                <ul className="hero-call-list">
                  <li>SR-22 certificate with Tennessee DPS</li>
                  <li>Electronic filing by a TN-licensed liability insurer</li>
                  <li>Help matching the liability minimums on your notice</li>
                </ul>
              </div>
            </div>

            <div className="hero-col-image reveal-up">
              <div className="leaf-image-frame">
                <img
                  src={IMAGES.heroKeys}
                  alt="Driver receiving car keys after completing auto insurance paperwork"
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

        {/* 2. DIRECT ANSWER / INTRO SECTION */}
        <section className="intro-section" id="direct-answer">
          <div className="decor-circle-intro" />
          <div className="editorial-container reveal-up">
            <h2 className="editorial-h2">
              SR-22 is proof of future financial responsibility
            </h2>
            <div className="intro-prose">
              <p>
                An SR-22 is not a kind of car insurance. Tennessee DPS describes it as
                proof of future financial responsibility required under Tennessee Code
                Annotated 55-12-114. When the Department of Safety and Homeland Security
                requires one, a motor vehicle liability insurer licensed through the
                Tennessee Department of Commerce and Insurance certifies your coverage and
                files that form electronically with the state. You still buy a
                policy—owner coverage if you have a vehicle, or often a non-owner policy if
                you do not. The filing is the extra step that tells Tennessee the coverage
                is in force. See the official{' '}
                <a
                  href={SITE_CONFIG.tnDpsSr22Url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TN DPS SR-22 page
                </a>
                .
              </p>
              <p>
                An insurance card alone is not the SR-22. The form must be issued by a
                liability insurance company; the Department cannot furnish blank forms. If
                the policy cancels or lapses before your required period ends, driving
                privileges can be suspended for Failure to Maintain Future Proof of
                Financial Responsibility. Bluff SR22 Insurance Memphis helps Memphis and
                Mid-South drivers get a filing-ready SR-22 quote by phone so an insurer can
                transmit it to Tennessee DPS. We do not replace DPS, and we do not file as
                the insurer; we help you get the quote that meets the notice in your hand.
              </p>
            </div>
            <div className="intro-cta-wrap">
              <PhoneButton variant="blue" />
            </div>
          </div>
        </section>

        {/* 3. BLUE WAVE SPLIT: ABOUT BLUFF SR22 & MEMPHIS DRIVERS */}
        <section
          className="section-blue-wave"
          id="about"
          style={{ '--bg-photo': `url('${IMAGES.agentReview}')` } as CSSProperties}
        >
          <div className="wave-top" aria-hidden="true">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0,0 L1440,42 L1440,60 L0,60 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="section-blue-inner">
            <div className="split-container reveal-up">
              <div className="split-col-images">
                <div className="split-stack-img-wrap">
                  <img
                    src={IMAGES.tabletForm}
                    alt="Electronic car insurance form on tablet in front of vehicle"
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
                <div className="split-stack-img-wrap">
                  <img
                    src={IMAGES.agentReview}
                    alt="Reviewing Tennessee SR-22 insurance coverage details"
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
                <div className="split-stack-img-wrap">
                  <img
                    src={IMAGES.personBlueCar}
                    alt="Auto liability insurance protection for Memphis drivers"
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
              </div>

              <div className="split-col-content">
                <div className="split-text-block">
                  <h2 className="split-h2-light">About Bluff SR22 Insurance Memphis</h2>
                  <div className="split-body-light">
                    <p>
                      Memphis drivers get pulled into SR-22 requirements from several
                      directions: DUI, accident claims, unsatisfied judgments, points or
                      conviction accumulations, implied consent, hit-and-run, reckless
                      endangerment by vehicle, and other violations TN Driver Services
                      lists as potential reasons. We work the phone so you can bind
                      coverage that a Tennessee-licensed insurer will file electronically.
                    </p>
                    <p>
                      We help drivers across Memphis and nearby communities get a quote
                      that matches Tennessee DPS rules. No office walk-in photos, no
                      invented staff bios: call and we walk the notice with you. Landmarks
                      around Memphis—Beale Street, Downtown, Midtown, East Memphis, the
                      Mississippi River bluff, I-40, and I-55—are how people describe where
                      they drive, not a substitute for the state letter.
                    </p>
                    <div className="landmarks-chips">
                      {LANDMARKS.map((landmark) => (
                        <span key={landmark} className="landmark-chip">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="split-text-block">
                  <h2 className="split-h2-light">
                    Memphis drivers, Tennessee DPS filings
                  </h2>
                  <div className="split-body-light">
                    <p>
                      Whether you park near Beale Street, commute I-40, or need a non-owner
                      filing because you live in Midtown or Downtown without a personal
                      car, Tennessee DPS still wants the same electronic certificate. Call
                      for a quote that matches the SR-22 on your notice.
                    </p>
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

        {/* 4. SERVICES CARDS SECTION (#services) */}
        <section className="section-services" id="services">
          <div className="wide-container reveal-up">
            <h2 className="editorial-h2">SR-22 help by phone</h2>
            <p className="section-lede">
              Eight ways we help Memphis drivers get a filing-ready quote. An insurer—not
              this site—files the certificate electronically with Tennessee DPS.
            </p>
            <div className="services-grid">
              {SERVICE_CARDS.map((card) => {
                const linkMeta = SERVICE_CARD_HREFS[card.num];
                return (
                  <article key={card.num} className="service-card">
                    <span className="service-num">{card.num}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    {linkMeta && (
                      <Link href={linkMeta.href} className="service-card-link">
                        {linkMeta.label}
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. LIGHT SPLIT / 6-STEP PROCESS SECTION (#how) */}
        <section
          className="section-light-split"
          id="how"
          style={{ '--bg-photo': `url('${IMAGES.familyProtect}')` } as CSSProperties}
        >
          <div className="decor-circle-left" />
          <div className="wide-container reveal-up">
            <h2 className="editorial-h2">How the Tennessee SR-22 process works</h2>
            <p className="section-lede">
              Six steps from the state notice to a certificate that stays on file.
            </p>
            <div className="steps-grid">
              {PROCESS_STEPS.map((s) => (
                <article key={s.step} className="step-card">
                  <div className="step-badge">{s.step}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
            <div className="split-cta-row" style={{ marginTop: '30px' }}>
              <PhoneButton variant="blue" />
            </div>
          </div>
        </section>

        {/* 6. MEMPHIS AREAS WE HELP + INTERACTIVE FAQ ACCORDION (#areas & #faq) */}
        <section className="section-white-editorial" id="areas">
          <div className="editorial-container reveal-up">
            <div className="city-guides-card">
              <h2 className="city-guides-title">Memphis and Mid-South areas we help</h2>
              <p className="city-guides-sub">
                The DPS filing is statewide in Tennessee. These are the communities we hear
                from most. Southaven is nearby Mississippi metro—honest service-area
                context, not a claimed street office.
              </p>
              <div className="city-guides-divider" />
              <div className="areas-pills">
                <span className="area-pill">Memphis</span>
                {LOCATION_PAGES.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/${loc.slug}`}
                    className="area-pill-link"
                  >
                    {loc.areaLabel || loc.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-white-editorial section-faq"
          id="faq"
          style={{ paddingTop: '12px' }}
        >
          <div className="editorial-container reveal-up">
            <h2 className="editorial-h2">SR-22 questions Memphis drivers ask</h2>
            <p className="section-lede">
              Plain answers citing Tennessee DPS. Your state notice still controls the
              details.
            </p>
            <FaqAccordion items={FAQ_ITEMS} />
            <CityGuidesCard currentSlug="" />
          </div>
        </section>

        {/* 7. COMPREHENSIVE TENNESSEE DPS GUIDE (#guide) */}
        <article id="guide">
          {/* Guide Part A: Blue Wave Split */}
          <section
            className="section-blue-wave"
            style={{ '--bg-photo': `url('${IMAGES.handsProtect}')` } as CSSProperties}
          >
            <div className="wave-top" aria-hidden="true">
              <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                <path d="M0,0 L1440,42 L1440,60 L0,60 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="section-blue-inner">
              <div className="split-container reveal-up">
                <div className="split-col-images">
                  <div className="split-stack-img-wrap">
                    <img
                      src={IMAGES.clipboardForm}
                      alt="Tennessee SR-22 insurance certificate checklist"
                      loading="lazy"
                      width={360}
                      height={200}
                    />
                  </div>
                  <div className="split-stack-img-wrap">
                    <img
                      src={IMAGES.tabletForm}
                      alt="Electronic SR-22 filing with Tennessee DPS"
                      loading="lazy"
                      width={360}
                      height={200}
                    />
                  </div>
                  <div className="split-stack-img-wrap">
                    <img
                      src={IMAGES.coverageShield}
                      alt="Tennessee auto liability minimum coverage"
                      loading="lazy"
                      width={360}
                      height={200}
                    />
                  </div>
                </div>

                <div className="split-col-content">
                  <div className="split-text-block">
                    <h2 className="split-h2-light">
                      SR-22 insurance in Memphis: Tennessee DPS filings, suspension-length
                      coverage, and how to get a quote
                    </h2>
                    <div className="split-body-light">
                      <p>
                        If the Tennessee Department of Safety and Homeland Security has
                        told you to file proof of future financial responsibility, you need
                        a Tennessee auto liability policy an insurer will certify to the
                        state, then an SR-22 transmitted electronically to DPS. This guide
                        explains how that works for Memphis and Mid-South drivers, what
                        “SR-22” means in Tennessee, and how to keep the filing from
                        dropping once it is on your record.
                      </p>

                      <h3 className="split-h3-light">What an SR-22 actually is</h3>
                      <p>
                        Tennessee DPS describes an SR-22 as proof of future financial
                        responsibility required under Tennessee Code Annotated 55-12-114.
                        It is a filing, not a policy. The form must be filed by an
                        insurance company licensed through the Tennessee Department of
                        Commerce and Insurance to issue motor vehicle liability insurance
                        coverage in Tennessee. The Department cannot furnish blank forms.
                        Continuous coverage matters as much as the first transmit.
                      </p>
                      <p>
                        Memphis drivers still say “SR-22 insurance” because that is how
                        most people search. DPS wants the certificate from a licensed
                        liability insurer, not a separate product you invent yourself.
                        Bluff SR22 Insurance Memphis helps you get a filing-ready quote by
                        phone so an insurer can send that certificate. We are not the
                        filing insurer, and we do not replace Tennessee DPS.
                      </p>

                      <h3 className="split-h3-light">Tennessee DPS handles the SR-22</h3>
                      <p>
                        In Tennessee, driver services and SR-22 filings go through the
                        Department of Safety and Homeland Security. Official rules live on
                        the DPS page for{' '}
                        <a
                          href={SITE_CONFIG.tnDpsSr22Url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          SR-22 Insurance
                        </a>{' '}
                        and related reinstatement guidance. Read the notice you received.
                        It names whether you need proof of future financial responsibility,
                        the dates, and what you must carry. Have that letter when you call
                        so the quote matches the order, not a guess from a ZIP code.
                      </p>
                      <p>
                        To check whether you still need an SR-22, Tennessee Driver Services
                        points drivers to the reinstatement requirements page on
                        e-services. If the SR-22 requirement is not listed, you are no
                        longer required to carry it. Consumer-facing auto insurance basics
                        are also summarized by the{' '}
                        <a
                          href={SITE_CONFIG.naicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          National Association of Insurance Commissioners
                        </a>
                        .
                      </p>
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

          {/* Guide Part B: Light Split */}
          <section
            className="section-light-split"
            style={{ '--bg-photo': `url('${IMAGES.umbrellaCover}')` } as CSSProperties}
          >
            <div className="decor-circle-left" />
            <div className="split-container reveal-up">
              <div className="split-col-images">
                <div className="split-stack-img-wrap">
                  <img
                    src={IMAGES.womanAccident}
                    alt="Auto accident liability inspection and SR-22 coverage"
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
                <div className="split-stack-img-wrap">
                  <img
                    src={IMAGES.adjusterWreck}
                    alt="Reviewing Tennessee 25/50/15 property damage and bodily injury limits"
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
                <div className="split-stack-img-wrap">
                  <img
                    src={IMAGES.redUmbrellaCar}
                    alt="Continuous Tennessee SR-22 coverage protection"
                    loading="lazy"
                    width={360}
                    height={200}
                  />
                </div>
              </div>

              <div className="split-col-content">
                <div className="split-body-dark">
                  <h3 className="split-h3-dark">
                    Who typically needs an SR-22 in Tennessee
                  </h3>
                  <p>
                    Tennessee Driver Services lists potential reasons that can require
                    SR-22 insurance, including DUI, accident claims, unsatisfied judgments,
                    accumulation of points or convictions, implied consent / refuse to
                    test, underage driving while impaired, hit-and-run, reckless
                    endangerment by vehicle, vehicular assault or homicide offenses, using
                    a motor vehicle in a felony, vehicle theft, speed contest racing, two
                    reckless driving violations in a 12-month period, and driving while
                    possessing methamphetamine. The requirement is tied to your driving
                    record and the state order, not to which neighborhood you park in.
                    Check the notice in your hand.
                  </p>
                  <p>
                    If you do not own a car, you can often satisfy the filing with a
                    non-owner liability policy that a Tennessee-licensed insurer will file
                    electronically. That covers you as a driver of vehicles you do not
                    own—a borrowed car, a rental, or a friend’s car—not a vehicle listed on
                    the policy. It is a frequent path for Midtown and Downtown Memphis
                    renters and Beale Street-area workers who do not keep a personal
                    vehicle.
                  </p>

                  <h3 className="split-h3-dark">
                    Owner coverage versus a non-owner SR-22
                  </h3>
                  <p>
                    If you own or register a vehicle, owner liability coverage insures that
                    vehicle and can carry the SR-22. If you do not own a vehicle, ask for a
                    non-owner policy that can support the filing. If you add a vehicle
                    later, tell the insurer so the policy and the certificate stay
                    accurate. The Tennessee notice and how you drive control the quote.
                  </p>

                  <h3 className="split-h3-dark">Tennessee liability minimums</h3>
                  <p>
                    Tennessee DPS publishes the minimum limits of liability required in
                    Tennessee as 25/50/15—commonly understood as $25,000 bodily injury per
                    person, $50,000 per crash, and $15,000 property damage. The policy that
                    carries your SR-22 must meet those amounts unless your notice lists
                    something different for your case. We still tell you to use the
                    liability minimums on your notice when you call, because that letter is
                    the set of numbers that will clear your specific reinstatement.
                  </p>
                </div>
                <div className="split-cta-row">
                  <PhoneButton variant="blue" />
                </div>
              </div>
            </div>
          </section>

          {/* Guide Part C: Clean White Editorial */}
          <section className="section-white-editorial">
            <div className="editorial-container reveal-up">
              <div className="editorial-body">
                <h3>How the filing reaches Tennessee DPS</h3>
                <ol>
                  <li>
                    Confirm the Tennessee requirement: owner or non-owner, coverages, and
                    the length of the suspension or revocation.
                  </li>
                  <li>
                    Call (901) 695-4119 for a filing-ready quote. There is no form on this
                    site.
                  </li>
                  <li>
                    Bind a policy that meets Tennessee liability—owner or non-owner—with a
                    TN-licensed insurer.
                  </li>
                  <li>The insurer files the certificate electronically with Tennessee DPS.</li>
                  <li>
                    You pay any Tennessee reinstatement fees directly to the state. Those
                    are separate from premium and from the insurer’s SR-22 filing fee.
                  </li>
                  <li>
                    Keep the policy in force for the length of the suspension or
                    revocation, with no lapse.
                  </li>
                </ol>
                <p>
                  Electronic transmit is required. Same-day filing help means the carrier
                  can send the certificate quickly; it does not mean DPS has already
                  updated your status. Build processing time into any plan to drive, and
                  into any trip to check license eligibility.
                </p>

                <h3>Cost: filing fee versus premium versus reinstatement</h3>
                <p>
                  Tennessee DPS states that the insurance company determines the cost of
                  this type of insurance. Insurers typically charge a modest SR-22 filing
                  fee. That is not the price of getting legal to drive. The premium for
                  high-risk, DUI, lapse, or non-owner coverage is the real cost, and it
                  varies with your record, Tennessee ZIP, vehicle if any, and the coverages
                  on the notice. Separately, you may owe reinstatement fees to the state.
                  Those state fees are not part of the insurance premium and are not this
                  brand’s rate. Bluff SR22 Insurance Memphis does not publish packaged
                  rates here because a filing-ready quote depends on your notice and
                  driving history. Call for a number that matches your situation.
                </p>

                <h3>Lapses and the suspension-length clock</h3>
                <p>
                  Tennessee does not use a single fixed three-year SR-22 term for everyone.
                  DPS says SR-22 insurance must be maintained for the length of the
                  suspension or revocation period. Example: a one-year revocation is a
                  one-year SR-22 requirement. Once maintained for that period, it may be
                  cancelled provided it is not required on any other suspension. If you
                  cancel early, miss a payment, or let a rewrite gap the filing, privileges
                  can be suspended for Failure to Maintain Future Proof of Financial
                  Responsibility. There is no invented grace period on this site.
                </p>
                <p>
                  You can switch carriers mid-term if there is no lapse: the new insurer
                  re-files electronically so DPS never sees a gap. Time the switch so the
                  new certificate is in before the old policy ends. Set payment reminders.
                  If you move from Memphis to Bartlett, park a car in Germantown, or drop a
                  vehicle and need to convert to a non-owner SR-22, tell the insurer so the
                  policy and the filing stay accurate for the rest of the term.
                </p>

                <h3>Memphis landmarks and the same statewide rules</h3>
                <p>
                  Drivers near Beale Street, Downtown Memphis, Midtown, East Memphis, and
                  the Mississippi River bluff often need non-owner filings because they do
                  not keep a personal vehicle. Commuters on I-40 and I-55 still need the
                  same DPS certificate as anyone else in Shelby County. Bartlett,
                  Germantown, Collierville, and nearby Southaven, MS sit in the same
                  Mid-South metro conversation; Tennessee filings still go through TN DPS
                  for Tennessee licenses. The filing is statewide; the quote is local to
                  how you drive and what the state printed on the notice.
                </p>
                <p>
                  Beale Street and Downtown are landmarks for where Memphis drivers live
                  and commute, not a substitute for the DPS letter. Bring that letter when
                  you call. An insurer files electronically with Tennessee DPS after you
                  bind; we help you get to that quote by phone.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* 8. MEMPHIS SERVICE AREA INFO & GOOGLE MAP SECTION (#contact) */}
        <section className="contact-info-section" id="contact">
          <div className="contact-info-container reveal-up">
            <div className="contact-col-left">
              <div className="contact-visual-wrap">
                <div className="contact-decor-circle" />
                <div className="leaf-image-frame">
                  <img
                    src={IMAGES.agentReview}
                    alt={SITE_CONFIG.name}
                    loading="lazy"
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
                <h2 className="contact-card-heading">Memphis, TN</h2>
                <p className="contact-card-lede">
                  We help Memphis drivers get a filing-ready SR-22 quote by phone. Service
                  area: Memphis, TN (no street address listed).
                </p>
                <div className="contact-card-divider" />
                <div className="contact-card-details">
                  <strong>Name:</strong> {SITE_CONFIG.name}
                  <br />
                  <strong>Service Area:</strong> {SITE_CONFIG.cityState}
                  <br />
                  <strong>Phone:</strong>{' '}
                  <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phoneDisplay}</a>
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

        <section className="contact-map-section" id="map">
          <iframe
            title="Memphis, TN"
            src={SITE_CONFIG.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        {/* 9. PRE-FOOTER BLUE WAVE CTA BANNER (#call) */}
        <section
          className="prefooter-cta-banner"
          id="call"
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
