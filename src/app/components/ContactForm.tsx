"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "",
    contactTime: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const htmlFormData = new FormData(e.target as HTMLFormElement);
      const formObject: { [key: string]: string } = {};
      for (const [key, value] of htmlFormData.entries()) {
        formObject[key] = value.toString();
      }
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formObject).toString(),
      });
      setSubmitted(true);
    }
  };

  return (
    <div className="text-sm">
      {submitted ? (
        <p className="text-green-600 text-center font-semibold">
          Thank you for your message, someone will reach out soon!
        </p>
      ) : (
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="space-y-4 bg-red/50 text-black"
        >
          <input type="hidden" name="form-name" value="contact" />

          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label htmlFor={name} className="block font-bold mb-1 text-black">
                {label}
              </label>
              <input
                id={name}
                type={type}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[name] && (
                <p className="text-sm text-white mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="block font-bold mb-1 text-black"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="resize-none w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-sm text-white mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex w-fit gap-4 rounded-[99vh] bg-white py-2 px-4 text-black text-lg font-black shadow-md justify-between items-center"
          >
            Submit <FaArrowCircleRight className="w-6 h-6 text-red" />
          </button>
        </form>
      )}
    </div>
  );
}
