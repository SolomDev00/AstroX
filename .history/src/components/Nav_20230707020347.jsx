import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
