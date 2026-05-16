import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate, themeColor = 'white' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {items.map((item, idx) => (
        <motion.div 
          key={item.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="flex flex-col items-center"
        >
          <div 
            className="text-3xl md:text-5xl font-bold mb-2 transition-all duration-300"
            style={{ color: themeColor }}
          >
            {item.value < 10 ? `0${item.value}` : item.value}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-widest opacity-60 font-medium">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
