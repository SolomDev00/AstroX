import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#s">
            <img src={Logo} alt="logo" />
          </a>
          <button className="btn btn-sm duration-700">Work with me!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
