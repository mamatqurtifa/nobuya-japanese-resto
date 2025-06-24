import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  IoRestaurantOutline,
  IoTimeOutline,
  IoStarOutline,
  IoLeafOutline,
  IoImageOutline,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";
import { FaAward, FaUtensils, FaSeedling, FaHistory } from "react-icons/fa";

const AboutSection = () => {
  // State for expandable content sections
  const [expandedSection, setExpandedSection] = useState(null);

  // Awards and recognition data
  const awards = [
    {
      year: "2025",
      title: "Best Japanese Restaurant",
      organization: "Culinary Excellence Awards",
    },
    {
      year: "2024",
      title: "Innovation in Asian Cuisine",
      organization: "Food & Beverage Association",
    },
    {
      year: "2023",
      title: "Top 10 Dining Experiences",
      organization: "Gourmet Magazine",
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Nobuya Resto opened its doors in Jakarta, introducing authentic Kyoto cuisine with a modern twist.",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Following our success, we opened our second branch in Surabaya to share our culinary vision with more of Indonesia.",
    },
    {
      year: "2024",
      title: "Menu Evolution",
      description:
        "Introduced our signature Omakase experience and expanded our premium sake collection.",
    },
    {
      year: "2025",
      title: "Looking Forward",
      description:
        "Continuing our journey of culinary excellence with plans for special chef collaborations and unique dining experiences.",
    },
  ];

  // Toggle expanded section
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-jp-cream relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div
        className="absolute top-0 left-0 w-32 h-32 bg-contain bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/assets/images/sakura.svg')" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-40 h-40 bg-contain bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/assets/images/bamboo.svg')" }}
      ></div>
      <div
        className="absolute top-1/4 right-12 w-24 h-24 bg-contain bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/assets/images/fan.svg')" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-16 w-28 h-28 bg-contain bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/assets/images/wave.svg')" }}
      ></div>

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-warm-gold font-medium mb-2 inline-block">
            Our Story
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-4">
            Discover Nobuya
          </h2>
          <div className="w-24 h-1 bg-warm-gold mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20">
          {/* Chef image with enhanced presentation */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/assets/images/about-chef.png"
                  alt="Nobuya Chef Preparing Sushi"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 to-transparent"></div>
              </div>

              {/* Enhanced badge */}
              <div className="absolute -bottom-4 -right-4">
                <div className="bg-warm-gold text-pure-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
                  <p className="font-heading text-xl">Since 2022</p>
                </div>
              </div>

              {/* Circular award badge */}
              <div className="absolute top-4 left-4 bg-sakura-red text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <FaAward className="text-xl mb-1" />
                <p className="text-xs font-bold text-center">Award Winning</p>
              </div>
            </div>
          </motion.div>

          {/* Main content with enhanced typography */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-6 relative">
              Nobuya, More Than Just Taste
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-sakura-red"></span>
            </h2>

            <p className="mb-4 text-lg leading-relaxed">
              Nobuya Resto embodies the concept of modern Japanese dining with
              warm and elegant touches of traditional Kyoto. As guests enter the
              restaurant, they are welcomed by a miniature torii gate in aged
              wood, symbolizing the transition into an authentic Japanese
              culinary experience.
            </p>

            <p className="mb-6 leading-relaxed">
              The restaurant's interior is dominated by neutral colors such as
              natural cream, light oak wood, and matte black accents, with
              touches of burgundy and matte gold in select ornaments to convey a
              premium yet serene ambiance.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-pure-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-heading text-xl mb-2 flex items-center">
                  <span className="text-warm-gold mr-2">
                    <FaUtensils />
                  </span>
                  Authentic
                </h4>
                <p className="text-sm leading-relaxed">
                  True flavors preserved as in Kyoto, with techniques passed
                  down through generations
                </p>
              </div>
              <div className="bg-pure-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-heading text-xl mb-2 flex items-center">
                  <span className="text-warm-gold mr-2">
                    <FaSeedling />
                  </span>
                  Premium
                </h4>
                <p className="text-sm leading-relaxed">
                  Highest quality ingredients for every dish, sourced locally
                  and from Japan
                </p>
              </div>
            </div>

            {/* Chef information with animated border */}
            <div className="flex gap-4 items-center p-4 border-l-2 border-warm-gold/50 relative before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-warm-gold/10 hover:before:w-full before:transition-all before:duration-700">
              <img
                src="/assets/images/chef-signature.svg"
                alt="Chef Signature"
                className="h-16 w-auto"
              />
              <div className="relative z-10">
                <h4 className="font-heading text-lg">Chef Hiroto Kazuki</h4>
                <p className="text-sm text-gray-600">Executive Chef</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Awards and Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 lg:items-start">
          {/* Awards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-pure-white p-8 rounded-lg shadow-md h-auto"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("awards")}
            >
              <h3 className="font-heading text-2xl flex items-center text-gray-800">
                <FaAward className="text-warm-gold mr-3" />
                Awards & Recognition
              </h3>
              {expandedSection === "awards" ? (
                <IoChevronUp className="text-warm-gold" />
              ) : (
                <IoChevronDown className="text-gray-500" />
              )}
            </div>

            <AnimatePresence>
              {expandedSection === "awards" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  style={{ display: "block" }}
                >
                  <div className="mt-6 space-y-4 pt-4 border-t border-gray-100">
                    {awards.map((award, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex gap-4"
                      >
                        <div className="bg-jp-cream rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-warm-gold">
                            {award.year}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-heading text-lg text-gray-800">
                            {award.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {award.organization}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-pure-white p-8 rounded-lg shadow-md h-auto self-start"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("timeline")}
            >
              <h3 className="font-heading text-2xl flex items-center text-gray-800">
                <FaHistory className="text-warm-gold mr-3" />
                Our Journey
              </h3>
              {expandedSection === "timeline" ? (
                <IoChevronUp className="text-warm-gold" />
              ) : (
                <IoChevronDown className="text-gray-500" />
              )}
            </div>

            <AnimatePresence>
              {expandedSection === "timeline" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  style={{ display: "block" }}
                >
                  <div className="mt-6 space-y-8 pt-4 border-t border-gray-100">
                    <div className="relative before:absolute before:left-6 before:top-4 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-jp-cream">
                      {timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex gap-4 relative mb-8 last:mb-0"
                        >
                          <div className="bg-warm-gold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 z-10">
                            <span className="font-bold text-white">
                              {event.year}
                            </span>
                          </div>
                          <div className="pt-2">
                            <h4 className="font-heading text-lg text-gray-800">
                              {event.title}
                            </h4>
                            <p className="text-gray-600">{event.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-ink-black text-white p-8 rounded-lg">
            <h3 className="font-heading text-2xl mb-4">
              Experience the Nobuya Difference
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              We invite you to join us and experience the perfect harmony of
              tradition and innovation that makes Nobuya Resto unique.
            </p>
            <a
              href="/reservation"
              className="inline-block bg-warm-gold hover:bg-warm-gold/90 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Reserve Your Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
