import { motion } from 'framer-motion';
import FloatingFlowers from './FloatingFlowers';

const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding",
    text: "Zenvite made our wedding invitations so easy to share! Our guests loved the elegant animations and the seamless RSVP process.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Sarah Jenkins",
    event: "Birthday Bash",
    text: "The colorful theme matched my neon birthday perfectly. It was a massive hit among my friends!",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "TechNova Inc.",
    event: "Corporate Event",
    text: "Highly professional and lightning fast. The custom RSVP tracking saved us hours of administrative work.",
    rating: "⭐⭐⭐⭐⭐"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative z-10 font-sans overflow-hidden">
      <FloatingFlowers />
      
      {/* Holi Color Blobs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-holi-pink/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-gray-900"
          >
            Client <span className="text-red-700 font-serif italic">Love</span>
          </motion.h2>
          <p className="text-gray-600 font-medium text-lg max-w-xl mx-auto">
            Don't just take our word for it. See what our happy clients have to say about their digital invitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl mb-4">{test.rating}</div>
              <p className="text-gray-700 font-medium italic mb-6 leading-relaxed">
                "{test.text}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{test.name}</h4>
                <p className="text-red-700 text-sm font-semibold">{test.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
