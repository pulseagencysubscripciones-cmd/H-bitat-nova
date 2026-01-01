
import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/34930000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group"
    >
      <div className="hidden group-hover:block bg-white text-brandSecondary px-4 py-2 rounded-xl text-sm font-bold shadow-lg whitespace-nowrap">
        ¡Hablemos por WhatsApp!
      </div>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.797 0-.855.448-1.274.607-1.447.159-.174.347-.217.462-.217h.332c.101 0 .232-.01.362.299.144.348.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.1.173.444.733.953 1.185.656.584 1.21.765 1.382.852.174.087.275.072.376-.045.101-.116.434-.506.549-.68.116-.174.231-.144.39-.087s1.011.477 1.184.564c.174.087.289.13.332.202.043.072.043.405-.101.81z"/>
      </svg>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
};

export default WhatsAppButton;
