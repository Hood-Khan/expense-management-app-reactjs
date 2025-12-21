import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-blue-600">
      <nav className="w-[80%] text-white flex justify-between items-center mx-auto p-4 rounded-md">
        <div>
          <h1 className="font-bold text-2xl">Expense Tracker</h1>
        </div>
        <div className="flex gap-4 text-xl font-bold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
