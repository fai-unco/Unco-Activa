import React from 'react'

const Hero = () => {
    return (
        <div className='grid justify-center h-screen bg-hero-pattern bg-cover '>
            <div className='flex items-end'>
                <img 
                    src='./UNCO_activa.svg'
                    className='h-20'>
                </img>
            </div>
            <div className='flex items-end justify-center py-10 text-black font-bold max-h-full'>
                <a 
                    href="" 
                    className='border-2 border-white rounded-full px-10 py-1 text-[17px] bg-white hover:bg-opacity-0 hover:text-white ease-in-out duration-1000'>
                    REGISTRATE
                </a>
            </div>
        </div>
    )
}

export default Hero