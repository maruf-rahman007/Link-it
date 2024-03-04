import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Navbar } from './pages/Navbar';

function App() {

  return (
    <BrowserRouter>
    <div>
    <div className="mb-0.5">
      <Navbar/>
    </div>
    <div className='mt-16'>
      
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
