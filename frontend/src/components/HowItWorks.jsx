import { motion } from 'framer-motion';
import FloatingFlowers from './FloatingFlowers';

const steps = [
  {
    num: "01",
    title: "Select Services",
    desc: "Choose from our premium portfolio: Websites, Cinematic Reels, Graphic Posters, or a value-packed Combo Pack."
  },
  {
    num: "02",
    title: "Customize & Craft",
    desc: "Share your event details and vision. Our expert designers craft every element to match your unique style perfectly."
  },
  {
    num: "03",
    title: "Magic Delivered",
    desc: "Receive your stunning digital assets via a private link. Share instantly with your guests across all social platforms."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-red-50 relative z-10 font-playful border-t border-red-100 overflow-hidden">
      <FloatingFlowers />
      
      {/* Holi Color Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-red-200/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-300/20 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-gray-900"
          >
            How It <span className="text-red-700 font-serif italic">Works</span>
          </motion.h2>
          <p className="text-gray-600 font-bold text-lg max-w-xl mx-auto uppercase tracking-widest text-xs">
            Simple steps to a premium celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-10 bg-white rounded-[3rem] shadow-2xl border border-red-100 hover:-translate-y-4 transition-all duration-500 group"
            >
              <div className="text-7xl font-black text-red-50 mb-6 font-serif group-hover:text-red-100 transition-colors">{step.num}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 font-bold leading-relaxed">{step.desc}</p>
              
              <div className="absolute top-10 right-10 w-4 h-4 bg-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
