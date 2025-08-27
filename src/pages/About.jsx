import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-300">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-6 gap-10">
        {/* Profile Card */}
        <div className="bg-[#121212] rounded-lg overflow-hidden max-w-sm w-full">
          <img
            src="/images/portfolio-photo.png" // replace with your actual path
            alt="Abenezer Yirgalem"
            className="object-cover w-full h-80"
          />
          <div className="p-6 text-center">
            <p className="text-gray-500">Addis Ababa, Ethiopia</p>
            <p className="text-gray-400 mt-2">+251 903 147 803</p>
            <p className="text-blue-500 mt-2">codewithabeni@gmail.com</p>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-2xl">
          <h3 className="text-xl text-gray-400 font-semibold mb-2">
            MERN Stack Developer
          </h3>
          <h1 className="text-4xl font-bold text-white mb-4">
            Abenezer Yirgalem
          </h1>
          <hr className="border-gray-700 mb-4" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I'm Abenezer Yirgalem, a passionate MERN stack developer focused
            on building modern, scalable web applications. I love solving
            complex problems and bringing ideas to life with clean, efficient
            code.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-4 text-center text-sm text-gray-500 w-full">
        © 2025 Abenezer Yirgalem Portfolio. All rights reserved.
      </div>
    </div>
  );
};

export default About;
