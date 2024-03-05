import React, { MouseEventHandler } from 'react'

const submit_button = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <button className='px-10 py-2 bg-sky-500 text-white rounded-lg transition-all hover:bg-sky-800' onClick={onClick}>
        Create
    </button>
  )
}

export default submit_button