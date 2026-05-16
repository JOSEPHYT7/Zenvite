import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { triggerFirecracker } from '../utils/firecracker';

// Using large styled emojis to mimic the requested graphic icons
const features = [
  {
    graphic: "💌",
    title: "Digital Invitation Websites",
    description: "Premium interactive invitation websites with animations and RSVP features."
  },
  {
    graphic: "🎬",
    title: "Celebration Reels & Videos",
    description: "Cinematic invitation reels and celebration videos for social media."
  },
  {
    graphic: "🎨",
    title: "Posters & Graphic Designs",
    description: "Custom digital posters, save the date graphics, and event banners."
  },
  {
    graphic: "📱",
    title: "Social Media Celebration Packs",
    description: "Complete set of stories, posts, and status designs for your event."
  },
  {
    graphic: "🖨️",
    title: "Printable Invitation Designs",
    description: "High-resolution digital designs ready for professional printing."
  },
  {
    graphic: "✨",
    title: "Event Branding",
    description: "Consistent visual identity and branding for your special celebration."
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 relative z-10 bg-holi-bg overflow-hidden font-playful">
      {/* Holi Color Splashes (Inspired by Image 2) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-holi-pink rounded-full blur-[150px] opacity-60 -translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-holi-yellow rounded-full blur-[150px] opacity-60 translate-x-1/3 translate-y-1/4 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-red-500 rounded-full blur-[150px] opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-lg"
          >
            Vibrant <span className="text-holi-yellow">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-green-50 max-w-2xl mx-auto text-lg font-bold drop-shadow-md"
          >
            Bring colors to your celebration. We create interactive digital invitation websites bursting with life and joy.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={triggerFirecracker}
              className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group shadow-2xl cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-gray-50 border-4 border-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md text-4xl">
                {feature.graphic}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
