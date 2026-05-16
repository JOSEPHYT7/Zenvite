import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiPlay, FiVolume2, FiVolumeX } from 'react-icons/fi';

// Import local assets for Website Invitations
import luxuryWeddingImg from '../assets/luxury-wedding.png';
import birthdayPartyImg from '../assets/birthday-party.png';
import indianWeddingImg from '../assets/indian-wedding.png';
import corporateEventImg from '../assets/corporate-event.png';

const websiteTemplates = [
  {
    id: 1,
    title: "Luxury Wedding",
    path: "/preview/luxury-wedding",
    image: luxuryWeddingImg,
    tags: ["Elegant", "Gold", "Luxury"]
  },
  {
    id: 2,
    title: "Birthday Party",
    path: "/preview/birthday-party",
    image: birthdayPartyImg,
    tags: ["Fun", "Vibrant", "Modern"]
  },
  {
    id: 3,
    title: "Traditional Indian",
    path: "/preview/indian-wedding",
    image: indianWeddingImg,
    tags: ["Royal", "Red & Gold", "Culture"]
  },
  {
    id: 4,
    title: "Corporate Event",
    path: "/preview/corporate-event",
    image: corporateEventImg,
    tags: ["Professional", "Blue", "Sleek"]
  }
];

const reels = [
  { id: 1, title: "Cinematic Wedding Story", image: luxuryWeddingImg, video: "/assets/reels/reel-1.mp4" },
  { id: 2, title: "Modern Birthday Vibe", image: birthdayPartyImg, video: "/assets/reels/reel-2.mp4" },
  { id: 3, title: "Traditional Sangeet Edit", image: indianWeddingImg, video: "/assets/reels/reel-3.mp4" }
];

// Mapping to the well-organized files in /assets/posters/
const posters = [
  { id: 1, title: "Wedding Invitation", image: "/assets/posters/custom-1.jpg" },
  { id: 2, title: "Name Ceremony", image: "/assets/posters/custom-2.jpg" },
  { id: 3, title: "Rave Party", image: "/assets/posters/custom-3.jpg" },
  { id: 4, title: "Business Meeting", image: "/assets/posters/custom-4.jpg" },
  { id: 5, title: "Retirement", image: "/assets/posters/custom-5.png" }, // PNG!
  { id: 6, title: "Event Invitation", image: "/assets/posters/custom-6.jpg" }
];

// Mapping to the well-organized files in /assets/graphics/
const graphics = [
  { id: 1, title: "Save the Date", image: "/assets/graphics/custom-1.jpg" },
  { id: 2, title: "3D Art", image: "/assets/graphics/custom-2.jpg" },
  { id: 3, title: "Birthday", image: "/assets/graphics/custom-3.jpg" },
  { id: 4, title: "Wedding", image: "/assets/graphics/custom-4.jpg" },
  { id: 5, title: "Classic Invitation", image: "/assets/graphics/custom-5.jpg" }, 
  { id: 6, title: "Meeting", image: "/assets/graphics/custom-6.jpg" }
];

const ReelCard = ({ reel }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="group relative aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-lg">
      {reel.video ? (
        <>
          <video 
            ref={videoRef}
            src={reel.video} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            autoPlay 
            loop 
            muted={isMuted}
            playsInline 
          />
          <button 
            onClick={toggleMute}
            className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 hover:scale-110 active:scale-95 transition-all shadow-lg"
          >
            {isMuted ? <FiVolumeX className="text-white text-lg" /> : <FiVolume2 className="text-white text-lg" />}
          </button>
        </>
      ) : (
        <img src={reel.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" alt={reel.title} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
      {!reel.video && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
            <FiPlay className="text-white text-2xl fill-white" />
          </div>
        </div>
      )}
      <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
        <h3 className="text-white font-black text-xl">{reel.title}</h3>
      </div>
    </motion.div>
  );
};

const Previews = () => {
  return (
    <section id="previews" className="py-24 bg-red-50/30 relative z-10 font-sans overflow-hidden">
      
      {/* Bunting / Flags at the Top */}
      <div className="absolute top-0 left-0 right-0 h-20 md:h-28 overflow-hidden z-20 pointer-events-none opacity-90">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C250,50 750,50 1000,0" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="5,5" />
          {[...Array(20)].map((_, i) => {
            const colors = ["#ff4d4d", "#ffcc00", "#4d79ff", "#00cc66", "#ff66cc"];
            const x = i * 50 + 25;
            const y = Math.sin((i / 20) * Math.PI) * 30 + 10;
            return (
              <path key={i} d={`M${x - 15},${y} L${x + 15},${y} L${x},${y + 25} Z`} fill={colors[i % colors.length]} />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* WEBSITES SECTION */}
        <div className="mb-24 pt-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 text-center">
              Invitation <span className="text-red-700 italic font-serif">Websites</span>
            </h2>
            <div className="w-24 h-1.5 bg-red-700 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {websiteTemplates.map((template) => (
              <motion.div key={template.id} whileHover={{ y: -10 }} className="group relative h-[400px] md:h-[500px] bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100">
                <img src={template.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={template.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute top-10 right-6 md:right-10 w-[140px] md:w-[200px] h-[280px] md:h-[400px] bg-gray-900 rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden hidden sm:block">
                  <img src={template.image} className="w-full h-full object-cover" alt="mobile view" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="max-w-[60%]">
                    <div className="flex gap-2 mb-3">
                      {template.tags.map(tag => (
                        <span key={tag} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white bg-red-700/80 backdrop-blur-md px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white">{template.title}</h3>
                  </div>
                  <Link to={template.path} className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-red-700 hover:text-white transition-all shadow-xl active:scale-95">Preview <FiExternalLink /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REELS SECTION */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center">
              Cinematic <span className="text-red-700 italic font-serif">Reels</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs text-center">Premium Vertical Video Stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </div>

        {/* POSTERS SECTION */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center">
              Event <span className="text-red-700 italic font-serif">Posters</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs text-center">Custom Ceremony & Party Invitation Posters</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {posters.map((poster) => (
              <motion.div key={poster.id} whileHover={{ scale: 1.05 }} className="bg-white p-3 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center">
                <div className="aspect-[3/4] w-full rounded-[1.5rem] overflow-hidden mb-4 bg-gray-50 shadow-inner">
                  <img src={poster.image} className="w-full h-full object-cover" alt={poster.title} />
                </div>
                <h3 className="text-gray-900 font-black text-[10px] md:text-xs text-center uppercase tracking-widest px-2">{poster.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRAPHICS SECTION */}
        <div>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center">
              Event <span className="text-red-700 italic font-serif">Graphics</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs text-center">Bespoke Branding, Menus & Digital Invitation Packs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {graphics.map((item) => (
              <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="bg-white p-3 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center">
                <div className="aspect-[3/4] w-full rounded-[1.5rem] overflow-hidden mb-4 bg-gray-50 shadow-inner">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                </div>
                <h3 className="text-gray-900 font-black text-[10px] md:text-xs text-center uppercase tracking-widest px-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Previews;
