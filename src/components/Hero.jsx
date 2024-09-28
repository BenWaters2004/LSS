const Hero = () => {
  return (
    <section className="relative w-full mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center border-solid border-b-[10px] border-secondary h-[635px]">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content that goes over the overlay */}
      <div className="relative z-10 h-full space-y-4 flex flex-col justify-center" style={{ paddingLeft: '15%' }}>
        <h1 className="leading-[75px] text-white font-bold text-[48px] bg-black/50 w-max h-[75px] px-7">
          Lewis Scaffold Solutions
        </h1>
        <h3 className="leading-[75px] text-white font-medium text-[27px] bg-black/50 w-max h-[75px] px-7">
          Covering Dorset, Devon, and Somerset
        </h3>
        <button className="bg-secondary text-white font-semibold w-[235px] h-[60px] text-[20px]">
          GET A FREE QUOTE
        </button>
      </div>
    </section>
  );
};

export default Hero;
