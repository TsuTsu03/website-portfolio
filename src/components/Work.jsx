import React, { useState, useEffect } from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const projects = data;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150;
      const scrolledPast = window.scrollY > threshold;
      setIsVisible(scrolledPast);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      name="work"
      className="w-full border border-zinc-400 rounded-2xl mt-24 shadow-md shadow-zinc-400 text-text_heading"
    >
      <div
        className={`z-10 fade-container ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full`}
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-text_heading border-[#2e8a99]">
            Work
          </p>
          <p className="py-6">
            Take a look at the projects I’ve built — turning ideas into working solutions.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg shadow-[#001aff41] bg-zinc-900/40"
            >
              {/* Screenshot (buong image) */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-64 object-contain bg-black/20"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
