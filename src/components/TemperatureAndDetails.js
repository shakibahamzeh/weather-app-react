import React from 'react';
import { UilTemperature } from '@iconscout/react-unicons';
import { UilWind } from '@iconscout/react-unicons';
import { UilTear } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';
import { UilSunset } from '@iconscout/react-unicons';
import { UilArrowUp } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherApi';

const TemperatureAndDetails = ({weather: 
  {details,icon,temp,temp_min,temp_max,sunrise, sunset,speed,humidity,feels_like,timezone}}) => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
           <p>{details}</p>
        </div>
        <div className='flex items-center justify-between text-white py-3'>
            <div>
              <img src={iconUrlFromCode(icon)} alt='pic' className='w-20'/>
            </div>
            <div>
              <p className='sm:text-4xl text-2xl ml-5'>{`${temp.toFixed()}°`}</p>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilTemperature size={18} className="mr-1 text-lime-400"/>
                  Real fell:
                 <span className='font-medium ml-1 inline-bloc'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilTear size={18} className="mr-1 text-emerald-700"/>
                  Humidity:
                 <span className='font-medium ml-1 inline-block'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilWind size={18} className="mr-1 text-sky-600"/>
                  Wind:
                 <span className='font-medium ml-1 inline-block'>{`${speed.toFixed()}km/h`}</span>
                </div>
            </div>
            
        </div>

        <div className='flex items-center sm:justify-center text-white text-sm sm:p-0 sm:py-3 py-3  p-4 flex-wrap sm:flex-nowrap sm:flex-row flex-col'>
            <div className='flex items-center justify-between'>
              <UilSun className="mr-1 text-yellow-400"/>
              <p className='font-normal text-sm ml-1'>Rise:{formatToLocalTime(sunrise,timezone,'hh:mm a')}</p>
              
            </div>
            <p className='font-light ml-1'>|</p>
            <div className='flex items-center justify-between'>
              <UilSunset className="mr-1 text-zinc-400"/>
              <p className=' font-normal  text-sm  ml-1'>Set:{formatToLocalTime(sunset,timezone,'hh:mm a')}</p>
           
            </div>
               <p className='font-light ml-1'>|</p>
            <div className='flex items-center justify-between sm:m-0 mt-1'>
              <UilArrowUp className="text-red-600"/>
              <p className=' font-normal text-sm  ml-1'>High:{`${temp_max.toFixed()}°`}</p>
           
            </div>
               <p className='font-light ml-1'>|</p>
            <div className='flex items-center justify-between sm:m-0 mt-1'>
              <UilArrowDown className="text-emerald-300"/>
              <p className=' font-normal text-sm  ml-1'>Low:{`${temp_min.toFixed()}°`}</p>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails