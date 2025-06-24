import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  IoCalendarOutline, 
  IoTimeOutline, 
  IoPersonOutline, 
  IoRestaurantOutline,
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoInformationCircleOutline
} from 'react-icons/io5';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    branch: 'jakarta', // Default branch selection
    specialRequest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Get tomorrow's date for minimum reservation date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  
  // Get date 3 months from now for maximum reservation date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const branches = {
    jakarta: {
      name: "Jakarta Branch",
      address: ["Jl. Senopati No. 88, Kebayoran Baru", "Jakarta Selatan, DKI Jakarta 12190"],
      features: "(2 Lantai + Rooftop Area)",
      phone: "(021) 7890-1122",
      whatsapp: "+62 812-3456-7890",
      email: "jakarta@nobuyaresto.id"
    },
    surabaya: {
      name: "Surabaya Branch",
      address: ["Jl. Raya Darmo No. 22, Tegalsari", "Surabaya, Jawa Timur 60264"],
      features: "(2 Lantai, Semi-Outdoor Garden Area)",
      phone: "(031) 9988-7744",
      whatsapp: "+62 813-9000-5522",
      email: "surabaya@nobuyaresto.id"
    }
  };
  
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
          phone: '',
          date: '',
          time: '',
          guests: '',
          branch: 'jakarta',
          specialRequest: ''
        });
      }, 5000); // Increased duration to give user more time to read
    }, 1500);
  };
  
  // Get active branch data
  const activeBranch = branches[formData.branch];
  
  return (
    <section id="reservation" className="section-padding relative overflow-hidden bg-jp-cream">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-bamboo-pattern bg-repeat"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Reserve Your Table</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience authentic Japanese dining at Nobuya Resto. Book your table now to secure
            a memorable culinary journey with us.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-pure-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-2xl mb-6 pb-2 border-b border-jp-cream">Reservation Form</h3>
              
              {isSuccess ? (
                <motion.div 
                  className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading mb-2">Reservation Received!</h3>
                  <p className="mb-4">Thank you for your reservation request. We will contact you shortly to confirm your booking.</p>
                  <p className="text-sm text-gray-600">Reservation details have been sent to your email.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="branch" className="block text-sm font-medium mb-2">Select Branch</label>
                      <div className="relative">
                        <select
                          id="branch"
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors appearance-none"
                        >
                          <option value="jakarta">Jakarta Branch</option>
                          <option value="surabaya">Surabaya Branch</option>
                        </select>
                        <IoLocationOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={minDate}
                          max={maxDateString}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                        />
                        <IoCalendarOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Reservations available up to 3 months in advance</p>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2">Time</label>
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Select time</option>
                          <optgroup label="Lunch">
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                          </optgroup>
                          <optgroup label="Dinner">
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
                          </optgroup>
                        </select>
                        <IoTimeOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
                    <div className="relative">
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7+">7+ People (Please specify in notes)</option>
                      </select>
                      <IoPersonOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">For parties of 7 or more, please call us directly</p>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequest" className="block text-sm font-medium mb-2">Special Request (Optional)</label>
                    <textarea
                      id="specialRequest"
                      name="specialRequest"
                      value={formData.specialRequest}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-warm-gold focus:ring focus:ring-warm-gold/20 focus:outline-none transition-colors"
                      placeholder="Please let us know if you have any special requests or dietary requirements"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full btn btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>Reserve a Table</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Right column - Info */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-pure-white p-8 rounded-lg shadow-md h-full">
              <div className="inline-block px-4 py-2 mb-6 bg-warm-gold text-white rounded-lg">
                <h3 className="font-heading text-xl">{activeBranch.name}</h3>
              </div>
              <p className="text-gray-600 italic mb-6">{activeBranch.features}</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-jp-cream p-3 rounded-full mr-4">
                    <IoRestaurantOutline className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Monday – Sunday: 11:00 – 22:00 WIB</p>
                    <p className="text-gray-600 text-sm italic">(last order 21:30 WIB)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-jp-cream p-3 rounded-full mr-4">
                    <IoLocationOutline className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-1">Location</h4>
                    {activeBranch.address.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-jp-cream p-3 rounded-full mr-4">
                    <IoCallOutline className="text-warm-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-1">Contact</h4>
                    <p className="text-gray-600">Phone: {activeBranch.phone}</p>
                    <p className="text-gray-600">WhatsApp: {activeBranch.whatsapp}</p>
                    <p className="text-gray-600 flex items-center gap-1">
                      <IoMailOutline className="text-gray-500" /> {activeBranch.email}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 mt-4 border-t border-jp-cream">
                  <div className="flex items-center gap-2 mb-4">
                    <IoInformationCircleOutline className="text-warm-gold text-xl" />
                    <h4 className="font-heading text-lg">Reservation Policy</h4>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-600 ml-2">
                    <li className="flex items-start">
                      <span className="text-warm-gold mr-2">•</span>
                      <span>Reservations are held for 15 minutes after the scheduled time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-gold mr-2">•</span>
                      <span>For groups of 7 or more, please contact us directly by phone.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-gold mr-2">•</span>
                      <span>A credit card or deposit may be required for larger parties or special events.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-gold mr-2">•</span>
                      <span>Please inform us of any allergies or dietary restrictions when booking.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-gold mr-2">•</span>
                      <span>Cancellations should be made at least 24 hours in advance.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-jp-cream/50 rounded-lg mt-6">
                  <p className="text-warm-gold font-medium mb-2">Looking for Private Dining?</p>
                  <p className="text-sm text-gray-700 mb-3">
                    We offer private dining rooms for special occasions and business events.
                    Contact us directly for more information and pricing.
                  </p>
                  {formData.branch === 'jakarta' ? (
                    <a href="tel:+6281234567890" className="text-warm-gold hover:underline text-sm flex items-center">
                      <IoCallOutline className="mr-1" />
                      Call Jakarta for Private Events
                    </a>
                  ) : (
                    <a href="tel:+6281390005522" className="text-warm-gold hover:underline text-sm flex items-center">
                      <IoCallOutline className="mr-1" />
                      Call Surabaya for Private Events
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;