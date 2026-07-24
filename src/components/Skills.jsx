import { motion } from "framer-motion";

const skills = [
  {
    name: "Cybersecurity",
    tools: [
      "Wazuh SIEM",
      "Wireshark",
      "Nmap",
      "Linux Hardening",
      "Security Monitoring",
    ],
  },
  {
    name: "Networking",
    tools: ["TCP/IP", "DNS", "DHCP", "SSH & SFTP", "RADIUS"],
  },
  {
    name: "React Development",
    tools: ["React", "React Hooks", "Vite", "Framer Motion", "Responsive UI"],
  },
  {
    name: "Web Development",
    tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    name: "Data Analysis",
    tools: ["Power BI", "Microsoft Excel", "MySQL", "Oracle"],
  },
  {
    name: "IT Support",
    tools: [
      "Windows 10/11",
      "Microsoft 365",
      "Hardware Troubleshooting",
      "Remote Support",
      "User Account Management",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="heading-font text-4xl font-bold text-center text-cyan-400 mb-14">
          CORE EXPERTISE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-cyan-500/30
                bg-black/40
                backdrop-blur-md
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.30)]
                group
              "
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
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
                      hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
