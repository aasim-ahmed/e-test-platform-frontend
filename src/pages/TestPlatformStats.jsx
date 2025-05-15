import { useState } from 'react';

// A stats display component for a test portal website
export default function TestPlatformStats() {
  // Custom colors defined as variables for easy updates
  const custom1 = "#1ec9f3"; // Blue color for primary elements
  const custom2 = "#049bf4"; // Yellow/gold for accent/stars

  // Stats data
  const statsData = [
    {
      value: "5,000+",
      label: "EXAMS COMPLETED",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={custom1}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      value: "100",
      label: "TEST CATEGORIES",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={custom1}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      value: "9",
      label: "YEARS OF EXPERIENCE",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={custom1}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      value: "150 +",
      label: "5-STAR REVIEWS",
      icon: (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={custom2}>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )
    },
  ];

  return (
    <div className="bg-white py-12 shadow-md rounded-lg w-full">
     
      
      <div className="flex flex-wrap justify-center items-start gap-6 px-4">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-6 min-w-48 text-center transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              {stat.icon}
            </div>
            <h3 className="text-4xl font-bold" style={{ color: custom1 }}>
              {stat.value}
            </h3>
            <p className="text-gray-500 mt-2 text-sm font-medium tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      
   
    </div>
  );
}