import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoClose, 
  IoInformationCircleOutline, 
  IoCheckmarkCircleOutline, 
  IoWarningOutline,
  IoRestaurantOutline,
  IoCodeSlash,
  IoGlobeOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoLogoReact,
  IoHeartOutline,
  IoMailOutline,
  IoArrowForward,
  IoChevronForward,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5';

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, delay: 0.1 }
  }
};

const modalVariants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    y: 20
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 30, 
      delay: 0.15
    }
  },
  exit: { 
    scale: 0.9, 
    opacity: 0,
    y: 10,
    transition: { duration: 0.2 }
  }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

// Tab options
const tabs = [
  { id: 'disclaimer', label: 'Disclaimer', icon: <IoInformationCircleOutline /> },
  { id: 'about', label: 'About', icon: <IoCodeSlash /> },
  { id: 'contact', label: 'Contact', icon: <IoMailOutline /> }
];

/**
 * DisclaimerModal Component
 * 
 * A modal that appears on the first visit to the website to inform users
 * that this is a fictional project for portfolio and educational purposes.
 */
const DisclaimerModal = () => {
  // State management
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('disclaimer');
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const modalRef = useRef(null);
  const focusRef = useRef(null);
  
  // Current time for footer display
  const currentDateTime = "2025-06-24 05:25:20";
  
  // Check if user has seen the disclaimer before
  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    // Only show the modal if this is the first visit
    if (!hasSeenDisclaimer) {
      // Add a small delay before showing the modal
      const timer = setTimeout(() => {
        setIsVisible(true);
        
        // Set focus when modal opens
        if (focusRef.current) {
          focusRef.current.focus();
        }
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && animationComplete && hasInteracted) {
        handleClose();
      }
    };
    
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, animationComplete, hasInteracted]);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isVisible) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVisible]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  // Handle user interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInteracted(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  /**
   * Closes the modal and sets localStorage to prevent showing on future visits
   */
  const handleClose = () => {
    // Mark that the user has seen the disclaimer
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };
  
  /**
   * Changes the active tab
   * @param {string} tabId - The ID of the tab to activate
   */
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  
  /**
   * Renders the content based on active tab
   * @returns {JSX.Element} The content for the active tab
   */
  const renderTabContent = () => {
    switch (activeTab) {
      case 'disclaimer':
        return (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key="disclaimer-content"
            className="space-y-4"
          >
            <motion.div variants={itemVariants} className="mb-4 text-gray-800">
              <h4 className="font-heading text-xl mb-3 flex items-center">
                <span className="text-warm-gold mr-2">
                  <IoWarningOutline />
                </span> 
                Fictional Project Notice
              </h4>
              <p className="mb-3">
                <strong>This website is a fictional project.</strong> Nobuya Resto is not a real business and is created solely for portfolio and educational purposes.
              </p>
              <p>
                Any resemblance to actual restaurants or businesses is coincidental. The designs, content, and functionalities presented are meant to showcase web development skills.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-blue-50 border-l-4 border-blue-400 p-4 text-blue-700">
              <p className="flex items-start">
                <span className="mt-0.5 mr-2"><IoInformationCircleOutline /></span>
                <span><span className="font-medium">Note:</span> No actual reservations can be made, and no real services are offered through this platform.</span>
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-amber-50 border-l-4 border-amber-400 p-4 text-amber-700 mt-4">
              <h5 className="font-heading mb-2 flex items-center">
                <IoHeartOutline className="mr-2" /> Personal Note
              </h5>
              <p className="italic">
                "Doakan saya bisa membuat restoran ini menjadi nyata dan menjadi salah satu bisnis saya di Indonesia."
              </p>
              <p className="text-sm mt-2">
                - M. Qurtifa Wijaya
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-4 mt-4">
              <h5 className="font-heading mb-2">What This Project Demonstrates:</h5>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center">
                  <span className="text-warm-gold mr-1">✓</span> React Development
                </li>
                <li className="flex items-center">
                  <span className="text-warm-gold mr-1">✓</span> Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="text-warm-gold mr-1">✓</span> UI/UX Principles
                </li>
                <li className="flex items-center">
                  <span className="text-warm-gold mr-1">✓</span> Animation Effects
                </li>
                <li className="flex items-center">
                  <span className="text-warm-gold mr-1">✓</span> Component Architecture
                </li>
                <li className="flex items-center">
                  <span className="text-warm-gold mr-1">✓</span> TailwindCSS Styling
                </li>
              </ul>
            </motion.div>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key="about-content"
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <h4 className="font-heading text-xl mb-3 flex items-center">
                <IoLogoReact className="text-warm-gold mr-2" /> 
                Technical Information
              </h4>
              <p className="text-gray-700 mb-3">
                This project is built using React and modern frontend technologies to create a responsive and interactive user experience.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <h5 className="font-medium text-gray-800">Frontend Stack</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• React with Hooks</li>
                    <li>• React Router</li>
                    <li>• Framer Motion</li>
                    <li>• TailwindCSS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h5 className="font-medium text-gray-800">Features</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Responsive Design</li>
                    <li>• Animations</li>
                    <li>• Form Validation</li>
                    <li>• Interactive Elements</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-3 bg-gradient-to-r from-warm-gold/10 to-transparent p-4 rounded-md">
              <div className="bg-warm-gold rounded-full p-2 text-white">
                <IoRestaurantOutline />
              </div>
              <div>
                <h4 className="font-heading text-lg">Project Context</h4>
                <p className="text-sm text-gray-700">
                  This fictional Japanese restaurant website was created to showcase web development skills
                  and demonstrate the ability to design and implement a complete business website with
                  various pages and interactive elements.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <IoGlobeOutline className="text-warm-gold" />
                <h4 className="font-heading">Development Timeline</h4>
              </div>
              <div className="relative pl-6 before:absolute before:left-2 before:top-0 before:h-full before:w-[1px] before:bg-gray-300 space-y-3">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-warm-gold"></div>
                  <h5 className="font-medium text-gray-800">Design Phase</h5>
                  <p className="text-xs text-gray-600">Wireframing, prototyping, and design system creation</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-warm-gold"></div>
                  <h5 className="font-medium text-gray-800">Development</h5>
                  <p className="text-xs text-gray-600">Component architecture and implementation</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-warm-gold"></div>
                  <h5 className="font-medium text-gray-800">Testing & Refinement</h5>
                  <p className="text-xs text-gray-600">Responsive testing, accessibility improvements</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            key="contact-content"
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <h4 className="font-heading text-xl mb-3 flex items-center">
                <IoMailOutline className="text-warm-gold mr-2" /> 
                Get In Touch
              </h4>
              <p className="text-gray-700 mb-4">
                I'd love to hear your feedback on this project or discuss potential collaboration opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <a 
                  href="https://github.com/mamatqurtifaoh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                >
                  <div className="bg-gray-800 text-white p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <IoLogoGithub />
                  </div>
                  <div>
                    <h5 className="font-medium">GitHub</h5>
                    <p className="text-sm text-gray-600">Check out my other projects</p>
                  </div>
                  <IoChevronForward className="ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/mamatqurtifaoh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                >
                  <div className="bg-blue-700 text-white p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <IoLogoLinkedin />
                  </div>
                  <div>
                    <h5 className="font-medium">LinkedIn</h5>
                    <p className="text-sm text-gray-600">Connect professionally</p>
                  </div>
                  <IoChevronForward className="ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium mb-3">Send Direct Message</h5>
              <form className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gold focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-gold focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <p className="text-xs text-gray-500 italic">
                  Note: This form is for demonstration purposes only and does not actually send messages.
                </p>
                <button
                  type="button"
                  className="bg-warm-gold hover:bg-warm-gold/90 text-white py-2 px-6 rounded-md transition-colors flex items-center gap-2"
                >
                  Send Message
                  <IoArrowForward />
                </button>
              </form>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-ink-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => hasInteracted && handleClose()}
          >
            {/* Modal Content */}
            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onAnimationComplete={() => setAnimationComplete(true)}
              className="bg-pure-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-warm-gold to-warm-gold/80 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <IoInformationCircleOutline className="text-2xl" />
                  <h3 className="font-heading text-xl">Project Information</h3>
                </div>
                <button 
                  ref={focusRef}
                  onClick={handleClose} 
                  className="text-white/90 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                  aria-label="Close disclaimer"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex space-x-1 p-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors ${
                        activeTab === tab.id
                          ? 'bg-warm-gold/10 text-warm-gold'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Body with conditional content based on active tab */}
              <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {renderTabContent()}
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 gap-4">
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <IoCalendarOutline />
                  <span>Last updated:</span>
                  <span className="flex items-center gap-1">
                    <IoTimeOutline /> {currentDateTime}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="bg-warm-gold hover:bg-warm-gold/90 text-white py-2 px-6 rounded-md transition-colors flex items-center gap-1"
                >
                  <IoCheckmarkCircleOutline />
                  <span>I Understand</span>
                </button>
              </div>
              
              {/* Progress indicator at bottom of modal */}
              <div className="bg-gray-100 h-1.5">
                <div 
                  className="h-full bg-warm-gold transition-all duration-300 ease-in-out"
                  style={{ width: hasInteracted ? '100%' : '0%' }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Add custom styles for scrollbar
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #d4a45f;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #c3944e;
  }
`;

// Inject styles into document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default DisclaimerModal;