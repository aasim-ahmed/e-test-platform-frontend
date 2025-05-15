import React from 'react'
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="w-full">
      {/* Pricing Section */}
      <section className="bg-white w-full px-16" id="pricing">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Choose the plan that works for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for individuals and small projects</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Up to 50 tests per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Basic question types</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium">Get Started</button>
              </div>
            </div>
            
            <div className="border-2 border-custom2 rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute top-0 right-0 bg-custom2 text-white px-3 py-1 text-sm font-semibold">Popular</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">For growing teams and organizations</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Unlimited tests</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>All question types</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gradient-to-r from-custom1 to-custom2 hover:opacity-90 text-white rounded-lg font-medium">Start Free Trial</button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">For large organizations with specific needs</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>All Professional features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
