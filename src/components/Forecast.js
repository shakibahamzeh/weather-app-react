import React from 'react'
import { iconUrlFromCode } from '../services/weatherApi'

const Forecast = ({title,items}) => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <h4 className='font-medium text-white uppercase'>{title}</h4>
        </div>
        <hr className='my-2'/>
        <div className='flex items-center justify-between text-white'>
         {items.map(item =>
                 <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>
                     {item.title}
                    </p>
                    <img src={iconUrlFromCode(item.icon)} alt="forecast" className='w-12 my-1'/>
                    <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                 </div>
            )
         }
           
        
           
           
        </div>
    </div>
  )
}

export default Forecast