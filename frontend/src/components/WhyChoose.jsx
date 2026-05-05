import { motion } from 'framer-motion';

const reasons = [
  {
    graphic: "⚡",
    title: "Fast Delivery",
    desc: "Get your custom invite link in record time, ready to share."
  },
  {
    graphic: "💎",
    title: "Affordable Pricing",
    desc: "Premium designs at startup-friendly prices."
  },
  {
    graphic: "🎨",
    title: "Custom Designs",
    desc: "Tailored to your specific event theme and color palette."
  },
  {
    graphic: "📱",
    title: "Easy Sharing",
    desc: "One click sharing across WhatsApp, iMessage, and social media."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 relative z-10 overflow-hidden bg-wedding-bg font-sans">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-gray-900"
          >
            Why Choose <span className="text-red-700 font-serif italic">Zenvite</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center hover:bg-white hover:-translate-y-2 transition-all border border-gray-200 cursor-pointer shadow-lg group"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mb-6 shadow-md border-2 border-gray-100 group-hover:scale-110 transition-transform">
                {reason.graphic}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
