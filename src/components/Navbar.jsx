import { RxHamburgerMenu, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { BsFacebook, BsInstagram  } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TiTimes } from "react-icons/ti";
import { Link } from 'react-scroll';
import React, { useState } from 'react';

const Navbar = () => {
const [nav, setNavOpen] = useState(false);
const handleClick = () => setNavOpen(!nav);

return (
  <div className={` fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-text_light text-2xl border-b-4 border-text_heading z-50`}>
    <div className='z-50' onClick={handleClick}>
      {!nav ? <RxHamburgerMenu className='text-[40px]' /> : <TiTimes className='text-[40px]' />}
    </div>
    <ul className='hidden md:flex gap-4 z-50'>
      <div className="p-4 rounded hover:bg-[#2e8a99] duration-500 z-50">
      <li className="z-50">
        <Link className="z-50" to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      </div>
      <div className="p-4 rounded hover:bg-[#2e8a99] duration-500 z-50">
      <li>
        <Link to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      </div>
      <div className="p-4 rounded hover:bg-[#2e8a99] duration-500 z-50">
      <li>
        <Link to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      </div>
      <div className="p-4 rounded hover:bg-[#2e8a99] duration-500 z-50">
      <Link to='work' smooth={true} duration={500}>
      <li>Work</li>
      </Link>
      </div>
      <div className="p-4 rounded hover:bg-[#2e8a99] duration-500 z-50">
      <Link to='contact' smooth={true} duration={500}>
      <li>Contact</li>
      </Link>
      </div>
    </ul>
    {/* Hamburger */}
    <div className='hidden'> <RxHamburgerMenu /> </div>

    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full  bg-primary flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>Home</li>
      <li className='py-6 text-4xl'>About</li>
      <li className='py-6 text-4xl'>Skills</li>
      <li className='py-6 text-4xl'>Work</li>
      <li className='py-6 text-4xl'>Contact</li>
    </ul>

{/* Social Icons */}
<div className='your-component fixed flex flex-col top-[35%] left-0 pr-2 py-6'>
  <ul className='text-[28px] sm:text-[40px] flex flex-col gap-4 text-text_heading'>
    <li className='hover:scale-150 duration-500'>
      <a href="https://www.linkedin.com/in/den-jansen-flores-79b8ba387/">
        <RxLinkedinLogo /> 
      </a>
    </li>
    <li className='hover:scale-150 duration-500'>
      <a href="https://github.com/TsuTsu03">
        <RxGithubLogo /> 
      </a>
    </li>
    <li className='hover:scale-150 duration-500'>
      <a href="https://www.facebook.com/djflores03?mibextid=sCpJLy">
        <BsFacebook /> 
      </a>
    </li>
    <li className='hover:scale-150 duration-500'>
      <a href="">
        <BsInstagram /> 
      </a>
    </li>
    <li className='hover:scale-150 duration-500'>
      <a href="">
        <HiOutlineMail /> 
      </a>
    </li>
    <li className='hover:scale-150 duration-500'>
      <a href="">
        <BsFillPersonLinesFill /> 
      </a>
    </li>
  </ul>
</div>
  </div>
);


}

export default Navbar
