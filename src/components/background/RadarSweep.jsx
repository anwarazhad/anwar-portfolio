import { motion } from "framer-motion";

export default function RadarSweep() {
  return (
    <motion.div
      className="
absolute
inset-0
pointer-events-none
"
    >
      <motion.div
        className="
absolute
top-0
left-[-40%]
w-[40%]
h-full
bg-linear-to-r
from-transparent
via-cyan-400/10
to-transparent
blur-3xl
"
        animate={{
          x: ["0%", "350%"],
        }}
        transition={{
          duration: 8,

          repeat: Infinity,

          ease: "linear",
        }}
      />
    </motion.div>
  );
}
