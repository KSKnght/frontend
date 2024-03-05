import React from 'react'
import Cancel_button from '../components/cancel_button'
import Submit_button from '../components/submit_button'

const Update = () => {
  return (
    <div className='flex min-h-screen flex-col p-12'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Update Employee</h1>
        </div>
        <form>
            <div className='w-full mb-6 pt-10'>
                <div className='py-4 flex justify-between space-x-4'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>First Name</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Middle Name</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Last Name</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-4 space-x-4'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Current Address Line</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-4 flex justify-between space-x-4'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Barangay</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Province</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Country</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>ZIP Code</label>
                        <input type='number' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-64 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Employee Number</label>
                        <input type='number' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Status</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Designation</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Department</label>
                        <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100' />
                    </div>
                </div>
            </div>
        </form>
        <div className='text-right pt-4 space-x-4'>
            <Cancel_button />
            <Submit_button onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
                  throw new Error('Function not implemented.')
              } } />
        </div>
    </div>
  )
}

export default Update