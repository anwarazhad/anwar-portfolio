import { motion } from "framer-motion";

const packets = [
  {
    top: "24%",
    left: "22%",
    width: "24%",
    rotate: "18deg",
  },

  {
    top: "26%",
    left: "45%",
    width: "28%",
    rotate: "-8deg",
  },

  {
    top: "44%",
    left: "20%",
    width: "34%",
    rotate: "12deg",
  },

  {
    top: "63%",
    left: "54%",
    width: "28%",
    rotate: "-18deg",
  },
];

export default function DataPackets() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {packets.map((packet, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: packet.top,

            left: packet.left,

            width: packet.width,

            transform: `rotate(${packet.rotate})`,
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
            animate={{
              x: ["0%", "100%"],
            }}
            transition={{
              duration: 4,

              repeat: Infinity,

              ease: "linear",

              delay: i,
            }}
          />
        </div>
      ))}
    </div>
  );
}
