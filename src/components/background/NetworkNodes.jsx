import { motion } from "framer-motion";

const nodes = [
  { top: "18%", left: "20%" },
  { top: "32%", left: "42%" },
  { top: "20%", left: "70%" },

  { top: "58%", left: "18%" },
  { top: "70%", left: "52%" },
  { top: "60%", left: "82%" },
];

const lines = [
  { top: "24%", left: "22%", width: "24%", rotate: "18deg" },
  { top: "26%", left: "45%", width: "28%", rotate: "-8deg" },

  { top: "44%", left: "20%", width: "34%", rotate: "12deg" },
  { top: "63%", left: "54%", width: "28%", rotate: "-18deg" },

  { top: "40%", left: "41%", width: "2px", height: "28%" },
];

export default function NetworkNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Lines */}

      {lines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400/20"
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
            height: line.height || "2px",
            rotate: line.rotate,
          }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Nodes */}

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: node.top,
            left: node.left,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />

          <div className="absolute -inset-2 rounded-full border border-cyan-400/40 animate-ping"></div>
        </motion.div>
      ))}
    </div>
  );
}
