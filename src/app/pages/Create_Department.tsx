import React, { useState } from 'react'
import Department_back from '../components/department_back'
import Submit_button from '../components/submit_button'
import axios from 'axios';
import { Await } from 'react-router-dom';
import { PrismaClient } from '@prisma/client/extension';
import prisma from '../../../lib/prisma';



async function Department(name: string) {
  const data = prisma.departments.create({
    data: {
      dept_name: name,
      status: 'ACTIVE'
    }
  })
  return data;
}



const Create_Department = () => {
  const [dep, setDep] = useState({
    depName: '',
  })
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.post('http://localhost:8081/addDeparment', dep)
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}

  return (
    <div className='flex min-h-screen flex-col py-8 px-24'>
        <div className='flex justify-between'>
            <h1 className='text-5xl font-semibold'>Create Department</h1>
            <Department_back />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='w-full mb-6 pt-10'>
              <div className='py-4 justify-between space-x-4'>
                  <div mb-6>
                      <label className='block mb-3 text-gray-600'>Department Name</label>
                      <input type='text' className='border border-gray-500 rounded-md inline-block py-4 px-32 w-full text-gray-600 tracking-wider transition-all hover:bg-sky-100'
                      onChange={e => setDep({...dep, depName: e.target.value})} />
                  </div>
              </div>
          </div>
          <div className='flex'>
            <button className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800'>
              Create
            </button>
          </div>
        </form>
        
    </div>
  )
}

export default Create_Department