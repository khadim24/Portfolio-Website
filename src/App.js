import React from "react";
import About from ".src/components/About";
import Contact from ".src/components/Contact";
import Navbar from ".src/components/Navbar";
import Projects from ".src/components/Projects";
import Skills from ".src/components/Skills";
import Testimonials from ".src/components/Testimonials";
import Footer from ".src/components/Footer"; // Import the Footer component

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
