import React from 'react'
import { BsKey, BsGraphUp, BsTools } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

export default function ServiceCard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:px-8 px-2 md:mx-12 mx-0'>
        <div className='rounded-2xl border-2 border-gray-200 md:w-fit w-full items-center text-center justify-center px-8 py-10 bg-white group hover:border-[#2c7a7b] transition-all duration-300'>
            <div className="w-20 h-20 rounded-full mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] group-hover:text-white group-hover:bg-[#2c7a7c] transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
                <BsKey className="w-8 h-10 font-normal leading-4" />
            </div>
            <h4 className='font-bold text-xl mb-4 text-[#163535]'>Rental Services</h4>
            <p className='text-[#323b3bcc] mb-6 leading-normal text-base md:whitespace-nowrap'>
                At vero eos et accusamus et iusto odio<br className="hidden md:block"/> dignissimos ducimus
                qui blanditiis praesentium<br className="hidden md:block"/> voluptatum.
            </p>
            <ul className='text-gray-500 text-sm font-medium' >
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Tenant Screening
                </li>
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Property Marketing
                </li>
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Lease Management
                </li>
                
            </ul>
            <div className='mx-8 my-4 flex gap-1.5 text-center justify-center items-center'>
                <a href="/" className="text-[#2c7a7b] font-bold text-lg peer">Explore Rentals </a>
                <GoArrowRight className='translate-y-0.5 transition-transform text-[#2c7a7b] font-bold text-lg peer-hover:translate-x-2 duration-500 ease-in-out' />
            </div>
        </div>



        <div className='rounded-2xl border-2 border-gray-200 md:w-fit w-full items-center text-center justify-center px-8 py-10 bg-white group hover:border-[#2c7a7b] transition-all duration-300'>
            <div className="w-20 h-20 rounded-full mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] group-hover:text-white group-hover:bg-[#2c7a7c] transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
                <BsGraphUp className="w-8 h-10 font-normal leading-4" />
            </div>
            <h4 className='font-bold text-xl mb-4 text-[#163535]'>Investment Consulting</h4>
            <p className='text-[#323b3bcc] mb-6 leading-normal text-base md:whitespace-nowrap'>
                Excepteur sint occaecat cupidatat non proident,<br className="hidden md:block"/> sunt in culpa qui officia deserunt mollit anim id.
            </p>
            <ul className='text-gray-500 text-sm font-medium' >
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Market Analysis
                </li>
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    ROI Calculations
                </li>
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Portfolio Planning
                </li>
                
            </ul>
            <div className='mx-8 my-4 flex gap-1.5 text-center justify-center items-center'>
                <a href="/" className="text-[#2c7a7b] font-bold text-lg peer">Start Investing </a>
                <GoArrowRight className='translate-y-0.5 transition-transform text-[#2c7a7b] font-bold text-lg peer-hover:translate-x-2 duration-500 ease-in-out' />
            </div>
        </div>




        <div className='rounded-2xl border-2 border-gray-200 md:w-fit w-full items-center text-center justify-center px-8 py-10 bg-white group hover:border-[#2c7a7b] transition-all duration-300'>
            <div className="w-20 h-20 rounded-full mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] group-hover:text-white group-hover:bg-[#2c7a7c] transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
                <BsTools className="w-8 h-10 font-normal leading-4" />
            </div>
            <h4 className='font-bold text-xl mb-4 text-[#163535]'>Property Management</h4>
            <p className='text-[#323b3bcc] mb-6 leading-normal text-base md:whitespace-nowrap'>
                Duis aute irure dolor in reprehenderit in volupta<br className="hidden md:block"/> velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className='text-gray-500 text-sm font-medium' >
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Maintenance Coordination
                </li>
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    Rent Collection
                </li>
                <li className='flex text-center justify-center items-center gap-2 mb-2'>
                    <FaCheck className='text-[#2c7a7b]'/>
                    24/7 Support
                </li>
                
            </ul>
            <div className='mx-8 my-4 flex gap-1.5 text-center justify-center items-center'>
                <a href="/" className="text-[#2c7a7b] font-bold text-lg peer">Manage Property </a>
                <GoArrowRight className='translate-y-0.5 transition-transform text-[#2c7a7b] font-bold text-lg peer-hover:translate-x-2 duration-500 ease-in-out' />
            </div>
        </div>
    </div>
  )
}
