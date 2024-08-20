import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"; // Import the Footer component

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" role="main">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer /> {/* Include Footer at the bottom */}
    </main>
  );
}
