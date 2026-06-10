import { motion } from 'framer-motion';

const team = [
  {
    initials: 'MT',
    name: 'Mike Torres',
    role: 'Owner & Head Mechanic',
    bio: 'ASE Master Technician with 22 years in the trade. Mike opened Southtown to give Moab drivers a shop they could actually trust.',
  },
  {
    initials: 'SC',
    name: 'Sarah Chen',
    role: 'Diagnostic Specialist',
    bio: 'Certified in advanced engine diagnostics, Sarah traces check-engine gremlins faster than anyone in the valley.',
  },
  {
    initials: 'DR',
    name: 'Dave Rodriguez',
    role: 'Brake & Suspension Tech',
    bio: 'With a background in off-road builds, Dave knows exactly what desert roads do to suspension and braking systems.',
  },
  {
    initials: 'LP',
    name: 'Lisa Park',
    role: 'Service Advisor',
    bio: 'Lisa keeps every job on schedule and makes sure you understand your estimate before we touch a single bolt.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.09 } }),
};

export default function Team() {
  return (
    <section className="section team" id="about">
      <div className="section-inner">
        <p className="section-label">The Team</p>
        <h2 className="section-title">People You Can Count On</h2>
        <p className="section-sub" style={{ marginBottom: 40 }}>
          Every technician at Southtown is ASE certified and takes pride in work that lasts.
        </p>
        <div className="team-grid">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              className="team-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="team-avatar">{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
