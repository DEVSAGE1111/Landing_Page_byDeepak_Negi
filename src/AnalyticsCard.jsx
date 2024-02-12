import React from 'react'

function AnalyticsCard({src,heading,para}) {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-4'>
            <img src={src}/>
            <h1 className='text-blue-800 '>{heading}</h1>
        </div>
        <p className='text-gray-600 pl-12 text-sm'>{para}</p>

    </div>
  )
}

export default AnalyticsCard