import { motion } from 'framer-motion';

const PreviewCTA = ({ theme = 'default' }) => {
  const themes = {
    luxury: {
      bg: 'bg-black/90',
      text: 'text-white',
      accent: 'bg-[#C5A059]',
      border: 'border-white/10'
    },
    birthday: {
      bg: 'bg-purple-900/90',
      text: 'text-white',
      accent: 'bg-pink-500',
      border: 'border-purple-400/20'
    },
    indian: {
      bg: 'bg-maroon-900/90',
      text: 'text-white',
      accent: 'bg-[#FFD700]',
      border: 'border-red-400/20'
    },
    corporate: {
      bg: 'bg-slate-900/90',
      text: 'text-white',
      accent: 'bg-cyan-500',
      border: 'border-slate-700/50'
    },
    default: {
      bg: 'bg-white/10',
      text: 'text-white',
      accent: 'bg-white',
      border: 'border-white/20'
    }
  };

  const activeTheme = themes[theme] || themes.default;

  return (
    <section className={`py-20 px-6 ${activeTheme.bg} backdrop-blur-xl border-t ${activeTheme.border}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-bold mb-4 ${activeTheme.text}`}
        >
          Interested in creating your own premium invitation website?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg md:text-xl opacity-80 mb-10 ${activeTheme.text}`}
        >
          Let Zenvite turn your special celebration into an unforgettable digital experience.
        </motion.p>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-block px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all ${
            theme === 'luxury' || theme === 'indian' ? 'text-black' : 'text-white'
          } ${activeTheme.accent}`}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
};

export default PreviewCTA;
