import React from 'react'


function TopButtons({ setQuery }) {

    const cities = [
        {
            id:1,
            title: 'New York'
        },
        {
            id:2,
            title: 'Boston'
        },
        {
            id:3,
            title: 'Los Angeles'
        },
        {
            id:4,
            title: 'Chicago'
        },
        {
            id:5,
            title: 'Houston'
        },
    ]

  return <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
        <button key={city.id} className='text-white text-lg
         font-medium' onClick={() => setQuery({ q: city.title })}>
            {city.title}
        </button>
    ))}
  </div>
}

export default TopButtons