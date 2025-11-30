import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 md:pt-28 bg-gradient-to-br from-cyan-50 via-white to-blue-50 min-h-screen text-gray-900 relative overflow-hidden">
      {/* Decorative Glowing Orbs */}
      <motion.div
        className="hidden md:block absolute top-10 right-10 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="hidden md:block absolute bottom-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px] opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start relative z-10">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/50 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-white/40"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4 text-gray-900">
            Get in Touch with
            <span className="text-cyan-600"> Poeage Nexus</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6">
            Let's collaborate to transform your ideas into powerful digital solutions. Reach out to discuss your project.
          </p>

          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 md:p-4 bg-cyan-500/10 border border-cyan-300 rounded-xl md:rounded-2xl shadow-sm">
                <Phone className="text-cyan-600" />
              </div>
              <p className="text-gray-800 text-base md:text-lg font-medium">+91 98765 43210</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 md:p-4 bg-blue-500/10 border border-blue-300 rounded-xl md:rounded-2xl shadow-sm">
                <Mail className="text-blue-600" />
              </div>
              <p className="text-gray-800 text-base md:text-lg font-medium">contact@poeagenexus.com</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 md:p-4 bg-fuchsia-500/10 border border-fuchsia-300 rounded-xl md:rounded-2xl shadow-sm">
                <MapPin className="text-fuchsia-600" />
              </div>
              <p className="text-gray-800 text-base md:text-lg font-medium">
                Tamil Nadu, India — Global Delivery Centre
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/60"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6">
            Send Us a Message
          </h2>

          <div className="grid grid-cols-1 gap-4 md:gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 md:p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 md:p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-3 md:p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 md:p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-1 md:mt-2 w-full py-3 md:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 tracking-wide"
            >
              Send Message <Send size={18} />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
