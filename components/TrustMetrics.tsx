
import React from 'react';
import { motion } from 'framer-motion';

const TrustMetrics: React.FC = () => {
  const metrics = [
    { value: "150+", label: "Viviendas Reformadas" },
    { value: "0€", label: "Desviación en Presupuestos" },
    { value: "100%", label: "Plazos Cumplidos" },
    { value: "12", label: "Años de Excelencia" }
  ];

  return (
    <section className="py-20 bg-brandDark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 glass-premium rounded-[2.5rem] border border-white hover:bg-white transition-all duration-500"
            >
              <p className="text-4xl lg:text-5xl font-heading font-black text-brandPrimary mb-2">{m.value}</p>
              <p className="text-[10px] font-bold text-brandSecondary/40 uppercase tracking-[0.3em]">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
