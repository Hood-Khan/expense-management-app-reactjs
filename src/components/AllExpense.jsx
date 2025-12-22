import React from 'react'

function AllExpense() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Income Card */}
        <div className="w-[96%] lg:w-[80%] mx-auto bg-green-50 border border-green-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-green-700 text-lg font-bold uppercase tracking-wide">
            Income
          </p>
          <p className="text-green-700 font-bold text-2xl text-right mt-2">
            Rs. 20
          </p>
        </div>

        {/* Expense Card */}
        <div className="w-[96%] lg:w-[80%] mx-auto bg-red-50 border border-red-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-red-700 text-lg font-bold uppercase tracking-wide">
            Expense
          </p>
          <p className="text-red-700 font-bold text-2xl text-right mt-2">
            Rs. 10
          </p>
        </div>

      </div>
    </>
  )
}

export default AllExpense
