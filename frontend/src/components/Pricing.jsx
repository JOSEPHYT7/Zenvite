import { motion } from 'framer-motion';

const websitePricing = [
  { name: "Basic Invite", inr: "₹2,999", usd: "$39" },
  { name: "Premium Invite", inr: "₹5,999", usd: "$79", highlight: true },
  { name: "Luxury Invite", inr: "₹11,999", usd: "$149" }
];

const reelPricing = [
  { name: "Simple Reel", inr: "₹999", usd: "$15" },
  { name: "Cinematic Reel", inr: "₹2,499", usd: "$35", highlight: true },
  { name: "Luxury Reel", inr: "₹4,999", usd: "$65" }
];

const posterPricing = [
  { name: "Single Poster", inr: "₹399", usd: "$6" },
  { name: "Premium Poster", inr: "₹799", usd: "$10", highlight: true },
  { name: "Social Media Pack", inr: "₹1,499", usd: "$20" }
];

const comboPackages = [
  {
    name: "Package 1",
    inr: "₹3,999",
    usd: "$49",
    features: ["Invitation Website", "1 Poster Design"],
    graphic: "💎"
  },
  {
    name: "Package 2",
    inr: "₹7,999",
    usd: "$99",
    features: ["Premium Website", "Cinematic Reel", "2 Posters", "WhatsApp Design"],
    highlight: true,
    graphic: "👑",
    badge: "Best Value"
  },
  {
    name: "Package 3",
    inr: "₹14,999",
    usd: "$179",
    features: ["Luxury Website", "Premium Reel", "Poster Pack", "Social Pack"],
    graphic: "🌌"
  }
];

const PricingCard = ({ item, currency, isCombo = false }) => {
  const priceLabel = currency === 'INR' ? item.inr : item.usd;
  
  return (
    <motion.div 
      layout
      whileHover={{ y: -5 }}
      className={`p-4 md:p-6 rounded-2xl md:rounded-[2rem] border-2 flex flex-col items-center text-center transition-all duration-300 ${
        (item.highlight && isCombo) ? 'border-red-600 bg-white shadow-lg z-10' : 'border-gray-100 bg-gray-50/20'
      } ${isCombo ? 'min-h-[300px] md:min-h-[320px]' : ''}`}
    >
      {item.badge && (
        <span className="bg-red-600 text-white text-[7px] md:text-[8px] font-black uppercase tracking-widest py-1 px-3 rounded-full mb-3">
          {item.badge}
        </span>
      )}
      
      {isCombo && <div className="text-2xl md:text-3xl mb-2">{item.graphic}</div>}
      
      <h4 className={`font-bold text-gray-900 mb-1 ${isCombo ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>
        {item.name}
      </h4>
      
      <div className={`font-black text-red-700 ${isCombo ? 'text-xl md:text-2xl mb-4' : 'text-lg md:text-xl mb-1'}`}>
        {priceLabel}
      </div>
      
      {isCombo && (
        <>
          <ul className="space-y-1.5 mb-6 flex-1 text-left w-full">
            {item.features.map((f, i) => (
              <li key={i} className="text-[9px] md:text-[10px] font-bold text-gray-600 flex items-center gap-2">
                <span className="text-red-600">✦</span> {f}
              </li>
            ))}
          </ul>

          <button 
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              window.dispatchEvent(new CustomEvent('selectService', { 
                detail: { 
                  type: 'Combo', 
                  name: item.name,
                  price: priceLabel
                } 
              }));
            }}
            className="w-full py-2.5 rounded-xl bg-red-700 text-white font-black uppercase text-[9px] md:text-[10px] tracking-widest transition-all shadow-md hover:bg-red-800 active:scale-95"
          >
            Select Package
          </button>
        </>
      )}
    </motion.div>
  );
};

const Pricing = ({ currency, setCurrency }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-red-50/20 relative z-10 font-sans border-t border-red-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-900 text-center">
            Investment <span className="text-red-700 italic font-serif">Guide</span>
          </h2>
          
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl border border-gray-200">
            {['INR', 'USD'].map(c => (
              <button 
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-lg font-black text-[10px] md:text-xs transition-all ${
                  currency === c ? 'bg-white text-red-700 shadow-sm' : 'text-gray-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Regular Services */}
        <div className="space-y-12 md:space-y-16 mb-20 md:mb-24">
          {[
            { title: "Invitation Websites", items: websitePricing },
            { title: "Invitation Reels", items: reelPricing },
            { title: "Posters & Graphics", items: posterPricing }
          ].map((sec, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] md:text-xs font-black mb-6 md:mb-8 text-center uppercase tracking-[0.3em] text-gray-300">
                {sec.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
                {sec.items.map((item, i) => (
                  <PricingCard key={i} item={item} currency={currency} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Combo Packages at the Bottom */}
        <div className="pt-16 md:pt-20 border-t-2 border-gray-50">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl md:text-5xl font-black mb-2 text-gray-900">Value <span className="text-red-700 italic font-serif">Combos</span></h3>
            <p className="text-gray-500 font-bold text-xs md:text-sm">Most recommended for a complete celebration experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {comboPackages.map((item, i) => (
              <PricingCard key={i} item={item} currency={currency} isCombo={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
