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
      <div className="absolute top-0 inset-x-0 h-16 flex justify-around opacity-50 pointer-events-none">
         {[...Array(10)].map((_, i) => (
            <div key={i} className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[40px] border-t-white border-r-[30px] border-r-transparent origin-top"></div>
         ))}
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
