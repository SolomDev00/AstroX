import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full">
          <Link>
            <BiHomeAlt />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
