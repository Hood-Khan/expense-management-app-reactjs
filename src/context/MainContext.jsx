import React, { createContext, useState } from 'react'

export const mainContext = createContext()

export const MainContext = ({children}) => {

    const [allExpense,setAllExpense]=useState([])

  return (

        <mainContext.Provider value={{allExpense,setAllExpense}}>{children}</mainContext.Provider>
  )
}
