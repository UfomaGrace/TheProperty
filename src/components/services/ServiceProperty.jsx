import React from 'react'
import { BsHouseDoor, BsCurrencyDollar } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

export default function ServiceProperty() {
  return (
    <div className='min-h-screen md:py-12 py-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-20 mx-2'>
        <div className='rounded-3xl bg-white md:mt-10 mt-4 group shadow-2xl'>
            <div className='md:py-8 py-4'>
                <div className='rounded-full bg-[#2c7a7b] text-white w-20 h-20 flex items-center justify-center text-center mx-4'>
                    <BsHouseDoor className='w-8 h-8'/>
                </div>
                <h3 className='text-2xl font-bold mx-4 my-4'>Buy Your Dream Home</h3>
                <p className='text-gray-500 text-base leading-relaxed font-normal mx-4 my-4 text-md'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                </p>
                <div className='flex gap-4 mx-4'>
                    <div >
                        <p className='text-xl text-[#2c7a7b] font-bold'>2,500+</p>
                        <p className='text-sm text-gray-500'>Properties Sold</p>
                    </div>
                    <div>
                        <p className='text-xl text-[#2c7a7b] font-bold'>98%</p>
                        <p className='text-sm text-gray-500'>Client Satisfaction</p>
                    </div>
                </div>
                <div className='mx-4 my-4 flex gap-1.5'>
                    <a href="/" className="text-[#2c7a7b] font-bold text-lg peer">Learn more </a>
                    <GoArrowRight className='translate-y-1.5 transition-transform text-[#2c7a7b] font-bold text-lg peer-hover:translate-x-2 duration-500 ease-in-out' />
                </div>
            </div>
            <div className='overflow-hidden rounded-b-2xl h-64'>
                <img src="/images/Service-property-1.webp" alt="Service Property" className='block w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 transform-gpu [will-change:transform]'/>
            </div>
        </div>


        <div className='rounded-3xl bg-white md:mt-10 mt-4 group shadow-2xl'>
            <div className='md:py-8 py-4'>
                <div className='rounded-full bg-[#2c7a7b] text-white w-20 h-20 flex items-center justify-center text-center mx-4'>
                    <BsCurrencyDollar className='w-8 h-8'/>
                </div>
                <h3 className='text-2xl font-bold mx-4 my-4'>Sell Your Property</h3>
                <p className='text-gray-500 text-base leading-relaxed font-normal mx-4 my-4 text-md'>Sed ut perspiciatis unde omnis 
                    iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
                </p>
                <div className='flex gap-4 mx-4'>
                    <div >
                        <p className='text-xl text-[#2c7a7b] font-bold'>45</p>
                        <p className='text-sm text-gray-500'>Days Average Sale</p>
                    </div>
                    <div>
                        <p className='text-xl text-[#2c7a7b] font-bold'>$2.5M+</p>
                        <p className='text-sm text-gray-500'>Highest Sale Price</p>
                    </div>
                </div>
                <div className='mx-4 my-4 flex gap-1.5'>
                    <a href="/" className="text-[#2c7a7b] font-bold text-lg peer">Get Valuation </a>
                    <GoArrowRight className='translate-y-1.5 transition-transform text-[#2c7a7b] font-bold text-lg peer-hover:translate-x-2 duration-500 ease-in-out' />
                </div>
            </div>
            <div className='overflow-hidden rounded-b-2xl h-64'>
                <img src="/images/service-property-2.webp" alt="Service Property" className='block w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 transform-gpu [will-change:transform]'/>
            </div>
        </div>
    </div>
  )
}
