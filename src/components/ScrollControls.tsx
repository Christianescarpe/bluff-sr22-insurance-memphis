'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/data/siteContent';
import { PhoneIcon } from './PhoneButton';

export default function ScrollControls() {
  const [showTop, setShowTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal-up');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }
      );
      revealEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add('is-revealed'));
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`scroll-top-btn ${showTop ? 'is-visible' : ''}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      <a
        href={SITE_CONFIG.phoneHref}
        className="float-call-btn"
        aria-label={SITE_CONFIG.ctaLabel}
        title={SITE_CONFIG.ctaLabel}
      >
        <PhoneIcon size={22} />
      </a>
    </>
  );
}
