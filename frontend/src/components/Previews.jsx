import { motion } from 'framer-motion';
import { triggerFirecracker } from '../utils/firecracker';

const previews = [
  {
    title: "Elegant Wedding",
    type: "Wedding",
    color: "from-red-600 to-red-900",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Colorful Holi Party",
    type: "Party",
    color: "from-green-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Surprise Birthday",
    type: "Birthday",
    color: "from-sky-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1530103862676-de8892ebeea6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Corporate Gala",
    type: "Event",
    color: "from-gray-700 to-black",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
  }
];

const Previews = () => {
  return (
    <section id="previews" className="py-24 relative z-10 bg-birthday-bg overflow-hidden font-playful cursor-birthday">
      {/* Birthday Bunting/Decor Concept (Image 3) */}
      {/* Bunting Decoration Style (Refined & Perfected) */}
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-20">
        {/* SVG String */}
        <svg className="absolute top-0 w-full h-24 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <path 
            d="M0,5 Q 250,70 500,5 T 1000,5" 
            stroke="#1a1a1a" 
            strokeWidth="1" 
            fill="none" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        
        {/* Flags Container */}
        <div className="flex justify-between w-full px-0">
          {Array.from({ length: 32 }).map((_, i) => {
            const colors = ['#ef4444', '#fbbf24', '#2563eb', '#f97316'];
            const color = colors[i % colors.length];
            const x = i / 31;
            
            // Perfect parabola/quad curve math for two sags
            // sag = (1 - (2x-1)^2) for a single sag from 0 to 1
            // For two sags, we use absolute sin or piecewise quadratic
            const sagFactor = Math.abs(Math.sin(x * Math.PI * 2));
            const yOffset = 5 + (sagFactor * 45); 

            return (
              <div 
                key={i} 
                className="relative flex flex-col items-center"
                style={{ 
                  left: '0',
                  transform: `translateY(${yOffset}px)` 
                }}
              >
                {/* Connection Dot */}
                <div className="w-1 h-1 bg-[#1a1a1a] rounded-full mb-[-1px]"></div>
                {/* Flag */}
                <div 
                  className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-transparent border-t-[14px] md:border-t-[18px] border-r-[8px] md:border-r-[10px] border-r-transparent drop-shadow-sm" 
                  style={{ borderTopColor: color }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-md"
            >
              Explore Our <span className="text-yellow-300 font-serif italic">Themes</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sky-50 text-lg max-w-xl font-bold"
            >
              From elegant weddings to colorful parties and joyous birthdays, we match your perfect vibe.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previews.map((preview, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/50 border-[6px] border-white/20"
            >
              <div className="absolute inset-0 bg-gray-900">
                <img src={preview.image} alt={preview.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${preview.color} mix-blend-multiply opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/30 backdrop-blur-md text-sm font-bold mb-3 text-white">
                    {preview.type}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-md">{preview.title}</h3>
                  <button onClick={triggerFirecracker} className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl hover:scale-105 active:scale-95">
                    🧨 View Invite
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Previews;
