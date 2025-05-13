import React from 'react'
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom'
import Home from './pages/Home.jsx' 
import Layout from './components/Layout.jsx';
import Navbar from './components/Navbar.jsx'
import GenerateQuestion from './pages/GenerateTest/GenerateQuestion.jsx'
import TestGenerator from './pages/GenerateTest/GenerateTest.jsx'
import Signup from './features/auth/Signup.jsx'
import Login from './features/auth/Login.jsx'

export default function App() {
  return (
    <>
    <Navbar/>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/generate-question' element={<GenerateQuestion/>}/>
     <Route path='/generate-test' element={<TestGenerator/>}/>
    < Route path='/Signup' element={<Signup/>}/>
    < Route path='/login' element={<Login/>}/>
    
    </Routes> 
    </Layout>
    
      
    </>
  )
}








































