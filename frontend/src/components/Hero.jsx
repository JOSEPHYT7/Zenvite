import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { triggerFirecracker } from '../utils/firecracker';
import FloatingFlowers from './FloatingFlowers';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-wedding-bg">
      <FloatingFlowers />
      
      {/* Wedding Vibe & Holi Decor */}
      <div className="absolute top-0 inset-x-0 h-32 bg-white opacity-80 backdrop-blur-md border-b-8 border-red-700/20 shadow-[0_20px_50px_rgba(185,28,28,0.1)]"></div>
      
      {/* Floral / Holi representations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-700/30 rounded-full blur-[60px]"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-green-700/30 rounded-full blur-[60px]"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-holi-pink/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-holi-yellow/20 rounded-full blur-[90px]"></div>
      
      {/* Red carpet representation */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-red-700/20 to-transparent"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-6 py-2 rounded-full bg-white border border-red-200 text-sm font-bold tracking-widest text-red-700 shadow-md uppercase font-sans"
        >
          Your Special Day
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6 text-gray-900 drop-shadow-sm font-serif font-bold"
        >
          Celebrate With <br/>
          <span className="text-red-700 font-cursive font-normal text-7xl md:text-9xl">Elegance</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-sans font-medium"
        >
          We are a premium invitation agency crafting breathtaking digital websites, cinematic reels, bespoke event graphics, and custom posters for weddings, corporate galas, and every grand celebration.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center font-sans"
        >
          <a href="#previews" onClick={triggerFirecracker} className="group relative px-10 py-4 bg-red-700 text-white font-bold rounded-full flex items-center justify-center gap-2 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl shadow-red-700/30">
            <span className="relative z-10">Create Your Invite</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" onClick={triggerFirecracker} className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center shadow-lg shadow-gray-900/20 hover:scale-105 active:scale-95 border border-gray-800">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
