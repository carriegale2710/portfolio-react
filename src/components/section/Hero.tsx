import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useThemeColors } from "../../hooks/useThemeColors";
import AsciiMorphText from "../AsciiMorphText";
import TypewriterCarousel from "../TypewriterCarousel";

const Hero = () => {
  const [asciiText, setAsciiText] = useState("");
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const sectionRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "UX/UI Designer",
    "Usability Engineer",
  ];

  //FIXME - Should it display this art? does not at the moment...
  const fullAsciiArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠲⠶⣤⣀⣠⣤⣤⣤⡿⠛⠿⡴⠾⠛⢻⡆⠀⠀⠀
⠀⠀⠀⣼⠁⠀⠀⠀⠉⠁⠀⢀⣿⠐⡿⣿⠿⣶⣤⣤⣷⡀⠀⠀
⠀⠀⠀⢹⡶⠀⠀⠀⠀⠀⠀⠈⢯⣡⣿⣿⣀⣰⣿⣦⢂⡏⠀⠀
⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠹⣍⣭⣾⠁⠀⠀
⠀⣀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣧⣤⡀
⠈⠉⠹⣏⡁⠀⢸⣿⠀⠀⠀⢀⡀⠀⠀⠀⣿⠆⠀⢀⣸⣇⣀⠀
⠀⠐⠋⢻⣅⡄⢀⣀⣀⡀⠀⠯⠽⠂⢀⣀⣀⡀⠀⣤⣿⠀⠉⠀
⠀⠀⠴⠛⠙⣳⠋⠉⠉⠙⣆⠀⠀⢰⡟⠉⠈⠙⢷⠟⠈⠙⠂⠀
⠀⠀⠀⠀⠀⢻⣄⣠⣤⣴⠟⠛⠛⠛⢧⣤⣤⣀⡾⠀⠀⠀⠀⠀`;

  // Typewriter effect for ASCII art
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 3; // Speed in milliseconds

    const typeWriter = () => {
      if (currentIndex < fullAsciiArt.length) {
        setAsciiText(fullAsciiArt.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      }
    };

    // Start typing after a small delay
    const startDelay = setTimeout(() => {
      typeWriter();
    }, 500);

    return () => clearTimeout(startDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        background:
          themeColors.background.sections?.about ||
          themeColors.background.gradient,
        transition: "background 0.3s ease-in-out",
        width: "100%",
        maxWidth: "100vw",
        contain: "layout style",
      }}
    >
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-8">
            <div className="text-left w-full md:w-auto">
              <div className="ascii-container justify-start text-3xl md:text-4xl lg:text-5xl">
                <AsciiMorphText text="Hi, I'm Carrie Gale" />
              </div>
              <div className="hero-subtitle justify-start text-base md:text-lg lg:text-xl mt-2">
                <div className="flex flex-wrap items-center justify-start">
                  <span
                    className={
                      isDarkMode ? "hero-subtitle-dark" : "hero-subtitle-light"
                    }
                  >
                    I am a&nbsp;
                  </span>
                  <TypewriterCarousel
                    roles={roles}
                    className={
                      isDarkMode ? "hero-subtitle-dark" : "hero-subtitle-light"
                    }
                  />
                </div>
              </div>
              <div className="hero-buttons flex justify-start gap-3 mt-4">
                <button
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                  onClick={() => {
                    window.open("/resume.pdf", "_blank");
                  }}
                >
                  Resume →
                </button>
                <Link
                  to="/contact"
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                >
                  Contact →
                </Link>
              </div>
            </div>
            <div
              className="hidden md:block"
              style={{
                fontSize: "0.8rem",
                lineHeight: "1",
                fontFamily: "monospace",
                minHeight: "150px",
                color: isDarkMode
                  ? themeColors.primary
                  : themeColors.colors.pink[500],
              }}
            >
              <pre>{asciiText}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
