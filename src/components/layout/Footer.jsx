import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaTiktok, 
  FaFacebookF, 
  FaYoutube, 
  FaCreditCard, 
  FaMapMarkerAlt,
  FaRegCopyright,
  FaHeart
} from 'react-icons/fa';
import { 
  MdAccessTime, 
  MdLocationOn, 
  MdPhone, 
  MdEmail, 
  MdWhatsapp, 
  MdKeyboardArrowUp,
  MdRestaurantMenu,
  MdPeople,
  MdEventAvailable,
  MdLanguage
} from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeLocation, setActiveLocation] = useState('jakarta');
  
  const locations = {
    jakarta: {
      name: "Jakarta Branch",
      address: [
        "Jl. Senopati No. 88, Kebayoran Baru",
        "Jakarta Selatan, DKI Jakarta 12190"
      ],
      features: "2 Lantai + Rooftop Area",
      phone: "(021) 7890-1122",
      whatsapp: "+62 812-3456-7890",
      email: "jakarta@nobuyaresto.id",
      mapUrl: "https://maps.google.com/?q=Nobuya+Resto+Jakarta"
    },
    surabaya: {
      name: "Surabaya Branch",
      address: [
        "Jl. Raya Darmo No. 22, Tegalsari",
        "Surabaya, Jawa Timur 60264"
      ],
      features: "2 Lantai, Semi-Outdoor Garden Area",
      phone: "(031) 9988-7744",
      whatsapp: "+62 813-9000-5522",
      email: "surabaya@nobuyaresto.id",
      mapUrl: "https://maps.google.com/?q=Nobuya+Resto+Surabaya"
    }
  };

  const paymentMethods = [
    "Credit Cards (Visa, Mastercard, Amex)",
    "Debit Cards",
    "QRIS (GoPay, OVO, Dana, ShopeePay)",
    "Bank Transfer"
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const activeLocationData = locations[activeLocation];
  
  return (
    <footer className="bg-ink-black text-pure-white pt-16 pb-8 relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-warm-gold hover:bg-warm-gold/80 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <MdKeyboardArrowUp size={24} />
      </button>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Logo and description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/assets/images/logo.png" 
                alt="Nobuya Resto Logo" 
                className="h-16"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Nobuya Resto offers an authentic Japanese dining experience with a blend of traditional Kyoto flavors and modern culinary artistry in elegant settings.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/nobuyaresto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-warm-gold/20 hover:bg-warm-gold text-warm-gold hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://tiktok.com/@nobuyaresto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-warm-gold/20 hover:bg-warm-gold text-warm-gold hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a 
                href="https://facebook.com/NobuyaRestoIndonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-warm-gold/20 hover:bg-warm-gold text-warm-gold hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://youtube.com/nobuyaresto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-warm-gold/20 hover:bg-warm-gold text-warm-gold hover:text-white p-2 rounded-full transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <a 
                href="https://www.nobuyaresto.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-2"
              >
                <MdLanguage /> www.nobuyaresto.id
              </a>
              <div className="text-gray-600 text-sm mt-2 flex items-center">
                <MdPeople className="mr-2" /> 
                <span>Proudly serving customers since 2022</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-warm-gold"></span>
            </h3>
            <div className="grid grid-cols-2">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Home
                </Link>
                <Link to="/menu" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Menu
                </Link>
                <Link to="/gallery" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Gallery
                </Link>
                <Link to="/reservation" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Reservation
                </Link>
                <Link to="/about" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> About Us
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Contact
                </Link>
              </nav>
              
              <nav className="flex flex-col space-y-3">
                <Link to="/career" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Careers
                </Link>
                <Link to="/faq" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> FAQ
                </Link>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Terms of Service
                </Link>
                <a href="https://blog.nobuyaresto.id" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Blog
                </a>
                <a href="/gift-cards" className="text-gray-400 hover:text-warm-gold transition-colors duration-200 flex items-center gap-1">
                  <span className="text-xs text-warm-gold">›</span> Gift Cards
                </a>
              </nav>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="font-heading text-lg mb-3 flex items-center">
                <MdRestaurantMenu className="mr-2 text-warm-gold" /> Our Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Dine-in Experience</li>
                <li>• Private Events</li>
                <li>• Catering Services</li>
                <li>• Corporate Functions</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading mb-6 relative">
              Our Locations
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-warm-gold"></span>
            </h3>
            
            <div className="flex mb-4 gap-2">
              <button 
                onClick={() => setActiveLocation('jakarta')}
                className={`px-4 py-2 text-sm rounded-t-md ${activeLocation === 'jakarta' 
                  ? 'bg-warm-gold text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                Jakarta
              </button>
              <button 
                onClick={() => setActiveLocation('surabaya')}
                className={`px-4 py-2 text-sm rounded-t-md ${activeLocation === 'surabaya' 
                  ? 'bg-warm-gold text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                Surabaya
              </button>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-heading text-warm-gold mb-2">{activeLocationData.name}</h4>
              <p className="text-gray-500 text-sm mb-3">{activeLocationData.features}</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MdLocationOn className="text-warm-gold text-xl mt-1 mr-3" />
                  <span className="text-gray-400">
                    {activeLocationData.address.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </span>
                </li>
                <li className="flex items-center">
                  <MdPhone className="text-warm-gold text-xl mr-3" />
                  <span className="text-gray-400">{activeLocationData.phone}</span>
                </li>
                <li className="flex items-center">
                  <MdWhatsapp className="text-warm-gold text-xl mr-3" />
                  <span className="text-gray-400">{activeLocationData.whatsapp}</span>
                </li>
                <li className="flex items-center">
                  <MdEmail className="text-warm-gold text-xl mr-3" />
                  <span className="text-gray-400">{activeLocationData.email}</span>
                </li>
                <li>
                  <a 
                    href={activeLocationData.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-warm-gold hover:text-warm-gold/80 transition-colors"
                  >
                    <FaMapMarkerAlt className="mr-3" /> 
                    <span>View on Google Maps</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Opening Hours and Additional Info */}
          <div>
            <h3 className="text-xl font-heading mb-6 relative">
              Hours & Information
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-warm-gold"></span>
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <MdAccessTime className="text-warm-gold text-xl mr-3" />
                <h4 className="font-heading text-lg">Opening Hours</h4>
              </div>
              <div className="ml-8 text-gray-400">
                <p className="mb-2">Monday – Sunday: 11:00 – 22:00 WIB</p>
                <p className="text-sm italic">(last order 21:30 WIB)</p>
              </div>
            </div>
            
            <div className="mb-6 pb-6 border-b border-gray-800">
              <div className="flex items-center mb-3">
                <FaCreditCard className="text-warm-gold text-xl mr-3" />
                <h4 className="font-heading text-lg">Payment Methods</h4>
              </div>
              <ul className="ml-8 text-gray-400 text-sm grid grid-cols-1 gap-1">
                {paymentMethods.map((method, index) => (
                  <li key={index}>• {method}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <MdEventAvailable className="text-warm-gold text-xl mr-3" />
                <h4 className="font-heading text-lg">Reservations</h4>
              </div>
              <p className="ml-8 text-gray-400 mb-2">
                Reserve via phone, WhatsApp, or online through our reservation system.
              </p>
              <div className="ml-8 mt-3">
                <Link 
                  to="/reservation" 
                  className="bg-warm-gold hover:bg-warm-gold/80 text-white px-4 py-2 rounded-md inline-block transition-colors"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gray-900/70 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="font-heading text-xl mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get updates on special events, seasonal menus, and exclusive offers.</p>
            </div>
            <div className="md:w-1/3 w-full">
              <form className="flex w-full">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-md border-0 focus:outline-none bg-gray-800 text-white"
                />
                <button 
                  type="submit" 
                  className="bg-warm-gold hover:bg-warm-gold/80 text-white px-4 py-3 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2" /> 
            <span>{currentYear} Nobuya Resto. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-warm-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-warm-gold transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-warm-gold transition-colors">Sitemap</Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-xs mt-6">
          <p>Made with <FaHeart className="inline text-sakura-red mx-1" /> in Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;