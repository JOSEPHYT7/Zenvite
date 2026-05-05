import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFireworksPreset } from "@tsparticles/preset-fireworks";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFireworksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    preset: "fireworks",
    background: {
      color: { value: "transparent" },
    },
    particles: {
      color: { value: ["#fbbf24", "#d946ef", "#14b8a6", "#f97316"] },
    }
  };

  if (init) {
    return <Particles id="tsparticles" options={options} className="absolute inset-0 z-50 pointer-events-none" />;
  }

  return null;
};

export default ParticlesBackground;
