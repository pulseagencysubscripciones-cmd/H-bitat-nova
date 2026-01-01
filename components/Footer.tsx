
import React from 'react';
import { ASSETS } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandSecondary text-white pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brandPrimary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src={ASSETS.logo} 
                alt="Hábitat Nova" 
                className="h-16 w-auto brightness-0 invert"
              />
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="text-2xl font-heading font-black tracking-tight">HÁBITAT NOVA</span>
                <span className="text-[10px] tracking-[0.4em] text-brandPrimary font-bold uppercase">Construyendo Sueños</span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed font-medium">
              Redefiniendo el concepto de reforma integral en Barcelona. Diseño consciente, ejecución de precisión y transparencia absoluta.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brandPrimary">Expertise</h4>
            <ul className="space-y-4 text-white/50 font-bold text-sm">
              <li><a href="#reformas" className="hover:text-brandPrimary transition-colors">Reformas Integrales</a></li>
              <li><a href="#proceso" className="hover:text-brandPrimary transition-colors">Nuestro Proceso</a></li>
              <li><a href="#calculator" className="hover:text-brandPrimary transition-colors">Calculadora Online</a></li>
              <li><a href="#contact" className="hover:text-brandPrimary transition-colors">Portafolio</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brandPrimary">Contacto</h4>
            <ul className="space-y-4 text-white/50 font-bold text-sm">
              <li>Carrer de Balmes, 123</li>
              <li>Barcelona, 08006</li>
              <li>+34 930 000 000</li>
              <li>hola@habitatnova.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 mb-12">
          <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-[0.15em] text-justify font-bold">
            Los precios mostrados en esta página y en la calculadora son orientativos y a modo de ejemplo, basados en precios medios de mercado en Barcelona para proyectos de alta gama. Se entiende como estándar premium: Materiales de primera calidad, diseño arquitectónico personalizado y ejecución por especialistas certificados. El presupuesto final se ajustará tras la visita técnica y mediciones definitivas. Esta información no constituye una oferta contractual vinculante hasta su formalización por contrato.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-white/40 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Hábitat Nova. Excellence in Construction.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brandPrimary transition-all transform hover:scale-110">Instagram</a>
            <a href="#" className="hover:text-brandPrimary transition-all transform hover:scale-110">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
