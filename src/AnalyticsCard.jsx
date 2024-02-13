import React from 'react'

function AnalyticsCard({src,heading,para}) {
  return (
    <div className='flex flex-col w-auto '>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
            <div><img  src={src}/></div>
            <h1 className='text-blue-800 text-3xl md:text-xl '>{heading}</h1>
        </div>
        <p className='text-gray-600 md:pl-12 '>{para}</p>

    </div>
  )
}

export default AnalyticsCard