// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import menuData, { formatPrice } from '../../data/menuData';
import { FaLeaf } from 'react-icons/fa';

const MenuSection = () => {
  // Get signature items
  const getSignatureItems = () => {
    const signatures = [];
    
    menuData.categories.forEach(category => {
      category.items.forEach(item => {
        if (item.isSignature) {
          signatures.push({
            ...item,
            category: category.name
          });
        }
      });
    });
    
    return signatures.slice(0, 6); // Limit to 6 items
  };
  
  const signatureItems = getSignatureItems();
  
  return (
    <section id="menu" className="section-padding bg-pure-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-warm-gold font-medium">Enjoy Our Delicious</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-4">Our Signature Menu</h2>
          <div className="w-20 h-1 bg-warm-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-pure-white border border-jp-cream rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-warm-gold text-pure-white text-xs px-2 py-1 rounded">
                  Signature
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ink-black/70 to-transparent p-4">
                  <p className="text-pure-white text-xs">{item.category}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl">{item.name}</h3>
                  <p className="font-menu font-semibold text-warm-gold">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                {/* Tags if applicable */}
                <div className="flex gap-2">
                  {item.id === 'vegan-don' && (
                    <span className="inline-flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      <FaLeaf className="mr-1" /> Vegetarian
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/menu" className="btn btn-outline">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;