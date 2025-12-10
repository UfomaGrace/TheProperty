import React from 'react'
import { Link } from "react-router-dom";
import { BsChevronRight, BsEnvelope, BsFacebook, BsGeoAlt, BsGithub, BsLinkedin, BsPhone, BsSend, BsTelephone, BsTwitterX, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className='border-t-1 pt-4 w-full border-gray-200'>
      <div className='grid grid-cols-12 md:px-18 px-2 py-10 mt-6 md:gap-12 gap-2'>
      <div className='col-span-12 lg:col-span-4 px-2 mb-8 md:items-start items-center justify-center'>
        <h1 className='font-bold text-3xl text-gray-700 mb-6'>TheProperty</h1>
        <p className='text-[#323b3bd9] my-5 text-[16px] leading-relaxed md:text-start text-center'>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. 
          Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.
        </p>
        <div className='mt-6'>
          <h4 className='font-semibold text-[#163535] text-lg md:text-start text-center'>Stay Updated</h4>
          <label htmlFor="email" className='shadow-md rounded-full mt-3 flex md:items-stretch w-full border border-gray-200 overflow-hidden h-12'>
            <input id="email" type="email" placeholder='Enter your email' required className='px-6 border-0 focus:ring-0 focus:border-none focus:outline-0 w-full h-full text-gray-500 text-sm'/>
            <button type='submit' className='bg-teal-700 text-white h-full px-4 rounded-tr-full rounded-br-full text-xl cursor-pointer'><BsSend /></button>
          </label>
        </div>
      </div>

      <div className='lg:col-span-2 col-span-6'>
        <h2 className='font-semibold text-gray-800 border-b-3 pb-1 w-8 border-[#2a7a7b] mb-6'>Company</h2>
        <Link to={"/about"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>About</span>
        </Link>
        <Link to={"/agent"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Careers</span>
        </Link>
        <Link to={"/blog"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Press</span>
        </Link>
        <Link to={"/blog"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>blog</span>
        </Link>
        <Link to={"/contact"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Contact</span>
        </Link>
      </div>


      <div className='lg:col-span-2 col-span-6' >
        <h2 className='font-semibold text-gray-800 border-b-3 pb-1 w-8 border-[#2a7a7b] mb-6'>Solutions</h2>
        <Link to={"#"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Digital Strategy</span>
        </Link>
        <Link to={"#"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Cloud Computing</span>
        </Link>
        <Link to={"#"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Data Analytics</span>
        </Link>
        <Link to={"#"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>AI Solutions</span>
        </Link>
        <Link to={"#"} className='flex gap-2 text-gray-600 mb-4 text-sm transition-all duration-300 hover:text-[#2c7a7c] hover:translate-x-2'>
          <BsChevronRight className='transition-transform translate-y-1'/>
          <span>Cybersecurity</span>
        </Link>
      </div>


      <div className='lg:col-span-3 col-span-12 md:mt-0 mt-6'>
        <h2 className='font-semibold text-gray-800 border-b-3 pb-1 w-8 border-[#2a7a7b] whitespace-nowrap mb-6'>Get in Touch</h2>
        <div className='flex gap-4 text-gray-600 mb-3'>
          <span className='flex rounded-full w-10 h-10 items-center justify-center bg-[#2a7a7c1d] text-[#2a7a7c]'>
            <BsGeoAlt/>
          </span>
          <div className='flex flex-col text-sm'>
            <span>2847 Maple Avenue</span>
            <span>Los Angeles, CA 90210</span>
            <span>United States</span>
          </div>
        </div>
        <div className='flex gap-2 text-gray-600 mb-4 text-sm'>
          <span className='flex rounded-full w-10 h-10 items-center justify-center bg-[#2a7a7c1d] text-[#2a7a7c]'>
            <BsTelephone />
          </span>
          <span className='transition-translate translate-y-2'>+1 (555) 987-6543</span>
        </div>
        <div className='flex gap-2 text-gray-600 mb-4 text-sm'>
          <span className='flex rounded-full w-10 h-10 items-center justify-center bg-[#2a7a7c1d] text-[#2a7a7c]'>
            <BsEnvelope />
          </span>
          <span className='transition-translate translate-y-2'>contact@example.com</span>
        </div>

        <div className='flex gap-4 text-gray-600 mb-4 mt-6'>
          <Link to={"/"} className='flex rounded-full items-center justify-center bg-gray-200 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a7a7c] hover:text-white cursor-pointer'>
            <BsFacebook />
          </Link>
          <Link to={"/"} className='flex rounded-full items-center justify-center bg-gray-200 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a7a7c] hover:text-white cursor-pointer'>
            <BsTwitterX />
          </Link>
          <Link to={"/"} className='flex rounded-full items-center justify-center bg-gray-200 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a7a7c] hover:text-white cursor-pointer'>
            <BsLinkedin/>
          </Link>
          <Link to={"/"} className='flex rounded-full items-center justify-center bg-gray-200 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a7a7c] hover:text-white cursor-pointer'>
            <BsYoutube/>
          </Link>
          <Link to={"/"} className='flex rounded-full items-center justify-center bg-gray-200 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a7a7c] hover:text-white cursor-pointer'>
            <BsGithub/>
          </Link>
        </div>
      </div>
    </div>

    <div className='bg-[#2c7a7b] p-4 md:flex justify-between md:py-8 py-4 md:px-18 px-6'>
      <div className='text-[#ffffffcc] md:text-sm text-xs md:text-start text-center md:mb-1 mb-2'>
        <p>© Copyright <strong className='text-white'>MyWebsite</strong> All Rights Reserved</p>
      </div>
      <div className='space-y-2'>
        <div className='flex gap-4 md:text-sm text-xs text-[#ffffffcc] md:text-start text-center'>
          <Link to={"/policy"} className='hover:text-white ease-in-out transition-colors duration-300'>
            Privacy Policy
          </Link>
          <Link to={"/policy"} className='hover:text-white ease-in-out transition-colors duration-300'>
            Terms of Service
          </Link>
          <Link to={"/policy"} className='hover:text-white ease-in-out transition-colors duration-300'>
            Cookie Policy
          </Link>
        </div>
        <p className='text-[#ffffffcc] text-center md:text-sm text-xs md:text-end'>Designed by <a href="#" className='hover:underline '><strong className='text-white'>BootstrapMade</strong></a></p>
      </div>
    </div>

    </div>
  )
}

export default Footer