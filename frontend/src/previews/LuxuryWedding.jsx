import { motion } from 'framer-motion';
import PreviewNavbar from './components/PreviewNavbar';
import PreviewCTA from './components/PreviewCTA';
import Countdown from './components/Countdown';
import heroImg from '../assets/luxury-wedding.png';

const LuxuryWedding = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] font-serif overflow-x-hidden">
      <PreviewNavbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src={heroImg} alt="Luxury Wedding" className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-1" />
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#C5A059] uppercase tracking-[0.4em] text-sm mb-6"
          >
            The Wedding of
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-cursive mb-8 text-white drop-shadow-2xl"
          >
            Alexander & Isabella
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="w-24 h-[1px] bg-[#C5A059] mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl md:text-2xl font-light tracking-widest italic"
          >
            October 24th, 2026 • The Grand Ballroom
          </motion.p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A059] uppercase tracking-[0.3em] text-sm mb-12"
          >
            Counting down to forever
          </motion.h2>
          <Countdown targetDate="2026-10-24T18:00:00" themeColor="#C5A059" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={heroImg} alt="Our Story" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-[#C5A059]/20 -z-1" />
          </motion.div>
          
          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-cursive text-[#C5A059]"
            >
              Our Love Story
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed text-white/70 font-sans"
            >
              Two souls met under the city lights, and a million moments led to this one. We invite you to join us as we begin our greatest adventure yet, surrounded by the people we love most.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-8"
            >
              <button className="px-8 py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 tracking-widest uppercase text-xs">
                View Gallery
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-cursive text-[#C5A059] mb-4">Wedding Schedule</h2>
          <p className="text-white/50 tracking-[0.2em] uppercase text-sm">Every detail of our special day</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { time: '4:00 PM', event: 'The Ceremony', place: 'St. Regis Cathedral' },
            { time: '6:00 PM', event: 'Cocktail Hour', place: 'The Terrace Lounge' },
            { time: '7:30 PM', event: 'Grand Reception', place: 'The Crystal Ballroom' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-8 group"
            >
              <div className="text-[#C5A059] text-2xl font-light mb-2 md:mb-0">{item.time}</div>
              <div className="text-3xl font-medium group-hover:text-[#C5A059] transition-colors">{item.event}</div>
              <div className="text-white/40 tracking-wider italic">{item.place}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#C5A059] text-5xl md:text-7xl font-cursive mb-4">Capturing Moments</h2>
            <p className="text-white/40 tracking-[0.3em] uppercase text-xs">A glimpse into our journey</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "1519225421980-715cb0215aed",
              "1511795409834-ef04bbd61622",
              "1519741497674-611481863552",
              "1515934751635-c81c6bc9a2d8",
              "1469334031218-e382a71b716b",
              "1583939003579-730e3918a45a",
              "1520854221256-17451cc331bf",
              "1510076857179-e3bb37baa8d2"
            ].map((id, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-white/5 rounded-sm overflow-hidden group cursor-pointer"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`} 
                  alt="Gallery" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Registry */}
      <section className="py-32 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#C5A059] text-4xl font-cursive mb-8">Gift Registry</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Tiffany & Co.', 'Williams Sonoma', 'Bloomingdale\'s'].map((store) => (
              <motion.div 
                key={store}
                whileHover={{ y: -5 }}
                className="px-8 py-4 border border-white/10 rounded-full text-white/80 hover:border-[#C5A059] hover:text-[#C5A059] transition-all cursor-pointer"
              >
                {store}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[#C5A059] text-5xl font-cursive mb-8 text-left">The Venue</h2>
            <div className="space-y-6 text-left">
              <div className="border-l-2 border-[#C5A059] pl-6 py-2">
                <h4 className="text-xl font-bold mb-1">The Grand Ballroom</h4>
                <p className="text-white/50 italic">St. Regis, Fifth Avenue, New York</p>
              </div>
              <p className="text-white/70 font-sans leading-relaxed">
                Experience the timeless elegance of New York's most prestigious ballroom. A night of grandeur awaits under the crystal chandeliers.
              </p>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:border-[#C5A059] transition-all text-xs tracking-widest uppercase">
                View on Google Maps
              </button>
            </div>
          </div>
          <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white/20 text-sm tracking-widest uppercase italic">Map Preview System</span>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center border border-[#C5A059]/20 p-12 md:p-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-8">
             <span className="text-[#C5A059] text-3xl font-cursive">RSVP</span>
          </div>
          <p className="mb-12 text-lg text-white/70 italic">Kindly respond by September 24th, 2026</p>
          <form className="space-y-6">
            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#C5A059] outline-none transition-colors text-center" />
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#C5A059] outline-none transition-colors text-center" />
            <div className="flex justify-center gap-12 py-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" className="hidden" />
                <span className="w-4 h-4 border border-[#C5A059] rounded-full group-hover:bg-[#C5A059]/30 transition-all" />
                <span className="text-sm tracking-widest uppercase">Joyfully Accept</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" className="hidden" />
                <span className="w-4 h-4 border border-[#C5A059] rounded-full group-hover:bg-[#C5A059]/30 transition-all" />
                <span className="text-sm tracking-widest uppercase">Regretfully Decline</span>
              </label>
            </div>
            <button className="w-full py-5 bg-[#C5A059] text-black font-bold tracking-[0.3em] uppercase hover:bg-[#d4b57a] transition-all">
              Submit Response
            </button>
          </form>
        </div>
      </section>

      <PreviewCTA theme="luxury" />
    </div>
  );
};

export default LuxuryWedding;
