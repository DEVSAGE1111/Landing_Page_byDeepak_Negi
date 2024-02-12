import React from 'react'
import { FaCircleDot } from "react-icons/fa6";


function Header() {
    return (
        <div  className='bg-purple-600 text-white  px-32 font-sans pb-64  '>
        <div className='flex justify-between pt-12 items-center '>
            <div className='flex gap-4'>
                <FaCircleDot className='text-3xl font-blacks' />
                <a href="">Tour</a>
                <a href="">Product</a>
                <a href="">Pricing</a>
            </div>
            <button className='rounded-full px-10 py-2 border border-white text-sm font-bold hover:bg-white hover:text-blue-800'> SIGN UP</button>
            </div>

            <h1 className='text-6xl mt-16 font-bold'>Success starts <br/>
                with a great <br/>
                product</h1>
                <p className='pt-8 font-sans '>Morbi leo tortor, fermentum sed orci vitae,<br/>
                    tempor auctor turpis. Fusce bibendum <br/>
                    accumsan fringilla. Nulla aliquam luctus <br/>
                    sem, at posuere nibh lobortis et.</p>

            
                
        </div>
    )
}

export default Header;
