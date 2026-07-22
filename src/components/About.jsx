import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="
min-h-screen
px-6
py-20
flex
items-center
justify-center
"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
max-w-5xl
w-full
bg-black/40
border
border-cyan-500/30
rounded-2xl
p-8
backdrop-blur-md
"
      >
        <h2
          className="
text-4xl
font-bold
text-cyan-400
text-center
mb-10
"
        >
          PERSONAL PROFILE DATABASE
        </h2>

        <div
          className="
grid
md:grid-cols-2
gap-8
"
        >
          {/* Profile */}

          <div>
            <h3
              className="
text-xl
text-green-400
font-mono
mb-4
"
            >
              USER INFORMATION
            </h3>

            <p className="text-gray-300">
              USER :{" "}
              <span className="text-cyan-300">Anwar Azhad Bin Azriddin</span>
            </p>

            <p className="text-gray-300 mt-3">
              ROLE :{" "}
              <span className="text-cyan-300">Computer Security Student</span>
            </p>

            <p className="text-gray-300 mt-3">
              SPECIALIZATION :{" "}
              <span className="text-cyan-300">
                Cybersecurity & Software Development
              </span>
            </p>
          </div>

          {/* Education */}

          <div>
            <h3
              className="
text-xl
text-green-400
font-mono
mb-4
"
            >
              EDUCATION LOG
            </h3>

            <p className="text-gray-300">Bachelor of Computer Science</p>

            <p
              className="
text-cyan-300
mt-2
"
            >
              (Computer Security) with Honours
            </p>

            <p
              className="
text-gray-400
mt-2
"
            >
              Universiti Teknikal Malaysia Melaka (UTeM)
            </p>
          </div>
        </div>

        {/* Mission */}

        <div
          className="
mt-10
border-t
border-cyan-500/20
pt-6
"
        >
          <h3
            className="
text-xl
text-green-400
font-mono
"
          >
            MISSION OBJECTIVE
          </h3>

          <p
            className="
text-gray-300
mt-4
leading-relaxed
text-justify
"
          >
            Computer Science (Computer Security) graduate with hands-on
            experience in IT support, web development, Linux server
            administration, and cybersecurity. Experienced in troubleshooting
            hardware, software, and network issues while developing responsive
            websites using Joomla CMS and YOOtheme Pro. Familiar with Linux
            server deployment, Wazuh SIEM, networking fundamentals, and end-user
            technical support. A fast learner with strong analytical and
            problem-solving skills, seeking opportunities in IT Support, Network
            Engineering, SOC Analysis, Junior Web Development, or Data Analysis.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
