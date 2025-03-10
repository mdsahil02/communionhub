import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      // Framer Motion fade-down effect
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}

      // Full-screen flex container with background
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      
      // Example Unsplash image relevant to charity/community
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          Bringing people together through community events and support.
        </p>

        <Link to="/events">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300"
          >
            Explore Events
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
