
import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../types';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-32 px-6 bg-brandDark">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-brandPrimary font-bold tracking-[0.3em] text-xs uppercase mb-4">Transformación</p>
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brandSecondary mb-6">Tu hogar, como siempre <br/><span className="text-brand-gradient">lo soñaste.</span></h2>
        <p className="text-brandSecondary/70 max-w-2xl mx-auto text-lg leading-relaxed">Compara el potencial de los espacios de Barcelona cuando se aplica un diseño pensado para el confort y la estética moderna.</p>
      </div>

      <div 
        className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden shadow-premium cursor-ew-resize select-none border-4 border-white"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
      >
        {/* After Image */}
        <div className="absolute inset-0">
          <img src={ASSETS.compare.after} alt="Después" className="w-full h-full object-cover" />
          <div className="absolute top-6 right-6 glass-premium px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-brandSecondary">Después</div>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={ASSETS.compare.before} alt="Antes" className="w-full h-full object-cover grayscale" />
          <div className="absolute top-6 left-6 bg-brandSecondary/80 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-white">Antes</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-brandPrimary rounded-full flex items-center justify-center shadow-2xl text-white cursor-pointer"
          >
            <ArrowLeftRight size={20} />
          </motion.div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-brandSecondary/40 font-bold uppercase tracking-widest italic">Desliza para ver la transformación</p>
    </section>
  );
};

export default BeforeAfter;
