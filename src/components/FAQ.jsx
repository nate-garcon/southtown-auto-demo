import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How long does a standard oil change take?',
    a: 'Most oil changes are in and out in 30–45 minutes. If we spot anything during the inspection that needs attention, we\'ll let you know before doing anything extra.',
  },
  {
    q: 'Do I need an appointment, or can I walk in?',
    a: 'Appointments are preferred, especially for diagnostic work or anything beyond a quick oil change. Walk-ins are welcome when we have open bays, but booking ahead guarantees your time slot.',
  },
  {
    q: 'What brands of parts do you use?',
    a: 'We use OEM and OEM-equivalent parts from brands like ACDelco, Motorcraft, and Monroe. If you have a preference, just ask — we\'re happy to source specific parts when it makes sense.',
  },
  {
    q: 'Do you warranty your repairs?',
    a: 'Yes. All labor comes with a 12-month / 12,000-mile warranty. Parts warranties vary by manufacturer. We\'ll walk you through coverage when we go over your estimate.',
  },
  {
    q: 'My check-engine light is on but the car seems fine. Should I still come in?',
    a: 'Absolutely. A steady check-engine light can mean anything from a loose gas cap to early catalytic converter failure. Ignoring it turns small fixes into big ones — come in and we\'ll scan it for free.',
  },
  {
    q: 'Do you service diesel trucks and larger vehicles?',
    a: 'Yes, we work on most gas and diesel vehicles including trucks, SUVs, and vans. If you\'re unsure whether we service your specific make and model, give us a call before you come in.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section faq">
      <div className="section-inner">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Common Questions</h2>
        <p className="section-sub">Everything you need to know before you book.</p>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className={`faq-chevron ${open === i ? 'open' : ''}`}>▼</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="faq-answer-inner">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
