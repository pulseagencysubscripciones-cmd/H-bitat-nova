
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brandPrimary flex items-center justify-center rounded-sm shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" />
              <rect x="10" y="13" width="4" height="4" fill="white" fillOpacity="0.3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold leading-none tracking-tight">HÁBITAT NOVA</span>
            <span className="text-[10px] tracking-[0.2em] text-brandPrimary font-medium">REFORMAS BARCELONA</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-brandSecondary/70 hover:text-brandPrimary transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="relative overflow-hidden bg-brandSecondary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-black/5 group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              Solicitar presupuesto <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-brandDark z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24`}>
        <nav className="flex flex-col items-center gap-8 p-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-2xl font-heading font-bold text-brandSecondary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="w-full text-center bg-brandPrimary text-white py-4 rounded-xl text-lg font-bold shadow-xl"
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
