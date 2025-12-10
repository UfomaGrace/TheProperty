import React from 'react'
import { BsEnvelope, BsFacebook, BsGeoAlt, BsInstagram, BsLinkedin, BsTelephone, BsTwitter } from "react-icons/bs";

export default function TopAgent() {
  return (
    <div className='py-12 grid grid-cols-1 md:grid-cols-2 md:px-18 px-4 md:gap-14 gap-6'>
        <div className='relative z-40'>
            <img src="/images/agent-emily.webp" alt="Agent Emily" className='md:max-w-2xl w-full rounded-2xl md:h-[96vh] h-full'/>
            <div className='bg-[#2c7a7b] text-white font-bold px-4 py-2 w-fit rounded-full absolute top-5 left-5'>
                <p>Top Seller</p>
            </div>
        </div>

        <div>
            <div>
                <h3 className='md:text-5xl text-3xl font-normal'>Emily Rodriguez</h3>
                <p className='text-[#2c7a7b] font-semibold text-lg md:mt-3 mt-1'>Senior Real Estate Advisor</p>
            </div>
            <div className='mt-6 mb-8 md:flex gap-2 space-y-2 md:space-y-0'>
                <div className='text-[#2c7a7b] bg-[#2c7a7b1f] rounded-full px-3 py-1 w-fit font-bold border border-[#2c7a7b] text-sm'>
                    <p>Luxury Homes</p>
                </div>
                <div className='text-[#2c7a7b] bg-[#2c7a7b1f] rounded-full px-3 py-1 w-fit font-bold border border-[#2c7a7b] text-sm'>
                    <p>Investment Properties</p>
                </div>
                <div className='text-[#2c7a7b] bg-[#2c7a7b1f] rounded-full px-3 py-1 w-fit font-bold border border-[#2c7a7b] text-sm'>
                    <p>First-Time Buyers</p>
                </div>
            </div>
            <div>
                <p className='text-[#323b3bcc] italic text-lg'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation."
                </p>
            </div>
            <div className='flex gap-6 mt-6'>
                <div className='flex flex-col'>
                    <span className='text-center text-[#2c7a7b] font-bold text-3xl mb-2'>150+</span>
                    <span className='text-[#323b3baf] text-sm text-center'>Properties Sold</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-center text-[#2c7a7b] font-bold text-3xl mb-2'>$45M</span>
                    <span className='text-[#323b3baf] text-sm text-center'>Total Sales</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-center text-[#2c7a7b] font-bold text-3xl mb-2'>5</span>
                    <span className='text-[#323b3baf] text-sm text-center'>Years Experience</span>
                </div>
            </div>
            <div className='py-6 mt-3 space-y-4'>
                <div className='flex gap-2'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsTelephone size={20} /></span>
                    <span className='font-medium text-[#323b3b]'>+1 (555) 234-5678</span>
                </div>
                <div className='flex gap-2'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsEnvelope size={20} /></span>
                    <span className='font-medium text-[#323b3b]'>emily.rodriguez@example.com</span>
                </div>
                <div className='flex gap-2'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsGeoAlt size={20} /></span>
                    <span className='font-medium text-[#323b3b]'>Downtown Miami Office</span>
                </div>
            </div>
            <div className="flex mb-8 gap-4 mt-3">
                <div><a href="#" className="rounded-full w-10 h-10 border border-gray-200 transition-all duration-500 flex items-center justify-center text-sm hover:bg-[#2c7a7b] hover:text-white hover:-translate-y-1"><BsLinkedin size={16}/></a></div>
                <div><a href="#" className="rounded-full w-10 h-10 border border-gray-200 transition-all duration-500 flex items-center justify-center text-sm hover:bg-[#2c7a7b] hover:text-white hover:-translate-y-1"><BsFacebook size={16}/></a></div>
                <div><a href="#" className="rounded-full w-10 h-10 border border-gray-200 transition-all duration-500 flex items-center justify-center text-sm hover:bg-[#2c7a7b] hover:text-white hover:-translate-y-1"><BsInstagram size={16}/></a></div>
                <div><a href="#" className="rounded-full w-10 h-10 border border-gray-200 transition-all duration-500 flex items-center justify-center text-sm hover:bg-[#2c7a7b] hover:text-white hover:-translate-y-1"><BsTwitter size={16}/></a></div>
            </div>
            <div className='gap-2 md:space-y-0 space-y-2 flex flex-col md:items-start md:justify-start md:flex-row items-center justify-center '>
                <div className='bg-[#2c7a7b] text-white font-semibold rounded-full px-5 py-2.5 w-fit transition-all hover:bg-[#2c7a7b]/80 duration-300 hover:-translate-y-0.5 cursor-pointer'>
                    <button><a href="/">View my Listings</a></button>
                </div>
                <div className='border-2 border-[#2c7a7b] text-[#2c7a7b] bg-white font-bold rounded-full px-5 py-2.5 w-fit transition-colors hover:bg-[#2c7a7b] hover:text-white duration-500 cursor-pointer'>
                    <button><a href="/">Schedule Consultation</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}
