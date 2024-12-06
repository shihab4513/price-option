import React from 'react'
import Features from '../Features/Features';

const PriceOption = ({option}) => {
  const {price,name,features}=option;
    return (
    <div className='bg-blue-500 rounded-md p-6 text-white flex flex-col'>
        <h2 className='text-center'>
            <span className='text-7xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
            
        </h2>
        <h4 className='text-3xl text-center my-8'>{name}</h4>
        <div className='pl-6 flex-grow'>
        {
          features.map((feature,index)=><Features key={index} feature={feature}></Features>)
        }
        </div>
        <button className='bg-green-500 w-full mt-12 rounded-md p-4 font-bold hover:bg-green-900'>Buy Now!</button>
    </div>
  )
}

export default PriceOption