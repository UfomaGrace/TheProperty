import React from 'react'
import { BsHouseHeart } from "react-icons/bs";

export default function FirstAbout() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center md:py-16 py-8 md:px-18 px-3'>
        <div className='max-w-7xl'>
            <div className="md:mb-6 mb-3 rounded-full bg-[#2c7a7b1f] text-[#2c7a7b] inline-block py-1 text-sm font-bold tracking-wide border border-[#2c7a7b5e]">
                <span className="flex gap-2 p-2 whitespace-nowrap">
                    <BsHouseHeart className="text-[#2c7a7b] translate-y-1 transition-transform" />
                    Your Trusted Real Estate Partner
                </span>
            </div>
            <div className='md:max-w-7xl'>
                <h2 className='md:max-w-4xl md:text-5xl text-4xl mb-6 leading-tight text-[#163535] font-semibold'>
                    Building Dreams, Creating Homes Since 2010
                </h2>
                <p className='text-xl leading-7 mb-5 text-[#323b3bcc] max-w-7xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p className='text-[#323b3bb3] mb-8 leading-7 max-w-7xl'>
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
            </div>
            <div className='border-l-4 border-l-[#2c7a7b] rounded-4xl md:p-4 p-2 flex gap-4 max-w-3xl'>
                <img src="/images/person-1.webp" alt="Agent Michael" className='rounded-full w-16 h-16 border-4 border-[#2c7a7b] items-center text-center justify-center'/>
                <div>
                    <p className='italic text-lg mb-4 leading-relaxed text-[#323b3bbf]'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit."</p>
                    <p className='text-[#163535] text-lg'>Michael Thompson</p>
                    <span className='text-sm text-[#2c7a7b] font-medium'>Founder & CEO</span>
                </div>
            </div>
        </div>
        <div className="relative z-40 mt-2 md:ml-16 ml-0">
            <div className='overflow-hidden rounded-4xl'>
                <img src="/images/property-exterior-1.webp" alt="First Property" className="block w-full object-cover shadow-md h-[68vh] transition-transform duration-500 ease-in-out hover:scale-110 transform-gpu [will-change:transform]"/>
            </div>
            <div className="-bottom-8 left-0 right-12 -mx-10 absolute">
                <img src="/images/property-interior-1.webp" alt="Property" className="hidden md:block rounded-2xl shadow-md h-42 w-50 -mt-10 border-4 border-white"/>
            </div>
            <div className="md:px-8 py-4 px-4 bg-white text-center shadow-md rounded-xl max-w-fit h-24 mt-4 absolute top-0 md:right-14 right-2 border-3 border-[#2c7a7b]">
              <h3 className="text-3xl font-bold text-[#2c7a7b]">14+</h3>
              <p className="text-gray-800 text-sm font-semibold">Years of Excellence</p>
            </div>
        </div>
    </div>
  )
}
