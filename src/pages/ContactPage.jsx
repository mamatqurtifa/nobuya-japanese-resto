/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdWhatsapp } from 'react-icons/md';
import { FaInstagram, FaFacebook, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    branch: 'jakarta' // Default branch selection
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('jakarta');
  
  useEffect(() => {
    document.title = "Contact Us - Nobuya Resto";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          branch: 'jakarta'
        });
      }, 3000);
    }, 1500);
  };

  const branches = {
    jakarta: {
      name: "Jakarta Branch",
      address: [
        "Jl. Senopati No. 88, Kebayoran Baru",
        "Jakarta Selatan, DKI Jakarta 12190"
      ],
      features: "(2 Lantai + Rooftop Area)",
      phone: "(021) 7890-1122",
      whatsapp: "+62 812-3456-7890",
      email: "jakarta@nobuyaresto.id",
      hours: "Monday – Sunday: 11:00 – 22:00 WIB",
      lastOrder: "(last order 21:30 WIB)",
      mapUrl: "https://maps.google.com/?q=Nobuya+Resto+Jakarta"
    },
    surabaya: {
      name: "Surabaya Branch",
      address: [
        "Jl. Raya Darmo No. 22, Tegalsari",
        "Surabaya, Jawa Timur 60264"
      ],
      features: "(2 Lantai, Semi-Outdoor Garden Area)",
      phone: "(031) 9988-7744",
      whatsapp: "+62 813-9000-5522",
      email: "surabaya@nobuyaresto.id",
      hours: "Monday – Sunday: 11:00 – 22:00 WIB",
      lastOrder: "(last order 21:30 WIB)",
      mapUrl: "https://maps.google.com/?q=Nobuya+Resto+Surabaya"
    }
  };

  const socialMedia = [
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/nobuyaresto", handle: "@nobuyaresto" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/NobuyaRestoIndonesia", handle: "Nobuya Resto Indonesia" },
    { name: "Website", icon: <FaGlobe />, url: "https://www.nobuyaresto.id", handle: "www.nobuyaresto.id" }
  ];

  const activeBranch = branches[activeTab];

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
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              We'd love to hear from you. Reach out with questions, feedback, or to plan your next visit.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl mb-6">Send Us a Message</h2>
            
            {isSuccess ? (
              <motion.div 
                className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-heading mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium mb-2">Select Branch</label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                  >
                    <option value="jakarta">Jakarta Branch</option>
                    <option value="surabaya">Surabaya Branch</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary flex items-center justify-center w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            )}

            {/* Social Media Links */}
            <motion.div 
              className="mt-8 p-6 bg-jp-cream/40 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-xl mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social, index) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-pure-white px-4 py-2 rounded-full hover:bg-warm-gold/10 transition-colors text-gray-700 hover:text-warm-gold"
                  >
                    <span className="text-warm-gold">{social.icon}</span>
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Info with Branch Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-3xl">Our Locations</h2>
              <div className="flex rounded-lg overflow-hidden border border-gray-200">
                <button 
                  onClick={() => setActiveTab('jakarta')}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'jakarta' ? 'bg-warm-gold text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Jakarta
                </button>
                <button 
                  onClick={() => setActiveTab('surabaya')}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === 'surabaya' ? 'bg-warm-gold text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Surabaya
                </button>
              </div>
            </div>
            
            <div className="bg-jp-cream p-8 rounded-lg shadow-sm">
              <div className="inline-block px-4 py-2 bg-warm-gold text-pure-white rounded-lg mb-4">
                <h3 className="font-heading text-lg">{activeBranch.name}</h3>
              </div>
              <p className="text-gray-600 italic mb-4">{activeBranch.features}</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pure-white p-3 rounded-full mr-4">
                    <MdLocationOn className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Address</h3>
                    {activeBranch.address.map((line, i) => (
                      <p key={i} className="text-gray-700">{line}</p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pure-white p-3 rounded-full mr-4">
                    <MdAccessTime className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Hours</h3>
                    <p className="text-gray-700">{activeBranch.hours}</p>
                    <p className="text-gray-600 italic">{activeBranch.lastOrder}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pure-white p-3 rounded-full mr-4">
                    <MdPhone className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Contact</h3>
                    <p className="text-gray-700">Phone: {activeBranch.phone}</p>
                    <div className="flex items-center gap-1 text-gray-700">
                      <MdWhatsapp className="text-green-500" /> WhatsApp: {activeBranch.whatsapp}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pure-white p-3 rounded-full mr-4">
                    <MdEmail className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Email</h3>
                    <p className="text-gray-700">{activeBranch.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heading text-xl">Find Us</h3>
                <a 
                  href={activeBranch.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-warm-gold hover:text-warm-gold/80 transition-colors"
                >
                  <FaMapMarkerAlt /> Open in Google Maps
                </a>
              </div>
              <div className="aspect-[4/3] w-full bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual Google Maps embed for each branch */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <iframe
                    title={`Map of Nobuya Resto ${activeBranch.name}`}
                    src={activeTab === 'jakarta' ? 
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2940067650193!2d106.80669075018777!3d-6.227569962722063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505c76d775%3A0xe0afc8114a7fafb!2sJl.%20Senopati%20No.88%2C%20RW.8%2C%20Selong%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012110!5e0!3m2!1sen!2sid!4v1624491528267!5m2!1sen!2sid" :
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.583830413486!2d112.73542845019991!3d-7.28054317379939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbdafb1f7165%3A0x7247aea39b366ade!2sJl.%20Darmo%2C%20Tegalsari%2C%20Kec.%20Tegalsari%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1624491591158!5m2!1sen!2sid"
                    }
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;