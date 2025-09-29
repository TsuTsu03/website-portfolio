import React, { useState, useEffect } from 'react';
import MyPicture from '../assets/MyPicture.png';


const About = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
  
      const threshold = 50;
  
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
  <div
    name="about"
    className="z-10 w-full border border-zinc-400 rounded-2xl mt-24 shadow-md shadow-zinc-400 text-text_light flex justify-center"
  >
    <div className="w-full max-w-[1000px] px-6 sm:px-12 py-8">
      {/* Title */}
      <div className="w-full text-center sm:text-left pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-[#2e8a99]">
          About Me
        </p>
      </div>
      <div
        className={`fade-container ${
          isVisible ? "opacity-100" : "opacity-0"
        } z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8`}
      >
        {/* Image */}
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end z-10">
          <img
            className="rounded-2xl opacity-70 max-w-[250px] sm:max-w-[300px] my-4"
            alt="MyPicture"
            src={MyPicture}
          />
        </div>

        <div className="w-full sm:mt-8 sm:w-2/3 flex flex-col items-center justify-center sm:items-start">
          <div className="text-lg sm:text-3xl font-bold mb-2 z-10 text-center sm:text-left">
            <p>Hi. I'm Jansen, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-base sm:text-xl z-10 text-center sm:text-left leading-relaxed">
            <p>
              I love building awesome software that makes life better. From
              helping individuals and small businesses to big corporations, I'm
              here to turn your ideas into reality. Imagine having your personal
              software expert right at your fingertips – what would you create?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default About;