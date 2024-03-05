import React from 'react'
import { Link } from 'react-router-dom'

const add_button = () => {
  return (
    <button className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800'>
        <Link to='/Create'> Create Employee </Link>
    </button>
  )
}

export default add_button