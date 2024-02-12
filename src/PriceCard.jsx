import React from 'react'

function PriceCard({plan,src,price,children,bg}) {
  return (
    <div className={'flex flex-col justify-center items-center gap-8 border border-lovelypurple border-4 p-16 '+" " + bg}>
        <span className='text-gray-500'>{plan}</span>
        <div><img src={src}/></div>
        <span className='text-3xl'>${price}/mo</span>
        <div className='flex flex-col'>
          {children}
        </div>
          <button className="text-lovelypurple hover:border-lovelypurple bg-white px-4 hover:text-blue-800 border-gray-600 py-2 text-xl font-bold border rounded border-gray-600">Choose Plan</button>
        
    </div>
  )
}

export default PriceCard;