import React from 'react'
import CountUp from 'react-countup';
import { BsBuildingsFill, BsArrowRightCircle, BsAward } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";


export default function PremiumEstate() {
  return (
    <div className='bg-white md:py-18 py-8 grid grid-cols-1 md:grid-cols-2 md:px-18 px-2 gap-6'>
        <div className='md:order-1 order-2'>
            <div className="md:mb-6 mb-3 rounded-full bg-[#2c7a7b] text-white inline-block py-1 md:px-3 px-1 text-sm font-bold tracking-wide">
                <span className="flex gap-2 p-2">
                    <BsBuildingsFill className="text-white translate-y-0.5" />
                    Premium Real Estate
                </span>
            </div>
            <div className=''>
                <h2 className='md:text-4xl text-3xl font-bold mb-5 leading-tight max-w-lg text-[#323b3b]'>Transforming Real Estate Dreams Into Reality</h2>
                <p className='text-[1.1rem] leading-relaxed mb-12 text-[#323b3bcc] max-w-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. 
                    Enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                </p>
            </div>
            <div className='max-w-xl grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-10 mb-2'>
                <div className='w-full rounded-2xl border border-gray-200 py-5 px-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4'>
                    <CountUp end={2800} duration={5} suffix='+' className='text-3xl text-[#2c7a7b] font-bold '/>
                    <p className="mt-2 text-sm text-gray-600 font-semibold">Properties Listed</p>
                </div>
                <div className='w-full rounded-2xl border border-gray-200 py-5 px-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4'>
                    <CountUp end={95} duration={5} suffix='%' className='text-3xl text-[#2c7a7b] font-bold'/>
                    <p className="mt-2 text-sm text-gray-600 font-semibold">Success Rate</p>
                </div>
                <div className='w-full rounded-2xl border border-gray-200 py-5 px-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4'>
                    <CountUp end={24} duration={6} suffix='/7' className='text-3xl text-[#2c7a7b] font-bold'/>
                    <p className="mt-2 text-sm text-gray-600 font-semibold">Client Support</p>
                </div>
            </div>
            <div className='py-8'>
                <ul className='text-[1rem] text-[#323b3b]'>
                    <li className='flex gap-3 mb-4'>
                        <FaRegCircleCheck className='transition-transform translate-y-1 text-[#2c7a7b]'/>
                        Expert market analysis and pricing strategies
                    </li>
                    <li className='flex gap-3 mb-4'>
                        <FaRegCircleCheck className='transition-transform translate-y-1 text-[#2c7a7b]'/>
                        Personalized property matching services
                    </li>
                    <li className='flex gap-3 mb-4'>
                       <FaRegCircleCheck className='transition-transform translate-y-1 text-[#2c7a7b]'/>
                       Professional photography and virtual tours 
                    </li>
                </ul>
            </div>

            <div className='md:flex gap-8'>
                <div className='rounded-full bg-[#2c7a7b] text-white px-6 py-4 md:mb-0 mb-4 flex items-center justify-center gap-2 w-fit'>
                    <a href="" className='text-lg font-semibold'>Learn More About Us</a>
                    <BsArrowRightCircle />
                </div>
                <div className='flex gap-2 transition-transform translate-y-3'>
                    <div className='flex items-center justify-center px-4 py-3 w-12 h-12 rounded-full mb-6 bg-[#2c7a7c1f] text-[#2c7a7c]'>
                        <MdHeadsetMic className="w-8 h-10 font-normal leading-4"/>
                    </div>
                    <div>
                        <p className='text-sm font-light'>Need assistance?</p>
                        <a href="" className='font-bold'>+1 (555) 987-6543</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:order-2 order-1 relative grid md:grid-rows-2 grid-rows-0 grid-cols-2 gap-4 mb-8 md:mb-0 mt-8 max-w-2xl z-40">
            <div className="col-span-2 relative z-40">
                <img src="images/property-A2.webp" alt="Property" className="row-span-1 w-full h-[60vh] rounded-3xl"/>

                
                <div className="absolute md:right-12 right-4 md:bottom-6 bottom-4 flex gap-4 mb-2 md:p-5 p-3 bg-white shadow-xl rounded-2xl w-fit justify-between">
                    <div className="rounded-2xl bg-[#2c7a7b] text-white flex items-center justify-center w-14 h-14">
                        <BsAward className='w-6 h-6'/>
                    </div>
                    <div>
                        <h4 className="font-bold md:text-3xl text-2xl">12+</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Awards Won</p>
                    </div>
                </div>
            
            </div>
            
            <div className='md:col-span-1 col-span-2 overflow-hidden rounded-3xl h-[25vh] shadow-md '>
                <img src="images/property-A21.webp" alt="Property" className="rounded-inherit transition-transform duration-500 hover:scale-110 w-full h-full ease-in-out transform-gpu [will-change:transform] block object-cover"/>
            </div>
            <div className='md:col-span-1 col-span-2 overflow-hidden rounded-3xl h-[25vh] shadow-md'>
                <img src="images/agent-A2.webp" alt="Agent" className="rounded-inherit transition-transform duration-500 hover:scale-110 w-full h-full ease-in-out transform-gpu [will-change:transform] block object-cover"/>
            </div>
        </div>
    </div>
  )
}