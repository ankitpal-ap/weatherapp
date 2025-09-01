"use client"
import React,{useState} from 'react'

const InputCard = ({onSearch}) => {
  const [city, setCity] = useState("")
  const handleSearch  = ()=>{
  onSearch(city);

  }
  return (
   <div className='w-[400px] h-[200px]  p-4 flex flex-col justify-center items-center bg-stone-400 rounded-2xl gap-4'>
   <div className='flex flex-col justify-center items-center gap-2'>
<div className='text-3xl font-bold'>
                <span className='font-bold text-blue-500 text-4xl'>Weather</span> App
                </div>
                <p className='font-extralight text-center italic '>Get the Weather details of any city, Right now</p>
   </div>
        
        <div className='flex md:flex-row flex-col gap-4'>
           <form
  onSubmit={(e) => {
    e.preventDefault();
    handleSearch();
  }}
  className='flex md:flex-row flex-col gap-4'
>          
            <input className='p-2 rounded-2xl border-2' 
            placeholder='Enter your city name'
            type="text" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            
            />
            <button 
            onClick={handleSearch}
            className='bg-orange-500 px-4 py-2 rounded-2xl text-white '>Search
            </button>
            </form>
        </div>
    </div>
  )
}

export default InputCard