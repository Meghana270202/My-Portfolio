import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
  <div name='home' className='h-screen w-full bg-[#0a192f]'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full pr-6'>
      <p className='text-pink-600 '>Hi, my name is</p>
      <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>Meghana Maheshwari</h1>
      <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a FrontEnd developer.</h2>
        <p className='text-[#8892b0]'>
        I'm a second year B.tech | CSE student at Institute of engineering and technology, DAVV. I'm a passionate web developer, aiming to get better each day.  
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover: border-pink-600'> Portfolio <span><MdOutlineKeyboardArrowRight/>
          </span></button>
        </div>
      </div>
      <div className='flex flex-col justify-center hover:scale-110 duration-500'><img className='h-64 mx-auto  md:w-full rounded-full' src='Img.jpeg' alt='my'/></div>
    </div>
  </div>
   
  )
}

export default Home