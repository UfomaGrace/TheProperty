import React from 'react'
import { BsGeoAltFill, BsDoorOpen, BsDroplet, BsAspectRatio, BsGeo, BsRulers, BsGem } from "react-icons/bs";
import { BiSolidZap } from "react-icons/bi";
import { IoStar } from "react-icons/io5";

export default function FeaturedProperties() {
  return (
    <div className='bg-white'>
        <div className='items-center justify-center text-center'>
            <h2 className='font-bold text-4xl mb-4'>Featured Properties</h2>
            <p className='text-gray-600'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='md:flex gap-4 md:mx-14 mx-1 md:px-4 px-1 py-12'>
            <div className='max-w-4xl h-full flex-none group rounded-2xl shadow-lg'>
                <div className='overflow-hidden rounded-t-2xl h-90 relative z-40'>
                    <img src="/images/property-FP-1.webp" alt="Featured Properties" className='block w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 transform-gpu [will-change:transform]' />
                    <div className='absolute rounded-2xl w-fit h-fit py-2 px-4 bg-[#2c7a79] text-white top-4 left-4'>
                        <p className='font-bold text-xs'>FEATURED</p>
                    </div>
                    <div className='absolute rounded-2xl w-fit h-fit py-2 px-4 bg-blue-700 text-white top-4 left-20 ml-8'>
                        <p className='font-bold text-xs'>PREMIUM</p>
                    </div>
                    <div className='absolute bottom-4 left-4 flex flex-wrap gap-1 '>
                        <div className='flex bg-[#00000f99] text-white text-xs rounded-2xl w-fit h-fit py-2 px-4 gap-2'>
                            <span><BsDoorOpen /></span>
                            <p>5 beds</p>
                        </div>
                        <div className='flex bg-[#00000f99] text-white text-xs rounded-2xl w-fit h-fit py-2 px-4 gap-2'>
                            <span><BsDroplet /></span>
                            <p>4 Baths</p>
                        </div>
                        <div className='flex bg-[#00000f99] text-white text-xs rounded-2xl w-fit h-fit py-2 px-4 gap-2'>
                            <span><BsAspectRatio /></span>
                            <p>4,900 sq ft</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between px-4 py-4'>
                    <div>
                        <h3><a href="" className='text-2xl font-bold'>Seaside Villa with Infinity Pool</a></h3>
                        <p className='flex gap-2 text-sm text-gray-600'>
                            <BsGeoAltFill className='text-[#2c7a7b] transition-transform translate-y-0.5'/>
                            Coronado, CA 92118
                        </p>
                    </div>
                    <div className='rounded-lg bg-[#2c7a7b] text-white py-2 px-4 w-fit h-fit'>
                        <p className='font-bold'>$3,760,000</p>
                    </div>
                </div>
                <div className=' px-4 mt-2'>
                    <p className='text-sm text-[#323b3bd1]'>
                        Praesent commodo cursus magna, fusce dapibus tellus ac cursus commodo, vestibulum id ligula porta felis euismod semper.
                    </p>
                </div>
                <div className='flex flex-wrap justify-between items-center px-4 md:py-8 py-3'>
                    <div className='flex flex-wrap gap-2 py-4'>
                        <div className='bg-[#2c7a7b] text-white rounded-3xl py-2.5 px-4 md:w-fit w-full uppercase'>
                            <button className='font-semibold text-sm'>ARRANGE VISIT</button>
                        </div>
                        <div className='border-2 border-[#2c7a7b] rounded-3xl py-2.5 px-4 md:w-fit w-full uppercase'>
                            <button className='font-semibold text-[#2c7a7b] text-sm'>MORE PHOTOS</button>
                        </div>
                    </div>
                    <div className='w-full md:w-auto'>
                       <div className='flex gap-2 py-4 items-center w-full justify-between'>
                            <div className='bg-[#2c7a7b2b] w-fit h-fit rounded-3xl py-1.5 px-3 uppercase text-center '>
                                <p className='text-[#2c7a7b] text-xs font-bold'>FOR SALE</p>
                            </div>
                            <div className='text-gray-500 text-xs'>Listed 2 days ago</div>
                        </div> 
                    </div>
                </div>
            </div>


            <div className='flex-none grid grid-cols-1 space-y-4 md:mt-0 mt-6'>
                <div className='flex md:h-48 h-42 rounded-2xl shadow w-fit md:mx-4 mx-0 border border-gray-100'>
                    <div className='overflow-hidden rounded-l-2xl relative z-40'>
                        <img src="/images/property-FP-2.webp" alt="Urban Loft" className='h-full w-34 object-cover scale-105 transition-transform duration-500'/>
                        <div className='flex bg-[#00000f99] text-white text-xs rounded-full w-fit h-fit py-1 px-3 gap-1 absolute top-2 left-2'>
                          <span className='transition-transform translate-y-0.5 text-[10px]'><BiSolidZap /></span>
                          <p className='font-bold text-[10px]'>Hot</p>  
                        </div>
                    </div>
                    <div className='md:px-4 px-2 md:py-4 py-2 md:pr-8 pr-2'>
                        <h4><a href="" className='font-bold'>Urban Loft with Skylines Views</a></h4>
                        <div className='flex gap-1.5 py-1 text-center'>
                            <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsGeo /></span>
                            <p className='text-xs text-gray-500'>Denver, CO 80203</p>
                        </div>
                        <div className='flex gap-2 text-xs py-1.5'>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsDoorOpen/></span>
                                <span className='text-xs text-gray-500'>2</span>
                            </div>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsDroplet/></span>
                                <span className='text-xs text-gray-500'>2</span>
                            </div>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsRulers/></span>
                                <span className='text-xs text-gray-500'>1,450 sq ft</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between text-center md:py-5 py-3'>
                            <p className='font-bold'>$689,000</p>
                            <div className='rounded-full w-fit h-fit py-2 px-4 justify-center bg-[#2c7a7b] text-white text-center'>
                                <p className='text-center text-sm font-bold'>DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex md:h-48 h-42 rounded-2xl shadow w-fit md:mx-4 mx-0 border border-gray-100'>
                    <div className='overflow-hidden rounded-l-2xl relative z-40'>
                        <img src="/images/property-FP-2.webp" alt="Urban Loft" className='h-full w-34 object-cover scale-105 transition-transform duration-500'/>
                        <div className='flex bg-[#237b62] text-white text-xs rounded-full w-fit h-fit py-1 px-3 gap-1 absolute top-2 left-2'>
                          <span className='transition-transform translate-y-0.5 text-[10px]'><IoStar /></span>
                          <p className='font-bold text-[10px]'>New</p>  
                        </div>
                    </div>
                    <div className='md:px-4 px-2 md:py-4 py-2 md:pr-8 pr-2'>
                        <h4><a href="" className='font-bold'>Charming Suburban Retreat</a></h4>
                        <div className='flex gap-1.5 py-1 text-center'>
                            <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsGeo /></span>
                            <p className='text-xs text-gray-500'>Austin, TX 78745</p>
                        </div>
                        <div className='flex gap-2 text-xs py-1.5'>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsDoorOpen/></span>
                                <span className='text-xs text-gray-500'>4</span>
                            </div>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsDroplet/></span>
                                <span className='text-xs text-gray-500'>3</span>
                            </div>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsRulers/></span>
                                <span className='text-xs text-gray-500'>2,350 sq ft</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between text-center md:py-5 py-3'>
                            <p className='font-bold'>$545,000</p>
                            <div className='rounded-full w-fit h-fit py-2 px-4 justify-center bg-[#2c7a7b] text-white text-center'>
                                <p className='text-center text-sm font-bold'>DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex md:h-48 h-42 rounded-2xl shadow w-fit md:mx-4 mx-0 border border-gray-100'>
                    <div className='overflow-hidden rounded-l-2xl relative z-40'>
                        <img src="/images/property-FP-2.webp" alt="Urban Loft" className='h-full w-34 object-cover scale-105 transition-transform duration-500'/>
                        <div className='flex bg-[#236295] text-white text-xs rounded-full w-fit h-fit py-1 px-3 gap-1 absolute top-2 left-2'>
                          <span className='transition-transform translate-y-0.5 text-[10px]'><BsGem /></span>
                          <p className='font-bold text-[10px]'>Featured</p>  
                        </div>
                    </div>
                    <div className='md:px-4 px-2 md:py-4 py-2 md:pr-8 pr-2'>
                        <h4><a href="" className='font-bold'>Glass-Roof Penthouse Suite</a></h4>
                        <div className='flex gap-1.5 py-1 text-center'>
                            <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsGeo /></span>
                            <p className='text-xs text-gray-500'>Miami, FL 33131</p>
                        </div>
                        <div className='flex gap-2 text-xs py-1.5'>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsDoorOpen/></span>
                                <span className='text-xs text-gray-500'>3</span>
                            </div>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsDroplet/></span>
                                <span className='text-xs text-gray-500'>3</span>
                            </div>
                            <div className='flex'>
                                <span className='transition-transform translate-y-0.5 text-[#2c7a7b] text-xs'><BsRulers/></span>
                                <span className='text-xs text-gray-500'>2,120 sq ft</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between text-center md:py-5 py-3'>
                            <p className='font-bold'>$1,290,000</p>
                            <div className='rounded-full w-fit h-fit py-2 px-4 justify-center bg-[#2c7a7b] text-white text-center'>
                                <p className='text-center text-sm font-bold'>DETAILS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
