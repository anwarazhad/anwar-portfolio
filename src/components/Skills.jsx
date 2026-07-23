import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    name: "Cybersecurity",
    level: 85,
    tools: [
      "Kali Linux",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "YARA",
      "MITRE ATT&CK",
    ],
  },
  {
    name: "Networking",
    level: 70,
    tools: [
      "Cisco Packet Tracer",
      "TCP/IP",
      "Routing",
      "Switching",
      "SSH",
      "Firewall",
    ],
  },
  {
    name: "React Development",
    level: 60,
    tools: [
      "React",
      "JavaScript",
      "JSX",
      "React Hooks",
      "Vite",
      "Framer Motion",
    ],
  },
  {
    name: "Web Development",
    level: 90,
    tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
  },
  {
    name: "Data Analysis",
    level: 40,
    tools: ["Python", "Power BI", "SQL", "Excel", "Data Visualization"],
  },
  {
    name: "IT Support",
    level: 95,
    tools: [
      "Windows",
      "Linux",
      "Hardware Troubleshooting",
      "Networking",
      "Active Directory",
      "Microsoft Office",
    ],
  },
];

export default function Skills() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="heading-font text-4xl font-bold text-center text-cyan-400 mb-14">
          SYSTEM CAPABILITIES
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="
                cursor-pointer
                rounded-2xl
                border
                border-cyan-500/30
                bg-black/40
                backdrop-blur-md
                p-6
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                group
              "
            >
              <AnimatePresence mode="wait">
                {activeCard === index ? (
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {skill.name}
                    </h3>

                    <p className="terminal-font text-green-400 mt-4 mb-4">
                      &gt; Tools Mastery
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="
                            px-3
                            py-1
                            rounded-full
                            border
                            border-cyan-500/30
                            bg-cyan-500/10
                            text-cyan-300
                            text-sm
                            transition-all
                            duration-300
                            hover:bg-cyan-500/20
                            hover:border-cyan-300
                            hover:scale-105
                            hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]
                          "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="front"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className="
                          text-2xl
                          font-bold
                          transition-all
                          duration-300
                          group-hover:text-cyan-400
                        "
                      >
                        {skill.name}
                      </h3>

                      <span
                        className="
                          text-cyan-400
                          text-xl
                          font-bold
                          transition-all
                          duration-300
                          group-hover:drop-shadow-[0_0_10px_#22d3ee]
                        "
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div className="mt-6 h-4 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-cyan-400 rounded-full"
                      />
                    </div>

                    <p className="terminal-font mt-6 text-xs text-gray-400">
                      &gt; CLICK TO ACCESS MODULE
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
