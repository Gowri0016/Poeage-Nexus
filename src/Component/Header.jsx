import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../Asset/NEXUS.png";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { name: "About us", link: "/about" },
    { name: "Case Studies", link: "/cases" },
    { name: "Blog", link: "/blog" },
    { name: "How it Works", link: "/how" },
    { name: "Hire", link: "/hire" },
    { name: "Our Company", link: "/company" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       {/* Logo Section */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="flex items-center gap-3"
>
  <a href="/" className="flex items-center gap-2">
    <img src={Logo} alt="Nexus" className="w-32" />
    <span className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent uppercase">
      NEXUS
    </span>
  </a>
</motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -3, color: "#0ea5e9" }}
              transition={{ type: "spring", stiffness: 300 }}
              href={item.link}
              className="cursor-pointer relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hidden md:block px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Contact us
        </a>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-lg border-t border-gray-200"
      >
        <ul className="flex flex-col text-center text-gray-800 py-4">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, color: "#0ea5e9" }}
              transition={{ type: "spring", stiffness: 250 }}
              className="py-3 tracking-wide"
            >
              <a href={item.link} onClick={() => setOpen(false)}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Contact Button (Mobile) */}
        <div className="py-3">
          <a
            href="/contact"
            className="mx-auto w-40 block px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
