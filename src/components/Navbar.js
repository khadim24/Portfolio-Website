// src/components/Navbar.js

import { ArrowRightIcon } from "@npm install @heroicons/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";  // Import LinkedIn and GitHub icons
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Khadim Thiam
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href="https://www.linkedin.com/in/khadim-thiam-4078191a9" className="mr-5 hover:text-white">
            <FaLinkedin className="inline-block w-5 h-5 mr-1" /> LinkedIn
          </a>
          <a href="https://github.com/khadim24" className="mr-5 hover:text-white">
            <FaGithub className="inline-block w-5 h-5 mr-1" /> GitHub
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}