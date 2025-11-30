import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative h-full bg-gradient-to-br from-blue-100 via-white to-cyan-100 text-blue-900 overflow-hidden flex items-center justify-center px-6 py-10">

      {/* BACKGROUND BLURS */}
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-[90px] md:w-80 md:h-80"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[110px] md:w-[28rem] md:h-[28rem]"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 9 }}
      />

      {/* MAIN CONTENT */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent"
          >
            Poeage Manpower
            <br /> Supply & Consultancy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-5 text-blue-800/80 text-base md:text-lg max-w-md mx-auto md:mx-0"
          >
            Providing industry-ready workforce and consultancy services to help companies hire
            qualified, skilled, and reliable talent.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold rounded-full shadow-xl hover:shadow-blue-300 flex items-center gap-3 text-base md:text-lg mx-auto md:mx-0"
          >
            Hire Talent <ArrowRight size={22} />
          </motion.button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://www.poeage.com/static/media/hero.0f6d39dbe780e0b1eccd.png"
            alt="Manpower Illustration"
            className="w-64 md:w-[420px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
