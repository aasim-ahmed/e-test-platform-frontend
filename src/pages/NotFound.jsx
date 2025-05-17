import { AlertCircle, Home, Search, RotateCcw } from 'lucide-react';
import NotFoundimg from '../assets/pagenotfound.png';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-5">
      <img src={NotFoundimg} alt=""  className='w-1/4'/>
      <div className="flex flex-col items-center justify-center">
        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            We've searched high and low, but couldn't find the page you're looking for. 
            It seems to have wandered off into the digital wilderness.
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-custom1 hover:bg-custom2 text-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            <Home size={20} />
            Back to Home
          </button>
          <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
            <Search size={20} />
            Search Site
          </button>
          <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
            <RotateCcw size={20} />
            Try Again
          </button>
        </div>
      </div>
      
      {/* Additional helpful information */}
      <div className="mt-16 p-4 max-w-md bg-gray-50 rounded-lg border border-indigo-100">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-custom1 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-custom2">Need Help?</h3>
            <p className="text-custom2 text-sm mt-1">
              If you believe this is an error with our site, please contact our support team or try refreshing the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}