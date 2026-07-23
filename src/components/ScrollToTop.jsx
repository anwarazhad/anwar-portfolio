import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 1000, smooth: true })}
      className={`
        fixed
        bottom-8
        right-8
        z-50
        p-3
        rounded-full
        bg-cyan-500/20
        border
        border-cyan-400/40
        backdrop-blur-md
        text-cyan-400
        transition-all
        duration-300
        hover:scale-110
        hover:bg-cyan-400/20
        hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <ChevronUp size={24} />
    </button>
  );
}
