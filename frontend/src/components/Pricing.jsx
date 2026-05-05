import { motion } from 'framer-motion';
import { triggerFirecracker } from '../utils/firecracker';

const packages = [
  {
    name: "Basic",
    price: "$49",
    features: ["Standard Template", "Mobile Friendly", "Basic RSVP", "1 Year Hosting"],
    highlight: false,
    graphic: "🎈"
  },
  {
    name: "Premium",
    price: "$99",
    features: ["Premium Animations", "Custom Colors", "Advanced RSVP", "Custom Domain Support"],
    highlight: true,
    graphic: "🎂"
  },
  {
    name: "Custom Vibe",
    price: "$199",
    features: ["Fully Custom Design", "3D Decor Effects", "Priority Support", "Email Automations"],
    highlight: false,
    graphic: "🎁"
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white relative z-10 font-playful">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Simple <span className="text-red-700 font-serif italic">Pricing</span></h2>
          <p className="text-gray-600 font-bold text-lg">Choose a package that fits your celebration scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border-2 ${pkg.highlight ? 'border-red-600 shadow-2xl shadow-red-100 scale-105' : 'border-gray-100 shadow-xl'} flex flex-col bg-white`}
            >
              {pkg.highlight && <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">Most Popular</span>}
              
              <div className="text-5xl mb-4">{pkg.graphic}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <div className="text-5xl font-black text-gray-900 mb-6">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <span className="text-green-500 text-xl">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
