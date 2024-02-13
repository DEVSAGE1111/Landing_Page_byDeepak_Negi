import React from 'react'

function PriceCard({plan,src,price,children,bg}) {
  return (
    <div className={'flex flex-col justify-center rounded-md w-auto items-center gap-8 border border-lovelypurple border-4 p-16 '+" " + bg}>
        <span className='text-gray-700 font-bold'>{plan}</span>
        <div><img src={src}/></div>
        <span className='text-3xl'>${price}/mo</span>
        <div className='flex flex-col'>
          {children}
        </div>
          <button className="text-lovelypurple text-xl hover:border-lovelypurple bg-white px-4 hover:text-blue-800 border-gray-600 py-2  font-bold border rounded ">Choose Plan</button>
        
    </div>
  )
}

export default PriceCard;