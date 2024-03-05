import React from 'react'
import { Link } from 'react-router-dom'

const add_department = () => {
  return (
    <button className='px-8 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800'>
        <Link to='/Create_Department'>Create Department</Link>
    </button>
  )
}

export default add_department