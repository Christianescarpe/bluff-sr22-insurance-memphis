import { FaqItem, IMAGES, SITE_CONFIG } from './siteContent';

export interface ContentSection {
  title: string;
  paragraphs: string[];
  bullets?: { lead: string; text: string }[];
  externalLink?: { before: string; label: string; href: string; after: string };
  internalLink?: { before: string; label: string; href: string; after: string };
}

export interface SubPageData {
  slug: string;
  type: 'service' | 'location';
  navTitle: string;
  shortTitle: string;
  areaLabel?: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  heroBullets: string[];
  introHeading: string;
  introParagraphs: string[];
  introInternalLink?: { label: string; href: string; contextAfter: string };
  blueWave1: ContentSection;
  blueWave1Images: [string, string];
  lightSplit: ContentSection;
  lightSplitImages: [string, string];
  blueWave2: ContentSection;
  blueWave2Images: [string, string];
  checklistSection: {
    title: string;
    intro: string;
    items: { lead: string; text: string }[];
  };
  faqs: FaqItem[];
}

export const SERVICE_PAGES: SubPageData[] = [
  {
    slug: 'non-owner-sr22-insurance',
    type: 'service',
    navTitle: 'Non-Owner SR-22 Insurance',
    shortTitle: 'Non-Owner SR-22 Insurance',
    metaTitle: 'Non-Owner SR22 Insurance in Memphis, TN | Bluff SR22',
    metaDesc:
      'Need a Tennessee SR-22 without owning a car? Call (901) 695-4119 in Memphis for a non-owner auto liability quote filed electronically with TN DPS.',
    h1: 'Non-Owner SR-22 Insurance in Memphis, Tennessee',
    heroSubtitle:
      'Satisfy Tennessee DPS financial responsibility rules even when you do not own or register a personal vehicle.',
    heroImage: IMAGES.handsProtect,
    heroBullets: [
      'Designed for Memphis drivers with no vehicle registered in their name',
      'Electronic SR-22 filing with Tennessee DPS by a TN-licensed insurer',
      'Meets Tennessee 25/50/15 minimum liability requirements',
    ],
    introHeading: 'How a Tennessee non-owner SR-22 policy works when you have no car',
    introParagraphs: [
      'Not owning a car does not pause a Tennessee Department of Safety and Homeland Security requirement for proof of future financial responsibility. Under Tennessee Code Annotated 55-12-114, you still need a Tennessee-licensed motor vehicle liability insurer to certify coverage and transmit an SR-22 electronically before driving privileges can be reinstated.',
      'A non-owner auto liability policy covers you as a named driver when you occasionally borrow or rent a passenger vehicle you do not own. For renters in Midtown, Downtown Memphis, and near Beale Street who rely on transit, rideshare, or borrowed cars, it is often the most practical path to keep an active SR-22 certificate on file with Tennessee DPS.',
    ],
    introInternalLink: {
      label: 'Tennessee SR-22 requirements',
      href: '/sr22-insurance-requirements',
      contextAfter: ' and bring your state notice when you call.',
    },
    blueWave1: {
      title: 'Who qualifies for a non-owner SR-22 in Memphis?',
      paragraphs: [
        'Insurers write non-owner liability policies for drivers who neither own a vehicle nor have regular, everyday access to a car garaged at their household. Because there is no owned vehicle on the declarations page, the policy provides liability-only coverage—no collision or comprehensive—and carries the electronic SR-22 certificate to Tennessee DPS.',
        'If you later buy, lease, or register a car in Shelby County, you must notify the insurer right away to convert to an owner liability policy so your Tennessee filing stays accurate.',
      ],
      externalLink: {
        before: 'Review official state filing rules on the ',
        label: 'TN DPS SR-22 page',
        href: SITE_CONFIG.tnDpsSr22Url,
        after: '.',
      },
    },
    blueWave1Images: [IMAGES.signingKey, IMAGES.tabletForm],
    lightSplit: {
      title: 'What non-owner SR-22 coverage includes—and what it excludes',
      paragraphs: [
        'A Tennessee non-owner SR-22 policy is built strictly around bodily injury and property damage liability when you drive a permissive, non-owned car. Understanding its boundaries prevents surprises during your suspension or revocation term:',
      ],
      bullets: [
        {
          lead: 'State minimum liability:',
          text: 'Meets or exceeds Tennessee’s 25/50/15 liability limits ($25,000 per person, $50,000 per crash, $15,000 property damage) or higher amounts printed on your DPS notice.',
        },
        {
          lead: 'Electronic TN DPS filing:',
          text: 'Allows a Tennessee-licensed liability carrier to transmit your SR-22 certificate directly to the Department of Safety and Homeland Security.',
        },
        {
          lead: 'No household or owned vehicles:',
          text: 'Does not insure a car titled to you, a vehicle furnished for your regular daily use, or commercial delivery vehicles.',
        },
      ],
    },
    lightSplitImages: [IMAGES.agentReview, IMAGES.blueToyCar],
    blueWave2: {
      title: 'Keeping your non-owner filing active for the full Tennessee term',
      paragraphs: [
        'Tennessee DPS requires you to maintain SR-22 proof for the length of your suspension or revocation period—not an automatic three years for every driver. Even if you never step behind the wheel during that window, canceling a non-owner policy early triggers a cancellation notice to DPS and can re-suspend your privileges for Failure to Maintain Future Proof of Financial Responsibility.',
        'Call Bluff SR22 Insurance Memphis by phone with your state notice in hand. We walk through whether non-owner coverage fits your household situation so a TN-licensed insurer can quote and file accurately.',
      ],
    },
    blueWave2Images: [IMAGES.clipboardForm, IMAGES.coverageShield],
    checklistSection: {
      title: 'Memphis Non-Owner SR-22 Phone Quote Checklist',
      intro:
        'Before calling (901) 695-4119 for a non-owner SR-22 quote, gather these four items so your quote matches your Tennessee notice:',
      items: [
        {
          lead: 'Your Tennessee DPS letter:',
          text: 'Confirm the exact suspension or revocation length and required liability limits.',
        },
        {
          lead: 'Driver’s license or TN ID number:',
          text: 'Needed so the insurer’s electronic SR-22 transmit matches your exact Tennessee Driver Services record.',
        },
        {
          lead: 'Vehicle ownership check:',
          text: 'Verify no active vehicle registrations are titled in your name that would require an owner policy instead.',
        },
        {
          lead: 'Separate state fee plan:',
          text: 'Remember Tennessee reinstatement fees are paid directly to the state via e-services, separate from insurance premium.',
        },
      ],
    },
    faqs: [
      {
        question: 'Can I reinstate my Tennessee license with a non-owner SR-22?',
        answer:
          'Often yes, provided you do not own a vehicle and satisfy all other items on your Tennessee DPS reinstatement list. A Tennessee-licensed liability insurer files the SR-22 electronically against your non-owner policy. Check ',
        linkLabel: 'TN DPS SR-22',
        linkHref: SITE_CONFIG.tnDpsSr22Url,
        schemaAnswer:
          'Often yes, provided you do not own a vehicle and satisfy all other items on your Tennessee DPS reinstatement list. A Tennessee-licensed liability insurer files the SR-22 electronically against your non-owner policy.',
      },
      {
        question: 'What happens if I buy a car while carrying a non-owner SR-22?',
        answer:
          'Contact the insurer immediately to endorse or rewrite the policy to an owner auto liability policy with an SR-22 before driving the newly acquired car, ensuring zero gap in your Tennessee DPS filing.',
        schemaAnswer:
          'Contact the insurer immediately to rewrite or endorse the policy to an owner auto liability policy with an SR-22 so there is no gap in your Tennessee DPS filing.',
      },
      {
        question: 'Is non-owner SR-22 cheaper than owner SR-22 in Memphis?',
        answer:
          'Insurers determine the rate based on your driving record, Memphis ZIP code, and notice terms. Because non-owner policies cover occasional permissive driving without physical damage on an owned car, premiums often differ from owner policies. Call (901) 695-4119 for an exact quote.',
        schemaAnswer:
          'Insurers determine the rate based on your driving record, Memphis ZIP code, and notice terms. Call (901) 695-4119 for a quote matched to your notice.',
      },
      {
        question: 'Can I get a non-owner SR-22 if a car is registered in my name?',
        answer:
          'Generally no. If you own or register a motor vehicle, insurers require an owner liability policy listing that vehicle to certify financial responsibility accurately.',
        schemaAnswer:
          'Generally no. If you own or register a motor vehicle, insurers require an owner liability policy listing that vehicle.',
      },
    ],
  },
  {
    slug: 'owner-sr22-insurance',
    type: 'service',
    navTitle: 'Owner Liability SR-22',
    shortTitle: 'Owner Liability SR-22',
    metaTitle: 'Owner SR22 Auto Insurance in Memphis, TN | Bluff SR22',
    metaDesc:
      'Own or register a car in Memphis? Call (901) 695-4119 for an owner auto liability quote with electronic SR-22 filing to Tennessee DPS.',
    h1: 'Owner Liability SR-22 Insurance in Memphis, Tennessee',
    heroSubtitle:
      'Auto liability coverage for your personal vehicle paired with electronic SR-22 certification to Tennessee DPS.',
    heroImage: IMAGES.heroKeys,
    heroBullets: [
      'Insures vehicles you own, finance, or register in Tennessee',
      'Meets Tennessee 25/50/15 liability minimums or lender requirements',
      'Electronic certificate filed directly with TN DPS by a licensed carrier',
    ],
    introHeading: 'Insuring your car while satisfying a Tennessee SR-22 order',
    introParagraphs: [
      'When you own, lease, or register a car, truck, or SUV in Memphis, your proof of future financial responsibility attaches to an owner auto liability policy. A motor vehicle liability insurer licensed through the Tennessee Department of Commerce and Insurance binds coverage on your vehicle and transmits the SR-22 certificate electronically to the Tennessee Department of Safety and Homeland Security.',
      'Whether you commute daily along I-40, I-240, or I-55 across Shelby County, an insurance ID card in your glovebox is not enough on its own when DPS demands an SR-22. Both the active auto liability policy and the electronic state filing must stay in force.',
    ],
    introInternalLink: {
      label: 'SR-22 insurance quotes in Memphis',
      href: '/sr22-insurance-quotes',
      contextAfter: ' to see how phone quoting works.',
    },
    blueWave1: {
      title: 'Matching your vehicle policy to Tennessee 25/50/15 limits',
      paragraphs: [
        'Tennessee DPS publishes minimum auto liability limits of 25/50/15: $25,000 bodily injury per person, $50,000 bodily injury per crash, and $15,000 property damage. If you only need state-minimum liability on a paid-off car, those limits—unless your state notice specifies otherwise—anchor the quote.',
        'If your vehicle is financed or leased, your lender will typically require comprehensive and collision physical damage coverage in addition to the liability coverage that supports your Tennessee SR-22 filing.',
      ],
      externalLink: {
        before: 'Verify state rules directly on the ',
        label: 'Tennessee DPS SR-22 guidance page',
        href: SITE_CONFIG.tnDpsSr22Url,
        after: '.',
      },
    },
    blueWave1Images: [IMAGES.blueToyCar, IMAGES.manDoc],
    lightSplit: {
      title: 'Updating vehicles or addresses without breaking your SR-22',
      paragraphs: [
        'During a Tennessee suspension or revocation period, everyday life changes—replacing a commuter car, moving from Midtown to Bartlett, or paying off an auto loan—must be handled carefully so your SR-22 never lapses:',
      ],
      bullets: [
        {
          lead: 'Trading or replacing a car:',
          text: 'Update the VIN on your active policy with the insurer so electronic financial responsibility remains continuous.',
        },
        {
          lead: 'Selling your only car:',
          text: 'Do not simply cancel your policy if your SR-22 term is still running; ask about converting to a non-owner SR-22 first.',
        },
        {
          lead: 'Switching insurance carriers:',
          text: 'Bind the new Tennessee-licensed insurer and confirm the replacement SR-22 filing before the prior policy terminates.',
        },
      ],
    },
    lightSplitImages: [IMAGES.signingKey, IMAGES.familyProtect],
    blueWave2: {
      title: 'Phone quotes built around your actual Tennessee notice',
      paragraphs: [
        'Not every auto carrier writes high-risk records or transmits electronic SR-22 forms in Tennessee. Bluff SR22 Insurance Memphis works by phone—with zero online lead forms—so you can review the VIN, driver details, and DPS notice in one call and get a filing-ready quote from an SR-22-capable carrier.',
      ],
    },
    blueWave2Images: [IMAGES.agentReview, IMAGES.umbrellaCover],
    checklistSection: {
      title: 'What to Have Ready for an Owner SR-22 Quote',
      intro:
        'Have these details ready when you call (901) 695-4119 so your owner policy and SR-22 match Tennessee DPS records:',
      items: [
        {
          lead: 'Vehicle Identification Number (VIN):',
          text: 'Year, make, model, and 17-character VIN for each vehicle to be insured on the policy.',
        },
        {
          lead: 'Tennessee DPS reinstatement letter:',
          text: 'Shows the required financial responsibility term and whether additional requirements apply.',
        },
        {
          lead: 'Lienholder or lessor info (if financed):',
          text: 'Needed if your lender requires comprehensive and collision deductibles alongside liability.',
        },
        {
          lead: 'Driver’s license number & garaging ZIP:',
          text: 'Your Memphis or Shelby County garaging address and exact Tennessee license number.',
        },
      ],
    },
    faqs: [
      {
        question: 'Does an owner SR-22 cover full coverage or liability only?',
        answer:
          'Tennessee DPS only requires motor vehicle liability insurance (at least 25/50/15) to support an SR-22 filing, though you can add comprehensive and collision if your car is financed or you want physical damage protection.',
        schemaAnswer:
          'Tennessee DPS requires motor vehicle liability insurance (at least 25/50/15) to support an SR-22 filing; comprehensive and collision can be added if needed.',
      },
      {
        question: 'Do all cars in my name need to be accounted for?',
        answer:
          'Insurers underwriting an owner SR-22 policy will ask about registered vehicles and household drivers so the policy complies with carrier underwriting rules and Tennessee financial responsibility law.',
        schemaAnswer:
          'Insurers underwriting an owner SR-22 policy ask about registered vehicles and household drivers so the policy complies with carrier and Tennessee rules.',
      },
      {
        question: 'How quickly does an insurer send the owner SR-22 to TN DPS?',
        answer:
          'Once coverage binds, a Tennessee-licensed insurer can typically transmit the SR-22 electronically quickly, though Tennessee DPS still requires processing time to post the filing to your driver record.',
        schemaAnswer:
          'Once coverage binds, a Tennessee-licensed insurer can typically transmit the SR-22 electronically quickly, though TN DPS posting still takes processing time.',
      },
      {
        question: 'What if I drop my car and stop driving mid-term?',
        answer:
          'If your suspension or revocation period has not ended, canceling without replacing the filing can trigger a re-suspension for Failure to Maintain Future Proof. Ask about transitioning to a non-owner SR-22 with zero gap.',
        schemaAnswer:
          'Canceling before your required period ends can trigger re-suspension for Failure to Maintain Future Proof. Ask about transitioning to a non-owner SR-22 without a gap.',
      },
    ],
  },
  {
    slug: 'sr22-insurance-quotes',
    type: 'service',
    navTitle: 'SR-22 Insurance Quotes',
    shortTitle: 'SR-22 Insurance Quotes',
    metaTitle: 'SR22 Insurance Quotes in Memphis, TN | Call (901) 695-4119',
    metaDesc:
      'Get a filing-ready SR-22 insurance quote by phone in Memphis, TN. Compare SR-22-capable carriers that file electronically with Tennessee DPS.',
    h1: 'SR-22 Insurance Quotes in Memphis, Tennessee',
    heroSubtitle:
      'Direct phone quotes tailored to your Tennessee DPS notice—no online forms, no email spam, and clear cost breakdowns.',
    heroImage: IMAGES.tabletForm,
    heroBullets: [
      'Direct quote by phone at (901) 695-4119—no web forms',
      'Compare carriers licensed to file electronically with TN DPS',
      'Clear separation of insurer filing fee, premium, and state fees',
    ],
    introHeading: 'How getting a filing-ready Memphis SR-22 quote by phone works',
    introParagraphs: [
      'Searching online for SR-22 insurance quotes in Memphis often leads to lead-reseller forms that never actually read your Tennessee Department of Safety and Homeland Security letter. Bluff SR22 Insurance Memphis skips online forms entirely: you call (901) 695-4119, read the requirement off your notice, and get quoted on a policy that a Tennessee-licensed liability insurer can certify and transmit electronically.',
      'Tennessee DPS states plainly that the insurance company determines the cost of coverage. Because every quote depends on whether you need owner or non-owner coverage, your driving history, and your Memphis ZIP code, we do not publish generic teaser rates.',
    ],
    introInternalLink: {
      label: 'non-owner SR-22 insurance',
      href: '/non-owner-sr22-insurance',
      contextAfter: ' if you do not currently own a car.',
    },
    blueWave1: {
      title: 'Three separate costs: filing fee vs. liability premium vs. TN DPS fees',
      paragraphs: [
        'Drivers comparing Memphis SR-22 quotes get clearer answers when they separate the three distinct buckets of cost involved in reinstating a Tennessee license:',
        'First, insurers typically charge a modest SR-22 filing fee to attach and transmit the electronic certificate. Second, the auto liability premium itself is the main ongoing cost and reflects your driving record, violation history, and vehicle status. Third, Tennessee reinstatement fees are owed directly to the state—never bundled into an insurer’s rate.',
      ],
      externalLink: {
        before: 'Consumer auto rating fundamentals are also outlined by the ',
        label: 'National Association of Insurance Commissioners',
        href: SITE_CONFIG.naicUrl,
        after: '.',
      },
    },
    blueWave1Images: [IMAGES.clipboardForm, IMAGES.signingKey],
    lightSplit: {
      title: 'What shapes an SR-22 quote in Memphis and Shelby County',
      paragraphs: [
        'When a Tennessee-licensed motor vehicle liability insurer calculates your premium, several concrete underwriting factors carry the most weight:',
      ],
      bullets: [
        {
          lead: 'Owner vs. non-owner structure:',
          text: 'Whether you are insuring a specific car or only need operator liability to satisfy your Tennessee DPS filing.',
        },
        {
          lead: 'Underlying violation & record:',
          text: 'DUI, implied consent, reckless driving, accident claims, or point accumulations each rate differently across carriers.',
        },
        {
          lead: 'Coverage limits & deductibles:',
          text: 'Starting at Tennessee’s 25/50/15 liability minimums versus higher limits or lender-required physical damage.',
        },
        {
          lead: 'Continuous prior insurance:',
          text: 'Avoiding new lapses once bound helps protect both your driving privileges and future renewal eligibility.',
        },
      ],
    },
    lightSplitImages: [IMAGES.agentReview, IMAGES.coverageShield],
    blueWave2: {
      title: 'Comparing SR-22-capable Tennessee carriers',
      paragraphs: [
        'Not every standard auto insurer will issue an SR-22 certificate or accept a suspended license reinstatement in Tennessee. Calling lets you focus strictly on carriers licensed through the Tennessee Department of Commerce and Insurance that transmit electronic filings to TN DPS—saving you from binding a policy that cannot actually send the form.',
      ],
    },
    blueWave2Images: [IMAGES.handsProtect, IMAGES.blueToyCar],
    checklistSection: {
      title: 'Steps From Phone Quote to Electronic TN DPS Transmit',
      intro:
        'Here is what happens when you call Bluff SR22 Insurance Memphis for a quote:',
      items: [
        {
          lead: '1. Review your Tennessee notice:',
          text: 'Verify suspension length, required liability limits, and whether owner or non-owner applies.',
        },
        {
          lead: '2. Compare SR-22-capable options:',
          text: 'Review liability quotes from carriers authorized to file electronically in Tennessee.',
        },
        {
          lead: '3. Bind coverage & initiate transmit:',
          text: 'Once bound, the insurer queues the electronic SR-22 certificate to Tennessee DPS.',
        },
        {
          lead: '4. Complete state e-services steps:',
          text: 'Pay separate Tennessee reinstatement fees and allow processing time for DPS to post the certificate.',
        },
      ],
    },
    faqs: [
      {
        question: 'Why is there no online quote form on this site?',
        answer:
          'We handle quotes strictly by phone at (901) 695-4119—no online form, no email collection, and no submit buttons—so we can match the quote directly to your Tennessee DPS notice.',
        schemaAnswer:
          'Quotes are handled strictly by phone at (901) 695-4119 with no online form or email collection, ensuring the quote matches your Tennessee DPS notice.',
      },
      {
        question: 'Does the SR-22 quote include Tennessee state reinstatement fees?',
        answer:
          'No. State reinstatement fees are paid directly to the Tennessee Department of Safety and Homeland Security and are separate from both your insurance premium and the insurer’s SR-22 filing fee.',
        schemaAnswer:
          'No. Tennessee state reinstatement fees are paid directly to TN DPS and are separate from insurance premium and the insurer filing fee.',
      },
      {
        question: 'Can I get a quote if my Tennessee license is currently suspended?',
        answer:
          'Yes. Most drivers calling for an SR-22 quote have an active suspension or revocation and need the insurer’s electronic filing as one requirement toward reinstating their license.',
        schemaAnswer:
          'Yes. Most callers have an active suspension or revocation and need the electronic SR-22 filing to work toward license reinstatement.',
      },
      {
        question: 'How fast after binding is the SR-22 sent to TN DPS?',
        answer:
          'A Tennessee-licensed insurer can often transmit electronically the same day coverage binds, though DPS still takes processing time to update your driver record.',
        schemaAnswer:
          'A Tennessee-licensed insurer can often transmit electronically the same day coverage binds, though TN DPS requires processing time to post it on your record.',
      },
    ],
  },
  {
    slug: 'sr22-insurance-requirements',
    type: 'service',
    navTitle: 'Tennessee SR-22 Requirements',
    shortTitle: 'TN SR-22 Requirements',
    metaTitle: 'Tennessee SR22 Insurance Requirements | Memphis & TN DPS Guide',
    metaDesc:
      'Understand Tennessee DPS SR-22 requirements under T.C.A. 55-12-114: 25/50/15 limits, suspension-length rules, electronic filing, and lapse penalties.',
    h1: 'Tennessee SR-22 Insurance Requirements (Memphis & TN DPS Guide)',
    heroSubtitle:
      'Plain-English breakdown of Tennessee Code Annotated 55-12-114, 25/50/15 liability limits, and suspension-length rules.',
    heroImage: IMAGES.clipboardForm,
    heroBullets: [
      'Proof of future financial responsibility under T.C.A. 55-12-114',
      'Maintained for your suspension or revocation length—not a blanket 3 years',
      'Electronic filing required from a TN-licensed liability insurer',
    ],
    introHeading: 'What Tennessee DPS actually requires when an SR-22 is ordered',
    introParagraphs: [
      'In Tennessee, an SR-22 is official proof of future financial responsibility governed by Tennessee Code Annotated 55-12-114 and administered by the Department of Safety and Homeland Security (DPS). The Department cannot furnish blank SR-22 forms to drivers, and an ordinary auto insurance card will not clear the requirement.',
      'Instead, an insurance company licensed through the Tennessee Department of Commerce and Insurance must issue motor vehicle liability coverage meeting state standards and transmit the SR-22 certificate electronically to Driver Services.',
    ],
    introInternalLink: {
      label: 'DUI and high-risk SR-22 help',
      href: '/dui-sr22-insurance',
      contextAfter: ' if your notice stems from an impaired driving or major conviction.',
    },
    blueWave1: {
      title: 'Suspension-length rule: why Tennessee is not a blanket 3-year state',
      paragraphs: [
        'One of the biggest myths online is that every SR-22 lasts three years. Tennessee DPS explicitly states that SR-22 insurance must be maintained for the length of the suspension or revocation period. For example, a one-year revocation carries a one-year SR-22 requirement.',
        'Once you maintain the SR-22 continuously for that required period, it may be cancelled provided it is not required on any other suspension. You can verify whether an SR-22 requirement remains active on Tennessee Driver Services e-services.',
      ],
      externalLink: {
        before: 'Read the state’s official explanation on the ',
        label: 'TN DPS SR-22 Insurance page',
        href: SITE_CONFIG.tnDpsSr22Url,
        after: '.',
      },
    },
    blueWave1Images: [IMAGES.manDoc, IMAGES.tabletForm],
    lightSplit: {
      title: '25/50/15 minimum limits and electronic filing rules',
      paragraphs: [
        'Every compliant Tennessee SR-22 filing rests on three non-negotiable state rules:',
      ],
      bullets: [
        {
          lead: '25/50/15 liability minimums:',
          text: '$25,000 bodily injury per person, $50,000 bodily injury per crash, and $15,000 property damage per crash (unless your state notice specifies higher limits).',
        },
        {
          lead: 'Licensed Tennessee carrier:',
          text: 'Must be certified by an insurer licensed through the Tennessee Department of Commerce and Insurance.',
        },
        {
          lead: 'Zero-lapse maintenance:',
          text: 'Any cancellation or termination before the required period ends can trigger suspension for Failure to Maintain Future Proof of Financial Responsibility.',
        },
      ],
    },
    lightSplitImages: [IMAGES.coverageShield, IMAGES.umbrellaCover],
    blueWave2: {
      title: 'Reasons Tennessee Driver Services can require an SR-22',
      paragraphs: [
        'Tennessee Driver Services lists numerous triggers for mandatory SR-22 proof: DUI, accident claims, unsatisfied judgments, accumulation of points or convictions, implied consent / refusal to test, underage driving while impaired, hit-and-run, reckless endangerment by vehicle, vehicular assault or homicide, using a vehicle in a felony, vehicle theft, drag racing, two reckless driving violations within 12 months, and driving while possessing methamphetamine.',
        'Whatever brought the requirement onto your record, your printed Tennessee notice controls the exact dates and conditions. Have it in front of you when you call (901) 695-4119.',
      ],
    },
    blueWave2Images: [IMAGES.signingKey, IMAGES.agentReview],
    checklistSection: {
      title: 'How to Stay Compliant With Tennessee SR-22 Rules',
      intro:
        'Follow these practical habits from day one until Tennessee e-services shows your requirement is complete:',
      items: [
        {
          lead: 'Read your notice line by line:',
          text: 'Confirm all reinstatement items—fees, tests, interlock, or court clearances—alongside the SR-22.',
        },
        {
          lead: 'Wait for DPS record posting:',
          text: 'Do not drive I-40 or I-55 assuming same-day insurer transmit means DPS has already cleared your license.',
        },
        {
          lead: 'Use automatic billing or reminders:',
          text: 'There is no state grace period if a policy cancels for non-payment during your required term.',
        },
        {
          lead: 'Overlap policies if switching carriers:',
          text: 'Have the new TN-licensed insurer file electronically before canceling the prior policy.',
        },
      ],
    },
    faqs: [
      {
        question: 'Does Tennessee use FR-44 forms or only SR-22?',
        answer:
          'Tennessee uses the SR-22 certificate of future financial responsibility under T.C.A. 55-12-114 (FR-44 is a separate form used in states like Florida and Virginia, not Tennessee). Always follow the limits printed on your Tennessee notice.',
        schemaAnswer:
          'Tennessee uses the SR-22 certificate of future financial responsibility under T.C.A. 55-12-114. Always follow the limits printed on your Tennessee notice.',
      },
      {
        question: 'How do I check when I can drop my Tennessee SR-22?',
        answer:
          'Tennessee Driver Services directs drivers to check the reinstatement requirements page on state e-services. If the SR-22 requirement is no longer listed and not needed on another suspension, it may be removed.',
        schemaAnswer:
          'Check the reinstatement requirements page on Tennessee Driver Services e-services. If the SR-22 requirement is no longer listed, you are no longer required to carry it.',
      },
      {
        question: 'Can I hand-deliver a paper SR-22 form in Memphis?',
        answer:
          'No. Tennessee DPS requires the SR-22 to be filed electronically by a Tennessee-licensed motor vehicle liability insurer, and the Department cannot furnish blank forms.',
        schemaAnswer:
          'No. Tennessee DPS requires the SR-22 to be filed electronically by a Tennessee-licensed motor vehicle liability insurer.',
      },
      {
        question: 'What happens if my SR-22 cancels early in Tennessee?',
        answer:
          'Driving privileges can be suspended for Failure to Maintain Future Proof of Financial Responsibility, requiring you to refile and maintain the SR-22, pay reinstatement fees, and reapply for your license.',
        schemaAnswer:
          'Driving privileges can be suspended for Failure to Maintain Future Proof of Financial Responsibility, requiring refiling, reinstatement fees, and license reapplication.',
      },
    ],
  },
  {
    slug: 'dui-sr22-insurance',
    type: 'service',
    navTitle: 'DUI & High-Risk SR-22 Help',
    shortTitle: 'DUI & High-Risk SR-22',
    metaTitle: 'DUI & High-Risk SR22 Insurance Memphis, TN | Bluff SR22',
    metaDesc:
      'Need SR-22 insurance after a DUI, implied consent, or high-risk suspension in Memphis, TN? Call (901) 695-4119 for a filing-ready phone quote.',
    h1: 'DUI & High-Risk SR-22 Insurance Help in Memphis, Tennessee',
    heroSubtitle:
      'Phone quotes matched to your Tennessee DPS notice after a DUI, implied consent refusal, points suspension, or unsatisfied judgment.',
    heroImage: IMAGES.womanAccident,
    heroBullets: [
      'Quotes for DUI, implied consent, reckless driving & lapse records',
      'Owner and non-owner policies filed electronically with TN DPS',
      'Supports restricted license and full reinstatement orders',
    ],
    introHeading: 'Getting SR-22 proof on file after a Memphis DUI or high-risk suspension',
    introParagraphs: [
      'A DUI conviction, implied consent refusal, accumulation of points, or two reckless driving offenses within 12 months will typically place a mandatory SR-22 requirement on your Tennessee Driver Services file. Standard preferred auto insurers frequently decline or non-renew these records, leaving Memphis drivers unsure which carrier will actually bind and file electronically.',
      'Bluff SR22 Insurance Memphis works by phone to connect high-risk drivers across Shelby County and the Mid-South with a filing-ready auto liability quote—owner or non-owner—that a Tennessee-licensed insurer will transmit electronically to DPS.',
    ],
    introInternalLink: {
      label: 'owner liability SR-22 coverage',
      href: '/owner-sr22-insurance',
      contextAfter: ' if you are insuring a personal vehicle—including one with an ignition interlock requirement.',
    },
    blueWave1: {
      title: 'Quoting to your exact Tennessee notice—not a generic rate sheet',
      paragraphs: [
        'After a DUI or serious moving violation in Tennessee, the SR-22 is one piece of a broader reinstatement or restricted-license checklist that may also include court costs, alcohol safety school, ignition interlock compliance, and state reinstatement fees.',
        'When you call (901) 695-4119 with your Tennessee DPS letter in hand, we look at the exact liability minimums, vehicle ownership status, and suspension or revocation term on your notice so the insurer’s electronic certificate matches what Driver Services expects.',
      ],
      externalLink: {
        before: 'Check official Tennessee reinstatement and SR-22 details on the ',
        label: 'TN DPS SR-22 portal',
        href: SITE_CONFIG.tnDpsSr22Url,
        after: '.',
      },
    },
    blueWave1Images: [IMAGES.adjusterWreck, IMAGES.crashStreet],
    lightSplit: {
      title: 'High-risk situations we help Memphis drivers navigate by phone',
      paragraphs: [
        'Tennessee Driver Services requires proof of future financial responsibility across a wide range of high-risk events:',
      ],
      bullets: [
        {
          lead: 'DUI & implied consent:',
          text: 'Driving under the influence or refusal to test orders requiring continuous SR-22 proof for the revocation period.',
        },
        {
          lead: 'Points & reckless driving:',
          text: 'Accumulation of traffic convictions or two reckless driving violations in a 12-month window.',
        },
        {
          lead: 'Unsatisfied judgments & crash claims:',
          text: 'Uninsured crash suspensions or civil judgments requiring verified future financial responsibility.',
        },
        {
          lead: 'Prior SR-22 lapse / re-suspension:',
          text: 'Refiling after a Failure to Maintain Future Proof of Financial Responsibility suspension.',
        },
      ],
    },
    lightSplitImages: [IMAGES.clipboardForm, IMAGES.manDoc],
    blueWave2: {
      title: 'Protecting your driving record from a second suspension',
      paragraphs: [
        'Once you have worked through court conditions and paid state reinstatement fees, the fastest way to lose driving privileges again is a missed insurance payment. Keep your policy active without a single day’s gap for the full length of your Tennessee revocation or suspension.',
      ],
    },
    blueWave2Images: [IMAGES.familyProtect, IMAGES.coverageShield],
    checklistSection: {
      title: 'DUI & High-Risk Reinstatement Preparation List',
      intro:
        'Before calling to bind your high-risk SR-22 quote in Memphis, verify these steps on your Tennessee notice:',
      items: [
        {
          lead: 'Confirm owner vs. non-owner:',
          text: 'If you own a car (including an interlock-equipped vehicle), request an owner policy; if you have no car, ask about non-owner.',
        },
        {
          lead: 'Verify liability limits:',
          text: 'Confirm Tennessee’s 25/50/15 minimums or any specific limit stated on your court or DPS order.',
        },
        {
          lead: 'Budget state fees separately:',
          text: 'Pay Tennessee DPS reinstatement fees directly to the state via e-services.',
        },
        {
          lead: 'Confirm DPS posting before driving:',
          text: 'Wait until Tennessee Driver Services reflects valid driving status or restricted-license issuance.',
        },
      ],
    },
    faqs: [
      {
        question: 'Can I still get an SR-22 quote in Memphis with a recent DUI?',
        answer:
          'Yes. High-risk auto liability carriers licensed in Tennessee regularly write policies after a DUI or implied consent suspension and transmit the SR-22 electronically to TN DPS. Call (901) 695-4119 with your state notice.',
        schemaAnswer:
          'Yes. High-risk auto liability carriers licensed in Tennessee write policies after a DUI or implied consent suspension and transmit the SR-22 electronically to TN DPS.',
      },
      {
        question: 'Can I use a non-owner SR-22 after a DUI if I sold my car?',
        answer:
          'If you do not own a car and do not have an ignition-interlock vehicle requirement tied to an owned car, a non-owner policy can often satisfy the SR-22 portion. Always verify interlock and restricted-license rules on your Tennessee order.',
        schemaAnswer:
          'If you do not own a car and have no owned-vehicle interlock requirement, a non-owner policy can often satisfy the SR-22 portion; always check your Tennessee order.',
      },
      {
        question: 'How long is an SR-22 required after a Tennessee DUI?',
        answer:
          'Tennessee DPS requires SR-22 proof to be maintained for the length of your revocation or suspension period. Check the exact timeframe printed on your Tennessee DPS notice or e-services account.',
        schemaAnswer:
          'Tennessee DPS requires SR-22 proof to be maintained for the length of your revocation or suspension period as listed on your state notice.',
      },
      {
        question: 'Does Bluff SR22 Insurance Memphis file the SR-22 as the carrier?',
        answer:
          'No. We help Memphis drivers get a filing-ready quote by phone so a motor vehicle liability insurer licensed in Tennessee can transmit the SR-22 electronically to Tennessee DPS.',
        schemaAnswer:
          'No. Bluff SR22 Insurance Memphis helps you get a filing-ready quote by phone so a Tennessee-licensed liability insurer can file electronically with TN DPS.',
      },
    ],
  },
];
