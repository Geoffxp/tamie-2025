import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section className="bg-campaign-blue shadow-md p-8 relative" id="contact">
      <Image
        src="/black_diamond_round_about_slide.jpg"
        alt="Mount Rainier Washington"
        width="2000"
        height="2000"
        className="opacity-25 object-cover grayscale-100 w-full h-full absolute top-0 left-0"
      />
      <div className="max-w-2xl mx-auto bg-white relative z-10 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
        <p className="text-gray-600 mb-6">
          For inquiries, collaborations, or just to say hello, please reach out
          using the form below or email us directly.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
