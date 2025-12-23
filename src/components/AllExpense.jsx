  import React, { useContext } from 'react'
  import { mainContext } from '../context/MainContext'

  function AllExpense() {

    const {allExpense} = useContext(mainContext);
    // console.log(allExpense);
    const totalMoney = allExpense.length>2 ? (
      allExpense.reduce((prev,cur)=>{
        return prev+parseInt(cur.price)
      },0)
    ) : allExpense.length==1 ? allExpense[0].price 
    : 0;

    const calMoney = (purpose) => {
      
      if(allExpense.length<=0){
        return 0;
      }
      const expenses = allExpense.filter((cur)=>
        cur.purpose==purpose
      ).map((cur)=>parseInt(cur.price))
      if(expenses.length<=1){
        return expenses[0]
      }

      const price = expenses.reduce((prev,cur)=>prev+cur)
      return price;
    }

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Income Card */}
          <div className="w-[96%] lg:w-[80%] mx-auto bg-green-50 border border-green-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-green-700 text-lg font-bold uppercase tracking-wide">
              Income
            </p>
            <p className="text-green-700 font-bold text-2xl text-right mt-2">
              Rs. {calMoney('Income') || 0}
            </p>
          </div>

          {/* Expense Card */}
          <div className="w-[96%] lg:w-[80%] mx-auto bg-red-50 border border-red-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-red-700 text-lg font-bold uppercase tracking-wide">
              Expense
            </p>
            <p className="text-red-700 font-bold text-2xl text-right mt-2">
              Rs. {calMoney('Expense') || 0}
            </p>
          </div>

          {/* Total Card */}
          <div className="col-span-2 bg-blue-50 border border-blue-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-blue-700 text-lg font-bold uppercase tracking-wide">
              Total Balance
            </p>
            <p className="text-blue-700 font-bold text-2xl text-right mt-2">
              Rs. {totalMoney}
            </p>
          </div>

        </div>
      </>
    )
  }

  export default AllExpense
