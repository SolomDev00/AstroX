import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right", 0.3)}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-12 mb-10 lg:mb-0 "
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                aliquam earum autem libero iste! s
              </p>
              <button className="btn btn-sm">View all Projects!</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="projects"
              />
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">UI/UX Design</span>
              </div>
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">luna</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col flex-1 gap-y-10"
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left", 0.2)}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="projects"
              />
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">UI/UX Design</span>
              </div>
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">AstroX</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="projects"
              />
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">UI/UX Design</span>
              </div>
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Niceort</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
