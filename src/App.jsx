import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './components/Layout.jsx';
import Navbar from './components/Navbar.jsx';
import GenerateQuestion from './pages/GenerateTest/GenerateQuestion.jsx';
import TestGenerator from './pages/GenerateTest/GenerateTest.jsx';
import Signup from './features/auth/Signup.jsx';
import Login from './features/auth/Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Admin from './pages/Dashboard/Admin.jsx';
import Recruiter from './pages/Dashboard/Recruiter.jsx';
import TechnicalExpert from './pages/Dashboard/TechnicalExpert.jsx';
import Candidate from './pages/Dashboard/candidate.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Footer from './components/Footer.jsx'; 
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate-question' element={<GenerateQuestion />} />
          <Route path='/generate-test' element={<TestGenerator />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />

          <Route
            path='/candidate'
            element={
              <ProtectedRoute allowedRoles={['candidate']}>
                <Candidate />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path='/recruiter'
            element={
              <ProtectedRoute allowedRoles={['recruiter']}>
                <Recruiter />
              </ProtectedRoute>
            }
          />

          <Route
            path='/technical-expert'
            element={
              <ProtectedRoute allowedRoles={['technical_expert']}>
                <TechnicalExpert />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Layout>
      <Footer/>
    </BrowserRouter>
  );
}
