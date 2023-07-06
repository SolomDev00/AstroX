import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed">
      <div className="container mx-auto">
        <div>
          <Link>
            <BiHomeAlt />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
