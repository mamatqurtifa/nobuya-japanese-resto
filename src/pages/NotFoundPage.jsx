import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
  IoHomeOutline, 
  IoRestaurantOutline, 
  IoCalendarOutline, 
  IoInformationCircleOutline, 
  IoMailOutline, 
  IoImagesOutline,
  IoArrowBack,
  IoSearchOutline,
  IoStorefrontOutline,
  IoTimeOutline,
  IoChevronDown,
  IoChevronUp,
  IoCheckmarkCircleOutline,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook
} from "react-icons/io5";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      delay: 0.4, 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const sushiVariants = {
  hover: {
    y: [0, -10, 0],
    transition: { 
      duration: 1.5, 
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0.5
    }
  }
};

const blinkVariants = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      yoyo: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * Enhanced 404 Not Found Page Component
 * 
 * Features:
 * - Interactive SVG illustration with animations
 * - Japanese-themed design elements
 * - Helpful navigation suggestions
 * - Search functionality
 * - Quick links to popular pages
 * - Operating hours information
 */
const NotFoundPage = () => {
  // State for search and FAQs
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  // Effect for page title
  useEffect(() => {
    document.title = "Page Not Found - Nobuya Resto";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add body class to prevent scrolling on 404 page
    document.body.classList.add("overflow-x-hidden");
    
    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);
  
  // Generate suggested pages based on search
  const getSuggestions = () => {
    const suggestions = [
      { name: "Menu", path: "/menu", icon: <IoRestaurantOutline /> },
      { name: "Reservations", path: "/reservation", icon: <IoCalendarOutline /> },
      { name: "About Us", path: "/about", icon: <IoInformationCircleOutline /> },
      { name: "Contact", path: "/contact", icon: <IoMailOutline /> },
      { name: "Gallery", path: "/gallery", icon: <IoImagesOutline /> }
    ];
    
    if (!searchTerm) return suggestions;
    
    return suggestions.filter(suggestion => 
      suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setShowSearchSuggestions(true);
    }
  };
  
  // FAQ data
  const faqs = [
    {
      question: "Why am I seeing this page?",
      answer: "You're seeing this page because the URL you entered doesn't match any existing pages on our website. This could be because the page has been moved, renamed, or deleted, or you might have typed the URL incorrectly."
    },
    {
      question: "How do I find what I'm looking for?",
      answer: "You can use the search box above to find relevant content, or use the navigation links to browse through our main sections. The homepage is also a great starting point to explore our offerings."
    },
    {
      question: "Is Nobuya Resto a real restaurant?",
      answer: "Nobuya Resto is a fictional Japanese restaurant created for portfolio and demonstration purposes. The design, content, and functionalities presented are meant to showcase web development skills."
    }
  ];
  
  // Toggle FAQ expansion
  const toggleFAQ = (index) => {
    if (expandedFAQ === index) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(index);
    }
  };
  
  // Operating hours data
  const operatingHours = [
    { day: "Monday", hours: "11:00 - 22:00" },
    { day: "Tuesday", hours: "11:00 - 22:00" },
    { day: "Wednesday", hours: "11:00 - 22:00" },
    { day: "Thursday", hours: "11:00 - 22:00" },
    { day: "Friday", hours: "11:00 - 23:30" },
    { day: "Saturday", hours: "10:00 - 23:30" },
    { day: "Sunday", hours: "10:00 - 22:00" }
  ];
  
  // Calculate current day
  const getCurrentDayIndex = () => {
    const today = new Date().getDay();
    return today === 0 ? 6 : today - 1; // Adjust for Sunday = 0 in JS
  };
  
  // Get today's operating hours
  const todayHours = operatingHours[getCurrentDayIndex()];

  return (
    <>
      {/* Japanese-inspired decorative elements */}
      <div className="fixed top-0 left-0 w-full h-24 bg-contain bg-repeat-x opacity-5" 
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"%23000\" /></svg>')" }}>
      </div>
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-contain bg-no-repeat opacity-10" 
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><path d=\"M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10 Z\" fill=\"%23d4a45f\" /></svg>')" }}>
      </div>
      <div className="fixed top-1/4 left-8 w-16 h-64 bg-contain bg-no-repeat opacity-10" 
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"200\" viewBox=\"0 0 30 200\"><rect x=\"10\" y=\"0\" width=\"10\" height=\"200\" fill=\"%23d4a45f\" /></svg>')" }}>
      </div>
      
      <div className="pt-28 pb-20 bg-pure-white min-h-screen relative overflow-x-hidden">
        <motion.div 
          className="container-custom"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main content - 3 columns wide */}
            <div className="lg:col-span-3">
              <div className="flex flex-col items-center justify-center text-center mb-12">
                <motion.div variants={itemVariants}>
                  <h1 className="text-6xl md:text-8xl font-heading mb-6 text-warm-gold tracking-tighter relative inline-block">
                    404
                    <span className="absolute -top-4 -right-4 text-xs font-normal bg-sakura-red text-white px-2 py-1 rounded-md rotate-12 tracking-normal">
                      ページが見つかりません
                    </span>
                  </h1>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-heading mb-4 text-ink-black">
                    Page Not Found
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                  </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full max-w-md mx-auto mb-8 relative"
                >
                  <div className={`flex items-center border-2 ${isSearchFocused ? 'border-warm-gold' : 'border-gray-300'} rounded-lg overflow-hidden transition-colors duration-300`}>
                    <div className="pl-4 text-gray-400">
                      <IoSearchOutline className="text-xl" />
                    </div>
                    <input
                      type="text"
                      placeholder="Try searching for pages..."
                      className="w-full py-3 px-4 outline-none text-gray-700"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => {
                        setIsSearchFocused(false);
                        // Delay hiding suggestions to allow clicking
                        setTimeout(() => setShowSearchSuggestions(false), 200);
                      }}
                    />
                  </div>
                  
                  {/* Search Suggestions */}
                  <AnimatePresence>
                    {showSearchSuggestions && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden"
                      >
                        <ul>
                          {getSuggestions().map((suggestion, index) => (
                            <li key={index}>
                              <Link 
                                to={suggestion.path}
                                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                              >
                                <span className="text-warm-gold mr-3">
                                  {suggestion.icon}
                                </span>
                                <span>{suggestion.name}</span>
                                <span className="ml-auto text-gray-400 text-sm">
                                  Go to page →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Main CTA Button */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/" 
                    className="btn btn-primary inline-flex items-center justify-center py-3 px-6"
                  >
                    <IoHomeOutline className="mr-2 text-xl" />
                    Return to Homepage
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="btn btn-outline inline-flex items-center justify-center py-3 px-6"
                  >
                    <IoMailOutline className="mr-2 text-xl" />
                    Contact Support
                  </Link>
                </motion.div>
                
                {/* Interactive SVG Illustration */}
                <motion.div
                  className="mt-12 max-w-md w-full mx-auto"
                  variants={illustrationVariants}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 600 400"
                    className="w-full h-auto drop-shadow-lg"
                  >
                    {/* Background with subtle pattern */}
                    <defs>
                      <pattern id="sakuraPattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
                        <path d="M10,10 Q15,5 20,10 Q25,5 20,0 Q15,5 10,10 Z" fill="#d4a45f" fillOpacity="0.1" />
                      </pattern>
                    </defs>
                    
                    {/* Background Element */}
                    <rect x="0" y="0" width="600" height="400" fill="url(#sakuraPattern)" rx="20" ry="20" />
                    <rect x="5" y="5" width="590" height="390" fill="#f9f6f2" rx="18" ry="18" />
                    
                    {/* Animated Wave Background */}
                    <motion.path 
                      d="M0,250 Q150,300 300,250 Q450,200 600,250 L600,400 L0,400 Z" 
                      fill="#d4a45f" 
                      fillOpacity="0.1"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />

                    {/* "404" Text */}
                    <text x="300" y="160" fontSize="120" fontWeight="bold" textAnchor="middle" fill="#d4a45f">404</text>
                    <text x="300" y="180" fontSize="20" fontWeight="normal" textAnchor="middle" fill="#333" opacity="0.7">ページが見つかりません</text>

                    {/* Decorative Elements */}
                    <motion.g 
                      fill="#d4a45f" 
                      opacity="0.2"
                      variants={blinkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <circle cx="150" cy="100" r="20" />
                      <circle cx="450" cy="100" r="15" />
                      <circle cx="500" cy="200" r="25" />
                      <circle cx="100" cy="250" r="18" />
                    </motion.g>

                    {/* Chopsticks */}
                    <g stroke="#333" strokeWidth="6" strokeLinecap="round">
                      <line x1="200" y1="230" x2="250" y2="300" />
                      <line x1="220" y1="230" x2="270" y2="300" />
                    </g>

                    {/* Plate */}
                    <ellipse cx="300" cy="320" rx="120" ry="30" fill="#f5f5f5" stroke="#d4a45f" strokeWidth="2" />

                    {/* Animated Sad Face Sushi */}
                    <motion.g 
                      transform="translate(300, 260)"
                      variants={sushiVariants}
                      whileHover="hover"
                    >
                      <ellipse cx="0" cy="0" rx="50" ry="30" fill="#ffffff" stroke="#333" strokeWidth="2" />
                      <rect x="-50" y="-3" width="100" height="6" fill="#d4a45f" />
                      <circle cx="-15" cy="-10" r="5" fill="#333" />
                      <circle cx="15" cy="-10" r="5" fill="#333" />
                      <path d="M-20,15 Q0,5 20,15" stroke="#333" strokeWidth="3" fill="none" />
                    </motion.g>
                    
                    {/* Small Decorative Elements */}
                    <circle cx="350" cy="315" r="5" fill="#8bc34a" />
                    <circle cx="370" cy="320" r="3" fill="#ff5722" />
                    <path d="M220,315 Q230,305 240,315" stroke="#8bc34a" strokeWidth="2" fill="none" />
                  </svg>
                </motion.div>
              </div>
              
              {/* FAQ Section */}
              <motion.div 
                variants={itemVariants}
                className="bg-jp-cream bg-opacity-30 rounded-xl p-6 mt-8"
              >
                <h3 className="font-heading text-xl mb-4 text-ink-black flex items-center">
                  <IoInformationCircleOutline className="text-warm-gold mr-2 text-2xl" />
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                    >
                      <button 
                        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        {expandedFAQ === index ? (
                          <IoChevronUp className="text-warm-gold" />
                        ) : (
                          <IoChevronDown className="text-gray-400" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedFAQ === index && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar - 2 columns wide */}
            <div className="lg:col-span-2">
              {/* Popular Pages */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
              >
                <h3 className="font-heading text-xl mb-4 text-ink-black flex items-center">
                  <IoStorefrontOutline className="text-warm-gold mr-2 text-2xl" />
                  Popular Pages
                </h3>
                
                <ul className="space-y-2">
                  {[
                    { name: "Our Menu", path: "/menu", icon: <IoRestaurantOutline /> },
                    { name: "Make a Reservation", path: "/reservation", icon: <IoCalendarOutline /> },
                    { name: "Special Offers", path: "/", icon: <IoCheckmarkCircleOutline /> },
                    { name: "Photo Gallery", path: "/gallery", icon: <IoImagesOutline /> },
                    { name: "About Nobuya", path: "/about", icon: <IoInformationCircleOutline /> }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        className="flex items-center p-3 rounded-md hover:bg-jp-cream hover:bg-opacity-20 transition-colors"
                      >
                        <span className="bg-jp-cream p-2 rounded-md text-warm-gold mr-3">
                          {link.icon}
                        </span>
                        <span className="text-gray-700">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Opening Hours Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="bg-warm-gold text-white p-4">
                  <h3 className="font-heading text-xl flex items-center">
                    <IoTimeOutline className="mr-2 text-2xl" />
                    Operating Hours
                  </h3>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-2">
                    {operatingHours.map((dayInfo, index) => {
                      const isToday = index === getCurrentDayIndex();
                      return (
                        <li 
                          key={index}
                          className={`flex justify-between items-center p-2 rounded ${
                            isToday ? 'bg-jp-cream bg-opacity-20 font-medium' : ''
                          }`}
                        >
                          <span className="text-gray-800">
                            {isToday && (
                              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            )}
                            {dayInfo.day}
                          </span>
                          <span className="text-gray-600">{dayInfo.hours}</span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2">Today's Hours</h4>
                    <div className="flex items-center">
                      <IoTimeOutline className="text-warm-gold mr-2" />
                      <span className="text-gray-700">{todayHours.hours}</span>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="border-t border-gray-100 p-4">
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-warm-gold transition-colors p-2"
                      aria-label="Facebook"
                    >
                      <IoLogoFacebook className="text-xl" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-warm-gold transition-colors p-2"
                      aria-label="Instagram"
                    >
                      <IoLogoInstagram className="text-xl" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-warm-gold transition-colors p-2"
                      aria-label="Twitter"
                    >
                      <IoLogoTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Footer Navigation */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-center text-gray-500 mb-4">
              Not finding what you need? Try one of these sections:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "Reservations", path: "/reservation" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Gallery", path: "/gallery" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <p className="text-center text-gray-400 text-sm mt-8">
              © {new Date().getFullYear()} Nobuya Resto · All rights reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;