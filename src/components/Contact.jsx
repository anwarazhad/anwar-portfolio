import { motion } from "framer-motion";
import { Mail, GithubIcon, Linkedin, Download } from "lucide-react";

export default function Contact() {
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
max-w-4xl
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
text-center
text-cyan-400
mb-8
"
        >
          ACCESS TERMINAL
        </h2>

        <div
          className="
font-mono
text-green-400
mb-8
"
        >
          <p>&gt; Establishing secure connection...</p>

          <p className="mt-2">&gt; Connection successful.</p>
        </div>

        <div
          className="
grid
md:grid-cols-3
gap-5
"
        >
          {/* EMAIL */}

          <a
            href="mailto:your-email@gmail.com"
            className="
border
border-cyan-500/30
p-5
rounded-xl
hover:scale-105
transition
"
          >
            <Mail
              className="
text-cyan-400
mb-3
"
            />

            <h3>EMAIL</h3>

            <p
              className="
text-green-400
mt-2
"
            >
              ● ONLINE
            </p>
          </a>

          {/* GithubIcon */}

          <a
            href="#"
            className="
border
border-cyan-500/30
p-5
rounded-xl
hover:scale-105
transition
"
          >
            <GithubIcon
              className="
text-cyan-400
mb-3
"
            />

            <h3>GITHUB</h3>

            <p
              className="
text-green-400
mt-2
"
            >
              ● ONLINE
            </p>
          </a>

          {/* Linkedin */}

          <a
            href="#"
            className="
border
border-cyan-500/30
p-5
rounded-xl
hover:scale-105
transition
"
          >
            <Linkedin
              className="
text-cyan-400
mb-3
"
            />

            <h3>LINKEDIN</h3>

            <p
              className="
text-green-400
mt-2
"
            >
              ● ONLINE
            </p>
          </a>
        </div>

        {/* Resume */}

        <div
          className="
text-center
mt-10
"
        >
          <a
            href="\src\assets\AnwarAzhad_Resume.pdf"
            download
            className="
inline-flex
items-center
gap-3
px-8
py-3
bg-cyan-400
text-black
rounded-full
font-bold
hover:scale-110
transition
"
          >
            <Download size={20} />
            DOWNLOAD RESUME
          </a>
        </div>

        <div
          className="
mt-10
border-t
border-cyan-500/20
pt-5
text-center
"
        >
          <p
            className="
text-yellow-400
font-mono
"
          >
            STATUS: AVAILABLE FOR OPPORTUNITIES
          </p>
        </div>
      </motion.div>
    </section>
  );
}
