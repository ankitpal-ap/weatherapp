"use client"
import React from 'react'
import WeatherApp from '@/components/WeatherApp'



const page = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-3 bg-black'>
     <WeatherApp/>
    </div>
    
  )
}


export default page