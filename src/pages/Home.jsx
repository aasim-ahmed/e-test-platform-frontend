import { useState } from 'react';
import Image from '../assets/heroImage.png';
import { BookOpen, Monitor, Award, CheckCircle, Users, Clock, Search, ChevronRight } from 'lucide-react';
import Features from '../pages/Features.jsx';
import Pricing from '../pages/Pricing.jsx';
import CTASection from '../pages/CTASection.jsx';
import TestPlatformStats from '../pages/TestPlatformStats.jsx';
import PartnersSection from '../pages/PartnersSection.jsx';
import bottomimage from '../assets/bottom.png';

export default function Home() {
  const [email, setEmail] = useState('');


  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 py-20 text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-custom1 to-custom2">
                Online<br />Examination<br />System
              </span>
            </h1>

            <p className="text-xl text-custom1 mb-8 max-w-lg font-light leading-relaxed">
              Secure, flexible, and user-friendly platform for conducting online assessments, examinations, and quizzes with advanced analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-custom1 text-white font-bold rounded-full hover:bg-custom2 shadow-lg transform hover:-translate-y-1 transition duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-custom1 text-custom1 font-bold rounded-full hover:bg-custom1 hover:text-white shadow-lg transform hover:-translate-y-1 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right image section */}
          <img
            src={Image}
            alt="Online Examination System"
            className="w-full md:w-1/2 hover:scale-105 transition duration-500 pointer-cursor"
          />
        </div>
      </div>

<img src={bottomimage} className="w-[150%]" alt="" />

      {/* Additional sections */}
      <TestPlatformStats />
      <Features />
      <Pricing />
      <CTASection />
      <PartnersSection />
    </div>
  );
}