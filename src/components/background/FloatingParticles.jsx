import { motion } from "framer-motion";

const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 12 + 12,
  delay: Math.random() * 8,
}));

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0.25,
            boxShadow: "0 0 10px rgba(34,211,238,.8)",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
