import { useLocation } from "react-router-dom";

const skills = [
  {
    image: "/image/react-logo@3x.svg",
  },
  {
    image: "/image/Node.js_logo.svg.png",
  },
  {
    image: "/image/mongodb.jpg",
  },
  {
    image: "/image/express.png",
  },
];

const Skills = () => {
  const location = useLocation();

  return (
    <section>
      <div
        className="min-h-screen flex flex-col px-4 py-16 sm:px-6 lg:px-20"
        style={{ background: "#121212", color: "#eee" }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">My Tech Stack</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in the MERN stack: React, Node.js, MongoDB, and Express.
            Building modern, scalable web applications with a passion for clean
            code and robust architecture.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex-1">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card flex flex-col items-center justify-end"
                style={{ width: "320px", height: "400px" }}
              >
                <img
                  src={skill.image}
                  alt={(skill.title ? skill.title : "Skill") + " logo"}
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                {skill.title && (
                  <p className="heading text-center absolute bottom-4 left-0 w-full text-white text-lg font-bold">
                    {skill.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Solid black background for copyright at the bottom */}
      {location.pathname === "/skills" ? (
        <div className="bg-black py-4 text-center text-sm text-gray-400 px-4 mt-auto w-full">
          © 2025 Abenezer Yirgalem Portfolio. All rights reserved.
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Skills;
