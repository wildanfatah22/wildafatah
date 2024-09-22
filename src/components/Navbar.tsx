import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";

const sections = ["about", "skill", "experience", "projects", "contact"];

const Navbar: FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        return (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        );
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Update state immediately when clicked
      setNavbarOpen(false); // Close the menu on selection
    }
  };

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full bg-[#4f4f4f2e] text-neutral-300 shadow-md py-4 z-50">
        <div className="container mx-auto flex justify-between items-center relative px-4 md:px-8">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border border-gray-600 rounded text-neutral-300 hover:text-[#E8BC55] focus:outline-none z-50"
            onClick={handleNavToggle}
          >
            {navbarOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className={`hover:text-[#E8BC55] transition-colors ${
                  activeSection === section ? "text-[#E8BC55]" : ""
                }`}
                onSetActive={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`${
            navbarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden fixed top-0 left-0 w-3/4 h-full bg-[#1F1F1F] text-neutral-300 flex flex-col items-center space-y-4 p-6 shadow-lg transform transition-transform duration-300 ease-in-out z-40`}
          aria-live="assertive"
        >
          <ul className="flex flex-col space-y-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-lg py-4 px-6 w-full text-center hover:text-[#E8BC55] transition-all ${
                    activeSection === section ? "text-[#E8BC55]" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
