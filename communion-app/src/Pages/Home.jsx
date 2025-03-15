import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Unifying Communities",
      description:
        "Communion bridges diverse religious communities, becoming the social...",
      icon: "👥",
    },
    {
      title: "Innovative and Fun",
      description:
        "Experience faith in a fresh way through our interactive features, engaging events...",
      icon: "♻",
    },
    {
      title: "Promoting Unity",
      description:
        "We foster understanding and harmony between different faith communities...",
      icon: "📈",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 bg-gray-100"
      >
        <h2 className="text-3xl font-bold">
          Connecting People Across Faiths & Interests
        </h2>
        <p className="text-gray-600 mt-4">
          Connecting people of all faiths through events and community support.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/events")}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded"
        >
          Explore Events
        </motion.button>
      </motion.div>
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Communion Rocks!
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mt-10">
          <motion.div
            className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed space-x-2">
              Communion is not just another platform—it's a vibrant space that
              unites diverse faiths, beliefs, and traditions. By promoting
              collaboration and connection, we're fostering a world where
              differences become strengths and unity becomes the norm.
            </p>
            <button className="mt-4 text-white flex items-center space-x-2 border-b-2 border-white pb-1 hover:opacity-80">
              <span>Why Join Us?</span>
              <span>→</span>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-2/3 lg:ml-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
                <button className="mt-4 flex items-center space-x-2 bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-600 transition">
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-[#0E0F12] text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <h2 className="text-xl font-semibold text-white">Communion</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Discover the power of connection with Communion. Uniting diverse
              communities through spirituality and innovation, we foster
              inclusivity, collaboration, and social cohesion for a better
              world.
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-3">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Communities",
                "Events",
                "Leaders",
                "Support",
                "Profile",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm">contact@communionhub.org</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>Copyright © 2024. All rights reserved to Communion</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
