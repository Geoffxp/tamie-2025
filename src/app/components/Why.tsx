"use client";

import Image from "next/image";

export default function Why() {
  return (
    <section className="bg-campaign-blue py-20 px-6 relative">
      <Image
        src="/railroad-station.jpg"
        alt="Black Diamond Railroad"
        width="2000"
        height="2000"
        className="opacity-25 object-cover grayscale-100 w-full h-full absolute top-0 left-0"
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[5/4] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/tamie-soup-kitchen.jpg" // Replace with real image
            alt="Tamie Boxx-Deady"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why I&apos;m Running for Mayor
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            I&apos;m running for Mayor because I believe in the people of Black
            Diamond. This is our home — and it deserves leadership that listens,
            leads with integrity, and puts our community first. Together, we can
            build a future rooted in safety, opportunity, and pride.
          </p>
        </div>
      </div>
    </section>
  );
}
