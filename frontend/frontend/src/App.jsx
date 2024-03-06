import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Navbar } from './pages/Navbar';
import { LandingPage } from './pages/LandingPage';
import { Footer } from './pages/Footer';
import { About } from './pages/About';
import { InfoCard } from './pages/InfoCard';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className='mt-16'> 
          <Routes>
            <Route path='/info' element={<InfoCard/>}/>
            <Route path='/' element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
