"use client";

import { FaShieldAlt, FaBriefcase, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThreeCards() {
  const cards = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Community Safety",
      text: "Enhancing public safety through stronger neighborhood programs and increased police-community collaboration.",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "Economic Growth",
      text: "Supporting local businesses and creating job opportunities that build a thriving and sustainable economy.",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Environmental Stewardship",
      text: "Protecting our natural surroundings and promoting green initiatives for a cleaner, healthier Black Diamond.",
    },
  ];

  return (
    <section className="bg-campaign-blue text-white relative overflow-hidden wavy">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-campaign-red drop-shadow">
          Our Priorities for Black Diamond
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 text-blue-900 hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-500 mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
