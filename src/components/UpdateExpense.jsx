import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { mainContext } from "../context/MainContext";

export default function UpdateExpense({ data }) {
  let [isOpen, setIsOpen] = useState(false);

  const { allExpense, setAllExpense } = useContext(mainContext);
  // console.log("data in add expense", allExpense);

  const onhandleSubmit = (event) => {
    try {
      event.preventDefault();
      console.log("form submitted");

      const formData = new FormData(event.target);
      const price = formData.get("price") || 0;
      const description = formData.get("description") || "";
      const purpose = formData.get("purpose") || "";

      if (price <= 0 || !description || !purpose) {
        alert("please fill all details properly");
        return;
      }

      const exp = {
        price,
        description,
        purpose,
      };

      const newExpense = allExpense.map((cur) => {
        if (cur.id == data.id) {
          return { ...cur, ...exp };
        }
        return cur;
      });

      localStorage.setItem("expense", JSON.stringify(newExpense));
      setAllExpense(newExpense);

      // alert('expense added successfully');
      // Swal.fire({
      //   title: "Success!",
      //   text: "Expense added successfully",
      //   icon: "success",
      //   confirmButtonText: "OK",
      // });

      Swal.fire({
        icon: "success",
        title: "Expense updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      close();
    } catch (err) {
      console.log("Error in form submit", err);
    }
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="bg-amber-600 text-white rounded text-center cursor-pointer hover:bg-amber-700 transition py-1 px-3"
        onClick={open}
      >
        Update
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40 ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 border"
            >
              {/* Header */}
              <DialogTitle
                as="h3"
                className="flex items-center justify-between mb-6 border-b pb-3"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  Update Expense
                </h2>
                <button
                  onClick={close}
                  className="text-gray-500 hover:text-red-600 transition text-xl font-bold"
                >
                  ✕
                </button>
              </DialogTitle>

              {/* Form */}
              <form onSubmit={onhandleSubmit} className="space-y-5">
                <h2 className="text-xl font-semibold text-gray-700 text-center">
                  Edit Transaction
                </h2>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter amount"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    defaultValue={data.price}
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    placeholder="Enter description"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    defaultValue={data.description}
                  />
                </div>

                {/* Purpose */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Purpose
                  </label>
                  <select
                    name="purpose"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    defaultValue={data.purpose}
                  >
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={close}
                    className="w-1/2 text-red-600 font-medium border border-gray-300 rounded-lg py-2 hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg shadow-md"
                  >
                    Update
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
