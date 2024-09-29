import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideIn } from "../utils/motion";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <section className="relative w-full bg-[#3D3D3D] overflow-hidden" ref={ref}>
      <motion.p
        variants={slideIn("up", "spring", 0.2, 1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate only when in view
      >
        <p className="leading-[94px] text-center text-white text-[20px]"><a href="https://b-waters.com" id="footerHover">Ben Waters</a> Copyright © 2024 Lewis Scaffold Solutions Ltd  |  <a href="/PrivacyPolicy" id="footerHover">Privacy Policy</a>  |  <a href="#" id="footerHover">Sitemap</a></p>
      </motion.p>
    </section>
  );
};

export default Footer;
