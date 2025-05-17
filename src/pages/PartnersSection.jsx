
import { useState } from 'react';
import aws from '../assets/aws.png';
import fb from '../assets/fb.png';
import google from '../assets/Chrome-Logo.png';
import microsoft from '../assets/microsoft.png';
import tutorials from '../assets/tutorials.png';
import w3 from '../assets/w3.png';
import gpt from '../assets/chatgpt-logo.png';

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Number of visible logos at different screen sizes
  const visibleLogos = {
    sm: 3,  // Small screens
    md: 4,  // Medium screens
    lg: 5   // Large screens
  };
  
  // Use the imported partner logos
  const partnerLogos = [
    { id: 1, src: aws, alt: "AWS" },
    { id: 2, src: fb, alt: "Facebook" },
    { id: 3, src: google, alt: "Google" },
    { id: 4, src: microsoft, alt: "Microsoft" },
    { id: 5, src: tutorials, alt: "Tutorials" },
    { id: 6, src: w3, alt: "W3" },
    { id: 7, src: gpt, alt: "GPT" },
  ];
  
  // Function to handle previous slide
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partnerLogos.length - visibleLogos.lg : prevIndex - 1
    );
  };
  
  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === partnerLogos.length - visibleLogos.lg ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">Our Partners</h2>
          <div className="w-12 h-1 bg-gray-200 mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 flex items-center justify-center text-teal-500 hover:text-teal-600 focus:outline-none z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Partner Logos */}
          <div className="flex justify-center items-center space-x-8 overflow-hidden py-4">
            {partnerLogos.slice(currentIndex, currentIndex + visibleLogos.lg).map((logo) => (
              <div 
                key={logo.id}
                className="flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28 transition-transform duration-300 hover:scale-110"
              >
                <div className="rounded-full bg-white shadow-md p-2 w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 flex items-center justify-center text-teal-500 hover:text-teal-600 focus:outline-none z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}