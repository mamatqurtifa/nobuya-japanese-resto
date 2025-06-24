import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { GoFlame } from "react-icons/go";
import menuData, { formatPrice } from '../data/menuData';

const MenuPage = () => {
  useEffect(() => {
    document.title = "Menu - Nobuya Resto";
  }, []);

  // Check if an item is in the signature items list
  const isSignatureItem = (itemId) => {
    return menuData.signatureItems.includes(itemId);
  };

  return (
    <div className="pt-24 pb-16 bg-pure-white">
      {/* Hero Section */}
      <div className="bg-ink-black text-pure-white py-20 mb-12">
        <div className="container-custom">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Menu</h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              Discover authentic Japanese flavors crafted with precision and passion.
              Each dish tells a story of tradition blended with modern culinary artistry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="container-custom">
        {menuData.categories.map((category, index) => (
          <motion.section 
            key={category.id}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="font-heading text-3xl mb-8 pb-2 border-b-2 border-jp-cream">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item) => {
                const showImage = isSignatureItem(item.id);
                
                return showImage ? (
                  // Signature Item with Image
                  <div 
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 p-4 border border-jp-cream rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-full md:w-1/3 aspect-square">
                      <img 
                        src={item.imageUrl || "/images/placeholder-food.jpg"}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                        onError={(e) => {
                          e.target.src = "/images/placeholder-food.jpg";
                        }}
                      />
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading text-xl">
                          {item.name}
                          <span className="ml-2 text-xs px-2 py-1 bg-warm-gold text-white rounded-full">
                            Signature
                          </span>
                        </h3>
                        <p className="font-menu font-semibold text-warm-gold">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ) : (
                  // Non-Signature Item with Enhanced Design
                  <div 
                    key={item.id}
                    className="p-5 border border-jp-cream rounded-lg hover:shadow-md transition-all duration-300 hover:bg-jp-cream/20 relative overflow-hidden"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-heading text-xl">
                          {item.name}
                        </h3>
                        <p className="font-menu font-semibold text-warm-gold">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      {/* Visual element for non-signature items */}
                      <div className="mt-auto">
                        <div className="flex items-center text-gray-500 text-sm">
                          <span className="bg-gray-100 px-3 py-1 rounded-full mr-2">
                            {category.id === 'beverages' ? 'Beverage' : 'Dish'}
                          </span>
                          {item.isSpicy && (
                            <span className="flex items-center text-sakura-red">
                              <GoFlame className="mr-1" /> Spicy
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Decorative element */}
                      <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-jp-cream/30 opacity-30"></div>
                      <div className="absolute -top-6 -left-6 w-8 h-8 rounded-full bg-jp-cream/20 opacity-20"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;