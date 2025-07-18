import Image from "next/image";
import React from "react";

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
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-campaign-blue rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-campaign-blue rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-campaign-blue rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
