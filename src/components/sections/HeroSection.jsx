// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoChevronDownOutline, IoRestaurantOutline, IoCalendarOutline } from 'react-icons/io5';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/src/assets/images/hero-bg.png')" }}>
      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/40 to-ink-black/20"></div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-warm-gold opacity-10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-pure-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.span
            className="inline-block bg-warm-gold/80 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modern Japanese Cuisine
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-warm-gold">Experience</span> The Essence of Japan
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 font-light max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Feel the warmth and authentic flavors of Japan in the heart of the city. 
            Where tradition meets modern culinary artistry.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/menu" className="btn btn-primary flex items-center gap-2 group">
              <IoRestaurantOutline className="transition-transform group-hover:rotate-12" />
              <span>Explore Our Menu</span>
            </Link>
            <Link to="/reservation" className="btn btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-ink-black flex items-center gap-2">
              <IoCalendarOutline />
              <span>Reserve a Table</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex -space-x-2">
              <img 
                src="https://images.pexels.com/photos/3751391/pexels-photo-3751391.jpeg" 
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-pure-white"
              />
              <img 
                src="https://images.pexels.com/photos/3105400/pexels-photo-3105400.jpeg" 
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-pure-white"
              />
              <img 
                src="https://images.pexels.com/photos/30450326/pexels-photo-30450326.jpeg" 
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-pure-white"
              />
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex text-warm-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-pure-white/80">4.9 (890+ reviews)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scrolling indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-pure-white text-sm mb-2 tracking-wide">Scroll to discover</span>
          <motion.div 
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
            className="bg-warm-gold/30 backdrop-blur-sm rounded-full p-2"
          >
            <IoChevronDownOutline className="text-pure-white text-xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;