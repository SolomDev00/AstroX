import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right", 0.3)}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch!
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left", 0.3)}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-18 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent duration-500 transition-all"
              type="text"
              placeholder="Your name ..."
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent duration-500 transition-all"
              type="text"
              placeholder="Your email ..."
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent duration-500 transition-all resize-none mb-12"
              placeholder="Your message .."
            />
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
