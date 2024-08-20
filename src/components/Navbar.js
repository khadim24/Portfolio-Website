import { useState, useEffect } from "react";
import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to detect the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "testimonials", "contact"];
      const scrollPos = window.scrollY + 100; // Adjust scroll position offset as needed

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetHeight = sectionElement.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Khadim Thiam
          </a>
        </a>
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center`}
        >
          <a
            href="#projects"
            className={`mr-5 hover:text-white ${
              activeSection === "projects" ? "text-white underline" : ""
            }`}
          >
            Past Work
          </a>
          <a
            href="#skills"
            className={`mr-5 hover:text-white ${
              activeSection === "skills" ? "text-white underline" : ""
            }`}
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className={`mr-5 hover:text-white ${
              activeSection === "testimonials" ? "text-white underline" : ""
            }`}
          >
            Testimonials
          </a>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:scale-105 transform transition-all duration-200 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
