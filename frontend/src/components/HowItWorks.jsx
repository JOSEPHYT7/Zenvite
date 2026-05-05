import { motion } from 'framer-motion';
import FloatingFlowers from './FloatingFlowers';

const steps = [
  {
    num: "01",
    title: "Choose a Vibe",
    desc: "Browse our collection of stunning themes spanning from elegant weddings to neon birthday parties."
  },
  {
    num: "02",
    title: "Customize Details",
    desc: "Send us your event details, photos, and color preferences. We'll tailor the design just for you."
  },
  {
    num: "03",
    title: "Share Instantly",
    desc: "Receive your custom web link and share it directly via WhatsApp, iMessage, or Social Media."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-red-50 relative z-10 font-sans border-t border-red-100 overflow-hidden">
      <FloatingFlowers />
      
      {/* Holi Color Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-holi-pink/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-holi-yellow/10 rounded-full blur-[80px]"></div>

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
          <p className="text-gray-600 font-medium text-lg max-w-xl mx-auto">
            Getting your premium digital invitation is as easy as 1-2-3. No coding or complex builders required.
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
              className="relative p-10 bg-white rounded-3xl shadow-xl border border-red-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-7xl font-black text-red-100 mb-6 font-serif">{step.num}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
