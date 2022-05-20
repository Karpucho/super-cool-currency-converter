import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Converter from '../Converter/Converter';
import Courses from '../Courses/Courses';

import './app.css'


function App() {
  return (
    <BrowserRouter>
    <div className="mainApp">
      <Navbar />
        <Routes>
          <Route path="/converter" element={<Converter />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
