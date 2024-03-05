import React from 'react'
import Back_button from '../components/back_button'

const View = () => {
  return (
    <div className='flex min-h-screen flex-col p-8'>
        <div className='flex justify-between'>
            <h1 className='text-5xl text-wrap font-semibold'>Earl Geibriel Seneres Dicipulo</h1>
            <Back_button />
        </div>
        <div>
            <div className='w-full mb-6 pt-10'>
                <div className='py-4 flex justify-between space-x-4 text-sm text-nowrap'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Employee Number</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            1234098765
                        </label>
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Designation</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            Front-End Development
                        </label>
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Status</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            ACTIVE
                        </label>
                    </div>
                </div>
                <div className='py-6 flex justify-between space-x-4 text-sm text-nowrap'>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Department</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-96 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            Computer Science Department
                        </label>
                    </div>
                    <div mb-6>
                        <label className='block mb-3 text-gray-600'>Department Status</label>
                        <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 transition-all hover:bg-sky-100'>
                            ACTIVE
                        </label>
                    </div>
                </div>
                <div className='pt-8'>
                    <div className='py-4 space-x-4 text-sm'>
                        <div mb-6>
                            <label className='block mb-3 text-gray-600'>Current Address Line</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-72 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                Ateneo de Davao University, Roxas Avenue, Davao City
                            </label>
                        </div>
                    </div>
                    <div className='py-4 flex justify-between space-x-4'>
                        <div mb-6>
                            <label className='block mb-3 text-gray-600'>Barangay</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                Sasa
                            </label>
                        </div>
                        <div mb-6>
                            <label className='block mb-3 text-gray-600'>Province</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                Davao del Sur
                            </label>
                        </div>
                        <div mb-6>
                            <label className='block mb-3 text-gray-600'>Country</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                Philippines
                            </label>
                        </div>
                        <div mb-6>
                            <label className='block mb-3 text-gray-600'>ZIP Code</label>
                            <label className='border border-gray-500 rounded-md inline-block py-4 px-4 mr-56 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'>
                                8000
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View