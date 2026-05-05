import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { triggerFirecracker } from '../utils/firecracker';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Previews', href: '#previews' },
    { name: 'Why Us', href: '#why-choose' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-gradient font-cursive text-5xl pr-4 pb-2 py-1 inline-block">Zenvite</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-red-700 transition-colors text-sm font-bold tracking-wide">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={triggerFirecracker} className="px-8 py-3 rounded-full bg-red-700 text-white font-bold hover:bg-red-800 hover:shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:scale-105 active:scale-95 transition-all">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-gray-200 flex flex-col items-center py-6 gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-red-700 text-lg font-bold">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => { setIsOpen(false); triggerFirecracker(e); }} className="mt-2 px-10 py-4 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold shadow-lg shadow-red-700/30">
            Contact Us
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
