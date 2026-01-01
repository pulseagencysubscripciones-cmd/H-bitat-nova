
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, PencilRuler, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../types';

const BentoFeatures: React.FC = () => {
  const features = [
    {
      title: "Reformas Integrales",
      desc: "Transformación total de viviendas con visión arquitectónica.",
      icon: Home,
      size: "md:col-span-2 md:row-span-2",
      bg: "bg-white",
      img: ASSETS.bento.integral
    },
    {
      title: "Interiorismo",
      desc: "Diseño emocional y funcional.",
      icon: PencilRuler,
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-brandPrimary/10"
    },
    {
      title: "Garantía Decenal",
      desc: "Seguridad y compromiso a largo plazo.",
      icon: ShieldCheck,
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-brandSecondary text-white"
    },
    {
      title: "Acabados de Lujo",
      desc: "Detalles que marcan la diferencia.",
      icon: Sparkles,
      size: "md:col-span-2 md:row-span-1",
      bg: "bg-brandTertiary/30",
      img: ASSETS.bento.luxury
    }
  ];

  return (
    <section className="py-24 px-6 bg-brandDark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brandSecondary mb-4">Especialistas en <span className="text-brand-gradient">lo extraordinario.</span></h2>
          <p className="text-brandSecondary/60 max-w-xl mx-auto">Combinamos técnica constructiva con sensibilidad estética.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-6 auto-rows-[240px]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`relative rounded-[2.5rem] p-8 overflow-hidden group border border-white/50 shadow-sm transition-all duration-500 hover:shadow-premium ${f.size} ${f.bg}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${f.bg === 'bg-brandSecondary text-white' ? 'bg-white/10' : 'bg-brandSecondary/5'}`}>
                    <f.icon size={24} className={f.bg === 'bg-brandSecondary text-white' ? 'text-white' : 'text-brandPrimary'} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{f.title}</h3>
                  <p className={`text-sm leading-relaxed ${f.bg === 'bg-brandSecondary text-white' ? 'text-white/70' : 'text-brandSecondary/60'}`}>{f.desc}</p>
                </div>
              </div>
              
              {f.img && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
