// pages/Register.tsx
import { motion } from 'framer-motion';
import AuthForm from '../components/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AuthForm isLogin={false} />
      </motion.div>
    </div>
  );
};

export default Register;
