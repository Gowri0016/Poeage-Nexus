import React from "react";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    {
      name: "TATA Motors",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png",
    },
    {
      name: "MRF Tyres",
      logo: "https://i.pinimg.com/736x/81/8d/6e/818d6e280da3c9660adfdcf8ec8ec2d2.jpg",
    },
    {
      name: "Mahindra & Mahindra",
      logo: "https://download.logo.wine/logo/Mahindra_%26_Mahindra/Mahindra_%26_Mahindra-Logo.wine.png",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 tracking-tight"
      >
        Trusted By Industry Leaders
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
      >
        We collaborate with India’s top-performing brands, delivering excellence and reliability.
      </motion.p>

      {/* Premium Stats Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
        {[{ num: "30+", text: "Clients" }, { num: "2+", text: "Years Experience" }, { num: "24/7", text: "Active Support" }, { num: "20K+", text: "Workers" }].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 backdrop-blur-lg"
          >
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">{stat.num}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">{stat.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Centered Premium Logo Showcase */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-10 flex flex-col items-center justify-center hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl backdrop-blur-xl"
          >
            <div className="w-32 h-32 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-inner mb-6">
              <img src={client.logo} alt={client.name} className="h-20 object-contain drop-shadow-lg" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center tracking-wide">
              {client.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-2">
              Integrated Cycle of Strategic Partners
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}