import { motion } from 'framer-motion';

const cells = [
  { cls: 'gc-1', label: 'Service Bay — Bay 1' },
  { cls: 'gc-2', label: 'Engine Diagnostic Setup' },
  { cls: 'gc-3', label: 'Brake Caliper Replacement' },
  { cls: 'gc-4', label: 'Tire Rotation in Progress' },
  { cls: 'gc-5', label: 'OBD-II Scan Results' },
  { cls: 'gc-6', label: 'Customer Waiting Area' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-inner">
        <div className="gallery-grid">
          {cells.map((c, i) => (
            <motion.div
              key={c.label}
              className={`gallery-cell ${c.cls}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="gallery-cell-inner">
                <span className="gallery-label">{c.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
