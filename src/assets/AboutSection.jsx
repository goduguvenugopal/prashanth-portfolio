import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      {/* About Me Title */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold uppercase border-2 border-black inline-block px-6 py-2">
          About Me
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          “Hi! I’m a UX/UI Designer with a background in Designing, which gives
          me a unique edge in empathizing with users and improving their
          experience through design. My research experience has refined my
          problem-solving skills and user insights. I’m constantly seeking new
          ways to learn and grow through real-world experiences. By using tools
          like Figma, Sketch, Invision.”
        </p>
      </div>

      {/* Explore Section */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-700">
          <span className="border-b-2 border-gray-500 pb-1">Explore</span>
        </p>
        <div className="mt-2 flex justify-center">
          <div className="w-16 border-b-2 border-gray-500"></div>
          <div className="mx-2 w-4 h-2 border-b-2 border-gray-500"></div>
          <div className="w-16 border-b-2 border-gray-500"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* Design */}
        <div className="relative text-center">
          <div className="absolute -top-4 -left-4 opacity-20 text-gray-400 text-6xl">
            ⚙️
          </div>
          <h3 className="text-xl font-bold uppercase">Design</h3>
          <p className="text-gray-600 mt-2">
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>

        {/* Development */}
        <div className="relative text-center">
          <div className="absolute -top-4 -left-10 opacity-20 text-gray-400 text-6xl">
            🛠️
          </div>
          <h3 className="text-xl font-bold uppercase">Development</h3>
          <p className="text-gray-600 mt-2">
            I can develop the site based on your needs and suggestions. I can
            also develop the site from scratch and consult you during the job.
          </p>
        </div>

        {/* Maintenance */}
        <div className="relative text-center">
          <div className="absolute -top-4 -left-4 opacity-20 text-gray-400 text-6xl">
            🔧
          </div>
          <h3 className="text-xl font-bold uppercase">Maintenance</h3>
          <p className="text-gray-600 mt-2">
            I can maintain the site based on your needs and suggestions. I can
            also maintain the site from scratch and consult you during the job.
          </p>
        </div>
      </div>

      {/* Bottom Decorative Lines */}
      <div className="mt-14 flex justify-center">
        <div className="w-16 border-b-2 border-gray-500"></div>
        <div className="mx-2 w-4 h-2 border-b-2 border-gray-500"></div>
        <div className="w-16 border-b-2 border-gray-500"></div>
      </div>
    </section>
  );
};

export default AboutSection;
