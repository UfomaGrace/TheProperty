import React from 'react'

export default function ServiceFooter() {
  return (
    <div className='mb-4 md:px-20 px-2 '>
        <div className='bg-[#286c6d] rounded-2xl md:p-10 p-6 justify-between md:flex grid grid-cols-1'>
            <div className='md:text-start text-center'>
                <h3 className='text-3xl font-bold mb-2.5 text-white'>Ready to Take the Next Step?</h3>
                <p className='text-[#ffffffcc] text-[16px] leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipiscing
                    elit sed do eiusmod tempor incididunt ut labore et<br className="hidden md:block"/> dolore magna 
                    aliqua enim ad minim veniam.
                </p>
            </div>
            <div className=' text-[#2c7a7b] mt-6 md:text-start text-center'>
                
                
                <button className='rounded-lg whitespace-nowrap py-3 px-6 md:translate-y-3 bg-white text-lg font-bold md:hover:translate-y-2 ease-in-out transition-all duration-500 hover:opacity-85'>
                    Get Free Consultation
                </button>
            </div>
        </div>
    </div>
  )
}
