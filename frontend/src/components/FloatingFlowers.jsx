import { motion } from 'framer-motion';

const FloatingFlowers = () => {
  const flowers = [
    { emoji: '🌸', top: '10%', left: '5%', delay: 0, size: 'text-5xl' },
    { emoji: '🌺', top: '25%', left: '85%', delay: 1, size: 'text-6xl' },
    { emoji: '🌼', top: '65%', left: '10%', delay: 2, size: 'text-4xl' },
    { emoji: '🌸', top: '80%', left: '80%', delay: 1.5, size: 'text-5xl' },
    { emoji: '🌺', top: '40%', left: '90%', delay: 0.5, size: 'text-4xl' },
    { emoji: '🌼', top: '15%', left: '70%', delay: 2.5, size: 'text-3xl' },
    { emoji: '🌸', top: '50%', left: '15%', delay: 3, size: 'text-6xl' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {flowers.map((flower, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, rotate: 0 }}
          animate={{ 
            y: [0, -20, 0, 20, 0],
            rotate: [0, 10, -10, 5, 0] 
          }}
          transition={{ 
            duration: 8 + Math.random() * 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: flower.delay
          }}
          className={`absolute ${flower.size} drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] opacity-80`}
          style={{ top: flower.top, left: flower.left }}
        >
          {flower.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
