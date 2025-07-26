"use client";

import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-campaign-blue text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Campaign Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Tamie L. Boxx-Deady</h2>
          <p className="text-gray-300 max-w-sm">
            Dedicated to honest leadership and a brighter future for Black
            Diamond.
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4 text-gray-300">
            <a
              href="https://www.facebook.com/tamie.boxxdeady"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.instagram.com/tamiedeady6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="mailto:tamiedeady@comcast.net"
              aria-label="Email"
              className="hover:text-orange-500 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <address className="not-italic text-gray-300 space-y-2">
            <p>
              PO Box 523
              <br />
              Black Diamond, WA 98010
            </p>
            <p>(253) 266-8936</p>
            <p>
              <a
                href="mailto:tamiedeady@comcast.net"
                className="hover:text-orange-500 transition"
              >
                TamieDeady@comcast.net
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tamie L. Boxx-Deady for Mayor. All
        rights reserved.
      </div>
    </footer>
  );
}
