import React from 'react';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';
import { UilCelsius } from '@iconscout/react-unicons';
import { UilFahrenheit } from '@iconscout/react-unicons'

const Inputs = () => {
  return (
    <div className='flex justify-center my-6'>
        <div className='flex w-3/4 items-center justify-center space-x-4'>
            <input 
             type="text"
             placeholder='Search for city ...'
             className='text-xl font-light p-2 focus:outline-none w-full capitalize placeholder:lowercase'
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 "/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex items-center justify-center w-1/4'>
            <button name='metric' className='text-xl text-white font-light'>
              <UilCelsius size={20}/>
            </button>
            <p className='text-white text-xl mx-2'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>
              <UilFahrenheit size={20}/>
            </button>
        </div>
    </div>
  )
}

export default Inputs