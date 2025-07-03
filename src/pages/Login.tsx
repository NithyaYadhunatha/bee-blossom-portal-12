
import { useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);
  
  const formInView = useIntersectionObserver({
    ref: formRef,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-bumblebee-black to-bumblebee-black/90 flex items-center justify-center">
      <div 
        ref={formRef}
        className={`w-full max-w-md transition-all duration-700 ${
          formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex">
            <button
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                isLogin 
                  ? 'bg-bumblebee-yellow text-bumblebee-black' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                !isLogin 
                  ? 'bg-bumblebee-yellow text-bumblebee-black' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-playfair font-bold text-center mb-6">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            
            <form>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder={isLogin ? "Enter your password" : "Create a password"}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  required
                />
              </div>
              
              {isLogin && (
                <div className="flex justify-end mb-6">
                  <a href="#" className="text-bumblebee-gold hover:underline text-sm">
                    Forgot password?
                  </a>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full py-3 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {isLogin 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <button
                  className="text-bumblebee-gold hover:underline font-medium"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
