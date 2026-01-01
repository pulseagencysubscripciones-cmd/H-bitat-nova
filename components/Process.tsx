
import React from 'react';
import { MessageSquare, FileCheck, HardHat, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultoría de Diseño",
      desc: "Análisis exhaustivo del espacio y tus deseos. Creamos un concepto visual único antes de mover un solo ladrillo."
    },
    {
      icon: FileCheck,
      title: "Planificación Blindada",
      desc: "Calendario de obra y presupuesto vinculante. Lo que firmamos es lo que pagas, sin desviaciones del 1%."
    },
    {
      icon: HardHat,
      title: "Ejecución de Alta Gama",
      desc: "Artesanos y técnicos especializados bajo una dirección de obra rigurosa. Calidad en cada detalle oculto."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="proceso" className="py-32 px-6 bg-brandDark">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <p className="text-brandPrimary font-bold tracking-[0.3em] text-xs uppercase mb-4">Metodología Hábitat</p>
            <h2 className="text-5xl font-heading font-bold text-brandSecondary">El camino hacia la <br/><span className="text-brand-gradient">perfección.</span></h2>
          </div>
          <p className="text-brandSecondary/60 max-w-xs pb-2">Un proceso diseñado para eliminar el estrés y garantizar resultados excepcionales.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0 20px 50px rgba(26, 26, 26, 0.08)", // Versión refinada de shadow-premium
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(197, 160, 89, 0.2)",
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } // Easing premium
              }}
              className="group bg-white/60 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white relative cursor-pointer transition-all duration-500"
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-brandPrimary text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold shadow-xl border-8 border-brandDark group-hover:scale-110 group-hover:bg-brandSecondary transition-all duration-300">
                0{i + 1}
              </div>
              
              <div className="w-16 h-16 bg-brandPrimary/10 text-brandPrimary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brandPrimary group-hover:text-white transition-all duration-300">
                <step.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-brandSecondary mb-4 group-hover:text-brandPrimary transition-colors">{step.title}</h3>
              <p className="text-brandSecondary/70 leading-relaxed mb-6">{step.desc}</p>
              
              <div className="flex items-center gap-2 text-brandPrimary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <Check size={16} /> Ver más detalles
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
