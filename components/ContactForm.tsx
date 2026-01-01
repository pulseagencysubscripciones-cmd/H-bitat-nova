
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-brandDark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brandPrimary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-heading font-extrabold text-brandSecondary leading-tight"
            >
              Hablemos de <br />tu <span className="text-brand-gradient">proyecto.</span>
            </motion.h2>
            <p className="text-xl text-brandSecondary/70 leading-relaxed max-w-lg">
              Te contactaremos en menos de 24 horas para agendar una visita técnica sin compromiso. Sin spam, solo ingeniería.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-premium group-hover:bg-brandPrimary group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-brandSecondary/40 font-bold uppercase tracking-[0.2em] mb-1">Llamada Directa</p>
                <p className="text-xl font-heading font-bold text-brandSecondary">+34 930 000 000</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-premium group-hover:bg-brandPrimary group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-brandSecondary/40 font-bold uppercase tracking-[0.2em] mb-1">Showroom Barcelona</p>
                <p className="text-xl font-heading font-bold text-brandSecondary">Carrer de Balmes, 123</p>
              </div>
            </div>
          </div>

          {/* Trust Shield 2025 */}
          <div className="pt-10 border-t border-brandSecondary/5 grid grid-cols-2 gap-8">
            <div className="flex items-center gap-3 opacity-50">
              <ShieldCheck size={20} className="text-brandPrimary" />
              <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Garantía <br/>de Obra</span>
            </div>
            <div className="flex items-center gap-3 opacity-50">
              <Lock size={20} className="text-brandPrimary" />
              <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Seguridad <br/>RGPD 2025</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-premium border border-white relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brandSecondary/60 uppercase tracking-widest ml-1">Nombre</label>
                <input required type="text" placeholder="Tu nombre" className="w-full bg-brandDark/40 p-5 rounded-2xl border border-transparent focus:border-brandPrimary focus:bg-white transition-all outline-none text-brandSecondary font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brandSecondary/60 uppercase tracking-widest ml-1">Teléfono</label>
                <input required type="tel" placeholder="600 000 000" className="w-full bg-brandDark/40 p-5 rounded-2xl border border-transparent focus:border-brandPrimary focus:bg-white transition-all outline-none text-brandSecondary font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brandSecondary/60 uppercase tracking-widest ml-1">Tipo de Reforma</label>
              <select className="w-full bg-brandDark/40 p-5 rounded-2xl border border-transparent focus:border-brandPrimary focus:bg-white transition-all outline-none text-brandSecondary font-medium appearance-none">
                <option>Integral</option>
                <option>Cocina</option>
                <option>Baño</option>
                <option>Exterior / Terraza</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brandSecondary/60 uppercase tracking-widest ml-1">Mensaje (Opcional)</label>
              <textarea rows={3} placeholder="Cuéntanos brevemente..." className="w-full bg-brandDark/40 p-5 rounded-2xl border border-transparent focus:border-brandPrimary focus:bg-white transition-all outline-none text-brandSecondary font-medium resize-none"></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${sent ? 'bg-green-600 text-white' : 'bg-brandSecondary text-white hover:bg-brandPrimary hover:shadow-neon-gold'}`}
            >
              {sent ? (
                '¡Solicitud Recibida!'
              ) : (
                <>Enviar Solicitud <Send size={20} /></>
              )}
            </motion.button>
            <p className="text-center text-[10px] text-brandSecondary/30 font-bold uppercase tracking-widest">
              Al enviar, aceptas que analicemos tu solicitud para darte la mejor asesoría técnica.
            </p>
          </form>

          <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/5 rounded-full blur-[60px] -mr-16 -mt-16" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
