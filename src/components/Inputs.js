import React,{useState} from 'react';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';
import { UilCelsius } from '@iconscout/react-unicons';
import { UilFahrenheit } from '@iconscout/react-unicons'

const Inputs = ({setQuery,setUnits,units}) => {
  const [city,setCity]= useState('');
  const clickSearchHandler = () => {
    if( city !== "") setQuery({q: city})  
  }

  const clickLocationHandler = () => {
     if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position => {
         let lat = position.coords.latitude;
         let lan = position.coords.longitude;
         setQuery({lat,lan})
       })
     }
  }
  const clickUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) setUnits(selectedUnit)
  }


  return (
    <div className='flex justify-center my-6'>
        <div className='flex w-3/4 items-center justify-center space-x-4'>
            <input 
             value={city}
             onChange={(e)=> setCity(e.target.value)}
             type="text"
             placeholder='Search for city ...'
             className='text-xl font-light p-2 focus:outline-none w-full capitalize placeholder:lowercase'
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 " onClick={clickSearchHandler}/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={clickLocationHandler}/>
        </div>
        <div className='flex items-center justify-center w-1/4'>
            <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125'>
              <UilCelsius size={20} onClick={clickUnitChange}/>
            </button>
            <p className='text-white text-xl mx-2'>|</p>
            <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125'>
              <UilFahrenheit size={20} onClick={clickUnitChange}/>
            </button>
        </div>
    </div>
  )
}

export default Inputs