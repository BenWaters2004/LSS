import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../utils/motion";

const ContactDetails = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, once: true });

  return (
    <section className="relative w-full bg-white h-auto">
      <motion.div
        className="relative w-full bg-white h-auto"
        variants={fadeIn("", "", 0.2, 1.5)}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate only when in view
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto max-w-7xl px-4 py-6 h-full overflow-hidden" ref={ref}>
          {/* Column 1 */}
          <div className="column1 text-black text-center flex flex-col justify-center">
            <h4 className="text-secondary text-[24px] font-bold">Email</h4><br />
            <a href="mailto:pete@lewisscaffoldsolutions" className="text-[16px] sm:text-[20px] font-semibold">pete@lewisscaffoldsolutions.co.uk</a>
          </div>

          {/* Column 2 with responsive borders */}
          <div className="column2 text-black text-center flex flex-col justify-center relative">
            <div className="h-[100%] w-[80%] mx-auto flex flex-col justify-center 
                            border-t border-b md:border-l md:border-r md:border-t-0 md:border-b-0 border-black py-12 md:h-[70%] md:w-full">
              <h4 className="text-secondary text-[24px] font-bold">Telephone</h4><br />
              <p className="text-[20px] font-semibold">+44 (0)7783 453 458</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="column3 text-black text-center flex flex-col justify-center">
            <h4 className="text-secondary text-[24px] font-bold">Location</h4>
            <p className="text-[20px] font-semibold">
              Unit 9 Pomeroy Buildings, Grove Trading Estate, Dorchester, England, DT1 1ST
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactDetails;
