import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Finally found a mechanic I trust. Brought my Tacoma in for a grinding noise and Mike had it diagnosed and fixed same day. Fair price, no upsell — just straight talk.",
    name: 'James H.',
    location: 'Moab, UT',
    stars: 5,
  },
  {
    quote: "Brake job on my 4Runner before a long road trip. They showed me the worn pads and explained exactly what needed replacing. Car stops like new now. Will never go anywhere else.",
    name: 'Rachel M.',
    location: 'Moab, UT',
    stars: 5,
  },
  {
    quote: "Quick oil change and a full inspection before heading to Arches. They caught a slow coolant leak I didn't know about. Saved me a miserable breakdown on the trail. Highly recommend.",
    name: 'Tom B.',
    location: 'Grand County, UT',
    stars: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.1 } }),
};

export default function Testimonials() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-label">Customer Reviews</p>
        <h2 className="section-title">What Moab Drivers Say</h2>
        <p className="section-sub">Honest feedback from real customers who brought us their vehicles.</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">{t.name}</div>
              <div className="testimonial-location">{t.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
