import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Sample gallery images
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
    alt: 'Foods at Nobuya',
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
  },
  {
    id: 7,
    src: '/src/assets/images/gallery/events-1.png', 
    alt: 'Special Event at Nobuya',
    category: 'events'
  },
  {
    id: 8,
    src: '/src/assets/images/gallery/exterior-1.png',
    alt: 'Nobuya Restaurant Rooftop',
    category: 'exterior'
  },
  // Add more images as needed
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    document.title = "Gallery - Nobuya Resto";
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'food', name: 'Food' },
    { id: 'experience', name: 'Experience' },
    { id: 'events', name: 'Events' },
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-ink-black text-pure-white py-20 mb-12">
        <div className="container-custom">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Gallery</h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              Explore the ambiance, culinary artistry, and unique experiences at Nobuya Resto
              through our carefully curated photo gallery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container-custom">
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id 
                  ? 'bg-warm-gold text-pure-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-lg cursor-pointer bg-jp-cream shadow-md"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/src/assets/images/placeholder-image.png";
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium">{image.alt}</h3>
                <p className="text-xs text-gray-500 capitalize">{image.category}</p>
              </div>
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
            className="absolute top-4 right-4 text-white text-3xl z-10"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.src = "/src/assets/images/placeholder-image.png";
            }}
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
            {selectedImage.alt}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;