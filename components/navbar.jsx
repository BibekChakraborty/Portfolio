import React from "react";

const Navbutton = ({ name, href }) => {
  return (
    <a className="relative group" href={href}>
      <span className="text-lg">{name}</span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
    </a>
  );
};

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#020310] text-white flex justify-center items-center gap-8 h-16 w-full fixed top-0  z-20">
        <Navbutton name="Home" href="/" />
        <Navbutton name="About" href="#about" />
        <Navbutton name="Contact" href="#contact" />
      </nav>
    </header>
  );
};

export default Navbar;
