import React from 'react'
import Add_button from '../components/add_button'
import Actions from '../components/actions'
import Edit_departments from '../components/edit_departments'

const Table = () => {
  return (
    <div className='flex min-h-screen flex-col p-8 overflow-x-hidden'>
        <div className='flex justify-between'>
        <h1 className='text-5xl font-semibold'>Employment Management System</h1>
        <div className='space-x-3'>
          <Edit_departments />
          <Add_button />
        </div>
      </div>
      <div className='py-14'>
        <table className='table-fixed w-full'>
          <thead className='text-left border-b-4 border-black pl-5'>
            <tr className='text-lg'>
              <th>Employee Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Staus</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2 border-slate-200'>
              <td>1</td>
              <td>Earl Geibriel</td>
              <td>Dicipulo</td>
              <td>Front-end Developer</td>
              <td>Computer Science</td>
              <td>Active</td>
              <td><Actions /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table