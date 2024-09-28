import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_q14wgmx',
        'template_k4wq435',
        {
          from_name: form.name,
          to_name: "Ben Waters",
          from_email: form.email,
          to_email: "contact@b-waters.com",
          message: form.message,
        },
        'Y0C00O29NDYGMsisy'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="relative w-full bg-primary py-10">
      
      {/* Grid layout for the form and text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto max-w-7xl px-4 py-20">
        {/* Column 1: Text */}
        <div className="column1 text-white ">
          <h3 className="leading-[55px] text-[28px] font-bold mb-4">Let's Connect</h3>
          <p className="text-[18px]">Get in touch today to receive a free quotation at our competitive rates.</p>
        </div>
        
        {/* Column 2: Name and Message */}
        <div className="column2 flex flex-col gap-12">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-4 bg-white text-black border-none rounded h-[55px]"
          />
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            className="p-4 bg-white text-black border-none rounded h-[55px]"
          />
        </div>
        
        {/* Column 3: Email and Submit Button */}
        <div className="column3 flex flex-col gap-12">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-4 bg-white text-black border-none rounded h-[55px]"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="p-4 bg-secondary text-white font-bold rounded h-[55px]"
          >
            {loading ? "Sending..." : "REQUEST QUOTE"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
