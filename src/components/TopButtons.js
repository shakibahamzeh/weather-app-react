import React from 'react'

const TopButtons = () => {
    const cities = [
        {id:0,title:"London"},
        {id:1,title:"Paris"},
        {id:2,title:"Sydney"},
        {id:3,title:"Tokyo"},
        {id:4,title:"Toronto"}
    ];
  return (
    <div className='flex item-center justify-around my-6'>
        {
            cities.map((city)=> <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>)
        }
    </div>
  )
}

export default TopButtons