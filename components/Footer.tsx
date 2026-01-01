
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandSecondary text-white pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brandPrimary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brandPrimary flex items-center justify-center rounded-lg shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" />
                </svg>
              </div>
              <span className="text-3xl font-heading font-extrabold tracking-tight">HÁBITAT NOVA</span>
            </div>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed">
              Redefiniendo el concepto de reforma integral en Barcelona. Diseño consciente, ejecución de precisión y transparencia absoluta.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-brandPrimary">Expertise</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#reformas" className="hover:text-brandPrimary transition-colors">Reformas Integrales</a></li>
              <li><a href="#proceso" className="hover:text-brandPrimary transition-colors">Nuestro Proceso</a></li>
              <li><a href="#calculator" className="hover:text-brandPrimary transition-colors">Calculadora Online</a></li>
              <li><a href="#contact" className="hover:text-brandPrimary transition-colors">Portafolio</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-brandPrimary">Legal</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><a href="#" className="hover:text-brandPrimary transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-brandPrimary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-brandPrimary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-brandPrimary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 mb-12">
          <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-[0.15em] text-justify">
            Los precios mostrados en esta página y en la calculadora son orientativos y a modo de ejemplo, basados en precios medios de mercado en Barcelona para proyectos de alta gama. Se entiende como estándar premium: Materiales de primera calidad, diseño arquitectónico personalizado y ejecución por especialistas certificados. El presupuesto final se ajustará tras la visita técnica y mediciones definitivas. Esta información no constituye una oferta contractual vinculante hasta su formalización por contrato.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Hábitat Nova. Excellence in Construction.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brandPrimary transition-all transform hover:scale-110">Instagram</a>
            <a href="#" className="hover:text-brandPrimary transition-all transform hover:scale-110">LinkedIn</a>
            <a href="#" className="hover:text-brandPrimary transition-all transform hover:scale-110">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
