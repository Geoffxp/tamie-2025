"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-campaign-blue text-white py-16 md:py-48 px-6 relative overflow-hidden pt-64"
      id="home"
    >
      <Image
        src="/mt-rainier-washington.jpg"
        alt="Mount Rainier Washington"
        width="2000"
        height="2000"
        className="opacity-25 object-cover grayscale-100 w-full h-full absolute top-0 left-0"
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        {/* Text Content */}
        <motion.div
          key={"main-content"}
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Standing Up for <span className="text-gold">Black Diamond</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 mb-6 max-w-xl">
            Tamie L. Boxx-Deady has served this community for over a decade. Now
            she’s ready to lead it forward — with integrity, vision, and heart.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[color:var(--color-campaign-red)] px-6 py-3 text-white font-semibold rounded-md shadow-lg hover:brightness-110 transition"
          >
            Join the Campaign
          </a>
        </motion.div>

        {/* Headshot */}
        <motion.div
          key={"headshot"}
          className="flex-1 max-w-sm w-full relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/tamie-headshot.jpg"
              alt="Tamie L. Boxx-Deady"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Optional background pattern or symbol */}
      <div className="absolute inset-0 opacity-10 bg-[url('/flag-faint.svg')] bg-cover bg-center pointer-events-none hidden md:block" />
    </section>
  );
}
