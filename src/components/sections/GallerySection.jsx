import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/src/assets/images/gallery/interior-1.png',
    alt: 'Nobuya Restaurant Interior',
    category: 'interior'
  },
  {
    id: 2,
    src: '/src/assets/images/gallery/food-1.png',
    alt: 'Sushi Platter',
    category: 'food'
  },
  {
    id: 3,
    src: '/src/assets/images/gallery/experience-1.png',
    alt: 'Chef preparing sushi',
    category: 'experience'
  },
  {
    id: 4,
    src: '/src/assets/images/gallery/interior-2.png',
    alt: 'Private Dining Room',
    category: 'interior'
  },
  {
    id: 5,
    src: '/src/assets/images/gallery/food-2.png',
    alt: 'Signature Ramen',
    category: 'food'
  },
  {
    id: 6,
    src: '/src/assets/images/gallery/experience-2.png',
    alt: 'Traditional Tea Ceremony',
    category: 'experience'
  }
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'food', name: 'Food' },
    { id: 'experience', name: 'Experience' }
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
    
  return (
    <section id="gallery" className="section-padding bg-ink-black text-pure-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-warm-gold font-medium">Visual Journey</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-warm-gold mx-auto"></div>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id 
                  ? 'bg-warm-gold text-pure-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;