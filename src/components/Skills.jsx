import { motion } from "framer-motion";

const skills = [
  {
    name: "Cybersecurity",
    level: 85,
  },

  {
    name: "Network",
    level: 60,
  },

  {
    name: "React Development",
    level: 50,
  },

  {
    name: "Web Development",
    level: 90,
  },

  {
    name: "Data Analysis",
    level: 30,
  },

  {
    name: "IT Support",
    level: 95,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
min-h-screen
flex
items-center
justify-center
px-6
"
    >
      <div
        className="
max-w-5xl
w-full
"
      >
        <h2
          className="
text-4xl
font-bold
text-center
text-cyan-400
mb-12
"
        >
          SYSTEM CAPABILITIES
        </h2>

        <div
          className="
grid
md:grid-cols-2
gap-8
"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
bg-black/40
border
border-cyan-500/20
backdrop-blur-md
rounded-xl
p-6
shadow-lg
hover:shadow-cyan-500/50
hover:scale-105
transition
"
            >
              <div
                className="
flex
justify-between
mb-3
"
              >
                <h3
                  className="
text-xl
font-semibold
"
                >
                  {skill.name}
                </h3>

                <span
                  className="
text-cyan-400
"
                >
                  {skill.level}%
                </span>
              </div>

              <div
                className="
w-full
bg-gray-700
rounded-full
h-3
"
              >
                <div
                  className="
bg-cyan-400
h-3
rounded-full
"
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
