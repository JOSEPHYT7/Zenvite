import { motion } from 'framer-motion';

const LanguageBanner = () => {
  const languages = ['English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'मराठी', 'ગુજરાતી', 'Español', 'Français', 'عربي', '日本語'];
  
  return (
    <section className="py-16 md:py-24 bg-red-700 text-white overflow-hidden relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-10 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
        >
          Any Occasion. <span className="font-serif italic font-normal text-red-200">Any Language.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-bold text-red-100 max-w-2xl mx-auto"
        >
          We create completely custom invitations for weddings, birthdays, corporate events, and more—fluent in every language you speak.
        </motion.p>
      </div>

      {/* Infinite scrolling language marquee */}
      <div className="relative flex overflow-hidden whitespace-nowrap bg-red-800/50 py-4 md:py-6 border-y border-red-600">
        <motion.div
          className="flex whitespace-nowrap items-center gap-8 md:gap-16 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {/* Double array for seamless loop */}
          {[...languages, ...languages, ...languages, ...languages].map((lang, idx) => (
            <span key={idx} className="text-2xl md:text-4xl font-black opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageBanner;
