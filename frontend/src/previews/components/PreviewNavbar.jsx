import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';

const PreviewNavbar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-6 left-6 z-[100]"
    >
      <Link 
        to="/" 
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group shadow-xl"
      >
        <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium text-sm">Back to Zenvite</span>
      </Link>
    </motion.div>
  );
};

export default PreviewNavbar;
