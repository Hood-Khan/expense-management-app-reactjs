import React, { useContext } from "react";
import { mainContext } from "../context/MainContext";
import Swal from "sweetalert2";
import UpdateExpense from "./UpdateExpense";

function ExpenseCard({ data, no }) {
  const { allExpense, setAllExpense } = useContext(mainContext);

  const deleteExpense = () => {
    // const newExpense = allExpense.filter((cur) => cur.id != data.id);
    // setAllExpense(newExpense);
    // Swal.fire({
    //   icon: "success",
    //   title: "Deleted!",
    //   text: "Your expense has been deleted.",
    //   confirmButtonText: "OK",
    // });

    Swal.fire({
      title: "Are you sure?",
      text: "This expense will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete logic here

        const newExpense = allExpense.filter((cur) => cur.id != data.id);
        setAllExpense(newExpense);
    
        localStorage.setItem('expense', JSON.stringify(newExpense));
        
        Swal.fire("Deleted!", "Your expense has been deleted.", "success");
        //   Swal.fire({
        //   icon: "success",
        //   title: "Deleted!",
        //   text: "Your expense has been deleted.",
        //   showConfirmButton: false,
        //   timer: 1500
        // });
      }
    });

  };
  return (
    <>
      <tr>
        <td className="border border-gray-500 text-zinc-800 py-3 px-3">{no}</td>
        <td className="border border-gray-500 text-zinc-800 py-3 px-3">
          Rs.{data.price}
        </td>
        <td className="border border-gray-500 text-zinc-800 py-3 px-3">
          {data.description}
        </td>
        <td className="border border-gray-500 text-zinc-800 py-3 px-3 text-center">
          {data.purpose == "Income" && (
            <span className="bg-green-300 font-semibold px-4.5 py-1 rounded-full">
              {data.purpose}
            </span>
          )}
          {data.purpose == "Expense" && (
            <span className="bg-red-300 font-semibold px-4 py-1 rounded-full">
              {data.purpose}
            </span>
          )}
        </td>
        {/* <td className="border border-gray-500 text-zinc-800 py-3 px-3 gap-1 flex">

          <button
            className="bg-red-600 text-white rounded text-center cursor-pointer hover:bg-red-700 transition py-1 px-3"
            onClick={deleteExpense}
          >
            Delete
          </button>

          <UpdateExpense data={data} />
        </td> */}

        <td className="border border-gray-500 text-zinc-800 py-3 px-3">
  <div className="flex gap-2 justify-start">
    <button
      className="bg-red-600 text-white rounded text-center cursor-pointer hover:bg-red-700 transition py-1 px-3"
      onClick={deleteExpense}
    >
      Delete
    </button>

    <UpdateExpense data={data} />
  </div>
</td>

      </tr>
    </>
  );
}

export default ExpenseCard;
