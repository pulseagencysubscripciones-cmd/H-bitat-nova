
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Reformas', href: '#reformas' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Calculadora', href: '#calculator' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-premium border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo de Marca Real */}
        <div className="flex items-center gap-3">
          <img 
            src={ASSETS.logo} 
            alt="Hábitat Nova Logo" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback en caso de que la imagen no cargue
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('flex-col');
            }}
          />
          <div className="flex flex-col border-l border-brandSecondary/10 pl-3">
            <span className="text-lg font-heading font-black leading-none tracking-tight text-brandSecondary">HÁBITAT NOVA</span>
            <span className="text-[9px] tracking-[0.3em] text-brandPrimary font-bold uppercase">Barcelona Excellence</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-xs font-bold uppercase tracking-widest text-brandSecondary/60 hover:text-brandPrimary transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="relative overflow-hidden bg-brandSecondary text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Presupuesto gratis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-brandPrimary translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"></div>
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brandSecondary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-brandDark z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24`}>
        <nav className="flex flex-col items-center gap-8 p-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-3xl font-heading font-black text-brandSecondary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="w-full text-center bg-brandPrimary text-white py-5 rounded-2xl text-lg font-bold shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Solicitar presupuesto
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
