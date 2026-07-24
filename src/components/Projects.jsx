import { motion } from "framer-motion";

const projects = [
  {
    id: "001",
    title: "Linux Server Deployment & Security Configuration",
    description:
      "Configured and secured a Linux server environment including authentication services, secure file transfer, monitoring and system hardening.",
    technology: [
      "SSH",
      "SFTP",
      "RADIUS",
      "Wazuh SIEM",
      "DHCP",
      "Single Sign On (SSO)",
      "Linux Hardening",
    ],
    status: "COMPLETED",
  },

  {
    id: "002",
    title: "Centre for Research & Innovation Management Website",
    description:
      "Developed and customized a modern institutional website using Joomla CMS with YOOtheme Pro for responsive design and content management.",
    technology: ["Joomla", "YOOtheme Pro"],
    status: "COMPLETED",
  },

  {
    id: "003",
    title: "Personal Portfolio Website",
    description:
      "A futuristic developer portfolio built to showcase my skills in cybersecurity, software development and IT technologies.",
    technology: ["HTML", "CSS", "JavaScript", "React"],
    status: "COMPLETED",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
min-h-screen
px-6
py-20
"
    >
      <h2
        className="
heading-font
text-4xl
font-bold
text-center
text-cyan-400
mb-12
"
      >
        PROJECT DATABASE
      </h2>

      <div
        className="
max-w-6xl
mx-auto
grid
md:grid-cols-3
gap-8
"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="
bg-black/40
border
border-cyan-500/30
rounded-xl
p-6
backdrop-blur-md
hover:scale-105
transition
"
          >
            <p
              className="
text-cyan-400
font-mono
"
            >
              PROJECT {project.id}
            </p>

            <h3
              className="
text-xl
font-bold
mt-4
"
            >
              {project.title}
            </h3>

            <p
              className="
text-gray-400
mt-4
text-sm
"
            >
              {project.description}
            </p>

            <div
              className="
mt-5
"
            >
              <p
                className={`
                    inline-flex
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-semibold
                    border

                    ${
                      project.status === "COMPLETED"
                        ? "border-green-400/40 text-green-400 bg-green-400/10"
                        : "border-yellow-400/40 text-yellow-400 bg-yellow-400/10"
                    }

                `}
              >
                ● {project.status}
              </p>
            </div>

            <div
              className="
mt-5
flex
flex-wrap
gap-2
"
            >
              {project.technology.map((tech, i) => (
                <span
                  key={i}
                  className="
px-3
py-1
text-sm
rounded-full
bg-cyan-500/10
border
border-cyan-400/30
text-cyan-300
"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
