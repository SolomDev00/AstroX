import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-pink-300 py-8">
      <div className="container mx-auto">
        <div>
          <a href="#s">
            <img src={Logo} alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
