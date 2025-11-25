import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute top-32 left-16 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-96 h-96 bg-fuchsia-500/10 blur-3xl rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 text-center"
      >
        About Poeage Nexus
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-center mt-8 text-gray-300 text-lg leading-relaxed"
      >
        Poeage Nexus is a pioneering division of the Poeage Group, dedicated to driving innovation, intelligence, and technological excellence. We create futuristic digital ecosystems that seamlessly connect businesses, people, and technology — enabling transformation through design, data, and development.
      </motion.p>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mt-16">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-3">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            To become the nucleus of intelligent innovation within the Poeage Group — building digital infrastructures that redefine industries and empower global progress.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-3">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To merge human creativity with advanced technology — crafting intelligent solutions that shape the future of industries, innovation, and interconnected systems.
          </p>
        </motion.div>
      </div>

      {/* Closing Line */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 text-gray-500 text-center"
      >
        <p>© 2025 Poeage Nexus | A Division of Poeage Technology Pvt. Ltd.</p>
      </motion.div>
    </section>
  );
}