import React from 'react'
import { BsFillHouseHeartFill, BsFillPersonLinesFill, BsFillStarFill, BsStarFill, BsTelephone, BsTelephoneFill, BsTrophyFill } from 'react-icons/bs'
import { FaCircleCheck } from 'react-icons/fa6'


export default function PerfectInvestment() {
  return (
    
    <div className='bg-[#2a7c7b1f] py-16 grid md:grid-cols-2 grid-cols-1 gap-8 md:px-18 px-2 mt-8'>
        <div className='max-w-xl col-span-1 md:order-1 order-2'>
            <div className='rounded-full px-4 py-2 text-[#2a7c7b] bg-[#2a7c7b2f] w-fit text-sm font-bold mb-6'>
                <p>Your Property Journey Starts Here</p>
            </div>
            <div>
                <h2 className='md:text-4xl text-3xl font-bold mb-6 font-sans text-[#163535]'>Ready to Find Your Perfect Investment?</h2>
                <p className='text-lg text-[#323b3bb3] leading-relaxed mb-6'>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
            </div>
            <div className='mt-4 space-y-4 mb-6'>
                <div className='flex gap-3'>
                    <FaCircleCheck className='text-[#2a7c7b] transition-transform translate-y-1'/>
                    <span className='font-medium text-[#323b3b] text-[1rem] text-left'>Expert market analysis and insights</span>
                </div>
                <div className='flex gap-3'>
                    <FaCircleCheck className='text-[#2a7c7b] transition-transform translate-y-1'/>
                    <span className='font-medium text-[#323b3b] text-[1rem] text-left'>Personalized property recommendations</span>
                </div>
                <div className='flex gap-3'>
                    <FaCircleCheck className='text-[#2a7c7b] transition-transform translate-y-1'/>
                    <span className='font-medium text-[#323b3b] text-[1rem] text-left'>End-to-end transaction support</span>
                </div>
            </div>
            <div className='flex flex-wrap items-center md:items-start md:text-start text-center md:justify-start justify-center gap-6 py-4 w-full'>
                
                <div className='rounded-md bg-[#2a7c7b] px-4 py-2.5 w-fit cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md'>
                    <button className='text-white font-bold flex gap-2 relative overflow-hidden group'>
                        <BsFillPersonLinesFill className='text-white transition-transform translate-y-1'/>
                        Get Free Consultation
                        <span className="absolute inset-0 -translate-x-full w-1/2 bg-white/30 skew-x-[-20deg] group-hover:[animation:shineEffect_0.7s_ease-in-out]"></span>
                    </button>
                </div>
                <div className='flex gap-2 rounded-md bg-white px-4 py-2.5 w-fit border-2 text-[#2c7a7b] border-[#2a7c7b] cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:shadow-[#2a7c7b1f] hover:text-white hover:bg-[#2a7c7b]'>
                    <BsTelephoneFill className='transition-transform translate-y-1'/>
                    <button className='font-bold cursor-pointer'><a href="/contact">Call(555) 123-4567</a></button>
                </div>
            </div>
        </div>
        <div className='col-span-1 relative z-40 md:order-2 order-1'>
            <div className='overflow-hidden rounded-2xl z-40 relative h-[68vh]'>
                <img src="/images/property-exterior-iii.webp" alt="Property Exterior" className='transition-transform duration-300 hover:scale-110 object-cover w-full h-full ease-in-out transform-gpu [will-change:transform] block'/>
                <div className='absolute top-6 left-6 rounded-full w-fit px-5 py-3.5 flex gap-2 bg-white'>
                    <BsFillStarFill className='text-yellow-300 transition-transform translate-y-0.5'/>
                    <p className='text-sm font-semibold'>Trusted by 500+ Clients</p>
                </div>
            </div>
            <div className='mx-auto md:mx-0 bg-white rounded-2xl w-fit md:px-7.5 px-5 py-5 z-50 flex gap-4 md:absolute relative md:bottom-[6.5rem] md:right-6 mt-4 md:mt-0 transition-transform duration-300 ease-in-out hover:-translate-y-1.5'>
                <div className='rounded-2xl bg-[#2a7c7b1f] w-fit px-3 py-1.5 flex items-center text-center justify-center'>
                    <BsFillHouseHeartFill className='text-2xl text-[#2a7c7b] text-center'/>
                </div>
                <div>
                    <p className='text-2xl font-bold'>850+</p>
                    <p className='text-sm text-[#323b3bb3]'>Properties Sold</p>
                </div>
            </div>
            <div className='mx-auto md:mx-0 bg-white rounded-2xl w-fit md:px-7 px-5 py-5 flex gap-4 md:absolute static md:bottom-1 md:right-6 mt-4 md:mt-0 z-42 transition-transform duration-300 ease-in-out hover:-translate-y-1.5'>
                <div className='rounded-2xl bg-[#2a7c7b1f] w-fit px-3 py-1.5 flex items-center text-center justify-center'>
                    <BsTrophyFill className='text-2xl text-[#2a7c7b] text-center'/>
                </div>
                <div>
                    <p className='text-2xl font-bold'>15</p>
                    <p className='text-sm text-[#323b3bb3]'>Years Experience</p>
                </div>
            </div>
        </div>
    </div>
  )
}
