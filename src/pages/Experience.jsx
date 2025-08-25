import React from "react";

const Experience = () => {
  const experiences = [
    {
      step: "STEP 1",
      title: "Full Stack Developer",
      company: "Acme Tech",
      period: "2021-06 - Present",
      description:
        "Developed scalable web applications using the MERN stack. Led the implementation of RESTful APIs and modern UI/UX.",
    },
    {
      step: "STEP 2",
      title: "Frontend Engineer",
      company: "Fox Hub",
      period: "2020-01 - 2021-05",
      description:
        "Built responsive React interfaces and collaborated with designers to deliver seamless user experiences.",
    },
    {
      step: "STEP 3",
      title: "Backend Developer",
      company: "Goldline",
      period: "2018-07 - 2019-12",
      description:
        "Designed and maintained Node.js/Express APIs, optimized MongoDB queries, and ensured high system reliability.",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col"
      style={{ background: "#121212", color: "#eee" }}
    >
      <div className="flex-1 bg-gray-50 py-16 px-6 lg:px-20">
        <p className="text-blue-500 font-medium uppercase tracking-wide">
          Experience
        </p>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          My Professional Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Explore my career path, key roles, and the companies I've contributed
          to as a MERN stack developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border"
            >
              <p className="text-sm text-gray-500 mb-2">{exp.step}</p>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-gray-700 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-600 text-sm">{exp.description}</p>
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

export default Experience;
