import React, { useState } from 'react'

function AddExpense() {
  const [isShown, setIsShown] = useState(true);

  const onhandleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div className="w-full mx-auto p-6">
      
      {/* Header Button */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg shadow-md cursor-pointer" onClick={()=>setIsShown(!isShown)}>
          {isShown ? "Add +" : "Close X"}
        </button>
      </div>

      {/* Form Card */}
      {
        !isShown && ( 
          <form
        onSubmit={onhandleSubmit}
        className="bg-white rounded-xl shadow-lg p-6 space-y-5 border border-gray-400"
      >
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Add New Transaction
        </h2>

        {/* Price */}
        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter amount"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Enter description"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Purpose */}
        <div className="flex flex-col gap-1">
          <label htmlFor="purpose" className="text-sm font-medium text-gray-600">
            Purpose
          </label>
          <select
            name="purpose"
            id="purpose"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg shadow-md"
        >
          Add Expense
        </button>
      </form>
        )
      }
      
    </div>
  )
}

export default AddExpense
