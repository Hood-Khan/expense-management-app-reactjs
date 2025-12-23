import React, { useContext, useState } from 'react'
import { mainContext } from '../context/MainContext';

function AddExpense() {
  const [isShown, setIsShown] = useState(true);

  const {allExpense,setAllExpense} = useContext(mainContext);
  // console.log("data in add expense", allExpense);

  const onhandleSubmit = (event) => {
    try{
      event.preventDefault();
    console.log("form submitted");

    const formData = new FormData(event.target);
    const price = formData.get("price") || 0;
    const description = formData.get("description") || "";
    const purpose = formData.get("purpose") || "";

      if(price<=0 || !description || !purpose){
        alert("please fill all details properly");
        return
      }

      const exp = {
        price,
        description,
        purpose,
        created_at:new Date(),
        id:Date.now()
      }

      setAllExpense([...allExpense, exp])

      alert('expense added successfully');
      event.target.reset()
      setIsShown(true)

    }catch(err){
      console.log("Error in form submit", err);
    }


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
            required
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
            required
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
            required
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
