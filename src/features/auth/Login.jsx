import React, { use, useState } from 'react';
import { Facebook, Mail, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const navigatetologin = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12 lg:p-40">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-blue-500 flex flex-col items-center justify-center text-white p-8 md:p-12">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome back!</h1>
            <p className="text-xl">
              We're so happy to see you again. Log in to access your account and continue enjoying our exclusive Assessment and services.
            </p>
            
            <button className="mt-12 text-lg border border-white rounded-full py-3 px-6 hover:bg-blue-600 transition duration-300 shadow-lg" onClick={navigatetologin}>
              Don't have an account? Signup.
            </button>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Login</h2>
            
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full mt-8 bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300 shadow-md transform hover:-translate-y-1"
            >
              Login
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">or login with</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transform hover:-translate-y-1 transition duration-300">
                  <Facebook size={24} />
                </button>
                <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md transform hover:-translate-y-1 transition duration-300">
                  <Mail size={24} />
                </button>
                <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 shadow-md transform hover:-translate-y-1 transition duration-300">
                  <Linkedin size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}