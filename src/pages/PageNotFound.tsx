import { motion } from 'framer-motion';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        {/* Animated Doctor Icon */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-6"
        >
          <svg
            className="w-24 h-24 text-blue-500"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
          >
            {/* Stethoscope Icon */}
            <motion.path
              d="M32 2v20M20 6h24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="32"
              cy="42"
              r="12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </svg>
        </motion.div>

        {/* Error Message */}
        <motion.h1
          className="text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Oops! Page not found.
        </motion.p>

        {/* Heartbeat Animation */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <svg
            className="w-64 h-16 text-red-500"
            viewBox="0 0 500 100"
            fill="none"
          >
            <motion.path
              d="M0 50 H100 L125 75 L150 25 L175 50 H500"
              stroke="currentColor"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'linear' }}
            />
          </svg>
        </motion.div>

        {/* Redirect Button */}
        <motion.a
          href="/"
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Return to Home
        </motion.a>
      </div>
    </div>
  );
};

export default PageNotFound;
