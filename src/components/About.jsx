import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  CircleCheck,
  Activity,
  Target,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
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
        <h2 className="heading-font text-4xl font-bold text-cyan-400 text-center mb-12">
          IDENTITY MATRIX
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Identity */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
    rounded-2xl
    border
    border-cyan-500/20
    bg-black/30
    backdrop-blur-md
    p-6
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
    transition
    "
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="text-cyan-400" />

              <h3 className="terminal-font text-green-400">IDENTITY</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">FULL NAME</p>

                <p className="text-white text-lg">Anwar Azhad Bin Azriddin</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">ROLE</p>

                <p className="text-cyan-300">Computer Security Graduate</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">STATUS</p>

                <div className="flex items-center gap-2 mt-1">
                  <CircleCheck size={16} className="text-green-400" />

                  <span className="text-green-400">
                    Available for Opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
    rounded-2xl
    border
    border-cyan-500/20
    bg-black/30
    backdrop-blur-md
    p-6
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
    transition
    "
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-cyan-400" />

              <h3 className="terminal-font text-green-400">EDUCATION</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">DEGREE</p>

                <p className="text-white">Bachelor of Computer Science</p>
              </div>

              <div>
                <p className="text-cyan-300">
                  (Computer Security) with Honours
                </p>
              </div>

              <div>
                <p className="text-gray-400">
                  Universiti Teknikal Malaysia Melaka (UTeM)
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">EDUCATION STATUS</p>
                <div
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    border
                   border-green-400/30
                   bg-green-500/10
                    backdrop-blur-sm
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                  <span className="terminal-font text-green-300 text-sm">
                    COMPLETED
                  </span>
                </div>{" "}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* System Status */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-black/30
            backdrop-blur-md
            p-6
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
            transition
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-cyan-400" />

              <h3 className="terminal-font text-green-400">SYSTEM STATUS</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-sm">Projects</p>
                <h4 className="text-3xl font-bold text-cyan-400 mt-2">03</h4>
              </div>

              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-sm">Experience</p>
                <h4 className="text-3xl font-bold text-cyan-400 mt-2">02+</h4>
              </div>

              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-sm">Tech Stack</p>
                <h4 className="text-3xl font-bold text-cyan-400 mt-2">20+</h4>
              </div>

              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-sm">Award</p>
                <h4 className="text-3xl font-bold text-green-400 mt-2">01</h4>
              </div>
            </div>
          </motion.div>

          {/* Mission */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
            rounded-2xl
            border
            border-cyan-500/20
            bg-black/30
            backdrop-blur-md
            p-6
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
            transition
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-cyan-400" />

              <h3 className="terminal-font text-green-400">MISSION</h3>
            </div>

            <div className="space-y-4">
              {[
                "Build Secure Systems",
                "Develop Modern Web Applications",
                "Strengthen Network Security",
                "Provide Reliable IT Support",
                "Continuously Learn & Improve",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-green-400" />

                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>{" "}
      </motion.div>
    </section>
  );
}
