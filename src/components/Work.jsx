import React, { useState, useEffect } from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const projects = data;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
  
      // You can adjust the threshold value to control when the fade-in/fade-out occurs
      const threshold = 150;
  
      if (scrollTop > threshold && !isVisible) {
        setIsVisible(true);
      } else if (scrollTop <= threshold && isVisible) {
        setIsVisible(false);
      }
    };
  
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div name='work' className='w-full border border-zinc-400 rounded-2xl mt-24 shadow-md shadow-zinc-400 md: text-text_heading'>
      <div className={`z-10 fade-container ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full `}>
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 text-text_heading border-[#2e8a99]'>
            Work
          </p>
          <p className='py-6'>Take a look at the projects I’ve built — turning ideas into working solutions.</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Grid Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="h-64 shadow-lg shadow-[#001aff41] group container rounded-lg flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    >
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
