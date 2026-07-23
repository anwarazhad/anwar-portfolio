import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import CyberBackground from "./background/CyberBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      pt-20
      "
    >
      {/* Background */}
      <CyberBackground />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
        relative
        z-10
        text-center
        max-w-4xl
        mx-auto
        "
      >
        {/* System Online */}
        <p
          className="
          terminal-font
          text-cyan-400
          tracking-[0.3em]
          text-xs
          md:text-sm
          mb-4
          "
        >
          SYSTEM ONLINE
        </p>

        {/* Name */}
        <h1
          className="
          heading-font
          font-bold
          leading-tight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          "
        >
          Hi, I'm <span className="text-cyan-400">Anwar Azhad</span>
        </h1>

        {/* Subtitle */}
        <div
          className="
          mt-5
          flex
          flex-wrap
          justify-center
          gap-2
          text-gray-400
          text-sm
          sm:text-base
          md:text-xl
          "
        >
          <span>Cybersecurity</span>

          <span className="hidden sm:inline">|</span>

          <span>Network Security</span>

          <span className="hidden sm:inline">|</span>

          <span>Web Developer</span>
        </div>

        {/* Typing */}
        <div className="mt-8 h-10">
          <TypeAnimation
            sequence={[
              "Analyzing Cyber Threats...",
              2000,
              "Securing Network Infrastructure...",
              2000,
              "Building Secure Systems...",
              2000,
              "Developing Modern Web Apps...",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="
            terminal-font
            text-cyan-400
            text-base
            sm:text-lg
            md:text-2xl
            "
          />
        </div>

        {/* Button */}
        <Link to="about" smooth={true} duration={800} offset={-80}>
          <button
            className="
            mt-10
            w-full
            sm:w-auto
            px-8
            py-3
            rounded-full
            bg-cyan-500
            text-black
            font-bold
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-400
            hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
            "
          >
            ▶ ACCESS TERMINAL
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
