import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { CgChevronDown, CgChevronUp, CgClose, CgMenu } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Footer from './Footer';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMorePagesOPen, setIsMorePagesOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#2c7a7b0d] to-white/5">
      <nav className='fixed top-1 right-0 left-0 z-50 hidden sm:hidden md:hidden bg-white shadow-md rounded-full my-10 mx-16 p-3 lg:flex items-center justify-between'>

        <Link to={'/'} className='font-bold text-2xl text-gray-600 md:ml-3 ml-0'>Theproperty</Link>

        <div className='flex space-x-12 font-semibold text-gray-600'>
          <NavLink to={'/'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>Home</NavLink>
          <NavLink to={'/about'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>About</NavLink>
          <NavLink to={'/properties'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>Properties</NavLink>
          <NavLink to={'/services'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>Services</NavLink>
          <NavLink to={'/agent'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>Agent</NavLink>
          <NavLink to={'/blog'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>Blog</NavLink>

          <div className='relative'> 
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center hover:text-teal-600 whitespace-nowrap">More Pages<CgChevronDown size={20}/></button>
            {isDropdownOpen && (
              <ul className='absolute bg-white text-gray-600 text-left font-medium mt-4 rounded shadow-lg px-4 z-20'>
                <li className='px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/property-details"}>Property Details</Link></li>
                <li className='px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/service-details"}>Service Details</Link></li>
                <li className='px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/agent-profile"}>Agent Profile</Link></li>
                <li className='px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/blog-details"}>Blog Details</Link></li>
                <li className='px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/terms"}>Terms</Link></li>
                <li className='px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/privacy"}>Privacy</Link></li>
                <li className='px-6 py-2 hover:text-teal-700 mb-4 whitespace-nowrap'><Link to={"/error404s"}>404</Link></li>
              </ul>
            )}
          </div>
          <NavLink to={'/contact'} className={({isActive}) => isActive ? "text-teal-700" : "text-gray-600" }>Contact</NavLink>
        </div>
        <Link to={'/properties'} className='bg-teal-700 text-white text-sm p-2 rounded-full md:mr-3 mr-0'>Get Started</Link>

      </nav>


      <div className='lg:hidden rounded-full mx-2.5 items-center py-2.5 px-2 space-x-2 bg-white shadow justify-center flex top-6 left-0 right-0 z-50 fixed'>

        <nav className='flex justify-between px-2 gap-0.5 items-center bg-white flex-nowrap z-50 lg:hidden w-full relative'>
          <div><Link to={'/'} className='font-bold text-2xl text-gray-800 truncate'>TheProperty</Link></div>
          <div className="flex items-center space-x-2.5 flex-shrink-0">
            <ul>
              <Link to={"/get-started"}> 
                <button className="bg-teal-700 py-2 px-4 text-sm rounded-full transition-colors text-white hover:bg-teal-800">
                  Get Started
                </button>
              </Link>
            </ul>
         
            <button onClick={() => setIsOpen(true)} className="lg:hidden">
              <RxHamburgerMenu className='w-6 h-6 flex-shrink-0 cursor-pointer' />
            </button>
          </div>

          {isOpen && (
            <div className='flex flex-col items-left justify-items-start space-y-8 text-xl top-0 shadow-lg px-4 py-6 left-0 right-0 h-full bg-black/70 backdrop-md fixed w-full z-40 bg-opacity-20 inset-0'>
              <button className="top-8 right-6 absolute z-50 text-black" onClick={() => setIsOpen(false)}><CgClose size={24}/></button>
              <ul className='md:hidden bg-white flex flex-col items-center gap-6 py-6 shadow-lg text-sm sm:text-base'>
                <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">About</Link></li>
                <li><Link to="/properties" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">Properties</Link></li>
                <li><Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">Services</Link></li>
                <li><Link to="/agent" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">Agent</Link></li>
                <li><Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">Blog</Link></li>
                <li>
                  <button onClick={() =>
                    setIsMorePagesOpen(!isMorePagesOPen)} 
                    className="hover:text-teal-600 flex items-center justify-between w-full">More Pages
                    {isMorePagesOPen ? <span className="p-1 flex items-center rounded-full hover:text-white hover:bg-teal-600"><CgChevronUp size={20}/></span> : <span className="p-1 rounded-full hover:text-white hover:bg-teal-600 flex items-center"><CgChevronDown size={20}/></span> }
                  </button>
                  {isMorePagesOPen && (
                  <ul className='flex flex-col mt-2'>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/property-details"}>Property Details</Link></li>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/service-details"}>Service Details</Link></li>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/agent-profile"}>Agent Profile</Link></li>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/blog-details"}>Blog Details</Link></li>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/terms"}>Terms</Link></li>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 whitespace-nowrap'><Link to={"/privacy"}>Privacy</Link></li>
                    <li className='block text-gray-700 transition px-6 py-2 hover:text-teal-700 mb-4 whitespace-nowrap'><Link to={"/error404s"}>404</Link></li>
                  </ul>
                  )}   
                </li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-gray-700 cursor-pointer transition">Contact</Link></li>
              </ul>

            </div>
          )}

        </nav>

      </div>


      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar