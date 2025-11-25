import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 text-blue-900 overflow-hidden flex items-center justify-center px-6 py-10">

      {/* ANIMATED BACKGROUND ELEMENTS */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px]"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-500/20 rounded-full blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* MAIN LAYOUT */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-14 relative z-10">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Poeage Manpower
              <br /> Supply & Consultancy
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-blue-800/80 text-lg max-w-md"
          >
            Providing skilled workforce solutions and professional consultancy services —
            empowering companies with reliable, qualified, and industry-ready talent.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold rounded-full shadow-xl hover:shadow-blue-300 flex items-center gap-3 text-lg"
          >
            Hire Talent <ArrowRight size={24} />
          </motion.button>
        </div>

        {/* RIGHT IMAGE (MANPOWER ILLUSTRATION) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/hr-management-service-5693196-4740743.png"
            alt="Manpower Supply & Consultancy Illustration"
            className="w-[480px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
