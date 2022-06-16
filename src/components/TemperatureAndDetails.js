import React from 'react';
import { UilTemperature } from '@iconscout/react-unicons';
import { UilWind } from '@iconscout/react-unicons';
import { UilTear } from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
           <p>Clear</p>
        </div>
        <div className='flex items-center justify-between text-white py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt='pic' className='w-20'/>
            <p className='text-4xl ml-5'>34°C</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilTemperature size={18} className="mr-1"/>
                  Real fell:
                 <span className='font-medium ml-1'>32 °C</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilTear size={18} className="mr-1"/>
                  Humidity:
                 <span className='font-medium ml-1'>40 %</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilWind size={18} className="mr-1"/>
                  Wind:
                 <span className='font-medium ml-1'>20 km/h</span>
                </div>
            </div>
            
        </div>

        <div className='flex items-center justify-center space-x-2 text-white text-sm py-3'>
            
        </div>
    </div>
  )
}

export default TemperatureAndDetails