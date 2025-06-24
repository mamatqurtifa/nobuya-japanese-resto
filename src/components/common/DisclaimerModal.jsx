import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoInformationCircleOutline } from 'react-icons/io5';

const DisclaimerModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has seen the disclaimer before
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    // Only show the modal if this is the first visit
    if (!hasSeenDisclaimer) {
      // Add a small delay before showing the modal
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    // Mark that the user has seen the disclaimer
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ink-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="bg-pure-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-warm-gold px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <IoInformationCircleOutline className="text-2xl" />
                  <h3 className="font-heading text-xl">Disclaimer</h3>
                </div>
                <button 
                  onClick={handleClose} 
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="Close disclaimer"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-6">
                <div className="mb-4 text-gray-800">
                  <p className="mb-3">
                    <strong>This website is a fictional project.</strong> Nobuya Resto is not a real business and is created solely for portfolio and educational purposes.
                  </p>
                  <p>
                    Any resemblance to actual restaurants or businesses is coincidental. The designs, content, and functionalities presented are meant to showcase web development skills.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-blue-700 text-sm">
                  <p>
                    <span className="font-medium">Note:</span> No actual reservations can be made, and no real services are offered through this platform.
                  </p>
                </div>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 flex justify-end border-t border-gray-100">
                <button
                  onClick={handleClose}
                  className="bg-warm-gold hover:bg-warm-gold/90 text-white py-2 px-6 rounded-md transition-colors flex items-center gap-1"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;