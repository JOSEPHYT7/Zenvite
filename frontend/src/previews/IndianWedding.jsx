import { motion } from 'framer-motion';
import PreviewNavbar from './components/PreviewNavbar';
import PreviewCTA from './components/PreviewCTA';
import Countdown from './components/Countdown';
import heroImg from '../assets/indian-wedding.png';

const IndianWedding = () => {
  return (
    <div className="bg-[#5c0000] text-[#fff5e1] font-serif overflow-x-hidden">
      <PreviewNavbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5 }}
          className="absolute inset-0 z-0 opacity-50"
        >
          <img src={heroImg} alt="Indian Wedding" className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Mandap-style Overlay */}
        <div className="absolute inset-0 border-[20px] md:border-[40px] border-maroon-900/40 pointer-events-none z-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#5c0000] z-1" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-[#FFD700] rounded-full mx-auto flex items-center justify-center p-4 bg-[#5c0000]/80">
              <span className="text-4xl md:text-5xl font-bold text-[#FFD700]">ॐ</span>
            </div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#FFD700] uppercase tracking-[0.5em] text-sm mb-4"
          >
            शुभ विवाह
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 drop-shadow-2xl font-serif"
          >
            Arjun & Meera
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl md:text-3xl font-medium tracking-wide uppercase"
          >
            January 12th - 14th, 2027 • Rajasthan, India
          </motion.p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-32 px-6 bg-[#5c0000] relative">
        {/* Traditional Border Decoration */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-20 rotate-180" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FFD700] uppercase tracking-[0.4em] text-sm mb-12"
          >
            Days until the Royal Celebration
          </motion.h2>
          <Countdown targetDate="2027-01-12T10:00:00" themeColor="#FFD700" />
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-32 px-6 bg-[#4a0000] relative border-y border-yellow-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold text-[#FFD700] mb-4">Program of Events</h2>
            <div className="w-16 h-1 bg-[#FFD700] mx-auto opacity-30" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
             {/* Timeline Line */}
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-[1px] bg-yellow-500/20 z-0" />
            
            {[
              { day: 'Day 01', date: 'Jan 12th', title: 'Mehendi & Sangeet', time: '6:00 PM', desc: 'A night of music, dance, and traditional henna under the stars.' },
              { day: 'Day 02', date: 'Jan 13th', title: 'The Wedding Ceremony', time: '10:00 AM', desc: 'The sacred union of two families at the heritage palace courtyard.' },
              { day: 'Day 03', date: 'Jan 14th', title: 'The Grand Reception', time: '8:00 PM', desc: 'A royal banquet followed by a night of grand celebrations.' }
            ].map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-[#5c0000]/40 border border-yellow-500/20 p-10 text-center relative z-10 backdrop-blur-sm rounded-2xl group hover:border-[#FFD700]/50 transition-all"
              >
                <div className="text-[#FFD700] font-bold text-lg mb-2">{event.day}</div>
                <div className="text-yellow-500/50 text-xs tracking-widest uppercase mb-6">{event.date}</div>
                <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                <div className="text-sm font-medium mb-6 bg-yellow-500/10 inline-block px-4 py-1 rounded-full">{event.time}</div>
                <p className="text-sm leading-relaxed opacity-70 font-sans">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-32 px-6 bg-[#4a0000]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[#FFD700] text-5xl md:text-7xl font-bold mb-20 drop-shadow-lg">The Gharana</h2>
          <div className="grid md:grid-cols-2 gap-16">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="p-10 border-2 border-yellow-500/20 rounded-[3rem] bg-[#5c0000]/20"
             >
                <div className="text-yellow-500/50 uppercase tracking-widest text-xs mb-4">Groom's Side</div>
                <h3 className="text-3xl font-bold mb-6 text-[#FFD700]">The Vardhan Family</h3>
                <p className="text-sm leading-relaxed opacity-70 italic font-sans">
                  "Blessings from Late Shri. Ram Vardhan & Smt. Savitri Vardhan. With great joy, we invite you to the wedding of our son."
                </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="p-10 border-2 border-yellow-500/20 rounded-[3rem] bg-[#5c0000]/20"
             >
                <div className="text-yellow-500/50 uppercase tracking-widest text-xs mb-4">Bride's Side</div>
                <h3 className="text-3xl font-bold mb-6 text-[#FFD700]">The Sharma Family</h3>
                <p className="text-sm leading-relaxed opacity-70 italic font-sans">
                  "Blessings from Shri. Vishnu Sharma & Smt. Laxmi Sharma. Proudly announcing the wedding of our daughter."
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section className="py-32 px-6 bg-[#5c0000]">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2">
                 <h2 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-8">Sacred Rituals</h2>
                 <div className="space-y-8">
                    {[
                      { title: "Ganesh Vandana", desc: "Invoking the blessings of Lord Ganesha for a hurdle-free journey." },
                      { title: "Haldi Ceremony", desc: "A playful morning of applying turmeric paste for a natural glow." },
                      { title: "Pheras", desc: "The seven sacred rounds around the holy fire, binding us forever." }
                    ].map((v, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-8 h-8 rounded-full bg-[#FFD700] flex-shrink-0 flex items-center justify-center text-[#5c0000] font-bold">{i+1}</div>
                         <div>
                            <h4 className="text-xl font-bold mb-1">{v.title}</h4>
                            <p className="text-sm opacity-60 font-sans">{v.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="md:w-1/2 aspect-square rounded-[3rem] overflow-hidden border-8 border-yellow-500/10 rotate-3">
                 <img src={heroImg} alt="Rituals" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 bg-[#4a0000]">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-[#FFD700] text-4xl font-bold mb-16 uppercase tracking-[0.2em]">Memories in Frame</h2>
           <div className="columns-2 md:columns-4 gap-4 space-y-4">
              {[
                "1583939003579-730e3918a45a",
                "1519741497674-611481863552",
                "1511795409834-ef04bbd61622",
                "1515934751635-c81c6bc9a2d8",
                "1544006659-f0b21884cb1d",
                "1519225421980-715cb0215aed",
                "1529636760656-e09199b0fb5e",
                "1604335399105-a0c585fd81a1"
              ].map((id, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden border-2 border-yellow-500/10"
                >
                   <img src={`https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`} alt="Memory" className="w-full h-full object-cover" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto bg-[#fff5e1] text-[#5c0000] rounded-[3rem] p-12 md:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.5)] border-4 border-[#FFD700]/30 relative overflow-hidden">
          {/* Floral Decorative Corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-[#FFD700]/20 rounded-tr-[3rem]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-[#FFD700]/20 rounded-bl-[3rem]" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter italic">RSVP</h2>
            <p className="mb-12 font-medium opacity-70">We seek your presence on our auspicious day</p>
            
            <form className="space-y-8 max-w-md mx-auto">
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b-2 border-maroon-900/20 py-4 px-2 focus:border-maroon-900 outline-none transition-all text-center placeholder:text-maroon-900/30 font-bold" />
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b-2 border-maroon-900/20 py-4 px-2 focus:border-maroon-900 outline-none transition-all text-center placeholder:text-maroon-900/30 font-bold" />
              </div>
              
              <div className="flex flex-col gap-6 py-6 items-center">
                 <p className="text-sm uppercase tracking-widest font-bold">Will you be joining us?</p>
                 <div className="flex gap-10">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="attending" className="hidden" />
                      <div className="w-6 h-6 border-2 border-maroon-900 rounded-md flex items-center justify-center group-hover:bg-maroon-900/10 transition-all">
                        <div className="w-3 h-3 bg-maroon-900 opacity-0 transition-opacity" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest">Definitely!</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="attending" className="hidden" />
                      <div className="w-6 h-6 border-2 border-maroon-900 rounded-md flex items-center justify-center group-hover:bg-maroon-900/10 transition-all">
                        <div className="w-3 h-3 bg-maroon-900 opacity-0 transition-opacity" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest">Can't make it</span>
                    </label>
                 </div>
              </div>
              
              <button className="w-full py-5 bg-[#5c0000] text-[#FFD700] font-bold text-xl rounded-xl shadow-xl hover:bg-[#7a0000] transition-all transform hover:-translate-y-1">
                Confirm Attendance
              </button>
            </form>
          </div>
        </div>
      </section>

      <PreviewCTA theme="indian" />
    </div>
  );
};

export default IndianWedding;
