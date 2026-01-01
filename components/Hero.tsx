
import React from 'react';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../types';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 150]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <section id="reformas" className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 overflow-hidden bg-brandDark">
      {/* Decorative Blur Spheres */}
      <motion.div 
        style={{ y: bgY, scale: bgScale }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="inline-block px-4 py-1.5 bg-brandPrimary/15 text-brandPrimary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                  Exclusividad en Barcelona
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">Cupos Marzo Abiertos</span>
                </div>
              </motion.div>
              
              <h1 className="text-6xl lg:text-[5.5rem] font-heading font-extrabold text-brandSecondary leading-[0.95] tracking-tight">
                Reformas <br />
                <span className="text-brand-gradient">Sin Sorpresas.</span>
              </h1>
              
              <p className="text-xl text-brandSecondary/60 max-w-xl leading-relaxed font-medium">
                Arquitectura emocional aplicada a la reforma integral. Presupuestos cerrados, plazos garantizados y una ejecución que redefine el lujo en Barcelona.
              </p>
            </div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Presupuesto cerrado 100%",
                "Arquitecto dedicado",
                "Garantía de 10 años",
                "Limpieza final incluida"
              ].map((bullet, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-brandSecondary/80 text-sm font-bold"
                >
                  <CheckCircle2 className="text-brandPrimary shrink-0" size={18} />
                  {bullet}
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#calculator" 
                className="relative overflow-hidden px-10 py-5 bg-brandSecondary text-white text-center font-bold rounded-2xl shadow-2xl group transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Calcular Presupuesto <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-brandPrimary translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"></div>
              </motion.a>
              
              <motion.a 
                whileHover={{ backgroundColor: "rgba(255,255,255,1)", y: -2 }}
                href="#contact" 
                className="px-10 py-5 glass-premium text-brandSecondary text-center font-bold rounded-2xl border-2 border-brandPrimary/30 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-brandPrimary/10 flex items-center justify-center">
                  <Play size={14} className="text-brandPrimary ml-0.5" />
                </div>
                Ver Proyectos
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] animate-float border-[12px] border-white/80">
              <img 
                src={ASSETS.hero} 
                alt="Interiorismo Lujo Barcelona" 
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-[3s]"
                onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandSecondary/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="glass-premium p-4 rounded-2xl border border-white/40">
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Último Proyecto</p>
                  <p className="text-white text-lg font-heading font-extrabold">Ático en Sarrià</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
