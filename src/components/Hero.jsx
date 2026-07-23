import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="
h-screen
flex
items-center
justify-center
text-center
"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p
          className="
text-cyan-400
tracking-widest
"
        >
          SYSTEM ONLINE
        </p>

        <h1
          className="
text-6xl
font-bold
mt-5
"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400">
            <></>Anwar Azhad
          </span>
        </h1>

        <h2 className="text-3xltext-gray-400mt-5">
          Cybersecurity | Network Security | Web Developer
        </h2>

        <p
          className="
max-w-xl
mx-auto
mt-6
text-gray-400
"
        >
          <TypeAnimation
            sequence={[
              "Analyzing Cyber Threats...",
              2000,

              "Securing Network Infrastructure...",
              2000,

              "Developing Modern Web Apps...",
              2000,

              "Securing Network Infrastructure...",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="
text-cyan-400
text-xl
"
          />
        </p>

        <Link to="about" smooth={true} duration={600} offset={-80}>
          <button
            className="
            mt-8
            px-8
            py-3
            rounded-full
          bg-cyan-500
          text-black
            font-bold
            hover:scale-110
          hover:bg-cyan-400
            transition
            cursor-pointer
          "
          >
            Explore My Work
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
