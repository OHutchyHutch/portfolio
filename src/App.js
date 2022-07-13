import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Works from './pages/Works';
export default function App() {

  document.title = "OHutchyHutch (Under Construction)";
  return (
    <div className='bg-slate-800 min-h-screen min-w-screen flex flex-col select-none'>
      <AnimatedCursor innerSize={10} outerSize={10} outerScale={2} color='34,211,238' />
      <div className="container mx-auto flex flex-col flex-grow opacity">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

