
import React from 'react' 
import { BookOpen, Monitor, Award, CheckCircle, Users, Clock, BarChart3, Globe, Shield, Zap, MessageCircle, PieChart } from 'lucide-react';

export default function Features() {
  return (
    <div className="w-full bg-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold ">Powerful Test Management Platform</h2>
          <p className="text-gray-600 mt-2">Everything you need to create, manage, and analyze professional assessments</p>
        </div>
       <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-custom1 to-custom2 flex items-center justify-center mb-3 shadow-md">
                  <Monitor size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">Test Creation Studio</h3>
                <p className="text-gray-600 mt-2">Build professional assessments with our intuitive interface</p>
                
                <div className="mt-4 w-full bg-gray-100 h-1 rounded-full">
                  <div className="bg-gradient-to-r from-custom1 to-custom2 h-1 rounded-full w-4/5"></div>
                </div>
                
                <div className="flex mt-6 gap-3">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                    <BookOpen size={16} className="text-amber-500" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <Award size={16} className="text-blue-600" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-custom1 to-custom2 text-white text-center py-2 px-6 rounded-lg text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity w-full">
                  Create New Test
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shadow-sm">
                  <Users size={18} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 ml-3">Candidate Management</h3>
              </div>
              <p className="text-gray-600">Track progress of 250+ candidates with detailed insights</p>
              
              <div className="mt-4 flex gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-xs font-medium text-custom1">JD</div>
                  <div className="h-8 w-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-600">KL</div>
                  <div className="h-8 w-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-xs font-medium text-pink-600">MN</div>
                  <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-600">+5</div>
                </div>
                <span className="text-sm text-gray-500 ml-2 self-center">Active now</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="bg-gradient-to-r from-custom1to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity">
                  Invite Candidates
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-12 md:col-span-4">  
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 h-full flex flex-col border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <Clock size={18} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">Secure Testing Environment</h3>
                </div>
                <p className="text-gray-600">Advanced proctoring with AI-powered monitoring</p>
              </div>
              
              <div className="flex-grow p-5 bg-gray-50 rounded-xl my-4 border border-indigo-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-indigo-800">Technical Assessment</span>
                  <span className="text-xs bg-indigo-100 text-custom1px-2 py-1 rounded-full">Live</span>
                </div>
                
                <div className="h-2 w-full bg-gray-200 rounded-full mb-3">
                  <div className="h-2 w-3/4 bg-gradient-to-r from-custom1 to-custom2 rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Shield size={14} className="text-green-500 mr-1" />
                    <p className="text-xs text-gray-600">Secure Browser Mode</p>
                  </div>
                  <div className="flex items-center">
                    <Globe size={14} className="text-amber-500 mr-1" />
                    <p className="text-xs text-gray-600">Remote Proctoring</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded-lg border border-indigo-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <Zap size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-800">Active Session</p>
                        <p className="text-xs text-gray-500">ID: 873421</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Recording</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">5:25 pm</span>
                <span className="font-medium text-indigo-700">Time remaining: 35 min</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center shadow-sm">
                    <BarChart3 size={18} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">Smart Analytics</h3>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">Premium</span>
              </div>
              <p className="text-gray-600 mb-3">Get detailed insights and performance metrics</p>
              
              <div className="mt-2 bg-gradient-to-br from-indigo-50 to-purple-50 p-3 rounded-lg border border-indigo-100">
                <div className="flex gap-2 mb-2">
                  <div className="h-4 w-4 rounded-full bg-custom1"></div>
                  <div className="h-4 w-4 rounded-full bg-custom2"></div>
                  <div className="h-4 w-4 rounded-full bg-pink-500"></div>
                  <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-800">87%</div>
                    <div className="text-xs text-gray-500">Average Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">94</div>
                    <div className="text-xs text-gray-500">Completions</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
                <span>Updated Aug 5, 2023</span>
                <div className="flex items-center text-custom1cursor-pointer">
                  <PieChart size={14} className="mr-1" />
                  <span className="text-xs font-medium">View Full Report</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Resource Library</h3>
                <span className="text-xs bg-indigo-100 text-custom1px-2 py-1 rounded-full cursor-pointer">View All</span>
              </div>
              
              <div className="flex items-center py-2 border-b border-gray-100">
                <div className="h-8 w-8 rounded bg-amber-100 flex items-center justify-center mr-3 shadow-sm">
                  <BookOpen size={16} className="text-amber-600" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-800">Question Bank Pro</p>
                  <p className="text-xs text-gray-500">1,832 Questions Available</p>
                </div>
                <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <CheckCircle size={12} className="text-custom1" />
                </div>
              </div>
              
              <div className="flex items-center py-2 border-b border-gray-100">
                <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center mr-3 shadow-sm">
                  <MessageCircle size={16} className="text-blue-600" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-800">Feedback Templates</p>
                  <p className="text-xs text-gray-500">24 Templates</p>
                </div>
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <CheckCircle size={12} className="text-purple-600" />
                </div>
              </div>
              
              <div className="flex items-center py-2">
                <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center mr-3 shadow-sm">
                  <Award size={16} className="text-purple-600" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-800">Certification Suite</p>
                  <p className="text-xs text-gray-500">12 Industry Certificates</p>
                </div>
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <CheckCircle size={12} className="text-gray-400" />
                </div>
              </div>
              
              <div className="mt-4 bg-gradient-to-r from-custom1to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity">
                Explore Resources
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}