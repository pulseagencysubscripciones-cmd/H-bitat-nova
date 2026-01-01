
import React, { useState, useMemo, useEffect } from 'react';
import { Ruler, Bath, ChefHat, Info, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CalcMode = 'integral' | 'baño' | 'cocina';

const Calculator: React.FC = () => {
  const [mode, setMode] = useState<CalcMode>('integral');
  const [m2, setM2] = useState<number>(80);
  const [quality, setQuality] = useState<'básica' | 'estándar' | 'premium'>('estándar');
  const [displayMin, setDisplayMin] = useState(0);
  const [displayMax, setDisplayMax] = useState(0);

  const result = useMemo(() => {
    if (mode === 'integral') {
      const rates = { básica: [600, 800], estándar: [900, 1200], premium: [1300, 1800] };
      const [min, max] = rates[quality];
      return { min: m2 * min, max: m2 * max };
    }
    // Simplificación para otros modos en este ejemplo
    return { min: 5000, max: 8000 };
  }, [mode, m2, quality]);

  useEffect(() => {
    let startMin = displayMin;
    let startMax = displayMax;
    const endMin = result.min;
    const endMax = result.max;
    const duration = 500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentMin = Math.floor(startMin + (endMin - startMin) * progress);
      const currentMax = Math.floor(startMax + (endMax - startMax) * progress);
      
      setDisplayMin(currentMin);
      setDisplayMax(currentMax);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [result]);

  const formatPrice = (p: number) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p);

  return (
    <section className="py-32 px-6 relative bg-brandDark">
      <div className="max-w-6xl mx-auto glass-premium p-8 lg:p-16 rounded-[3.5rem] shadow-premium relative z-10 border border-white">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-brandSecondary mb-6"
          >
            Presupuesto <span className="text-brand-gradient">Instantáneo.</span>
          </motion.h2>
          <p className="text-brandSecondary/60 max-w-lg mx-auto text-lg">Sin llamadas comerciales. Obtén una estimación realista en segundos.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-12">
            <div className="flex bg-brandDark/80 p-1.5 rounded-2xl shadow-inner border border-brandSecondary/5 max-w-sm">
              {['integral', 'baño', 'cocina'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMode(tab as CalcMode)}
                  className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-widest ${mode === tab ? 'bg-brandPrimary text-white shadow-lg' : 'text-brandSecondary/40'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold text-brandSecondary uppercase tracking-[0.2em]">Superficie total</label>
                  <span className="text-3xl font-heading font-bold text-brandPrimary">{m2} m²</span>
                </div>
                <input 
                  type="range" min="30" max="250" step="1" value={m2} 
                  onChange={(e) => setM2(Number(e.target.value))}
                  className="w-full h-1.5 bg-brandSecondary/10 rounded-lg appearance-none cursor-pointer accent-brandPrimary"
                />
              </div>

              <div className="space-y-6">
                <label className="text-xs font-bold text-brandSecondary uppercase tracking-[0.2em]">Nivel de Acabados</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['básica', 'estándar', 'premium'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q as any)}
                      className={`p-6 rounded-3xl border text-center transition-all ${quality === q ? 'bg-brandPrimary text-white border-brandPrimary shadow-xl' : 'bg-white border-brandSecondary/5 hover:border-brandPrimary/30'}`}
                    >
                      <p className="font-bold capitalize mb-1">{q}</p>
                      <p className={`text-[10px] uppercase tracking-tighter ${quality === q ? 'text-white/70' : 'text-brandSecondary/40'}`}>
                        {q === 'premium' ? 'De Autor' : 'Gama Alta'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div 
              layout
              className="bg-brandSecondary h-full p-10 lg:p-12 rounded-[3rem] text-white flex flex-col justify-between items-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brandPrimary/20 rounded-full blur-[60px]" />
              
              <div className="w-full text-center space-y-2">
                <p className="text-brandPrimary font-bold text-xs uppercase tracking-[0.4em] mb-8">Inversión Estimada</p>
                <div className="space-y-4">
                   <div className="text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
                      {formatPrice(displayMin)}
                   </div>
                   <div className="text-brandSecondary/40 text-xl font-bold">hasta</div>
                   <div className="text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white/40">
                      {formatPrice(displayMax)}
                   </div>
                </div>
              </div>
              
              <motion.a 
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="w-full mt-12 bg-brandPrimary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-neon-gold"
              >
                Cerrar Presupuesto <ArrowRight size={20} />
              </motion.a>
              
              <p className="mt-8 text-[10px] text-white/30 uppercase tracking-widest text-center">Basado en costes reales 2025</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
