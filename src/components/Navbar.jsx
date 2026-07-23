import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          <h1
            className="text-2xl
            font-bold
            tracking-wider
            transition-all
            duration-300
            hover:scale-105
            hover:drop-shadow-[0_0_12px_#22d3ee]"
          >
            <span className="text-cyan-400">ANWAR</span>
            <span className="text-white">.DEV</span>
          </h1>
        </Link>
        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
          >
            ABOUT
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
          >
            SKILLS
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
          >
            PROJECTS
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
          >
            EXPERIENCE
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
          >
            CONTACT
          </Link>
        </div>

        {/* Status */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-mono">
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </nav>
  );
}
