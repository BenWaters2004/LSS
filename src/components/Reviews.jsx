const Reviews = () => {
  return (
    <section className="relative w-full bg-primary pb-16">
      <h2 className="text-white text-[36px] font-semibold text-center py-10">A word from our customers</h2>
      <div className="bg-white w-full h-auto">
        <div className="text-center w-[40%] py-16 ml-[30%]">
          <p className="text-[20px]">Review text, this is the first review. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nibh quam. Aliquam porttitor nibh purus, at facilisis leo aliquam quis. Integer in tortor eget metus hendrerit efficitur quis eu nulla. In non odio sed nisl mollis congue. Morbi sodales massa at eleifend iaculis. Mauris imperdiet convallis nulla ac condimentum. Etiam vulputate porta tristique.</p>
          <p className="pt-4 font-bold text-[20px]">From <span className="text-secondary">John Smith</span></p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
