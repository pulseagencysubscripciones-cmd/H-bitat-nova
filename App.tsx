
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReviewsCarousel from './components/ReviewsCarousel';
import BeforeAfter from './components/BeforeAfter';
import Calculator from './components/Calculator';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import BentoFeatures from './components/BentoFeatures';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import StyleQuiz from './components/StyleQuiz';
import TrustMetrics from './components/TrustMetrics';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brandPrimary selection:text-white">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <BentoFeatures />
        <BeforeAfter />
        <StyleQuiz />
        <ReviewsCarousel />
        <div id="calculator">
          <Calculator />
        </div>
        <div id="proceso">
          <Process />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
