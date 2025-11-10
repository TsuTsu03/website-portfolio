import React, { useState, useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/Python.png';
import Tensorflow from '../assets/Tensorflow.png';
import Keras from '../assets/keras.png';

const Skills = () => {

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
    <div name='skills' className={`w-full border border-zinc-400 rounded-2xl mt-24 shadow-md shadow-zinc-400 text-text_heading`}>
      {/* Container */}
      <div className={`fade-container ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full `}>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#2e8a99] '>Skills</p>
              <p className='py-4 font-bold'>These are the skills and languages I have experience working with.</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>HTML</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>CSS</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>REACT</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>GITHUB</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>NODE JS</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>MONGO DB</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>TAILWIND</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>AWS</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>PYTHON</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tensorflow} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>TENSORFLOW</p>
              </div>
              <div className='shadow-md grid-item shadow-[#1f6e8c] bg-[#164863] pt-4 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Keras} alt="HTML icon" />
                  <p className='my-4 font-bold text-md'>KERAS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;