import { RxHamburgerMenu, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-scroll";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNavOpen] = useState(false);
  const handleToggle = () => setNavOpen(v => !v);
  const handleClose = () => setNavOpen(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-text_light text-2xl border-b-4 border-text_heading z-50">
      {/* Menu button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={nav}
        aria-controls="mobile-menu"
        className="z-50"
      >
        {!nav ? <RxHamburgerMenu className="text-[40px]" /> : <TiTimes className="text-[40px]" />}
      </button>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-4 z-50">
        <li className="p-4 rounded hover:bg-[#2e8a99] duration-500">
          <Link to="home" smooth duration={500}>Home</Link>
        </li>
        <li className="p-4 rounded hover:bg-[#2e8a99] duration-500">
          <Link to="about" smooth duration={500}>About</Link>
        </li>
        <li className="p-4 rounded hover:bg-[#2e8a99] duration-500">
          <Link to="skills" smooth duration={500}>Skills</Link>
        </li>
        <li className="p-4 rounded hover:bg-[#2e8a99] duration-500">
          <Link to="work" smooth duration={500}>Work</Link>
        </li>
        <li className="p-4 rounded hover:bg-[#2e8a99] duration-500">
          <Link to="contact" smooth duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <ul
        id="mobile-menu"
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full bg-primary flex flex-col justify-center items-center pt-24 pb-10"
        }
      >
        {[
          { to: "home", label: "Home" },
          { to: "about", label: "About" },
          { to: "skills", label: "Skills" },
          { to: "work", label: "Work" },
          { to: "contact", label: "Contact" },
        ].map(item => (
          <li key={item.to} className="py-6 text-4xl">
            <Link to={item.to} smooth duration={500} onClick={handleClose}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="your-component fixed flex flex-col top-[35%] left-0 pr-2 py-6">
        <ul className="text-[28px] sm:text-[40px] flex flex-col gap-4 text-text_heading">
          <li className="hover:scale-150 duration-500">
            <a
              href="https://www.linkedin.com/in/den-jansen-flores-79b8ba387/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <RxLinkedinLogo />
            </a>
          </li>
          <li className="hover:scale-150 duration-500">
            <a
              href="https://github.com/TsuTsu03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <RxGithubLogo />
            </a>
          </li>
          <li className="hover:scale-150 duration-500">
            <a
              href="https://www.facebook.com/djflores03?mibextid=sCpJLy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <BsFacebook />
            </a>
          </li>
          <li className="hover:scale-150 duration-500">
            {/* Use a real Instagram URL (update to your handle if you like) */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <BsInstagram />
            </a>
          </li>
          <li className="hover:scale-150 duration-500">
            {/* Scroll to contact instead of empty href */}
            <Link to="contact" smooth duration={500} aria-label="Contact">
              <HiOutlineMail />
            </Link>
          </li>
          <li className="hover:scale-150 duration-500">
            {/* Link to About or to your PDF resume */}
            <Link to="about" smooth duration={500} aria-label="About / Resume">
              <BsFillPersonLinesFill />
            </Link>
            {/* Or replace with a real file:
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <BsFillPersonLinesFill />
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
