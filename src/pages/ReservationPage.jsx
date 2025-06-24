/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import ReservationSection from '../components/sections/ReservationSection';

const ReservationPage = () => {
  useEffect(() => {
    document.title = "Reservations - Nobuya Resto";
  }, []);

  const diningOptions = [
    {
      title: "Regular Dining",
      description: "Enjoy our à la carte menu in our stylish main dining area or semi-outdoor spaces.",
      features: ["Groups up to 6 people", "Online reservation available", "Walk-ins welcome based on availability"]
    },
    {
      title: "Private Room",
      description: "Perfect for intimate gatherings, celebrations, or business meetings with complete privacy.",
      features: ["4-12 guests", "Customizable menu options", "Advanced reservation required (min. 3 days)"]
    },
    {
      title: "Group Events",
      description: "Host your special occasion or corporate event in our dedicated event spaces.",
      features: ["Up to 40 guests", "Custom menus and beverage packages", "Requires consultation with our events team"]
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I make a reservation?",
      answer: "We recommend booking at least 3-7 days in advance for weekdays and 1-2 weeks for weekends or holidays to secure your preferred time."
    },
    {
      question: "Is there a cancellation policy?",
      answer: "Yes, we kindly ask that you notify us at least 24 hours in advance if you need to cancel or modify your reservation. For groups of 7 or more, a 48-hour notice is required."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Absolutely. Please inform us of any allergies or dietary requirements in the special requests section when making your reservation, and our chefs will be happy to accommodate your needs."
    },
    {
      question: "Is there a dress code?",
      answer: "We suggest smart casual attire. While we don't enforce a strict dress code, we kindly request no beachwear, sportswear, or flip-flops in the evening."
    }
  ];

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
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Make a Reservation</h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              Reserve your table at Nobuya Resto and experience the authentic flavors of Japan
              in an elegant and warm atmosphere.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reservation Form */}
      <ReservationSection />

      {/* Dining Options */}
      <section className="py-16 bg-pure-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Dining Options</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Choose the perfect dining experience for your visit to Nobuya Resto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-jp-cream/30 rounded-lg p-6 border border-jp-cream"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-heading text-xl mb-3">{option.title}</h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <IoCheckmarkCircleOutline className="text-warm-gold mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-jp-cream/30">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Find answers to common questions about dining at Nobuya Resto.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-pure-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="font-heading text-xl mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="bg-ink-black text-pure-white p-8 md:p-12 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-warm-gold/20 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-warm-gold/10 rounded-full"></div>
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">Special Occasions</h2>
              <p className="mb-8 text-gray-300">
                Planning a special celebration, corporate event, or looking for a unique dining experience? 
                Our team can create custom menus and arrangements tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+6281234567890" 
                  className="btn btn-primary"
                >
                  Call for Special Events
                </a>
                <a 
                  href="mailto:events@nobuyaresto.id" 
                  className="btn btn-outline-light"
                >
                  Email Our Events Team
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;