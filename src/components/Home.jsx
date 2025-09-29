import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Resume from '../assets/Resume-Den-Jansen-Flores.pdf';


const Home = () => {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
  
      // You can adjust the threshold value to control when the fade-in/fade-out occurs
      const threshold = 200;
  
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Resume_Den_Jansen_Flores.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div name='home' className="w-full p-4 border border-zinc-400 rounded-2xl mt-24 shadow-md shadow-zinc-400">

      {/* Container */}
      <div className={`fade-container ${isVisible ? 'opacity-0' : 'opacity-100'} w-full px-4 mx-auto justify-center flex gap-4 `}>
        <div className='w-full px-8 flex flex-col justify-center items-center '>
          <p className='text-[#ffffff] font-bold text-4xl'>Hi, my name is</p>
          <div className='flickering-element text-center p-4 sm:p-12 m-4 rounded-3xl border-4 border-pink flex flex-col items-center'>
          <h1 className='text-2xl sm:text-7xl font-bold text-[#ffffff]'>
            Den Jansen Flores
          </h1>
          <h2 className='text-2xl sm:text-7xl font-bold text-[#ffffff]'>
            I'm a Full Stack Developer.
          </h2>
          </div>
          <h3 className='text-text_light py-2 max-w-[700px] text-center sm:text-2xl'>
          Hi there! I'm an Electronics Engineering graduate turned full-stack developer. I have a passion for crafting exceptional digital experiences. Currently, I'm deep into building responsive full-stack web applications, bringing the best of both worlds – engineering and development – to the table.
          </h3>
          <div className='w-full flex justify-center'>
            <button onClick={handleDownload} className='text-text_light z-40 text-xl font-bold rounded-lg group border-2 px-6 py-2 my-2 flex items-center hover:bg-[#1F6E8C] hover:border-[#1F6E8C]'>
              Resume
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Home;