import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface ThemeProp {
  toggleTheme: () => void;
  lightTheme: boolean;
}
const Header = ({ toggleTheme, lightTheme }: ThemeProp) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrollValue, setScrollValue] = useState<number>(0);

  const showNavbar = () => {
    if (window.scrollY > scrollValue) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavbar);
    return () => window.removeEventListener("scroll", showNavbar);
  }, [scrollValue]);

  return (
    <header
      className={`${lightTheme ? "bg-[#2b3945]" : "bg-[white] "} ${
        showHeader ? "top-0" : ""
      }  sticky w-full z-10  `}
    >
      <div className="px-4 py-4 md:max-w-5xl md:mx-auto md:py-0">
        <nav className="flex justify-between items-center gap-4">
          <div>
            <h1
              className={` ${
                lightTheme ? "text-[white]" : "text-[#111517]"
              } text-2xl font-semibold cursor-pointer`}
            >
              mrvicthor
            </h1>
          </div>

          <ul
            id="primary__navigation"
            className={`${
              lightTheme ? "bg-[#202c37]" : "bg-[#fafafa]"
            } primary__navigation flex flex-col gap-8 justify-center md:inset-0 md:h-full md:ml-auto md:translate-y-0 md:relative md:flex-row md:bg-transparent md:px-0 md:py-0`}
            data-visible={showNav ? "true" : "false"}
          >
            <li
              className={`${
                lightTheme ? "text-[white]" : "text-[#111517]"
              }  text-3xl md:text-md cursor-pointer nav__link md:py-3 md:text-lg`}
            >
              <Link
                to="/"
                spy={true}
                smooth={true}
                onClick={() => setShowNav(!showNav)}
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                lightTheme ? "text-[white]" : "text-[#111517]"
              } " text-3xl md:text-md cursor-pointer nav__link md:py-3  md:text-lg`}
            >
              <Link
                to="about"
                activeClass="about"
                offset={-68}
                spy={true}
                smooth={true}
                onClick={() => setShowNav(false)}
              >
                About
              </Link>
            </li>
            <li
              className={`${
                lightTheme ? "text-[white]" : "text-[#111517]"
              }  text-3xl md:text-md cursor-pointer nav__link md:py-3 md:text-lg`}
            >
              <Link
                onClick={() => setShowNav(false)}
                to="projects"
                activeClass="projects"
                offset={-68}
                spy={true}
                smooth={true}
              >
                Projects
              </Link>
            </li>
            <li
              className={`${
                lightTheme ? "text-[white]" : "text-[#111517]"
              } text-3xl md:text-md cursor-pointer nav__link md:py-3 md:text-lg`}
            >
              <Link
                to="contact"
                activeClass="contact"
                offset={-68}
                spy={true}
                smooth={true}
                onClick={() => setShowNav(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <button
              aria-controls="primary__navigation"
              className="md:hidden z-10 border-none"
              onClick={() => setShowNav(!showNav)}
            >
              <span className="sr-only" aria-expanded="false">
                Menu
              </span>
              {showNav ? (
                <FaTimes
                  className="h-8 cursor-pointer"
                  color={`${lightTheme ? "white" : "#111517"}`}
                />
              ) : (
                <FaBars
                  className="h-8 cursor-pointer"
                  color={`${lightTheme ? "white" : "#111517"}`}
                />
              )}
            </button>
            {lightTheme ? (
              <>
                <BsSunFill
                  className="h-8 cursor-pointer"
                  color={`${lightTheme ? "white" : "#111517"}`}
                  onClick={() => toggleTheme()}
                />
              </>
            ) : (
              <>
                <BsMoonStars
                  className="h-8 cursor-pointer"
                  color={`${lightTheme ? "white" : "#111517"}`}
                  onClick={() => toggleTheme()}
                />
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
