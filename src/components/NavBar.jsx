const NavBar = () => {
  return (
    <nav className="sticky top-0 w-full bg-primary flex items-center justify-between px-[15%] z-50 drop-shadow-2xl">
      {/* Logo positioned 15% from the left */}
      <div className="flex items-center">
        <a href="#Hero"><img
          src="/LSSlogoPNG.png"
          alt="LSS logo"
          className="h-20"
        /></a>
      </div>

      {/* Contact button positioned 15% from the right */}
      <div>
        <a
          href="#contact"
          className="bg-secondary text-white py-2.5 px-6 font-semibold"
          id="hoverEffect"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
