import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(true);

console.log(!isOpen); // false
console.log(isOpen);  // true
let id = Date.now();
console.log(id);  // true
  return (
    <div>
      <Navbar />
      {/* <div>app comp</div> */}
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  )
}

export default App