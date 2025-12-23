import React from 'react'

function ExpenseCard({data,no}) {
  return (
    <>
        <tr>
            <td className='border border-gray-500 text-zinc-800 py-3 px-3'>{no}</td>
            <td className='border border-gray-500 text-zinc-800 py-3 px-3'>Rs.{data.price}</td>
            <td className='border border-gray-500 text-zinc-800 py-3 px-3'>{data.description}</td>
            <td className='border border-gray-500 text-zinc-800 py-3 px-3 text-center'>
                {data.purpose=='Income' && <span className='bg-green-300 font-semibold px-4.5 py-1 rounded-full'>{data.purpose}</span>}
                {data.purpose=='Expense' && <span className='bg-red-300 font-semibold px-4 py-1 rounded-full'>{data.purpose}</span>}
            </td>
            <td className='border border-gray-500 text-zinc-800 py-3 px-3'>
                <button>Delete</button>
            </td>
        </tr>
    </>
  )
}

export default ExpenseCard