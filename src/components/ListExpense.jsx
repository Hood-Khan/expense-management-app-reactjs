import React, { useContext } from 'react'
import { mainContext } from '../context/MainContext'

function ListExpense() {
  const{allExpense} = useContext(mainContext)
  return (
    <>
      <table className='w-full border table-auto my-10 py-3'>
        <tr>
          <th className='border text-gray-800 border-gray-300'>No</th>
          <th className='border text-gray-800 border-gray-300'>Price</th>
          <th className='border text-gray-800 border-gray-300'>Description</th>
          <th className='border text-gray-800 border-gray-300'>Purpose</th>
          <th className='border text-gray-800 border-gray-300'>Action</th>
        </tr>
        <tbody>
          
        </tbody>
      </table>
    </>
  )
}

export default ListExpense