import React from 'react'
import { Link } from 'react-router-dom'

const cancel_button = () => {
  return (
        <Link className='px-8 py-2 border-2 border-slate-500 text-slate-500 rounded-lg transition-all hover:border-slate-800 hover:text-slate-800' to='/'> Cancel </Link>
  )
}

export default cancel_button