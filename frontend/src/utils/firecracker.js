import confetti from 'canvas-confetti';

export const triggerFirecracker = (e) => {
  // If the event object has clientX/clientY, use them for origin. Otherwise default to center.
  const x = e && e.clientX ? e.clientX / window.innerWidth : 0.5;
  const y = e && e.clientY ? e.clientY / window.innerHeight : 0.5;
  
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { x, y },
    colors: ['#ff0000', '#fbbf24', '#d946ef', '#14b8a6'],
    disableForReducedMotion: true
  });
};
