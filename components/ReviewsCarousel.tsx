
import React, { useRef, useState } from 'react';
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

const ReviewsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      setActive(Math.round(scrollLeft / itemWidth));
    }
  };

  return (
    <section id="opiniones" className="py-32 bg-brandTertiary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brandPrimary font-bold tracking-[0.3em] text-xs uppercase mb-4">Testimonios</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brandSecondary">Voces de <span className="text-brand-gradient">satisfacción.</span></h2>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar pb-12 cursor-grab active:cursor-grabbing"
        >
          {REVIEWS.map((review) => (
            <motion.div 
              key={review.id}
              whileHover={{ y: -5 }}
              className="min-w-[85%] md:min-w-[420px] bg-white p-10 rounded-[2.5rem] shadow-premium border border-white snap-center flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-brandPrimary text-brandPrimary" />
                  ))}
                </div>
                <p className="text-brandSecondary/80 italic text-lg leading-relaxed mb-10">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-5">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brandPrimary/20"
                  onError={(e) => (e.currentTarget.src = `https://i.pravatar.cc/100?u=${review.id}`)}
                />
                <div>
                  <h4 className="font-bold text-brandSecondary text-lg leading-none mb-1">{review.name}</h4>
                  <p className="text-xs text-brandPrimary font-bold uppercase tracking-widest">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {REVIEWS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => scrollRef.current?.scrollTo({ left: i * 420, behavior: 'smooth' })}
              className={`h-2 rounded-full transition-all duration-500 ${active === i ? 'w-10 bg-brandPrimary' : 'w-2 bg-brandPrimary/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
