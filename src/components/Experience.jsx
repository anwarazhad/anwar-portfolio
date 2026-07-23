import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    period: "Mar 2026 - Aug 2026",
    role: "Web Developer Intern",
    company: "Centre for Research & Innovation Management (CRIM) UTeM",
    status: "ACTIVE",
  },

  {
    year: "2022",
    period: "Oct 2022 - Mar 2023",
    role: "IT Help Desk Support",
    company: "Teras Teknologi Sdn Bhd",
    status: "COMPLETED",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
mb-14
"
      >
        CAREER LOGS
      </h2>

      <div
        className="
max-w-4xl
mx-auto
relative
"
      >
        {/* timeline line */}

        <div
          className="
absolute
left-5
top-0
h-full
w-px
bg-cyan-500/30
"
        ></div>

        {experiences.map((exp, index) => (
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
              delay: index * 0.2,
            }}
            className="
relative
pl-14
mb-12
"
          >
            {/* timeline point */}

            <div
              className="
absolute
left-0
top-2
w-10
h-10
rounded-full
bg-cyan-400
flex
items-center
justify-center
text-black
font-bold
text-xs
"
            >
              {exp.year}
            </div>

            <div
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
              <h3
                className="
text-2xl
font-bold
"
              >
                ▶ {exp.role}
              </h3>

              <p
                className="
text-cyan-300
mt-3
"
              >
                {exp.company}
              </p>

              <p
                className="
text-gray-400
mt-3
"
              >
                PERIOD:
                {exp.period}
              </p>

              <p
                className={`
mt-4
font-semibold

${exp.status === "ACTIVE" ? "text-yellow-400" : "text-green-400"}

`}
              >
                STATUS: {exp.status}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
