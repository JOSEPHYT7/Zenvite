import { motion } from 'framer-motion';
import PreviewNavbar from './components/PreviewNavbar';
import PreviewCTA from './components/PreviewCTA';
import Countdown from './components/Countdown';
import heroImg from '../assets/birthday-party.png';
import { HiMusicNote, HiStar, HiCake } from 'react-icons/hi';

const BirthdayParty = () => {
  return (
    <div className="bg-[#12002e] text-white font-sans overflow-x-hidden">
      <PreviewNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <img src={heroImg} alt="Birthday Celebration" className="w-full h-full object-cover" />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#12002e] via-transparent to-[#12002e]/80 z-1" />
        
        {/* Floating elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * 100 + "vw", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute z-0 text-3xl"
          >
            {i % 3 === 0 ? '🎈' : i % 3 === 1 ? '✨' : '🎉'}
          </motion.div>
        ))}

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 10 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-lg shadow-pink-500/20"
          >
            You're Invited to
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-9xl font-black mb-6 italic tracking-tighter"
          >
            LEO'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400">25TH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-light text-purple-200 mb-12"
          >
            A Night of Neon Lights & High Vibes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Countdown targetDate="2026-07-15T21:00:00" themeColor="#ec4899" />
          </motion.div>
        </div>
      </section>

      {/* Details Cards */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <HiMusicNote />, title: "The Beat", desc: "Live DJ Sets all night", color: "from-blue-500 to-cyan-400" },
            { icon: <HiCake />, title: "The Feast", desc: "Premium Cocktails & Bites", color: "from-pink-500 to-rose-400" },
            { icon: <HiStar />, title: "The Vibe", desc: "Neon Dress Code", color: "from-purple-500 to-indigo-400" }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl group hover:bg-white/10 transition-all cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-white/5`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-purple-200/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Party Info */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-16 uppercase italic"
          >
            Where & When
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-12 rounded-[3rem] border border-white/5"
            >
              <div className="text-pink-500 text-sm font-bold uppercase tracking-widest mb-4">Location</div>
              <h4 className="text-3xl font-bold mb-2">The Sky Lounge</h4>
              <p className="text-purple-200/70">44th Floor, Neon Towers<br />Downtown City, Metro 1004</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-12 rounded-[3rem] border border-white/5"
            >
              <div className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">Date & Time</div>
              <h4 className="text-3xl font-bold mb-2">July 15th, 2026</h4>
              <p className="text-purple-200/70">Red Carpet: 9:00 PM<br />Main Event: 10:00 PM onwards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Playlist Section */}
      <section className="py-32 px-6 bg-[#0a0020]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase italic">The Night's Vibe</h2>
          <div className="space-y-4">
            {[
              { track: "Neon Lights", artist: "City Sounds", time: "3:45" },
              { track: "Midnight Party", artist: "Leo's Choice", time: "4:20" },
              { track: "Celebration", artist: "The Stars", time: "3:10" }
            ].map((song, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full group-hover:scale-110 transition-transform">
                   <HiMusicNote className="text-xl" />
                </div>
                <div className="text-left flex-grow">
                   <div className="font-bold text-lg">{song.track}</div>
                   <div className="text-purple-300/50 text-sm">{song.artist}</div>
                </div>
                <div className="text-purple-300/30 font-mono">{song.time}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Booth */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <h2 className="text-5xl font-black uppercase italic">Photo Booth</h2>
             <p className="text-pink-500 font-bold tracking-widest uppercase">Tag #LEO25 in your posts!</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {[
               "1530103862676-de8892ebeea6",
               "1492684223066-81342ee5ff30",
               "1533174072545-7a4b6ad7a6c3",
               "1514525253344-463bb43477ec",
               "1504851149312-7a075b496cc7"
             ].map((id, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, rotate: Math.random() * 10 - 5 }}
                 whileInView={{ opacity: 1, rotate: 0 }}
                 className="aspect-[3/4] bg-white/5 rounded-3xl overflow-hidden border-4 border-white/10 hover:border-pink-500 transition-all cursor-pointer"
               >
                 <img src={`https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`} alt="Party" className="w-full h-full object-cover" />
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Dress Code & Venue */}
      <section className="py-32 px-6 bg-gradient-to-t from-pink-900/20 to-transparent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
           <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-black mb-6 uppercase italic">Dress Code</h3>
              <p className="text-purple-200/70 text-lg leading-relaxed mb-8">
                Think **Neon & Electric**. We want you to glow! Wear your brightest colors, reflective fabrics, or anything that pops under the UV lights.
              </p>
              <div className="flex gap-4">
                 {['#00f2ff', '#ff00ff', '#fbff00'].map(c => (
                   <div key={c} className="w-8 h-8 rounded-full border border-white/20" style={{ backgroundColor: c }} />
                 ))}
              </div>
           </div>
           <div className="p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10">
              <h3 className="text-3xl font-black mb-6 uppercase italic">Gift Policy</h3>
              <p className="text-purple-200/70 text-lg leading-relaxed">
                Your presence is the present! But if you wish to contribute, we have a small digital pot for Leo's next travel adventure.
              </p>
              <button className="mt-8 px-8 py-3 bg-white text-black font-black rounded-xl uppercase tracking-widest hover:scale-105 transition-all">
                 View Travel Pot
              </button>
           </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-32 px-6">
        <div className="max-w-xl mx-auto bg-white text-black p-12 md:p-16 rounded-[4rem] shadow-[0_0_80px_rgba(236,72,153,0.3)]">
          <h2 className="text-4xl font-black text-center mb-4 uppercase italic">Get on the List</h2>
          <p className="text-gray-500 text-center mb-10">RSVP by July 1st to secure your spot</p>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-100 border-none rounded-2xl py-4 px-6 focus:ring-2 ring-pink-500 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full bg-gray-100 border-none rounded-2xl py-4 px-6 focus:ring-2 ring-pink-500 outline-none" />
            <select className="w-full bg-gray-100 border-none rounded-2xl py-4 px-6 focus:ring-2 ring-pink-500 outline-none appearance-none">
              <option>Bringing a guest?</option>
              <option>Just me!</option>
              <option>Plus one</option>
            </select>
            <button className="w-full py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-2xl uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-pink-500/30">
              Count me in!
            </button>
          </form>
        </div>
      </section>

      <PreviewCTA theme="birthday" />
    </div>
  );
};

export default BirthdayParty;
