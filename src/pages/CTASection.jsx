
import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Demo account requested for: ${email}`);
    setEmail('');
  };

  return (
<section className="py-16 bg-white w-full">
  <div className="max-w-6xl mx-auto px-4 pt-8">
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side with gradient background */}
        <div className="bg-gradient-to-br from-custom1 to-custom2 p-8 md:p-12 text-white md:w-2/5 flex items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Testing Process</h3>
            <p className="text-white/90">Join thousands of educators and organizations who have simplified their assessment workflow.</p>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-custom2 font-bold text-sm border-2 border-white">JD</div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-custom2 font-bold text-sm border-2 border-white">MS</div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-custom2 font-bold text-sm border-2 border-white">AR</div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">500+ happy customers</div>
                <div className="flex items-center text-xs">
                  ★★★★★ <span className="ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="p-8 md:p-12 md:w-3/5">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Free Demo</h3>
          <p className="text-gray-600 mb-6">See how our platform can work for your specific needs</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="you@gmail.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom1 focus:border-custom1 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-custom1 to-custom2 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <span className="text-sm text-gray-500">No credit card required</span>
            </div>
          </form>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Free 14-day trial</span>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">No installation</span>
            </div>
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}