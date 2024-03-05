import React from 'react'
import Department_status from '../components/department_status'
import Back_button from '../components/back_button'
import Add_department from '../components/add_department'

const Departments = () => {
  return (
    <div className='flex min-h-screen flex-col py-8 px-24'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Departments</h1>
            <div className='space-x-3'>
                <Add_department />
                <Back_button />
            </div>
        </div>
        <div className='py-14'>
            <table className='table-auto w-full'>
                <thead className='text-left border-b-4 border-black'>
                    <tr className='text-lg'>
                        <th >Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-2 border-slate-200'>
                        <td className='py-6'>Computer Science Department</td>
                        <td className='py-6'>
                            <Department_status />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Departments