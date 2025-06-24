import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { IoRestaurantOutline } from 'react-icons/io5';
import { GiCupcake, GiJapan } from 'react-icons/gi';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Nobuya Resto";
  }, []);

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
            <h1 className="font-heading text-4xl md:text-5xl mb-4">
              About Nobuya
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              Our story, philosophy, and commitment to authentic Japanese
              cuisine.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Content */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl mb-6 relative">
              Our Story
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-warm-gold"></span>
            </h2>
            <p className="text-lg mb-4">
              Nobuya Resto was established in 2022 with a vision to bring the
              authentic taste and ambiance of Kyoto, Japan to food enthusiasts.
              What started as a passion project by Chef Hiroto Kazuki has grown
              into a culinary destination that celebrates the harmony of
              traditional Japanese techniques and modern dining experiences.
            </p>
            <p className="mb-6">
              The name "Nobuya" combines "Nobu" (信) meaning "faith" and "Ya"
              (屋) meaning "house" – representing our commitment to faithfully
              recreating the essence of Japanese dining while nurturing a space
              where guests feel welcome and at home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/src/assets/images/restaurant-exterior.png"
              alt="Nobuya Resto Exterior"
              className="w-full h-auto rounded-lg shadow-xl"
              onError={(e) => {
                e.target.src = "/src/assets/images/restaurant-exterior.png";
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className="mb-16 text-center py-12 bg-jp-cream rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="font-heading text-3xl mb-6">Our Philosophy</h2>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl italic text-gray-700">
              "Every dish tells a story; every ingredient has a purpose. At
              Nobuya, we honor the wisdom of Japanese culinary traditions while
              embracing the creativity of modern gastronomy."
            </p>
            <p className="mt-4 text-warm-gold font-medium">
              — Chef Hiroto Kazuki
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-pure-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-full bg-warm-gold/20 flex items-center justify-center mb-4 mx-auto">
              <IoRestaurantOutline className="text-warm-gold w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl mb-3 text-center">
              Premium Ingredients
            </h3>
            <p className="text-gray-600 text-center">
              We source only the finest seasonal ingredients, both imported from
              Japan and from local sustainable producers.
            </p>
          </motion.div>

          <motion.div
            className="bg-pure-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-warm-gold/20 flex items-center justify-center mb-4 mx-auto">
              <GiCupcake className="text-warm-gold w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl mb-3 text-center">
              Artisanal Craftsmanship
            </h3>
            <p className="text-gray-600 text-center">
              Our chefs train for years to master the precision and artistry
              required to prepare authentic Japanese cuisine.
            </p>
          </motion.div>

          <motion.div
            className="bg-pure-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-warm-gold/20 flex items-center justify-center mb-4 mx-auto">
              <GiJapan className="text-warm-gold w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl mb-3 text-center">
              Omotenashi
            </h3>
            <p className="text-gray-600 text-center">
              We practice the Japanese tradition of "omotenashi" – wholehearted
              hospitality that anticipates the needs of our guests.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="font-heading text-3xl mb-8 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chef Hiroto Kazuki */}
            <div className="bg-pure-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/src/assets/images/about-chef.png"
                  alt="Chef Hiroto Kazuki"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "/src/assets/images/placeholder-person.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">
                  Chef Hiroto Kazuki
                </h3>
                <p className="text-warm-gold mb-3">Executive Chef</p>
                <p className="text-gray-600">
                  With over 15 years of experience in traditional Japanese
                  cuisine, Chef Hiroto leads our culinary team with passion and
                  precision. Trained in Kyoto, he brings authentic flavors and
                  innovative techniques to every dish at Nobuya.
                </p>
              </div>
            </div>

            {/* Restaurant Manager - Assume this will use a Japanese manager photo from internet */}
            <div className="bg-pure-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/src/assets/images/team/naomi.ppg"
                  alt="Naomi Tanaka"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "/src/assets/images/naomi.png";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">Naomi Tanaka</h3>
                <p className="text-warm-gold mb-3">Restaurant Manager</p>
                <p className="text-gray-600">
                  With her elegant approach to hospitality and meticulous
                  attention to detail, Naomi ensures every guest experiences the
                  true essence of Japanese service excellence and leaves Nobuya
                  with memorable dining experiences.
                </p>
              </div>
            </div>

            {/* Sushi Master - Assume this will use a Japanese sushi master photo from internet */}
            <div className="bg-pure-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/src/assets/images/team/kenji.png"
                  alt="Kenji Yamamoto"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "/src/assets/images/kenji.png";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-1">Kenji Yamamoto</h3>
                <p className="text-warm-gold mb-3">Sushi Master</p>
                <p className="text-gray-600">
                  After a decade of training in Tokyo's renowned sushi
                  establishments, Kenji brings unparalleled craftsmanship and
                  creativity to Nobuya's sushi menu. His precise knife skills
                  and artistic presentations elevate each piece into a work of
                  culinary art.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-jp-cream p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="font-heading text-3xl mb-6 text-center">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl mb-4">Sustainability</h3>
              <p className="text-gray-700 mb-4">
                At Nobuya, we are committed to sustainable practices throughout
                our restaurant operations. We carefully source our seafood from
                responsible suppliers who follow sustainable fishing practices,
                and we prioritize seasonal ingredients to reduce our carbon
                footprint.
              </p>
              <p className="text-gray-700">
                Our packaging is biodegradable, and we actively work to minimize
                food waste through thoughtful preparation techniques and portion
                control.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl mb-4">
                Cultural Authenticity
              </h3>
              <p className="text-gray-700 mb-4">
                While embracing innovation, we remain deeply respectful of
                traditional Japanese culinary arts and cultural practices. Our
                team regularly travels to Japan to study with master chefs and
                artisans, ensuring that the techniques and flavors we bring to
                our guests are authentic and respectful of their origins.
              </p>
              <p className="text-gray-700">
                We believe in creating not just meals, but meaningful cultural
                experiences that connect our guests to the rich culinary
                heritage of Japan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
