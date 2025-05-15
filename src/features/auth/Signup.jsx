import React, { useState } from 'react';
import { Facebook, Mail, Linkedin, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    firstName: "",
    lastName: "",
    organization: "",
    role: "candidate",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'password') {
        setPasswordsMatch(value === formData.confirmPassword || formData.confirmPassword === "");
      } else {
        setPasswordsMatch(value === formData.password || value === "");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    
    const { confirmPassword, ...dataToSubmit } = formData;
    console.log("Form submitted:", dataToSubmit);
    axios.post("http://localhost:5500/user/createUser", dataToSubmit)
      .then((response) => {
        console.log(response.data);
        toast.success("User created successfully");
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        toast.error("User creation failed");
      });
    setFormData({
      email: "",
      number: "",
      firstName: "",
      lastName: "",
      organization: "",
      role: "candidate",
      password: "",
      confirmPassword: ""
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Left Panel With Gradient */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-custom1 to-custom2 flex flex-col items-center justify-center text-white p-8 md:p-12">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-6">Come join us!</h1>
            <p className="text-xl">
              We are so excited to have you here. If you haven't already, create an account to get
              access to exclusive offers, rewards, and discounts.
            </p>
            <button
              className="mt-12 text-lg border border-white rounded-full py-3 px-6 hover:bg-white hover:text-custom2 transition duration-300 shadow-lg"
              onClick={() => navigate('/login')}
            >
              Already have an account? Signin.
            </button>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Signup</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
              />

              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
              />

              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization"
                className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
              >
                <option value="admin">admin</option>
                <option value="recruiter">Recruiter</option>
                <option value="technical_expert">Technical Expert</option>
                <option value="candidate">Candidate</option>
              </select>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className={`w-full p-3 bg-gray-50 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none border-none ${!passwordsMatch && formData.confirmPassword !== "" ? 'ring-2 ring-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {!passwordsMatch && formData.confirmPassword !== "" && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-gradient-to-br from-custom1 to-custom2 text-white py-3 rounded-md font-medium hover:opacity-90 transition duration-300 shadow-md transform hover:-translate-y-1"
            >
              Signup
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">or signup with</p>
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
