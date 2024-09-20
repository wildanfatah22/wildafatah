import logo from "../assets/logo.svg";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

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
        <div className="flex items-center justify-center gap-6 text-xl">
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
      </div>
    </nav>
  );
};

export default Navbar;
