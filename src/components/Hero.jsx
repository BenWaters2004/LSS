import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideIn } from "../utils/motion";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <section className="relative w-full mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center border-solid border-b-[10px] border-secondary h-[635px]" id="Hero">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content that goes over the overlay */}
      <div className="relative z-10 h-full space-y-4 flex flex-col justify-center overflow-hidden px-[5%] sm:px-[15%]" ref={ref}>
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Animate only when in view
        >
          {/* Adjusted text sizes for responsiveness */}
          <h1 className="leading-tight text-white font-bold text-[28px] sm:text-[40px] md:text-[48px] bg-black/50 w-fit h-auto px-7 py-2 mb-4">
            Lewis Scaffold Solutions
          </h1>
          <h3 className="leading-snug text-white font-medium text-[18px] sm:text-[22px] md:text-[27px] bg-black/50 w-fit h-auto px-7 py-2 mb-6">
            Covering Dorset, Devon, and Somerset
          </h3>
          <a href="#Contact">
            <button className="bg-secondary text-white font-semibold w-[180px] sm:w-[200px] md:w-[235px] h-[50px] sm:h-[55px] md:h-[60px] text-[16px] sm:text-[18px] md:text-[20px]" id="hoverEffect">
              GET A FREE QUOTE
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
