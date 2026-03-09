import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/logo.jpg';
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home'
import { Route,  Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UserDashboard from './pages/UserDashboard'
//import Dashboard from './pages/test'
import ProductsPage from "./pages/ProductsPage"

import AboutPage from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        {/*<Route path='/test' element={<Dashboard />} /> */}
        
        
      </Routes>
    </>
  )
}

export default App
