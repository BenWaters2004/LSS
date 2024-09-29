import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideIn } from "../utils/motion";


const NavBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <nav className="sticky top-0 w-full bg-primary flex items-center justify-between px-[15%] z-50 drop-shadow-2xl" ref={ref}>
      {/* Logo positioned 15% from the left */}
      <motion.div
          className="md:w-1/2 w-full"
          variants={slideIn("left", "spring", 0.2, 1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}>
        
        <div className="flex items-center">
          <a href="#Hero"><img
            src="/LSSlogoPNG.png"
            alt="LSS logo"
            className="h-20"
          /></a>
          </div>
      </motion.div>

      {/* Contact button positioned 15% from the right */}
      <div>
        <motion.div
            className="md:w-1/2 w-full"
            variants={slideIn("right", "spring", 0.2, 1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}>
          <a
            href="#Contact"
            className="bg-secondary text-white py-2.5 px-6 font-semibold"
            id="hoverEffect"
          >
            CONTACT
            </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
