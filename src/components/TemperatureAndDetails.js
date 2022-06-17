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
            <img src={iconUrlFromCode(icon)} alt='pic' className='w-20'/>
            <p className='text-4xl ml-5'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilTemperature size={18} className="mr-1"/>
                  Real fell:
                 <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilTear size={18} className="mr-1"/>
                  Humidity:
                 <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex text-sm font-light items-center justify-center'>
                  <UilWind size={18} className="mr-1"/>
                  Wind:
                 <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                </div>
            </div>
            
        </div>

        <div className='flex items-center justify-center space-x-2 text-white text-sm py-3'>
            <div className='flex items-center justify-center'>
              <UilSun className="mr-1"/>
              Rise:
              <span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone,'hh:mm a')}</span>
            </div>
            <p className='font-light'>|</p>
            <div className='flex items-center justify-center'>
              <UilSunset className="mr-1"/>
              Set:
              <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,'hh:mm a')}</span>
            </div>
            <p className='font-light'>|</p>
            <div className='flex items-center justify-center'>
              <UilArrowUp className="mr-1"/>
              High:<span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
              
            </div>
            <p className='font-light'>|</p>
            <div className='flex items-center justify-center'>
              <UilArrowDown className="mr-1"/>
              Low:
             <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails