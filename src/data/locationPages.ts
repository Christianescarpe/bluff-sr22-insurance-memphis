import { IMAGES, SITE_CONFIG } from './siteContent';
import type { SubPageData } from './servicePages';

interface CitySeed {
  slug: string;
  navTitle: string;
  shortTitle: string;
  areaLabel: string;
  zipContext: string;
  corridors: string;
  localAngle: string;
  nonOwnerAngle: string;
  heroImg: string;
  imgPair1: [string, string];
  imgPair2: [string, string];
  imgPair3: [string, string];
  isBorderMetro?: boolean;
}

const CITY_SEEDS: CitySeed[] = [
  {
    slug: 'sr22-insurance-downtown-memphis-tn',
    navTitle: 'Downtown Memphis, TN',
    shortTitle: 'Downtown Memphis, TN',
    areaLabel: 'Downtown Memphis',
    zipContext: '38103 and 38105',
    corridors: 'Riverside Drive, Danny Thomas Boulevard, I-40, and the Hernando de Soto Bridge corridor',
    localAngle:
      'Drivers living or working in Downtown Memphis near Main Street, South Main, and the Mississippi River bluff deal with the exact same statewide Tennessee DPS rules as anyone else in Shelby County—whether commuting across I-40 or walking to work without keeping a car parked in a downtown garage.',
    nonOwnerAngle:
      'Apartment and loft renters in Downtown Memphis who gave up a personal car often use a non-owner liability policy so a Tennessee-licensed insurer can transmit the SR-22 electronically to DPS.',
    heroImg: IMAGES.heroKeys,
    imgPair1: [IMAGES.signingKey, IMAGES.agentReview],
    imgPair2: [IMAGES.handsProtect, IMAGES.tabletForm],
    imgPair3: [IMAGES.blueToyCar, IMAGES.coverageShield],
  },
  {
    slug: 'sr22-insurance-beale-street-memphis-tn',
    navTitle: 'Beale Street Area, Memphis',
    shortTitle: 'Beale Street Area',
    areaLabel: 'Beale Street area',
    zipContext: '38103 entertainment and hospitality district',
    corridors: 'Beale Street, Third Street, B.B. King Boulevard, and I-55',
    localAngle:
      'Service, hospitality, and music-venue workers around the Beale Street area frequently work late shifts and rely on rideshare, borrowed cars, or short commutes off I-55 and Crump Boulevard. Landmarks describe where you work and drive—your Tennessee DPS letter still controls the exact SR-22 filing.',
    nonOwnerAngle:
      'Beale Street-area workers without a vehicle titled in their name frequently ask about non-owner SR-22 coverage to satisfy a Tennessee suspension or revocation term.',
    heroImg: IMAGES.signingKey,
    imgPair1: [IMAGES.tabletForm, IMAGES.manDoc],
    imgPair2: [IMAGES.agentReview, IMAGES.umbrellaCover],
    imgPair3: [IMAGES.clipboardForm, IMAGES.handsProtect],
  },
  {
    slug: 'sr22-insurance-midtown-memphis-tn',
    navTitle: 'Midtown Memphis, TN',
    shortTitle: 'Midtown Memphis, TN',
    areaLabel: 'Midtown',
    zipContext: '38104 and 38112',
    corridors: 'Union Avenue, Poplar Avenue, Madison Avenue, Cooper-Young, and Overton Park',
    localAngle:
      'Midtown Memphis drivers commuting along Union Avenue, Poplar Avenue, and Sam Cooper Boulevard need a policy certified by a Tennessee-licensed liability insurer when Driver Services places an SR-22 requirement on their record.',
    nonOwnerAngle:
      'Midtown renters around Overton Square and Cooper-Young who share rides or do not keep a registered vehicle regularly choose a non-owner auto liability policy to carry their electronic TN DPS filing.',
    heroImg: IMAGES.handsProtect,
    imgPair1: [IMAGES.blueToyCar, IMAGES.clipboardForm],
    imgPair2: [IMAGES.signingKey, IMAGES.familyProtect],
    imgPair3: [IMAGES.agentReview, IMAGES.coverageShield],
  },
  {
    slug: 'sr22-insurance-east-memphis-tn',
    navTitle: 'East Memphis, TN',
    shortTitle: 'East Memphis, TN',
    areaLabel: 'East Memphis',
    zipContext: '38111, 38117, 38119, and 38120',
    corridors: 'Poplar Avenue, Walnut Grove Road, Park Avenue, and the I-240 loop',
    localAngle:
      'Across East Memphis—from the University area to the Poplar Corridor and I-240—daily commuting almost always involves a personal vehicle, making owner liability SR-22 policies with 25/50/15 or higher limits especially common.',
    nonOwnerAngle:
      'If you live in East Memphis without a car registered in your name, a non-owner liability policy can still carry your electronic SR-22 certificate to Tennessee DPS.',
    heroImg: IMAGES.agentReview,
    imgPair1: [IMAGES.manDoc, IMAGES.signingKey],
    imgPair2: [IMAGES.tabletForm, IMAGES.blueToyCar],
    imgPair3: [IMAGES.handsProtect, IMAGES.umbrellaCover],
  },
  {
    slug: 'sr22-insurance-whitehaven-memphis-tn',
    navTitle: 'Whitehaven, Memphis, TN',
    shortTitle: 'Whitehaven, TN',
    areaLabel: 'Whitehaven',
    zipContext: '38116 and 38109',
    corridors: 'Elvis Presley Boulevard, Shelby Drive, Brooks Road, and I-55',
    localAngle:
      'Whitehaven commuters driving I-55, Elvis Presley Boulevard, and airport-corridor logistics routes cannot risk driving on an unposted SR-22. Binding a compliant policy and waiting for Tennessee DPS record updates keeps daily work travel legal.',
    nonOwnerAngle:
      'Drivers in Whitehaven without an owned car can ask about non-owner operator liability so a TN-licensed insurer can transmit their SR-22 electronically.',
    heroImg: IMAGES.tabletForm,
    imgPair1: [IMAGES.coverageShield, IMAGES.agentReview],
    imgPair2: [IMAGES.clipboardForm, IMAGES.handsProtect],
    imgPair3: [IMAGES.signingKey, IMAGES.familyProtect],
  },
  {
    slug: 'sr22-insurance-cordova-tn',
    navTitle: 'Cordova, Memphis, TN',
    shortTitle: 'Cordova, TN',
    areaLabel: 'Cordova',
    zipContext: '38016 and 38018',
    corridors: 'Germantown Parkway, Macon Road, Walnut Grove Road, and I-40',
    localAngle:
      'Household commuters in Cordova traveling Germantown Parkway and I-40 often carry financed vehicles alongside a Tennessee SR-22 requirement, pairing state-required liability certification with lender-required physical damage coverage.',
    nonOwnerAngle:
      'If you live in Cordova and sold your vehicle during a suspension, verify household vehicle rules on a phone call to see whether a non-owner SR-22 fits.',
    heroImg: IMAGES.womanAccident,
    imgPair1: [IMAGES.adjusterCrash, IMAGES.tabletForm],
    imgPair2: [IMAGES.manDoc, IMAGES.signingKey],
    imgPair3: [IMAGES.redUmbrellaCar, IMAGES.agentReview],
  },
  {
    slug: 'sr22-insurance-bartlett-tn',
    navTitle: 'Bartlett, TN',
    shortTitle: 'Bartlett, TN',
    areaLabel: 'Bartlett',
    zipContext: '38133, 38134, and 38135',
    corridors: 'Stage Road (US-64), Summer Avenue (US-70/79), Austin Peay Highway, and I-40',
    localAngle:
      'Whether you live in Bartlett or recently moved northeast from Memphis along Stage Road or I-40, Tennessee DPS administers your SR-22 statewide. Updating your garaging address promptly keeps both your policy and electronic state filing accurate.',
    nonOwnerAngle:
      'Bartlett residents without a registered car can still request a non-owner liability quote that a Tennessee-licensed insurer will certify electronically to DPS.',
    heroImg: IMAGES.manDoc,
    imgPair1: [IMAGES.handsProtect, IMAGES.clipboardForm],
    imgPair2: [IMAGES.blueToyCar, IMAGES.coverageShield],
    imgPair3: [IMAGES.tabletForm, IMAGES.signingKey],
  },
  {
    slug: 'sr22-insurance-germantown-tn',
    navTitle: 'Germantown, TN',
    shortTitle: 'Germantown, TN',
    areaLabel: 'Germantown',
    zipContext: '38138 and 38139',
    corridors: 'Poplar Avenue, Wolf River Boulevard, Germantown Road, and SR-385',
    localAngle:
      'Drivers in Germantown commuting Poplar Avenue, Wolf River Boulevard, or SR-385 often want higher liability limits than Tennessee’s 25/50/15 baseline while still satisfying a mandatory Tennessee DPS SR-22 order.',
    nonOwnerAngle:
      'When no vehicle is titled to you in Germantown, a non-owner auto liability policy can carry the electronic SR-22 filing for the required suspension or revocation length.',
    heroImg: IMAGES.coverageShield,
    imgPair1: [IMAGES.agentReview, IMAGES.familyProtect],
    imgPair2: [IMAGES.signingKey, IMAGES.umbrellaCover],
    imgPair3: [IMAGES.manDoc, IMAGES.clipboardForm],
  },
  {
    slug: 'sr22-insurance-collierville-tn',
    navTitle: 'Collierville, TN',
    shortTitle: 'Collierville, TN',
    areaLabel: 'Collierville',
    zipContext: '38017 and 38027',
    corridors: 'SR-385 (Bill Morris Parkway), Poplar Avenue (US-72), and Byhalia Road',
    localAngle:
      'Collierville drivers on the eastern edge of Shelby County rely heavily on SR-385 and US-72. Keeping continuous coverage with zero lapse ensures your electronic filing with Tennessee DPS remains intact until e-services shows your term is complete.',
    nonOwnerAngle:
      'Collierville drivers without an owned vehicle can ask about non-owner liability coverage to satisfy their Tennessee proof of future financial responsibility.',
    heroImg: IMAGES.familyProtect,
    imgPair1: [IMAGES.signingKey, IMAGES.blueToyCar],
    imgPair2: [IMAGES.tabletForm, IMAGES.agentReview],
    imgPair3: [IMAGES.handsProtect, IMAGES.coverageShield],
  },
  {
    slug: 'sr22-insurance-southaven-ms',
    navTitle: 'Southaven, MS (Mid-South)',
    shortTitle: 'Southaven, MS',
    areaLabel: 'Southaven MS',
    zipContext: '38671 and 38672 cross-state metro corridor',
    corridors: 'I-55, Goodman Road, Stateline Road, and Airways Boulevard into Memphis',
    localAngle:
      'Southaven sits just across the state line in the Memphis Mid-South metro. Honest context matters: we have no street office in Southaven, and Tennessee DPS filings apply to Tennessee driver’s licenses and Tennessee reinstatement orders—so bring your exact state notice when you call.',
    nonOwnerAngle:
      'Cross-border Mid-South commuters clearing a Tennessee DPS hold without an owned car should read their Tennessee notice carefully on the call so an eligible insurer quotes the right structure.',
    heroImg: IMAGES.umbrellaCover,
    imgPair1: [IMAGES.clipboardForm, IMAGES.manDoc],
    imgPair2: [IMAGES.handsProtect, IMAGES.signingKey],
    imgPair3: [IMAGES.agentReview, IMAGES.tabletForm],
    isBorderMetro: true,
  },
];

