"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur text-campaign-blue absolute w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo / Campaign Name */}
        <Link href="/" className="block w-[150px] h-[100px]">
          <Image
            src="/tamie-for-mayor-sign.jpg"
            alt="tamie Boxx-Deady From Mayor"
            width="150"
            height="100"
            objectFit="contain"
            className="object-contain w-full h-full"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-white font-bold">
          <Link
            href="/"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            About
          </Link>
          <Link
            href="#get-involved"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="#contact"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-[color:var(--color-gold)] transition-all duration-300" />
          <span className="w-6 h-0.5 bg-[color:var(--color-gold)] transition-all duration-300" />
          <span className="w-6 h-0.5 bg-[color:var(--color-gold)] transition-all duration-300" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white space-y-4 font-bold">
          <Link href="/" className="block hover:text-[color:var(--color-gold)]">
            Home
          </Link>
          <Link
            href="#about"
            className="block hover:text-[color:var(--color-gold)]"
          >
            About
          </Link>
          <Link
            href="#get-involved"
            className="block hover:text-[color:var(--color-gold)]"
          >
            Get Involved
          </Link>
          <Link
            href="#contact"
            className="block hover:text-[color:var(--color-gold)]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
