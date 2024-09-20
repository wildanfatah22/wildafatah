import logo from "../assets/logo.svg";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "tech", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#4f4f4f2e] text-neutral-300 shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="items-center gap-6 text-xl hidden md:flex">
          {["about", "tech", "experience", "projects", "contact"].map(
            (menu) => (
              <a
                key={menu}
                href={`#${menu}`}
                className={`hover:text-cyan-500 transition-colors ${
                  activeSection === menu ? "text-cyan-500" : ""
                }`}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </a>
            )
          )}
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border border-gray-600 rounded text-neutral-300 hover:text-cyan-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#4f4f4f2e] md:hidden flex flex-col items-center justify-center z-40">
          {["about", "tech", "experience", "projects", "contact"].map(
            (menu) => (
              <a
                key={menu}
                href={`#${menu}`}
                className={`text-xl py-4 px-6 w-full text-center hover:text-cyan-500 ${
                  activeSection === menu ? "text-cyan-500" : ""
                }`}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
