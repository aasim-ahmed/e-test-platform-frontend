import { useState } from 'react';
import Image from '../assets/heroImage.png';
import { BookOpen, Monitor, Award, CheckCircle, Users, Clock, Search, ChevronRight } from 'lucide-react';
import Features from '../pages/Features.jsx';
import Pricing from '../pages/Pricing.jsx';
import CTASection from '../pages/CTASection.jsx';
import TestPlatformStats from '../pages/TestPlatformStats.jsx';

export default function Home() {
  const [email, setEmail] = useState('');


  return (
    <div className="bg-gradient-to-br from-custom1  to-custom2 flex flex-col items-center justify-center ">
      {/* Main content */}
      <div className="container mx-auto px-6 py-20 text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left text section */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Online<br />Examination<br />System
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-lg font-light leading-relaxed">
              Secure, flexible, and user-friendly platform for conducting online assessments, examinations, and quizzes with advanced analytics.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white text-blue-800 font-bold rounded-full hover:bg-blue-50 shadow-lg transform hover:-translate-y-1 transition duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-800 transform hover:-translate-y-1 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right image section - kept unchanged as requested */}
            <img 
              src={Image} 
              alt="Online Examination System" 
              className="w-full md:w-1/2"
            />
       
        </div>
      </div>
      <TestPlatformStats/>
       <Features/>
       <Pricing/>
       <CTASection/>
     

 
     

     
 

    
     
    </div>
    
  );
}