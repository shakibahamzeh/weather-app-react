import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {id:0,title:"London"},
        {id:1,title:"Paris"},
        {id:2,title:"Sydney"},
        {id:3,title:"Tokyo"},
        {id:4,title:"Toronto"}
    ];
  return (
    <div className='flex item-center md:justify-around justify-between my-6'>
        {
            cities.map((city)=> <button key={city.id} className='text-white sm:text-lg text-sm sm:font-medium font-normal  transition ease-out hover:scale-125 mx-1' onClick={()=>setQuery({q:city.title})}>{city.title}</button>)
        }
    </div>
  )
}

export default TopButtons