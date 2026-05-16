import { motion } from 'framer-motion';
import PreviewNavbar from './components/PreviewNavbar';
import PreviewCTA from './components/PreviewCTA';
import Countdown from './components/Countdown';
import heroImg from '../assets/corporate-event.png';
import { HiUserGroup, HiPresentationChartLine, HiGlobeAlt, HiLightningBolt } from 'react-icons/hi';

const CorporateEvent = () => {
  return (
    <div className="bg-[#020617] text-slate-100 font-sans overflow-x-hidden">
      <PreviewNavbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={heroImg} alt="Tech Summit" className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Abstract shapes for tech vibe */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full" 
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Innovation Summit 2026</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter"
          >
            SHAPING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">FUTURE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join 5,000+ industry leaders, innovators, and visionaries for a three-day journey into the next era of technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <button className="px-10 py-5 bg-cyan-500 text-black font-black text-lg rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              Register Now
            </button>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
              <Countdown targetDate="2026-09-10T09:00:00" themeColor="#06b6d4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Glassmorphic Stats Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { icon: <HiUserGroup />, value: "50+", label: "Keynote Speakers", color: "text-cyan-400" },
            { icon: <HiPresentationChartLine />, value: "120+", label: "Masterclasses", color: "text-blue-400" },
            { icon: <HiGlobeAlt />, value: "30+", label: "Countries Represented", color: "text-purple-400" },
            { icon: <HiLightningBolt />, value: "24h", label: "Live Innovation Hub", color: "text-yellow-400" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl text-center group"
            >
              <div className={`text-4xl mb-6 flex justify-center ${stat.color} transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Agenda/Schedule */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Summit Agenda</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">Three immersive days focused on AI, sustainability, and the decentralized future.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { day: 'Day 01', theme: 'Vision & Strategy', items: ['The AI Revolution', 'Global Economic Shifts', 'Networking Gala'] },
              { day: 'Day 02', theme: 'Applied Innovation', items: ['Hands-on Masterclasses', 'Start-up Pitch Arena', 'Product Launch Keynotes'] },
              { day: 'Day 03', theme: 'The Decentralized Era', items: ['Web3 Deep Dive', 'Security & Ethics Panel', 'Closing Remarks'] }
            ].map((day, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-shrink-0 text-center md:text-left min-w-[150px]">
                   <div className="text-cyan-400 font-black text-2xl mb-1">{day.day}</div>
                   <div className="text-slate-400 text-sm font-bold uppercase">{day.theme}</div>
                </div>
                <div className="flex-grow flex flex-wrap gap-4 justify-center md:justify-start">
                   {day.items.map((item, i) => (
                     <span key={i} className="px-6 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-medium hover:bg-cyan-500/20 transition-colors cursor-default">
                        {item}
                     </span>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Agenda Section */}
      <section className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
             <h2 className="text-4xl md:text-6xl font-black italic">Keynote Speakers</h2>
             <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Visionaries from across the globe</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { name: "Dr. Sarah Chen", role: "AI Ethics Lead @ Future", id: "1573497620053-ab751270fb9c" },
               { name: "Marcus Thorne", role: "CTO, Decentralize Inc", id: "1560250094571-ddac5fef9a62" },
               { name: "Elena Rossi", role: "Lead Architect, ArchiTech", id: "1580489944761-15a19d654956" },
               { name: "James Wilson", role: "Founder, Sustainably", id: "1519085360753-af0119f7cbe7" }
             ].map((s, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -10 }}
                 className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group"
               >
                  <div className="aspect-[4/5] bg-slate-800 relative grayscale group-hover:grayscale-0 transition-all">
                     <img src={`https://images.unsplash.com/photo-${s.id}?q=80&w=800&auto=format&fit=crop`} alt={s.name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                     <div className="font-bold text-lg mb-1">{s.name}</div>
                     <div className="text-cyan-400/60 text-xs font-bold uppercase tracking-tighter">{s.role}</div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-32 px-6 bg-[#020617] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20">Reserve Your Spot</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { name: "Digital Pass", price: "$199", features: ["Live Streaming", "Virtual Networking", "Session Replays"] },
               { name: "General Admission", price: "$599", features: ["On-site Access", "Workshops", "Networking Lunch"] },
               { name: "VIP Experience", price: "$1299", features: ["Front Row Seating", "Private Lounge", "Speaker Dinner"] }
             ].map((tier, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.05 }}
                 className={`p-10 rounded-[2.5rem] border ${i === 1 ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}
               >
                  <div className="text-slate-400 font-bold uppercase text-xs mb-4">{tier.name}</div>
                  <div className="text-4xl font-black mb-8">{tier.price}</div>
                  <ul className="space-y-4 mb-10 flex-grow">
                     {tier.features.map((f, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {f}
                       </li>
                     ))}
                  </ul>
                  <button className={`w-full py-4 rounded-xl font-black uppercase text-sm tracking-widest ${i === 1 ? 'bg-cyan-500 text-black' : 'bg-white/10 hover:bg-white/20'}`}>
                     Get Ticket
                  </button>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 px-6 opacity-30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 md:gap-24 grayscale">
           {['TechCorp', 'InnoVentures', 'GlobalData', 'CloudScale', 'FutureSystems'].map((s, i) => (
             <span key={i} className="text-3xl font-black tracking-tighter">{s}</span>
           ))}
        </div>
      </section>

      <PreviewCTA theme="corporate" />
    </div>
  );
};

export default CorporateEvent;
