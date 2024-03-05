import React from 'react'
import { Link } from 'react-router-dom'

const actions = () => {
  return (
    <div className='space-x-2 py-4'>
        <button className='px-2 py-2 bg-sky-500 text-white rounded-lg transition-all text-sm hover:bg-sky-800'>
            <Link to='/View'>View</Link>
        </button>
        <button className='px-2 py-2 bg-sky-500 text-white rounded-lg transition-all text-sm hover:bg-sky-800'>
          <Link to='/Update/:id'>Update</Link>
        </button>
        <button className='px-2 py-2 bg-red-500 text-white rounded-lg transition-all text-sm hover:bg-red-800'>
          Delete
        </button>
    </div>
  )
}

export default actions