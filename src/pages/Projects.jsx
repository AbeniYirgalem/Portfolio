import React, { useState } from "react";
import classNames from "classnames";

const categories = ["Web Applications", "Backend Services", "Dashboards"];

const projects = [
  {
    title: "MERN Blog Platform",
    category: "Web Applications",
    image: "./image/blog.jpg",
    tech: "React",
  },
  {
    title: "Social media App",
    category: "Web Applications",
    image: "./image/social media.jpg",
    tech: "React",
  },
  {
    title: "Real-time Chat App",
    category: "Web Applications",
    image: "./image/chat.png",
    tech: "React",
  },
  {
    title: "Admin Dashboard",
    category: "Dashboards",
    image: "./image/Admin-Dashboard.jpg",
    tech: "React",
  },
  {
    title: "travel-booking-platform",
    category: "Web Applications",
    image: "./image/travel-booking.png",
    tech: "React",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Web Applications");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section
      className="min-h-screen flex flex-col"
      style={{ background: "#121212", color: "#eee" }}
    >
      <div className="flex-1 p-8">
        {/* Tabs */}
        <div className="flex space-x-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={classNames(
                "px-4 py-2 rounded-full font-medium transition",
                activeCategory === cat
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="card flex items-center justify-center"
              style={{ width: "320px", height: "400px" }}
            >
              <div
                className="card2 flex flex-col items-center justify-center relative"
                style={{ width: "320px", height: "400px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover rounded-t-[20px]"
                  style={{
                    objectFit: "cover",
                    height: "220px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div className="p-6 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {project.title}
                  </h3>
                  <span className="text-sm inline-block bg-blue-600 text-white px-3 py-2 rounded">
                    {project.tech}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Solid black background for copyright at the bottom */}
      <div className="bg-black py-4 text-center text-sm text-gray-400 w-full">
        © 2025 Abenezer Yirgalem Portfolio. All rights reserved.
      </div>
    </section>
  );
};

export default Projects;
