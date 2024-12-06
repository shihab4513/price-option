import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const Features = ({feature}) => {
  return (
    <div className=''>
        <p className='flex items-center gap-3'><FaCircleCheck className='text-green-500' />{feature}</p>
    </div>
  )
}

export default Features