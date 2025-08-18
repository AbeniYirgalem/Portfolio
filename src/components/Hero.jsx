import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I'm Abenezer Yirgalem
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            A passionate MERN stack developer crafting modern, scalable web
            applications. Let's build something amazing together!
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow hover:opacity-90 transition"
              download
            >
              Download Resume 
            </a>
            <Link to="/projects"
              
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center">
          <img
            src="/image/blog.jpg"
            alt="Developer setup"
            className="w-full max-w-md rounded-xl shadow-md"
          />
          <div className="mt-6 bg-blue-500 text-white p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-2">MERN Stack Developer</h2>
            <p className="text-sm">
              Specializing in React, Node.js, MongoDB, and Express. Clean code,
              robust solutions, and a love for technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
