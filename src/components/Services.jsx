import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
  {
    name: "Lua Scripter",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
  {
    name: "React.Js Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etaliquam earum autem libero iste.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right", 0.3)}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What i Do ?</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelancer Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">View my Work!</button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left", 0.5)}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tightw">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#0"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#0" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
