import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";

function VideoBox() {
  return (
    <div className='bg-blue-300  font-serrif flex flex-col items-center px-4 justify-cente py-20 gap-4'>
        <IoIosPlayCircle className='text-blue-800  hover:text-amber-600 h-20 w-20 hidden md:block'/>
        <span className='text-gray-500 hidden md:block'>WATCH VIDEO</span>
        <center><h1 className='text-4xl font-sans  text-blue-800 '>Unlock The <br className='md:hidden'/>Potential</h1></center>
        <center><p className='text-blue-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer<br/>
         est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id lectus<br/>
          posuere nisi dignissim gravida at ac justo. Ut nec dui rutrum,<br/>
           cursus mauris sed integer eu vel.</p></center>
    </div>
  )
}

export default VideoBox