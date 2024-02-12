import React from 'react'
import {FaCircleDot } from 'react-icons/fa6'

function Contact() {
  return (
    <div className='flex flex-col gap-4 px-24 py-16'>
         <FaCircleDot className='text-3xl font-blacks' />
         <div className='flex justify-center gap-36 '>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                <h4 className='font-bold'>VANCOVER</h4>
                <span className='text-gray-500'>400-401 West Georgia Street
                Vancouver, BC, Canada, V6B 5A1</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='font-bold'>BERLIN</h4>
                    <span className='flex text-gray-500'>Friedrichstraße 68
                    10117 Berlin, Germany</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold'>FOLLOW US ON</h4>
                <ul className='text-gray-500' type="none">
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold'>ABOUT US</h4>
                <span className='text-gray-500'>Since 2009, Unbounce has helped marketers and digital
                     agencies increase website and campaign conversions.</span>
                     <span className='text-gray-500'>© 2018 Insert Name Here. All rights reserved</span>
            </div>
         </div>
    </div>
  )
}

export default Contact