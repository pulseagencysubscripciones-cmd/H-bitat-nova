
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../types';

const REVIEWS = [
  {
    id: 1,
    name: "María G.",
    city: "Barcelona",
    text: "Profesionales, claros y cumplidores. Transformaron mi piso en el Eixample por completo sin un solo dolor de cabeza.",
    rating: 5,
    image: ASSETS.clients[0]
  },
  {
    id: 2,
    name: "Jordi V.",
    city: "Gràcia",
    text: "Sin sorpresas en el precio final. Eso para mí fue lo más importante. Recomendados 100%.",
    rating: 5,
    image: ASSETS.clients[1]
  },
  {
    id: 3,
    name: "Elena S.",
    city: "Sants",
    text: "La cocina quedó espectacular. El equipo de diseño entendió mi estilo desde el primer minuto.",
    rating: 5,
    image: ASSETS.clients[2]
  },
  {
    id: 4,
    name: "Carles M.",
    city: "Sarrià",
    text: "Limpios, rápidos y muy detallistas. Cumplieron los plazos de entrega a la perfección.",
    rating: 5,
    image: ASSETS.clients[3]
  }
];

// Duplicamos la lista para crear el efecto de loop infinito sin saltos
const DUP_REVIEWS = [...REVIEWS, ...REVIEWS];

const TrustBadges = () => (
  <div className="flex items-center gap-4 pt-6 border-t border-brandSecondary/5 mt-auto">
    <div className="flex items-center gap-1.5">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3 w-auto opacity-70" />
      <div className="flex text-[8px] font-black text-brandSecondary/40 tracking-tighter">
        4.9/5 <Star size={8} className="fill-brandPrimary text-brandPrimary ml-0.5" />
      </div>
    </div>
    <div className="w-px h-3 bg-brandSecondary/10" />
    <div className="flex items-center gap-1.5">
      <svg className="w-3 h-3 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <span className="text-[8px] font-black text-brandSecondary/40 tracking-tighter uppercase">Trustpilot 5.0</span>
    </div>
  </div>
);

const ReviewsCarousel: React.FC = () => {
  return (
    <section id="opiniones" className="py-32 bg-brandTertiary/10 overflow-hidden relative">
      {/* Degrados laterales para suavizar el scroll */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brandDark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brandDark to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-brandPrimary font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Prueba Social</p>
        <h2 className="text-4xl lg:text-5xl font-heading font-black text-brandSecondary">
          Nuestra mejor obra <br /><span className="text-brand-gradient">es tu confianza.</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -100 * REVIEWS.length + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          whileHover={{ transition: { duration: 60 } }} // Ralentiza un poco al hover
          className="flex gap-8 whitespace-nowrap"
        >
          {DUP_REVIEWS.map((review, idx) => (
            <div 
              key={idx}
              className="w-[350px] md:w-[450px] bg-white p-10 rounded-[2.5rem] shadow-premium border border-white flex flex-col justify-between shrink-0 whitespace-normal"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-brandPrimary text-brandPrimary" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-brandPrimary/40 uppercase tracking-widest">Verificada</span>
                </div>
                <p className="text-brandSecondary/80 italic text-lg leading-relaxed mb-10">"{review.text}"</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-brandPrimary/20 p-0.5"
                    onError={(e) => (e.currentTarget.src = `https://i.pravatar.cc/100?u=${review.id}`)}
                  />
                  <div>
                    <h4 className="font-bold text-brandSecondary text-lg leading-none mb-1">{review.name}</h4>
                    <p className="text-xs text-brandPrimary font-bold uppercase tracking-widest">{review.city}</p>
                  </div>
                </div>
                
                <TrustBadges />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://google.com" 
          target="_blank" 
          rel="noopener"
          className="text-[10px] font-bold text-brandSecondary/40 uppercase tracking-[0.4em] hover:text-brandPrimary transition-colors"
        >
          Ver más de 150 reseñas en Google Maps
        </a>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
