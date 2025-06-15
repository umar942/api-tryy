// import React from 'react';
// import { useState } from 'react';
// import useAuthStore from '../store/authstore';
// import { motion, AnimatePresence } from 'framer-motion';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const login = useAuthStore((state) => state.login);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const mockToken = 'sample-token-123';
//     const user = { name: form.name || 'User', email: form.email };
//     login(mockToken, user);
//     alert('Logged In!');
//   };

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setForm({ name: '', email: '', password: '' });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={isLogin ? 'login' : 'signup'}
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -80 }}
//             transition={{ duration: 0.4 }}
//           >
//             <h2 className="text-2xl font-bold text-center mb-4">
//               {isLogin ? 'Login' : 'Sign Up'}
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {!isLogin && (
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//               )}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 {isLogin ? 'Login' : 'Sign Up'}
//               </button>
//             </form>
//             <p className="text-center mt-4 text-sm text-gray-600">
//               {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//               <button
//                 onClick={toggleForm}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 {isLogin ? 'Sign up' : 'Login'}
//               </button>
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useAuthStore from '../store/authstore';
import { useLogin, useSignup } from '../hooks/useAuth';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstname: 'Tanzeel',
    lastname: 'khan',
    email: 'tanzeel0680@gmail.com',
    password: 'tanzee',
    phone: '1234567890',
    country: 'pakistan'
  });

  const loginStore = useAuthStore((state) => state.login);
  const { mutate: login, isPending: isLoggingIn } = useLogin();
  const { mutate: signup, isPending: isSigningUp } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(
        { email: form.email, password: form.password },
        {
          onSuccess: (data) => {
            loginStore(data.token, data.user);
            alert('Login successful!');
          },
        }
      );
    } else {
      signup(
        form,
        {
          onSuccess: (data) => {
            alert("Signup successful! Please login.");
            setIsLogin(true);
          }
        }
      );
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              {isLogin ? 'Login' : 'Sign Up'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={form.firstname}
                    onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastname}
                    onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </>
              )}
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                disabled={isLoggingIn || isSigningUp}
              >
                {isLogin ? (isLoggingIn ? "Logging in..." : "Login") : (isSigningUp ? "Signing up..." : "Sign Up")}
              </button>
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={toggleForm}
                className="text-blue-600 hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthForm;