export const LOCATION_PAGES: SubPageData[] = CITY_SEEDS.map((city) => ({
  slug: city.slug,
  type: 'location',
  navTitle: city.navTitle,
  shortTitle: city.shortTitle,
  areaLabel: city.areaLabel,
  metaTitle: `SR22 Insurance in ${city.shortTitle} | Bluff SR22 Memphis`,
  metaDesc: `Need SR-22 filing help near ${city.shortTitle}? Call (901) 695-4119 for a filing-ready quote matched to Tennessee DPS requirements.`,
  h1: `SR-22 Insurance Help for ${city.shortTitle} Drivers`,
  heroSubtitle: city.isBorderMetro
    ? 'Mid-South phone quote help for drivers clearing a Tennessee DPS SR-22 requirement—honest metro context, no claimed street office.'
    : `Same-day electronic Tennessee DPS filing help by phone for ${city.areaLabel} (${city.zipContext}) drivers.`,
  heroImage: city.heroImg,
  heroBullets: [
    'SR-22 certificate transmitted electronically to Tennessee DPS',
    'Owner and non-owner liability quotes matched to your state notice',
    'Direct phone assistance at (901) 695-4119—no online forms',
  ],
  introHeading: `How Tennessee SR-22 filings work for ${city.areaLabel} drivers`,
  introParagraphs: [
    city.localAngle,
    `Under Tennessee Code Annotated 55-12-114, an SR-22 is proof of future financial responsibility certified by a motor vehicle liability insurer licensed through the Tennessee Department of Commerce and Insurance—not a standalone type of insurance. Bluff SR22 Insurance Memphis helps ${city.areaLabel} callers get a filing-ready quote by phone (service area: Memphis, TN; no walk-in street office) so the insurer can transmit the certificate electronically to the Tennessee Department of Safety and Homeland Security.`,
  ],
  introInternalLink: {
    label: 'Tennessee SR-22 requirements',
    href: '/sr22-insurance-requirements',
    contextAfter: ' before you call so you know what to check on your DPS letter.',
  },
  blueWave1: {
    title: `Owner vs. Non-Owner SR-22 options around ${city.areaLabel}`,
    paragraphs: [
      `Drivers commuting along ${city.corridors} typically need one of two policy structures: an owner auto liability policy if a vehicle is titled or registered in their name, or an operator-only non-owner policy if they do not own a car.`,
      city.nonOwnerAngle,
    ],
    externalLink: {
      before: 'See official state rules on the ',
      label: 'TN DPS SR-22 page',
      href: SITE_CONFIG.tnDpsSr22Url,
      after: '.',
    },
  },
  blueWave1Images: city.imgPair1,
  lightSplit: {
    title: `Tennessee 25/50/15 minimums and suspension-length rules`,
    paragraphs: [
      `Whether you park in ${city.areaLabel} or anywhere else in the Memphis metro, Tennessee DPS applies uniform statewide rules to every SR-22 filing:`,
    ],
    bullets: [
      {
        lead: '25/50/15 minimum liability:',
        text: '$25,000 bodily injury per person, $50,000 bodily injury per crash, and $15,000 property damage—unless your state notice lists different numbers.',
      },
      {
        lead: 'Suspension-length clock:',
        text: 'Maintain the SR-22 for the length of your suspension or revocation period (not a blanket three years for everyone).',
      },
      {
        lead: 'Separate state fees:',
        text: 'Tennessee reinstatement fees are paid directly to the state, separate from insurance premium and any insurer SR-22 filing fee.',
      },
    ],
  },
  lightSplitImages: city.imgPair2,
  blueWave2: {
    title: `Avoiding lapses on ${city.corridors.split(',')[0]} and across Shelby County`,
    paragraphs: [
      `Once a Tennessee-licensed carrier transmits your SR-22 electronically, allow processing time for Tennessee DPS to post it to your driver record before assuming your license is clear. Keep continuous coverage with zero gap: canceling early or missing a billing date can re-suspend driving privileges for Failure to Maintain Future Proof of Financial Responsibility.`,
      `If you move between ${city.areaLabel} and another Mid-South ZIP code or trade vehicles mid-term, notify your insurer immediately so your policy and state certificate stay aligned.`,
    ],
  },
  blueWave2Images: city.imgPair3,
  checklistSection: {
    title: `${city.shortTitle} SR-22 Reinstatement Checklist`,
    intro: `Follow these steps when calling (901) 695-4119 from ${city.areaLabel} for a filing-ready Tennessee SR-22 quote:`,
    items: [
      {
        lead: '1. Read your Tennessee DPS notice:',
        text: 'Check required liability limits, suspension or revocation dates, and any additional court or interlock items.',
      },
      {
        lead: '2. Call (901) 695-4119 by phone:',
        text: 'Get quoted on owner or non-owner coverage from an insurer authorized to file electronically in Tennessee.',
      },
      {
        lead: '3. Bind coverage & allow DPS posting:',
        text: 'The carrier transmits electronically to TN DPS; confirm posting on state e-services before driving.',
      },
      {
        lead: '4. Pay state fees & stay continuous:',
        text: 'Pay Tennessee reinstatement fees directly to DPS and keep coverage active for your full required period.',
      },
    ],
  },
  faqs: [
    {
      question: `Do you have a walk-in street office in ${city.shortTitle}?`,
      answer: `No. Bluff SR22 Insurance Memphis helps ${city.areaLabel} and Mid-South drivers strictly by phone at (901) 695-4119 (service area: Memphis, TN; no street address listed) so a Tennessee-licensed insurer can quote and file electronically with TN DPS.`,
      schemaAnswer: `No. Bluff SR22 Insurance Memphis helps ${city.areaLabel} and Mid-South drivers by phone at (901) 695-4119 (service area: Memphis, TN; no street address listed).`,
    },
    {
      question: `How fast can an SR-22 be filed for a ${city.areaLabel} driver?`,
      answer:
        'Once coverage binds, a Tennessee-licensed liability insurer can typically transmit the SR-22 electronically to Tennessee DPS quickly. Remember that same-day insurer transmit is separate from DPS posting it on your driver record.',
      schemaAnswer:
        'Once coverage binds, a Tennessee-licensed liability insurer can typically transmit the SR-22 electronically to Tennessee DPS quickly; allow processing time for DPS posting.',
    },
    {
      question: `Can ${city.areaLabel} renters without a car get a non-owner SR-22?`,
      answer:
        'Often yes. If you do not own or register a vehicle, ask about a non-owner auto liability policy that a TN-licensed insurer can use to file the SR-22 electronically. See ',
      linkLabel: 'TN DPS SR-22',
      linkHref: SITE_CONFIG.tnDpsSr22Url,
      schemaAnswer:
        'Often yes. If you do not own or register a vehicle, a non-owner auto liability policy from a TN-licensed insurer can often carry the electronic SR-22 filing.',
    },
    {
      question: `What does SR-22 insurance cost near ${city.shortTitle}?`,
      answer:
        'Tennessee DPS states the insurance company determines the cost. Insurers usually charge a modest SR-22 filing fee on top of the liability premium, while state reinstatement fees are paid separately to Tennessee. Call (901) 695-4119 for a quote matched to your notice.',
      schemaAnswer:
        'The insurance company determines the cost, typically a modest SR-22 filing fee plus the liability premium, with Tennessee reinstatement fees paid separately to the state. Call (901) 695-4119.',
    },
  ],
}));
