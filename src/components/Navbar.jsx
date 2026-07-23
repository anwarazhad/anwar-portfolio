import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["about", "skills", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer"
        >
          <h1
            className="
              logo-font
              text-xl
              md:text-2xl
              font-bold
              tracking-wider
              transition-all
              duration-300
              hover:scale-105
              hover:drop-shadow-[0_0_12px_#22d3ee]
            "
          >
            <span className="text-cyan-400">ANWAR</span>
            <span className="text-white">.DEV</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={800}
              offset={-80}
              className="
                cursor-pointer
                text-gray-300
                hover:text-cyan-400
                transition
                uppercase
              "
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Status */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="terminal-font text-green-400 text-sm">
            SYSTEM ONLINE
          </span>
        </div>

        {/* Mobile Button */}
        <button
          className="
            md:hidden
            text-cyan-400
            transition
            hover:rotate-90
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            px-6
            py-6
            bg-black/80
            backdrop-blur-xl
            border-t
            border-cyan-500/20
            space-y-5
          "
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="
                block
                cursor-pointer
                text-gray-300
                hover:text-cyan-400
                transition
                uppercase
                tracking-wider
              "
            >
              {item}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-4 border-t border-cyan-500/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

            <span className="terminal-font text-green-400 text-sm">
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
