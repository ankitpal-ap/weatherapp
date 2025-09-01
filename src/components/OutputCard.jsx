"use client"
import React from 'react'

const OutputCard = ({weatherData}) => {
  if (!weatherData){
    return null;
  }
    
  return (
    <div className='w-[400px] h-[200px]  p-6 flex flex-col justify-center bg-blue-950 items-center text-white rounded-2xl gap-2'>
    <div className='flex flex-row gap-4 items-center m-2'>
        <p id='City-name'>{weatherData.location.name},{weatherData.location.region}</p>
        <p id='CountryName' className='bg-orange-600 rounded-2xl px-4 py-2'>
          {weatherData.location.country}</p>
      </div>
      <div className='tempCard'>
        <p id='temp' className='text-xl font-bold'> 🌡 Temp:{weatherData.current.temp_c}°C</p>
      </div>
      <p id='loc-time' className='italic font-light'>{weatherData.location.localtime}</p>
    <img
        src={weatherData.current.condition.icon}
        alt="weather icon"
      />
    </div>
  )
}

export default OutputCard

