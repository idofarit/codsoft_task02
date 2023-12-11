import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-black" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ selectedPage, setSelectedPage }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl ml-8 tracking-[5px] font-mono font-bold  text-[#36f0a9]">
        portFolio.
      </h1>
      <ul className="hidden md:flex justify-between gap-8 ">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
        />
        <Link
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
        />
        <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
        />
        <Link
          page="Testimonials"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
        />
        <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
        />
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-8">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed z-50 top-0 h-full w-[60%] left-[-100%] ease-in-out duration-700"
            : "fixed z-50 left-0 top-0 w-[60%] h-full border-r border-r-[#06555b] backdrop-blur-sm bg-gradient-to-l from-[#00956630] to-[#00df9800] ease-in-out duration-700 "
        }
      >
        <ul className="pt-20 flex flex-col gap-10 p-20">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
          />
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
          />
          <Link
            page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
          />
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            className="p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer"
          />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
