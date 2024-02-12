import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";

function VideoBox() {
  return (
    <div className='bg-blue-300  font-serrif flex flex-col items-center justify-cente py-20 gap-4'>
        <IoIosPlayCircle className='text-blue-800  hover:text-amber-600 h-20 w-20'/>
        <span className='text-gray-500'>WATCH VIDEO</span>
        <h1 className='text-3xl  text-blue-800'>Unlock The Potential</h1>
        <center><p className='text-blue-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer<br/>
         est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id lectus<br/>
          posuere nisi dignissim gravida at ac justo. Ut nec dui rutrum,<br/>
           cursus mauris sed integer eu vel.</p></center>
    </div>
  )
}

export default VideoBox