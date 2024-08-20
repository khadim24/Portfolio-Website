// src/components/Footer.js

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © 2024 Khadim Thiam. All rights reserved.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/khadim-thiam-4078191a9"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/khadim24"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
