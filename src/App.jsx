import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import AllExpense from "./components/AllExpense";

function App() {
  // const [isOpen, setIsOpen] = useState(true);

  // console.log(!isOpen); // false
  // console.log(isOpen);  // true
  // let id = Date.now();
  // console.log(id);  // true

  return (
    <div className="bg-gray-200 min-h-screen pb-10">
      <Navbar />
      {/* <div>app comp</div> */}
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>

      <div className="w-[80%] mx-auto">
        <AddExpense />
        <AllExpense />
      </div>
    </div>
  );
}

export default App;
