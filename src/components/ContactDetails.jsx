const ContactDetails = () => {
  return (
    <section className="relative w-full bg-white h-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto max-w-7xl px-4">
        <div className="column1 text-black text-center">
          <h4 className="text-secondary text-[24px] font-bold">Email</h4>
          <p className="text-[20px] font-semibold">pete@lewisscaffoldsolutions</p>
        </div>
        <div className="column2 text-black text-center">
          <h4 className="text-secondary text-[24px] font-bold">Telephone</h4>
          <p className="text-[20px] font-semibold">+44 (0)7783 453 458</p>
        </div>
        <div className="column3 text-black text-center">
          <h4 className="text-secondary text-[24px] font-bold">Location</h4>
          <p className="text-[20px] font-semibold">Unit 9 Pomeroy Buildings, Grove Trading Estate, Dorchester, England, DT1 1ST</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
