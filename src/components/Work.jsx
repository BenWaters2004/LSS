import React from 'react';
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

const Work = () => {
  return (
    <section className="relative w-full bg-primary text-center text-white py-12">
      <h2 className="text-[36px] font-semibold mb-5">Our Work</h2>
      <p className="text-[20px] text-[#ACACAC] mb-10">
        Here is some of our previous work, have a look at what we can do for you.<br />
        We work to meet your needs.
      </p>

      {/* Container for Scrolling Rows */}
      <div className="overflow-x-hidden relative pt-8 pb-16">
        {/* First Row */}
        <div className="flex space-x-14 animate-scroll">
          {/* Duplicated content for seamless scrolling */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={work1} alt="Work 1" className="w-[200px] h-[200px] object-cover" />
              <img src={work2} alt="Work 2" className="w-[200px] h-[200px] object-cover" />
              <img src={work3} alt="Work 3" className="w-[200px] h-[200px] object-cover" />
              <img src={work4} alt="Work 4" className="w-[200px] h-[200px] object-cover" />
              <img src={work5} alt="Work 5" className="w-[200px] h-[200px] object-cover" />
              <img src={work6} alt="Work 6" className="w-[200px] h-[200px] object-cover" />
            </React.Fragment>
          ))}
        </div>

        {/* Second Row with Offset */}
        <div className="flex space-x-14 animate-scroll mt-12 second-row">
          {/* Duplicated content for seamless scrolling */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={work7} alt="Work 7" className="w-[200px] h-[200px] object-cover" />
              <img src={work8} alt="Work 8" className="w-[200px] h-[200px] object-cover" />
              <img src={work9} alt="Work 9" className="w-[200px] h-[200px] object-cover" />
              <img src={work10} alt="Work 10" className="w-[200px] h-[200px] object-cover" />
              <img src={work11} alt="Work 11" className="w-[200px] h-[200px] object-cover" />
              <img src={work12} alt="Work 12" className="w-[200px] h-[200px] object-cover" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
