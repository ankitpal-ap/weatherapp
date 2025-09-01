"use client"

import React,{useState} from 'react'
import InputCard from '@/components/InputCard'
import OutputCard from'@/components/OutputCard'


const WeatherApp = () => {
    const [weatherData,setweatherData] = useState(null);
   const handleSearch = async (city) =>{
    const API_KEY = "aa859af1d8124e679f8165111253108"
    try{
        const response = await fetch(
           
           `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`

        );
        const data = await response.json();
        setweatherData(data);
    } catch(e){
     console.log("error ouccured : ",e);
     
    }
   }


  return (
     <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-4 bg-black'>
          <InputCard onSearch={handleSearch}/>
          <OutputCard weatherData={weatherData}/>
        </div>
  )
}

export default WeatherApp