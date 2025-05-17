import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const [paddingTop, setPaddingTop] = useState(80); // fallback

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      const height = nav.offsetHeight;
      setPaddingTop(height);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main style={{ paddingTop: `${paddingTop}px` }} className="flex-grow">
        {children}
      </main>
    </div>
  );
}
