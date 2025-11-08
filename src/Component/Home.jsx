// Premium Poeage Nexus Landing with Client Branding
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Hexagon, Network, Brain, Rocket, Shield, Sparkles, Zap, Cpu, Globe, Users, Award, TrendingUp, ChevronRight, Play, Pause, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function NexusLanding() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Smooth spring for better performance
  const smoothScale = useSpring(scale, { damping: 30, stiffness: 200 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseGlow = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    { 
      icon: Network, 
      title: 'Neural Network', 
      desc: 'Intelligent talent mapping through our proprietary neural matching system.',
      stats: '98% Accuracy',
      color: 'from-cyan-400 to-blue-500',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    { 
      icon: Brain, 
      title: 'Cognitive Matching', 
      desc: 'AI that understands context, culture, and capability beyond keywords.',
      stats: '3.2s Average Match',
      color: 'from-blue-400 to-purple-500',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
    },
    { 
      icon: Hexagon, 
      title: 'Hexagon Protocol', 
      desc: 'Six-dimensional vetting process ensuring elite candidate quality.',
      stats: '99.9% Reliability',
      color: 'from-purple-400 to-pink-500',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    { 
      icon: Rocket, 
      title: 'Quantum Placement', 
      desc: 'Lightning-fast deployments with 94% retention rate.',
      stats: '24h Deployment',
      color: 'from-pink-400 to-red-500',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)'
    },
    { 
      icon: Shield, 
      title: 'Crypto-Secure', 
      desc: 'Blockchain-verified credentials and zero-trust architecture.',
      stats: '100% Secure',
      color: 'from-green-400 to-cyan-500',
      gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
    },
    { 
      icon: Sparkles, 
      title: 'Future-Ready', 
      desc: 'Continuous upskilling for emerging technologies and markets.',
      stats: 'Future Proof',
      color: 'from-yellow-400 to-orange-500',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechNova Inc",
      content: "Poeage Nexus reduced our hiring time by 76% while improving candidate quality exponentially.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Talent, Global Systems",
      content: "The neural matching system identified candidates we would have missed with traditional methods.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "HR Director, Future Labs",
      content: "Finally, a platform that understands the nuance of technical talent and cultural fit.",
      avatar: "EW",
      rating: 5
    }
  ];

  const partners = [
    { name: "TVS", logo: "TVS", description: "Automotive Manufacturing" },
    { name: "TATA", logo: "TATA", description: "Conglomerate Enterprise" },
    { name: "Mahindra", logo: "M&M", description: "Automotive & Technology" },
  ];

  // Auto-rotate features
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, features.length]);

  // Magnetic button component
  const MagneticButton = ({ children, className, ...props }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouse = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.1);
      y.set((e.clientY - centerY) * 0.1);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={ref}
        style={{ x, y }}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden relative">
      {/* Enhanced Animated Background with Parallax */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          style={{ y: y1 }}
          variants={pulseGlow}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          variants={pulseGlow}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          variants={pulseGlow}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-3/4 left-3/4 w-48 h-48 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      {/* Animated Grid Pattern with Interactive Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Advanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Trailer */}
      <motion.div
        className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-16 backdrop-blur-xl bg-gray-900/80 border-b border-gray-700/50"
      >
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
              />
              <Hexagon className="w-6 h-6 text-white relative z-10" />
            </div>
            <span className="text-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Poeage Nexus
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Platform', 'Solutions', 'Case Studies', 'Pricing'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ 
                  color: "#06b6d4",
                  y: -2
                }}
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors relative group"
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton className="hidden md:flex px-6 py-2 bg-cyan-600 text-white font-semibold rounded-lg relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Launch Portal</span>
            </MagneticButton>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 overflow-hidden"
            >
              {['Platform', 'Solutions', 'Case Studies', 'Pricing'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 10 }}
                  className="block text-gray-300 hover:text-cyan-400 font-medium py-2 border-b border-gray-700/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 py-20 md:px-16 pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="flex-1 space-y-8 text-center lg:text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
            <span className="text-cyan-300 text-sm font-medium">SYSTEM ACTIVE • AI NETWORK ONLINE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Poeage
            </span>
            <br />
            <span className="text-white">Nexus</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Next-generation talent infrastructure powered by <span className="text-cyan-300">neural networks</span> and <span className="text-purple-300">quantum intelligence</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <MagneticButton className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg shadow-2xl shadow-cyan-500/25 flex items-center gap-2 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Zap className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Initiate Connection</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </MagneticButton>
            
            <MagneticButton className="px-8 py-4 bg-transparent text-cyan-300 font-bold rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 flex items-center gap-2 group">
              <Play className="w-5 h-5" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Enhanced Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-2xl"
          >
            {[
              { value: '50K+', label: 'Active Nodes', icon: Network },
              { value: '143', label: 'Countries', icon: Globe },
              { value: '99.7%', label: 'Uptime', icon: Shield },
              { value: '24/7', label: 'AI Monitoring', icon: Cpu },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center lg:text-left p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
              >
                <stat.icon className="w-6 h-6 text-cyan-400 mb-2 mx-auto lg:mx-0" />
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Animated Hero Visual */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{ scale: smoothScale, x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
          className="flex-1 flex justify-center mt-12 lg:mt-0 z-10"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Animated Outer Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-purple-400/20 rounded-full"
            />

            {/* Central Hexagon with Glass Morphism */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl rotate-45 border border-cyan-500/30 backdrop-blur-xl" />
            
            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8"
            >
              {[0, 60, 120, 180, 240, 300].map((degree) => (
                <motion.div
                  key={degree}
                  whileHover={{ scale: 2, backgroundColor: "#06b6d4" }}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    transform: `rotate(${degree}deg) translate(120px) rotate(-${degree}deg)`
                  }}
                />
              ))}
            </motion.div>

            {/* Pulsing Core with Glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [45, 90, 45],
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg rotate-45"
            />

            {/* Floating Particles Around Core */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-300 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                style={{
                  left: `${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Partners Section */}
      <motion.section 
        style={{ y: y1 }}
        className="relative py-20 border-t border-b border-gray-800/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-gray-400 mb-12 text-sm font-semibold tracking-wider"
          >
            TRUSTED BY INDUSTRY LEADERS
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  opacity: 1,
                  y: -5
                }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="text-3xl font-bold text-white bg-gray-800/50 px-8 py-4 rounded-xl backdrop-blur-sm border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
                  {partner.logo}
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-lg">{partner.name}</div>
                  <div className="text-gray-400 text-sm">{partner.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Premium Feature Grid */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
              />
              <Cpu className="w-10 h-10 text-white relative z-10" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">System</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Architecture
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on six core protocols that redefine talent acquisition through advanced computational intelligence.
            </p>
          </motion.div>

          {/* Feature Controls */}
          <div className="flex justify-center mb-12">
            <MagneticButton 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-cyan-300 rounded-lg border border-cyan-500/30 backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'} Auto-View
            </MagneticButton>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Feature Showcase */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0.6, x: -20 }}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0.6,
                    x: activeFeature === index ? 0 : -20
                  }}
                  whileHover={{ 
                    opacity: 1, 
                    x: 0,
                    scale: 1.02
                  }}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-2xl bg-gray-800/30 border-2 backdrop-blur-xl cursor-pointer transition-all duration-500 group ${
                    activeFeature === index 
                      ? 'border-cyan-500/50 bg-cyan-500/10' 
                      : 'border-gray-700/50 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
                      />
                      <feature.icon className="w-6 h-6 text-white relative z-10" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-cyan-400 transition-transform ${
                      activeFeature === index ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-400 font-semibold">{feature.stats}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="text-sm text-cyan-300 hover:text-cyan-200 flex items-center gap-1"
                        >
                          Learn more <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Feature Visualization */}
            <div className="relative h-96 lg:h-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotateY: -180 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-8 backdrop-blur-sm"
                >
                  <div className="text-center h-full flex flex-col justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
                      />
                      <features className="w-10 h-10 text-white [activeFeature].icon relative z-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">{features[activeFeature].title}</h3>
                    <p className="text-gray-400 mb-6">{features[activeFeature].desc}</p>
                    <div className="text-cyan-400 font-bold text-lg">{features[activeFeature].stats}</div>
                    
                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="mt-6 h-2 bg-gray-700 rounded-full overflow-hidden"
                    >
                      <div className={`h-full bg-gradient-to-r ${features[activeFeature].color}`} />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <motion.section 
        style={{ y: y2 }}
        className="relative py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Trusted by</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Innovators
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-3xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-xl group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
                    />
                    <span className="relative z-10">{testimonial.avatar}</span>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                
                {/* Animated Rating Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + starIndex * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Star 
                        className={`w-4 h-4 ${
                          starIndex < testimonial.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600'
                        }`} 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Premium CTA Section */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              background: [
                'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8 relative z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to Access the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Neural Network?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join forward-thinking enterprises leveraging our quantum talent infrastructure for unprecedented growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton className="px-12 py-5 bg-cyan-600 text-white font-bold rounded-xl text-lg flex items-center gap-3 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Rocket className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Deploy Nexus</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </MagneticButton>
            
            <MagneticButton className="px-12 py-5 bg-transparent text-cyan-300 font-bold rounded-xl border border-cyan-500/50 text-lg hover:bg-cyan-500/10 flex items-center gap-3 group">
              <Play className="w-5 h-5" />
              Request Demo
            </MagneticButton>
          </motion.div>

          {/* Premium Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
          >
            {[
              { value: '50K+', label: 'Neural Nodes', icon: Network },
              { value: '99.7%', label: 'Uptime', icon: Shield },
              { value: '3.2s', label: 'Avg. Match', icon: Zap },
              { value: '∞', label: 'Scalability', icon: TrendingUp },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center relative overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
                  />
                  <stat.icon className="w-6 h-6 text-white relative z-10" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Footer */}
      <motion.footer 
        style={{ y: y1 }}
        className="relative border-t border-gray-800/50 py-16 px-6 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
                  />
                  <Hexagon className="w-5 h-5 text-white relative z-10" />
                </div>
                <span className="text-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Poeage Nexus
                </span>
              </motion.div>
              <p className="text-gray-400">
                Next-generation talent infrastructure powered by neural networks and quantum intelligence.
              </p>
            </div>
            
            {['Product', 'Company', 'Resources', 'Legal'].map((category, categoryIndex) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {['Feature One', 'Feature Two', 'Feature Three'].map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                    >
                      <motion.a
                        href="#"
                        whileHover={{ x: 5, color: "#06b6d4" }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors block"
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400"
          >
            <p>© 2024 Poeage Nexus. All rights reserved. Built with quantum precision.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}