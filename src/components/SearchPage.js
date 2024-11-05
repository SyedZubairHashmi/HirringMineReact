import React from 'react'
import "../App.css"

function SearchPage() {
  return (
    <div className='flex flex-col items-center justify-center px-72 gap-y-10 '>
        

        <h1 className='bg-gradient-to-l from-blue-400 to-blue-900 bg-clip-text text-transparent text-8xl text-center font-bold  '>Dig. Apply</h1>
        <h1 className='bg-gradient-to-l from-blue-400 to-blue-900 bg-clip-text text-transparent text-8xl text-center font-bold '>Prepare Your Future</h1>
        <p className='text-2xl font-normal text-center'>Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</p>

        
        <div className='searchIput w-2/3 h-11 pl-3 border-2  border-blue-300  rounded-md'>

        <input className=' h-10  focus:outline-none border-2 border-none serchIput'
         type='text'
         placeholder='Search by Role or Keyword'
        
        />
        
        </div>
        <button className='text-xl -10 bg-blue-600 px-10 py-3 rounded-full'>
            Find Jobs
        </button>
        
        
        
        
        
        
        
    </div>
  )
}

export default SearchPage