import React from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
