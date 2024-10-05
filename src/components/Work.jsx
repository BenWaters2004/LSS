import React, { useRef } from 'react';
import work1 from '/src/assets/work1.jpg';
import work2 from '/src/assets/work2.jpg';
import work3 from '/src/assets/work3.jpg';
import work4 from '/src/assets/work4.jpg';
import work5 from '/src/assets/work5.jpg';
import work6 from '/src/assets/work6.jpg';
import work7 from '/src/assets/work7.jpg';
import work8 from '/src/assets/work8.jpg';
import work9 from '/src/assets/work9.jpg';
import work10 from '/src/assets/work10.jpg';
import work11 from '/src/assets/work11.jpg';
import work12 from '/src/assets/work12.jpg';
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.9, once: true });

  return (
    <section ref={ref} className="relative w-full bg-primary text-center text-white py-20">
      <h2 className="text-[36px] font-semibold mb-5">Our Work</h2>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-[20px] text-[#ACACAC] mb-10 ml-[5%] w-[90%] md:w-full md:ml-0"
      >
        Here is some of our previous work, have a look at what we can do for you.<br />
        We work to meet your needs.
      </motion.p>

      {/* Container for Scrolling Rows */}
      <div className="overflow-x-hidden relative pt-8 pb-16">
        {/* First Row */}
        <div className="flex space-x-14 animate-scroll">
          {/* Duplicated content for seamless scrolling */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.2 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work1} alt="Work 1" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.3 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work2} alt="Work 2" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.4 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work3} alt="Work 3" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.5 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work4} alt="Work 4" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.6 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work5} alt="Work 5" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.7 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work6} alt="Work 6" className="hexagon-img" />
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Second Row with Offset */}
        <div className="flex space-x-14 animate-scroll second-row">
          {/* Duplicated content for seamless scrolling */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.2 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work7} alt="Work 7" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.3 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work8} alt="Work 8" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.4 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work9} alt="Work 9" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.5 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work10} alt="Work 10" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.6 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work11} alt="Work 11" className="hexagon-img" />
              </motion.div>
              <motion.div
                className="hexagon"
                variants={fadeIn("left", "spring", 0.7 + i * 0.1, 1)} // Adjust the animation for stagger effect
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <img src={work12} alt="Work 12" className="hexagon-img" />
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
