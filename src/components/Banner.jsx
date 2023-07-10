import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import Image from "../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.3)}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text[110px]"
            >
              SolomDev<span>X</span>
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.4)}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-semibold font-secondary uppercase leading-[1]"
            >
              <span className="text-white mr-3">I'm a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Lua Scripter",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.5)}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              aliquam earum autem libero iste!
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.6)}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center max-w-max gap-x-6 mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#d" className="text-gradient btn-link">
                MyPortfolio
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.7)}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="#1">
                <FaFacebook />
              </a>
              <a href="#1">
                <FaGithub />
              </a>
              <a href="#1">
                <FaYoutube />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("down", 0.5)}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="Avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
