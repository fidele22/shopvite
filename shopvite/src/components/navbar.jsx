import React from 'react'
import './syle.css'

function navbar() {
  return (
    <div className='flex p-5 justify-between shadow-xl/20 bg-gray-200'>
       <div>
         <h1 className='text-3xl'><span className='font-bold text-blue-700'>F</span>idele</h1>
       </div>
        <div className=''>
          <a className='pr-4 text-blue-600 font-bold' href="">Home</a>
          <a className='pr-4 text-blue-600 font-bold' href="">about</a>
          <a className='pr-4 text-blue-600 font-bold' href="">blog</a>
          <a className='pr-4 text-blue-600 font-bold' href="">contact</a>
        </div>

    </div>
  )
}

export default navbar
