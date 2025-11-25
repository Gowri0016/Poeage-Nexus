import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-14 bg-gradient-to-br from-cyan-50 via-white to-blue-50 min-h-screen text-gray-900">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mb-3">
            Get in Touch with
            <span className="text-cyan-600"> Poeage Nexus</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-5">
            Let’s collaborate to transform your ideas into powerful digital
            solutions. Reach out to discuss your project.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Phone className="text-cyan-600" />
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                +91 98765 43210
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="text-blue-600" />
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                contact@poeagenexus.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-fuchsia-100 rounded-xl">
                <MapPin className="text-fuchsia-600" />
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Tamil Nadu, India — Global Delivery Centre
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-5">Send Us a Message</h2>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
