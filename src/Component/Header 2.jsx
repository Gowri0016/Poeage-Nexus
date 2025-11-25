import React from "react";
import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import Logo from "../Asset/NEXUS.png";

export default function Heager() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative bg-whit overflow-hidden">
    
      <div className="relative flex items-center justify-between px-6 py-4 z-10">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <motion.img
            src={Logo}
            alt="Nexus Logo"
            className="w-24"
            whileHover={{ rotate: 12, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
          />
          <motion.h1
            className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-black-500 to-gray-800 bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            NEXUS
          </motion.h1>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-semibold text-[1.05rem]">
          {["Home", "About", "Dashboard", "Services", "Projects", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative px-2 py-1 group"
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                {item}
              </span>
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-pink-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </nav>

        {/* Search + Menu */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-pink-500/10 cursor-pointer transition"
          >
            <Search />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-800/60 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-md border-t border-gray-700/50 py-6 text-center space-y-4"
        >
          {["Home", "About", "Dashboard", "Services", "Projects", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="block text-lg font-semibold text-gray-200 hover:text-pink-400 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </header>
  );
}