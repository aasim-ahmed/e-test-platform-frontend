import { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your Navbar component

export default function Layout({ children }) {
  // State to track if the content needs to be padded for the fixed navbar
  const [contentPadding, setContentPadding] = useState('pt-16');
  
  // The Layout component wraps your content and adds the needed spacing
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${contentPadding}`}>
        {children}
      </main>
    </div>
  );
}