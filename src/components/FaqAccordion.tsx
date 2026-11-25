'use client';

import { useState } from 'react';
import type { FaqItem } from '@/data/siteContent';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="faq-icon">{isOpen ? '−' : '+'}</span>
              <span className="faq-q-text">{item.question}</span>
            </button>
            {isOpen && (
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>
                    {item.answer}
                    {item.linkHref && item.linkLabel && (
                      <>
                        <a
                          href={item.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkLabel}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
