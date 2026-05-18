import React from 'react'
import mine from './assets/mine.jpg'
import laptop from './assets/laptop.webp'
import kanye from './assets/kanye.jpg'
export default function HelloPage() {
  return (

    <div className='greet flex flex-col items-center justify-center mb-5
      '>
        <div className="navbar flex w-full h-max py-1 text-center items-center justify-center
        bg-[#2FA084]"> 
             <h1 className='logo text-2xl text-gray-200 font-semibold'>omar writes blog</h1>
        </div>
        <h1 className='text-xl mt-5 mb-4'>look at my mind ! (partially)</h1>
    
        <div className="core text-wrap  m-2">
            <hr className='mb-5'/>
      <p>
        This Blog is intended to be a notebook for some sractches and ideas that come to 
        my mind now and then all i want is to share what i feel knowing mostly it
        will be a ghost town but let us say it's just a way to put the serious ideas 
        i have in my head on a board and looking at them 
        </p>
                      
        </div>
    <div className="bio flex flex-col mt-10 mx-2 gap-20 items-center justify-center">
        
        <div className="first flex">        
            <p className='w-50'>hobbyist in computers and any piece of silicon inside a moderately-bad
            designed box
        </p>
            <img src={mine} alt="" className='w-50 mx-20' />
            <h2 className='text-xl'>&larr; that's me</h2>
            </div>


        <div className="first flex items-center">    
        <p className='w-80'>
            that's the silicon chip inside a "poorly" designer box i am using rn
            </p>    
        <img src={laptop} alt="" className='w-70 ms-30' />
            </div>
        <div className="first flex items-center">    
        <img src={kanye} alt="" className='w-70 me-30' />
        <p className='w-80'>
            that's just a photo of the goat
            </p>    
            </div>



        </div>

    </div>
    
)
}
