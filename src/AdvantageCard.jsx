import React from 'react'

function AdvantageCard({src,heading,text}) {
  return (
    
      <div className='flex flex-col gap-y-6 '>
        <div><img src={src}/></div>
        <h1 className='text-purple-600 text-xl font-bold'>{heading}</h1>
        <p className='text-gray-600'>{text}</p>
      </div>
    
  )
}

export default AdvantageCard;
