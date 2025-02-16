import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-dark mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-primary inline-block"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}