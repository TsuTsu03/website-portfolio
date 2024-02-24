import React, { useState, useEffect } from 'react';
import MyPicture from '../assets/MyPicture.png';


const About = () => {

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


  return (
    <div name='about' className='z-10 w-full h-screen bg-primary text-text_light'>
      <div className={`fade-container ${isVisible ? 'opacity-100' : 'opacity-0'} z-10 flex justify-center items-center w-full h-full gap-4`}>
        <div className='w-1/4 mt-40 flex justify-end z-10'>
            <img className='z-10 rounded-2xl opacity-70' alt='MyPicture' src={MyPicture} />
        </div>
        <div className='w-1/4 mt-40 gap-8'>
          <div className='sm:text-left pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2e8a99]'>
              About Me
            </p>
          </div>
          <div className='sm:text-left text-5xl font-bold mb-4 z-10'>
            <p>Hi. I'm Jansen, nice to meet you. Please take a look around.</p>
          </div>
          <div className='text-2xl z-10'>
            <p>
            I love building awesome software that makes life better. From helping individuals and small businesses to big corporations, I'm here to turn your ideas into reality. Imagine having your personal software expert right at your fingertips – what would you create?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default About;