import React, { useContext } from 'react'
import { mainContext } from '../context/MainContext'
import ExpenseCard from './ExpenseCard'

function ListExpense() {
  const{allExpense} = useContext(mainContext)
  return (
    <>
      <table className='w-full border table-auto my-10 py-3'>
        <thead>
          <tr>
          <th className='border text-zinc-900 border-gray-500 py-2'>No</th>
          <th className='border text-zinc-900 border-gray-500'>Price</th>
          <th className='border text-zinc-900 border-gray-500'>Description</th>
          <th className='border text-zinc-900 border-gray-500'>Purpose</th>
          <th className='border text-zinc-900 border-gray-500'>Action</th>
        </tr>
        </thead>
        
        <tbody>
          {
            allExpense && allExpense.length>0 ? <>
              {
                  allExpense.map((cur,i)=>{
                  return <ExpenseCard data={cur} no={i+1} key={i}/>
                })
              }
            </>:<></>
            
          }
        </tbody>
      </table>
    </>
  )
}

export default ListExpense