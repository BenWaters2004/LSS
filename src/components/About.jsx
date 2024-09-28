const About = () => {
  return (
    <section className="relative w-full mx-auto bg-primary py-10 pb-32">
      <h2 className="text-white text-[36px] font-semibold text-center pb-20">About Us</h2>
      
      {/* Flexbox container to align the image and text side by side */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mx-10">
        
        {/* Image on the left */}
        <div className="md:w-1/2 w-full">
          <img src="/AboutScaffold.webp" alt="Scaffolding" className="w-full h-auto px-[20%]" />
        </div>
        
        {/* Text content on the right */}
        <div className="md:w-1/2 w-full md:pl-10 pt-5 md:pt-0 pr-[10%]">
          <h3 className="text-secondary font-bold text-[24px] mb-4">About Lewis Scaffold Solutions | LSS</h3>
          <p className="text-white font-semibold text-[20px] leading-8">
            Sed rutrum justo at fermentum tincidunt. Sed et vulputate erat. Morbi accumsan maximus sem ac hendrerit. Curabitur volutpat feugiat dapibus. Integer orci ex, laoreet eget purus eget, fringilla sollicitudin erat.
            <br /><br />
            Cras dignissim eros ut orci facilisis pellentesque. Donec hendrerit rutrum dolor id placerat. Maecenas placerat lacus sit amet velit convallis, quis fermentum urna suscipit. Nulla tempus risus id tristique volutpat.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
