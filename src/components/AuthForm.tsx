// // components/AuthForm.tsx
// import { motion } from 'framer-motion';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';

// interface AuthFormProps {
//   isLogin?: boolean;
// }

// interface FormData {
//   email: string;
//   password: string;
//   username?: string;
// }

// interface InputProps {
//   name: keyof FormData; // Updated here
//   type: string;
//   placeholder: string;
//   Icon: React.ElementType;
//   rules: any;
// }

// const AuthForm = ({ isLogin = true }: AuthFormProps) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const containerVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 50 },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//     // Add your authentication logic here
//   };

//   const InputField = ({ name, type, placeholder, Icon, rules }: InputProps) => (
//     <motion.div variants={itemVariants} className="mb-6">
//       <div className="relative">
//         <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//         <input
//           type={type}
//           placeholder={placeholder}
//           className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//           {...register(name, rules)}
//         />
//       </div>
//       {errors[name] && (
//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-red-500 text-sm mt-1"
//         >
//           {errors[name]?.message}
//         </motion.p>
//       )}
//     </motion.div>
//   );

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       className="max-w-md w-full mx-4 bg-white rounded-2xl shadow-xl p-8"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl font-bold text-gray-800 mb-8 text-center"
//       >
//         {isLogin ? 'Welcome Back' : 'Create Account'}
//       </motion.h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {!isLogin && (
//           <InputField
//             name="username"
//             type="text"
//             placeholder="Username"
//             Icon={FiUser}
//             rules={{ required: 'Username is required' }}
//           />
//         )}

//         <InputField
//           name="email"
//           type="email"
//           placeholder="Email Address"
//           Icon={FiMail}
//           rules={{
//             required: 'Email is required',
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//               message: 'Invalid email address',
//             },
//           }}
//         />

//         <InputField
//           name="password"
//           type="password"
//           placeholder="Password"
//           Icon={FiLock}
//           rules={{
//             required: 'Password is required',
//             minLength: {
//               value: 8,
//               message: 'Password must be at least 8 characters',
//             },
//           }}
//         />

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
//         >
//           <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
//           <FiArrowRight className="text-xl" />
//         </motion.button>
//       </form>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="mt-8 text-center"
//       >
//         <p className="text-gray-600">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}
//           <a
//             href={isLogin ? '/register' : '/login'}
//             className="text-blue-600 hover:underline ml-2"
//           >
//             {isLogin ? 'Create account' : 'Sign in'}
//           </a>
//         </p>
//       </motion.div>

//       <div className="my-8 flex items-center">
//         <div className="flex-1 border-t border-gray-200"></div>
//         <span className="px-4 text-gray-500 text-sm">Or continue with</span>
//         <div className="flex-1 border-t border-gray-200"></div>
//       </div>

//       <div className="flex justify-center space-x-4">
//         {['Google', 'GitHub', 'Facebook'].map((provider) => (
//           <motion.button
//             key={provider}
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
//           >
//             <img
//               src={`/icons/${provider.toLowerCase()}.svg`}
//               alt={provider}
//               className="w-6 h-6"
//             />
//           </motion.button>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default AuthForm;
// components/AuthForm.tsx
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiMail, FiLock, FiUser, FiArrowRight, FiHeart } from 'react-icons/fi';
import medicalLogo from '../assets/logo.svg'; // Add your logo

interface AuthFormProps {
  isLogin?: boolean;
}

interface FormData {
  email: string;
  password: string;
  fullName?: string;
}

interface InputProps {
  name: keyof FormData;
  type: string;
  placeholder: string;
  Icon: React.ElementType;
  rules: any;
}

const AuthForm = ({ isLogin = true }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const InputField = ({ name, type, placeholder, Icon, rules }: InputProps) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
          {...register(name, rules)}
        />
      </div>
      {errors[name] && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm mt-2 ml-2 flex items-center gap-1"
        >
          <FiHeart className="flex-shrink-0" /> {errors[name]?.message}
        </motion.p>
      )}
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-96 max-w-md md:w-full mx-4 bg-white rounded-3xl shadow-lg p-8 border border-blue-50"
    >
      <div className="flex justify-center mb-8">
        <img src={medicalLogo} alt="Medical Logo" className="h-16 w-auto" />
      </div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl font-bold text-gray-800 mb-4 text-center"
      >
        {isLogin ? 'Welcome to DocBook' : 'Join Our Medical Community'}
      </motion.h1>

      <p className="text-center text-gray-600 mb-8">
        {isLogin
          ? 'Secure access to your health records'
          : 'Start your healthcare journey'}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {!isLogin && (
          <InputField
            name="fullName"
            type="text"
            placeholder="Full Name"
            Icon={FiUser}
            rules={{ required: 'Full name is required' }}
          />
        )}

        <InputField
          name="email"
          type="email"
          placeholder="Professional Email"
          Icon={FiMail}
          rules={{
            required: 'Medical email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid medical email address',
            },
          }}
        />

        <InputField
          name="password"
          type="password"
          placeholder="Secure Password"
          Icon={FiLock}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
        />

        {isLogin && (
          <motion.div
            variants={itemVariants}
            className="flex justify-end -mt-4"
          >
            <a
              href="/forgot-password"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot Password?
            </a>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          <span>
            {isLogin ? 'Access Medical Portal' : 'Create Secure Account'}
          </span>
          <FiArrowRight className="text-xl" />
        </motion.button>
      </form>

      <motion.div
        variants={itemVariants}
        className="mt-8 text-center text-gray-600"
      >
        {isLogin
          ? 'New to our medical network?'
          : 'Already part of our healthcare system?'}
        <a
          href={isLogin ? '/register' : '/login'}
          className="text-blue-600 hover:underline ml-2 font-medium"
        >
          {isLogin ? 'Register here' : 'Login here'}
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 p-4 bg-blue-50 rounded-xl text-center"
      >
        <p className="text-sm text-blue-800">
          <FiHeart className="inline-block mr-2" />
          Your health data is encrypted and 100% secure
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AuthForm;
