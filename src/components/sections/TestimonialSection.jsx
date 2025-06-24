// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoStar, IoStarOutline, IoChevronForward, IoChevronBack, IoLogoGoogle, IoTime, IoRestaurantOutline } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';

// Updated testimonials data with Indonesian faces and cities
const testimonials = [
  {
    id: 1,
    name: "Jessica Wijaya",
    location: "Jakarta Selatan",
    avatarUrl: "https://images.pexels.com/photos/3955651/pexels-photo-3955651.jpeg",
    rating: 5,
    text: "Pengalaman makan di Nobuya Resto benar-benar mengagumkan. Hidangan sushi aburi mereka adalah yang terbaik yang pernah saya coba di Jakarta. Suasana autentik Jepang dan pelayanan ramah membuat saya ingin kembali lagi.",
    date: "March 15, 2023",
    orderedDish: "Hana Aburi Sushi Set",
    platform: "Google Reviews"
  },
  {
    id: 2,
    name: "William Tanuwijaya",
    location: "Bandung",
    avatarUrl: "https://images.pexels.com/photos/3751391/pexels-photo-3751391.jpeg",
    rating: 5,
    text: "Gyu Truffle Don di Nobuya adalah surga kuliner! Perpaduan wagyu dan truffle sungguh luar biasa. Interior yang tenang dan elegan cocok untuk jamuan bisnis atau kencan spesial. Tidak sabar untuk mencoba menu baru mereka.",
    date: "November 22, 2023",
    orderedDish: "Gyu Truffle Don",
    platform: "Instagram"
  },
  {
    id: 3,
    name: "Olivia Gunawan",
    location: "Yogyakarta",
    avatarUrl: "https://images.pexels.com/photos/5046503/pexels-photo-5046503.jpeg?_gl=1*a5b10o*_ga*NDYyNjcyNDkwLjE3NDk2NDEwMzE.*_ga_8JE65Q40S6*czE3NTA3NDAzNDEkbzIkZzEkdDE3NTA3NDAzNDMkajU4JGwwJGgw",
    rating: 4,
    text: "Saya memesan Tempura Udon dan rasanya sangat otentik. Suasana restoran dengan nuansa kayu dan pencahayaan hangat benar-benar membuat saya merasa seperti di Kyoto. Harga memang premium tapi sepadan dengan kualitas.",
    date: "January 10, 2024",
    orderedDish: "Tempura Udon",
    platform: "TripAdvisor"
  },
  {
    id: 4,
    name: "Michael Hartono",
    location: "Surabaya",
    avatarUrl: "https://images.pexels.com/photos/2687998/pexels-photo-2687998.jpeg",
    rating: 5,
    text: "Mocktail signature Nobuya memberikan kesegaran yang luar biasa! Kombinasi rasa yuzu dan shiso sangat unik. Matcha cheesecake mereka juga jadi salah satu favorit saya. Pelayanan sangat profesional dan ramah.",
    date: "August 03, 2024",
    orderedDish: "Signature Mocktail & Matcha Cheesecake",
    platform: "Google Reviews"
  },
  {
    id: 5,
    name: "Stefanie Liem",
    location: "Bali",
    avatarUrl: "https://images.pexels.com/photos/582039/pexels-photo-582039.jpeg?_gl=1*19g40v3*_ga*NDYyNjcyNDkwLjE3NDk2NDEwMzE.*_ga_8JE65Q40S6*czE3NTA3NDAzNDEkbzIkZzEkdDE3NTA3NDAzODIkajE5JGwwJGgw",
    rating: 5,
    text: "Ambience di cabang Surabaya sangat mengesankan! Semi-outdoor garden area-nya sangat cocok untuk photoshoot. Selain tampilan makanan yang Instagramable, rasa Salmon Aburi Roll-nya juga luar biasa. Pasti akan kembali lagi!",
    date: "February 15, 2025",
    orderedDish: "Salmon Aburi Roll",
    platform: "Instagram"
  },
  {
    id: 6,
    name: "Christian Wanandi",
    location: "Makassar",
    avatarUrl: "https://images.pexels.com/photos/6252428/pexels-photo-6252428.jpeg",
    rating: 4,
    text: "Makan malam yang sempurna untuk merayakan ulang tahun pernikahan kami. Staf sangat memperhatikan detail, bahkan memberikan dessert spesial dengan tulisan ucapan. Terima kasih Nobuya Resto untuk pengalaman yang tak terlupakan!",
    date: "May 30, 2025",
    orderedDish: "Chef's Omakase Course",
    platform: "TripAdvisor"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextTestimonial = () => {
    setDirection('right');
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection('left');
    setActiveIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  
  // Auto slide testimonials with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoStar key={i} className="text-warm-gold" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-warm-gold" />);
      }
    }
    return stars;
  };
  
  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  // Get testimonial with previous and next indexes for displaying 3 cards on desktop
  const getPrevIndex = () => (activeIndex === 0) ? testimonials.length - 1 : activeIndex - 1;
  const getNextIndex = () => (activeIndex + 1) % testimonials.length;
  
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-jp-cream to-pure-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-warm-gold font-medium">What Our Guests Say</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-4">Customer Stories</h2>
          <div className="w-20 h-1 bg-warm-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Discover authentic experiences from our valued guests who have enjoyed 
            the culinary journey at Nobuya Resto.
          </p>
        </motion.div>
        
        {/* Stats above testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-pure-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-warm-gold font-bold text-3xl">4.8</div>
            <div className="flex justify-center my-2">
              <IoStar className="text-warm-gold" />
              <IoStar className="text-warm-gold" />
              <IoStar className="text-warm-gold" />
              <IoStar className="text-warm-gold" />
              <IoStarOutline className="text-warm-gold" />
            </div>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="bg-pure-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-warm-gold font-bold text-3xl">890+</div>
            <div className="text-gray-600 my-2">
              <IoLogoGoogle className="inline text-xl" />
            </div>
            <p className="text-gray-600 text-sm">Google Reviews</p>
          </div>
          <div className="bg-pure-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-warm-gold font-bold text-3xl">96%</div>
            <div className="text-gray-600 my-2">
              <IoTime className="inline text-xl" />
            </div>
            <p className="text-gray-600 text-sm">Return Rate</p>
          </div>
          <div className="bg-pure-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-warm-gold font-bold text-3xl">12k+</div>
            <div className="text-gray-600 my-2">
              <IoRestaurantOutline className="inline text-xl" />
            </div>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>
        </div>
        
        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-6xl mx-auto px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3 cards view */}
          <div className="hidden md:block relative h-[400px] overflow-hidden">
            <div className="flex justify-center gap-6">
              {/* Previous testimonial (smaller) */}
              <motion.div 
                className="w-1/4 opacity-60 scale-90 mt-10"
                initial={{ opacity: 0.6, scale: 0.9 }}
                animate={{ opacity: 0.6, scale: 0.9 }}
                key={`prev-${activeIndex}`}
              >
                <div className="bg-pure-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonials[getPrevIndex()].avatarUrl} 
                            alt={testimonials[getPrevIndex()].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading text-base">{testimonials[getPrevIndex()].name}</h4>
                          <div className="flex mt-1">
                            {renderStars(testimonials[getPrevIndex()].rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-4 flex-grow">
                      "{testimonials[getPrevIndex()].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Current testimonial (larger) */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`current-${activeIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                  }}
                  className="w-1/2"
                >
                  <div className="bg-pure-white p-8 rounded-lg shadow-lg border-t-4 border-warm-gold relative">
                    <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-warm-gold/10" />
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-warm-gold/30 mr-4">
                            <img 
                              src={testimonials[activeIndex].avatarUrl} 
                              alt={testimonials[activeIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-heading text-xl">{testimonials[activeIndex].name}</h4>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                              <span className="inline-block w-1 h-1 bg-warm-gold rounded-full"></span>
                              {testimonials[activeIndex].location}
                            </p>
                            <div className="flex mt-2">
                              {renderStars(testimonials[activeIndex].rating)}
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-500">
                          {testimonials[activeIndex].platform}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 flex-grow">
                        "{testimonials[activeIndex].text}"
                      </p>
                      
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center bg-jp-cream/30 px-3 py-1 rounded-full">
                          <IoRestaurantOutline className="text-warm-gold mr-1" />
                          <span className="text-xs text-gray-600">{testimonials[activeIndex].orderedDish}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{testimonials[activeIndex].date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Next testimonial (smaller) */}
              <motion.div 
                className="w-1/4 opacity-60 scale-90 mt-10"
                initial={{ opacity: 0.6, scale: 0.9 }}
                animate={{ opacity: 0.6, scale: 0.9 }}
                key={`next-${activeIndex}`}
              >
                <div className="bg-pure-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonials[getNextIndex()].avatarUrl} 
                            alt={testimonials[getNextIndex()].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading text-base">{testimonials[getNextIndex()].name}</h4>
                          <div className="flex mt-1">
                            {renderStars(testimonials[getNextIndex()].rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-4 flex-grow">
                      "{testimonials[getNextIndex()].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile: Single card view */}
          <div className="md:hidden relative h-[400px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-pure-white p-6 rounded-lg shadow-md h-full">
                  <FaQuoteLeft className="absolute top-4 right-4 text-3xl text-warm-gold/10" />
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-warm-gold/30 mr-3">
                        <img 
                          src={testimonials[activeIndex].avatarUrl} 
                          alt={testimonials[activeIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg">{testimonials[activeIndex].name}</h4>
                        <p className="text-gray-500 text-xs flex items-center gap-1">
                          <span className="inline-block w-1 h-1 bg-warm-gold rounded-full"></span>
                          {testimonials[activeIndex].location}
                        </p>
                        <div className="flex mt-1">
                          {renderStars(testimonials[activeIndex].rating)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 flex-grow">
                      "{testimonials[activeIndex].text}"
                    </p>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center bg-jp-cream/30 px-2 py-1 rounded-full">
                        <IoRestaurantOutline className="text-warm-gold mr-1 text-xs" />
                        <span className="text-xs text-gray-600">{testimonials[activeIndex].orderedDish}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{testimonials[activeIndex].date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons and indicators */}
          <div className="flex justify-center mt-8 space-x-4 items-center">
            <button 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-ink-black text-white hover:bg-warm-gold transition-colors duration-300 flex-shrink-0"
            >
              <IoChevronBack className="text-xl" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 'right' : 'left');
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-warm-gold scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-ink-black text-white hover:bg-warm-gold transition-colors duration-300 flex-shrink-0"
            >
              <IoChevronForward className="text-xl" />
            </button>
          </div>
        </div>
        
        {/* Additional testimonial note */}
        <div className="text-center mt-12">
          <a 
            href="https://g.page/r/nobuyaresto/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-warm-gold hover:text-warm-gold/80 transition-colors"
          >
            <IoStar className="mr-1" /> 
            <span>Leave your review on Google</span>
            <IoChevronForward className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;