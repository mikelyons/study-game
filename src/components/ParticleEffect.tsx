import { useEffect } from 'react';
import './ParticleEffect.css';

interface ParticleEffectProps {
  x: number;
  y: number;
}

const ParticleEffect = ({ x, y }: ParticleEffectProps) => {
  useEffect(() => {
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const angle = Math.random() * 2 * Math.PI;
      const velocity = Math.random() * 5 + 2;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;

      particle.style.setProperty('--vx', vx.toString());
      particle.style.setProperty('--vy', vy.toString());

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    for (let i = 0; i < 20; i++) {
      createParticle(x, y);
    }
  }, [x, y]);

  return null;
};

export default ParticleEffect; 