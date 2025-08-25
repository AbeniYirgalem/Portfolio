import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#0B1120] text-white pt-20 pb-0 relative overflow-hidden">
      {/* Call-to-action (CTA) section */}
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to start your next project?
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Let’s collaborate to turn your ideas into reality. Reach out for web
          development, consulting, or just to say hi!
        </p>
        <Link to="/contact">
          <div className="mt-8 flex justify-center space-x-4">
            <button className="button" data-text="Contact Me">
              Contact Me
              <span className="hover-text" data-text="Contact Me"></span>
            </button>
          </div>
        </Link>
      </div>

      {/* Glowing background effect */}
      {/* <div className="absolute bottom-20 left-0 right-0 h-60 bg-gradient-to-t from-blue-900 to-transparent opacity-30 pointer-events-none" /> */}

      {/* Solid black background for copyright */}
      <div
        className="mt-20 py-4 text-center text-sm px-4"
        style={{ color: "#eee", background: "#121212" }}
      >
        © 2025 Abenezer Yirgalem Portfolio. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
