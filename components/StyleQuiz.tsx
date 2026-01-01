
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const STYLES = [
  {
    id: 'minimalist',
    title: 'Minimalista Orgánico',
    img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=400',
    desc: 'Líneas limpias, materiales naturales y mucha luz.'
  },
  {
    id: 'industrial',
    title: 'Industrial Moderno',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400',
    desc: 'Texturas crudas, espacios abiertos y techos altos.'
  },
  {
    id: 'classic',
    title: 'Clásico Contemporáneo',
    img: 'https://images.unsplash.com/photo-1513519247388-4e28265dd2be?auto=format&fit=crop&q=80&w=400',
    desc: 'Elegancia atemporal con toques de diseño moderno.'
  }
];

const StyleQuiz: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-brandSecondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <span className="text-brandPrimary font-bold text-xs uppercase tracking-[0.4em]">Personalización</span>
              <h2 className="text-4xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
                ¿Cuál es el <span className="text-brandPrimary italic">ADN</span> de tu hogar?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Selecciona la estética que más resuena contigo. Nuestro equipo adaptará cada detalle técnico a tu visión personal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-brandPrimary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-brandPrimary" size={20} />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Análisis de viabilidad</p>
                  <p className="text-white/40 text-sm">Validamos si el estilo encaja con la estructura de tu vivienda actual.</p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#contact"
                className="inline-flex items-center gap-4 bg-brandPrimary text-white px-8 py-5 rounded-2xl font-bold shadow-neon-gold"
              >
                Solicitar Consultoría de Estilo <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6 w-full max-w-md">
            {STYLES.map((style) => (
              <motion.button
                key={style.id}
                onClick={() => setSelected(style.id)}
                whileHover={{ x: 10 }}
                className={`relative group h-32 rounded-3xl overflow-hidden border-2 transition-all duration-300 ${selected === style.id ? 'border-brandPrimary ring-4 ring-brandPrimary/20' : 'border-white/10 hover:border-white/30'}`}
              >
                <img src={style.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" alt={style.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-brandSecondary via-transparent to-transparent" />
                <div className="relative h-full flex items-center px-10">
                  <div className="text-left">
                    <h3 className="text-white font-heading font-bold text-xl mb-1">{style.title}</h3>
                    <p className="text-white/50 text-xs font-medium">{style.desc}</p>
                  </div>
                  {selected === style.id && (
                    <motion.div layoutId="check" className="ml-auto bg-brandPrimary p-2 rounded-full text-white shadow-lg">
                      <CheckCircle2 size={16} />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;
