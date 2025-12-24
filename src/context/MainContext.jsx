import React, { createContext, useState } from "react";

export const mainContext = createContext();

export const MainContext = ({ children }) => {
  // const [allExpense, setAllExpense] = useState([]);
  const [allExpense, setAllExpense] = useState(JSON.parse(localStorage.getItem("expense")) || '[]');

  return (
    <mainContext.Provider value={{ allExpense, setAllExpense }}>
      {children}
    </mainContext.Provider>
  );
};
