import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <motion.div 
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Khadim Thiam.
            <br className="hidden lg:inline-block" />I love to build amazing things.
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my page! I'm thrilled to have you here. Feel free to explore and learn more about my work!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition-transform transform hover:scale-105">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition-transform transform hover:scale-105">
              See My Past Work
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </motion.div>
      </div>
    </section>
  );
}