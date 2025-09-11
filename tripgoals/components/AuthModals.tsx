'use client';

import { useState, useEffect } from 'react';

export default function AuthModals() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  useEffect(() => {
    const handleShowLogin = () => setShowLoginModal(true);
    const handleShowSignup = () => setShowSignupModal(true);

    window.addEventListener('showLoginModal', handleShowLogin);
    window.addEventListener('showSignupModal', handleShowSignup);

    return () => {
      window.removeEventListener('showLoginModal', handleShowLogin);
      window.removeEventListener('showSignupModal', handleShowSignup);
    };
  }, []);

  const closeModal = (modalType: 'login' | 'signup') => {
    if (modalType === 'login') setShowLoginModal(false);
    if (modalType === 'signup') setShowSignupModal(false);
  };

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const userType = formData.get('userType') as string;
    
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    const isAdmin = userType === 'admin' && email === 'admin@tripgoals.com' && password === 'admin123';
    const isUser = userType === 'user';
    
    if (isAdmin || isUser) {
      const currentUser = {
        isLoggedIn: true,
        isAdmin: isAdmin,
        name: isAdmin ? 'Admin' : email.split('@')[0],
        email: email
      };
      
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      closeModal('login');
      window.location.reload();
      
      if (isAdmin) {
        alert('Admin login successful!');
      } else {
        alert('Login successful!');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const signup = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const userType = formData.get('userType') as string;
    
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const currentUser = {
      isLoggedIn: true,
      isAdmin: userType === 'admin',
      name: name,
      email: email
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    closeModal('signup');
    window.location.reload();
    alert('Account created successfully!');
  };

  return (
    <>
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white/95 backdrop-blur-md mx-auto p-8 rounded-3xl w-full max-w-md relative animate-modal-slide-in border border-white/30">
            <button 
              onClick={() => closeModal('login')}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer transition-colors"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form onSubmit={login} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Password</label>
                <input 
                  type="password" 
                  name="password"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="userType" value="user" defaultChecked className="mr-2" />
                  User
                </label>
                <label className="flex items-center">
                  <input type="radio" name="userType" value="admin" className="mr-2" />
                  Admin
                </label>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-4 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 mt-4 hover:from-blue-600 hover:to-blue-500 hover:-translate-y-0.5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white/95 backdrop-blur-md mx-auto p-8 rounded-3xl w-full max-w-md relative animate-modal-slide-in border border-white/30">
            <button 
              onClick={() => closeModal('signup')}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer transition-colors"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <form onSubmit={signup} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Password</label>
                <input 
                  type="password" 
                  name="password"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700 text-sm">Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-xl text-base transition-colors focus:outline-none focus:border-blue-500 bg-white/80"
                />
              </div>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="userType" value="user" defaultChecked className="mr-2" />
                  User
                </label>
                <label className="flex items-center">
                  <input type="radio" name="userType" value="admin" className="mr-2" />
                  Admin
                </label>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-4 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 mt-4 hover:from-blue-600 hover:to-blue-500 hover:-translate-y-0.5"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}