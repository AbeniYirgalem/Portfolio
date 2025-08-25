"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const certificates = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Certificate",
    date: "2025",
    image: "/assets/Artificial Intelligence Fundamentals.jpg",
  },
  {
    title: "Javascript",
    issuer: "Certificate",
    date: "2024",
    image: "/assets/Javascript.jpg",
  },
  {
    title: "Node.js",
    issuer: "Certificate",
    date: "2024",
    image: "/assets/nodejs.jpg",
  },
  {
    title: "Python",
    issuer: "Certificate",
    date: "2025",
    image: "/assets/python.jpg",
  },
  {
    title: "React.js",
    issuer: "Certificate",
    date: "2024",
    image: "/assets/React-1.jpg",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "Certificate",
    date: "2024",
    image: "/assets/Web Development Fundumentals-1.jpg",
  },
  {
    title: "React.js",
    issuer: "Certificate",
    date: "2024-2025",
    image: "/assets/Abenezer Yirgalem.png",
  },
];

const Certificate = () => {
  return (
    <section
      className="min-h-screen flex flex-col px-4 py-16 sm:px-6 lg:px-20"
      style={{ background: "#121212", color: "#eee" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold" style={{ color: "#eee" }}>
          Certificates
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#eee" }}>
          My professional certifications and achievements.
        </p>
      </div>

      {/* 3D Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {certificates.map((cert, idx) => (
          <CardContainer key={idx} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[28rem] rounded-xl p-8 border">
              <CardItem
                translateZ={50}
                className="text-lg font-bold text-neutral-600 dark:text-white mb-2"
              >
                {cert.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm mt-1 dark:text-neutral-300"
              >
                {cert.issuer} &mdash; {cert.date}
              </CardItem>
              <CardItem
                translateZ={100}
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-6 rounded-xl"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-auto object-contain rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div
        className="py-4 text-center text-sm w-full mt-auto"
        style={{ color: "#eee", background: "#121212" }}
      >
        © 2025 Abenezer Yirgalem Portfolio. All rights reserved.
      </div>
    </section>
  );
};

export default Certificate;
