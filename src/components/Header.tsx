'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/data/siteContent';
import { LOCATION_PAGES, SERVICE_PAGES } from '@/data/allSubPages';
import PhoneButton from './PhoneButton';

function CaretIcon() {
  return (
    <svg
      className="caret-icon"
      viewBox="0 0 20 20"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');

  const isHome = pathname === '/';
  const isService = SERVICE_PAGES.some((s) => s.slug === cleanPath);
  const isLocation = LOCATION_PAGES.some((l) => l.slug === cleanPath);
  const isContact = cleanPath === 'contact-us';

  return (
    <header className="site-header" id="masthead">
      <div className="header-inner">
        <Link
          href="/"
          className="brand-logo"
          aria-label={SITE_CONFIG.name}
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="brand-logo-mark"
            viewBox="50 20 540 530"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M320 36c88 28 168 28 236 8v214c0 118-86 214-236 286C170 472 84 376 84 258V44c68 20 148 20 236-8z"
              fill="none"
              stroke="#0B2C4A"
              strokeWidth="24"
              strokeLinejoin="round"
            />
            <path
              d="M130 320 L170 250 L210 280 L250 200 L290 240 L320 160 L350 230 L400 190 L450 260 L500 230 L510 320 Z"
              fill="#0B2C4A"
            />
            <path
              d="M140 330c50 22 100 34 180 34s130-12 180-34"
              fill="none"
              stroke="#C4A35A"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <path
              d="M160 355c45 14 90 22 160 22s115-8 160-22"
              fill="none"
              stroke="#C4A35A"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>
          <span className="brand-wordmark">
            <span className="brand-wordmark-top">BLUFF</span>
            <span className="brand-wordmark-mid">SR22 INSURANCE</span>
            <span className="brand-wordmark-sub">MEMPHIS</span>
          </span>
        </Link>

        <nav
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          id="site-navigation"
          aria-label="Primary"
        >
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${isHome ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item has-dropdown">
              <Link
                href={`/${SERVICE_PAGES[0].slug}`}
                className={`nav-link ${isService ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>SR-22 Services</span>
                <CaretIcon />
              </Link>
              <ul className="dropdown-menu">
                {SERVICE_PAGES.map((srv) => (
                  <li key={srv.slug}>
                    <Link
                      href={`/${srv.slug}`}
                      className={srv.slug === cleanPath ? 'active' : ''}
                      onClick={() => setMenuOpen(false)}
                    >
                      {srv.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item has-dropdown">
              <Link
                href={`/${LOCATION_PAGES[0].slug}`}
                className={`nav-link ${isLocation ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>Memphis Locations</span>
                <CaretIcon />
              </Link>
              <ul className="dropdown-menu dropdown-locations">
                {LOCATION_PAGES.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/${loc.slug}`}
                      className={loc.slug === cleanPath ? 'active' : ''}
                      onClick={() => setMenuOpen(false)}
                    >
                      {loc.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <a
                href={isHome ? '#faq' : '/#faq'}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </a>
            </li>

            <li className="nav-item">
              <Link
                href="/contact-us"
                className={`nav-link ${isContact ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta-wrap">
          <PhoneButton variant="blue" className="header-phone-btn" />
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Open Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
