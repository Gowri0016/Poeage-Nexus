import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../Asset/NEXUS.png"; // Update path based on your folder structure

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-3 select-none">
            <img src={Logo} alt="Company Logo" className="w-32" />
          </div>

          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            Providing trusted workforce solutions for industries worldwide.
            Skilled, certified, and reliable professionals for every operational need.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="p-2 rounded-full border hover:bg-gray-100 transition"><Facebook size={20} /></a>
            <a href="#" className="p-2 rounded-full border hover:bg-gray-100 transition"><Instagram size={20} /></a>
            <a href="#" className="p-2 rounded-full border hover:bg-gray-100 transition"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-[15px]">
            <li><a href="/" className="hover:text-gray-900">Home</a></li>
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/jobs" className="hover:text-gray-900">Jobs</a></li>
            <li><a href="/clients" className="hover:text-gray-900">Clients</a></li>
            <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Workforce */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Workforce</h3>
          <ul className="space-y-2 text-gray-600 text-[15px]">
            <li>Skilled Labor Supply</li>
            <li>Technical Staff Deployment</li>
            <li>Industrial Workforce</li>
            <li>Construction Workers</li>
            <li>IT & Office Staff</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-600"><Mail size={18}/> manpower@poeagenexus.com</p>
          <p className="flex items-center gap-2 text-gray-600 mt-2"><Phone size={18}/> +91 805-688-9616</p>
          <p className="flex items-center gap-2 text-gray-600 mt-2"><MapPin size={18}/> Tamil Nadu, India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-12 pt-5 text-center text-sm text-gray-500">
     © {new Date().getFullYear()} Man Power Supply. A subsidiary of Poeage Groups. All rights reserved.
      </div>
    </footer>
  );
}
