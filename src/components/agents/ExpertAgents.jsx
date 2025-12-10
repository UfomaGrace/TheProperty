import React from 'react'
import { BsEnvelope, BsGeoAlt, BsTelephone, BsWhatsapp } from 'react-icons/bs'

export default function ExpertAgents() {
  return (
    <div className='py-6 md:px-20 px-4'>
        <div className='text-center justify-center'>
            <h2 className='text-3xl mb-4'>Our Expert Team</h2>
            <p className='text-lg text-gray-500 font-normal'>
                Meet our dedicated professionals who are committed to helping 
                you find your perfect home or sell<br/> your property at the best value.
            </p>
        </div>
        <div className='md:flex gap-6 mt-12 md:space-y-0 space-y-6'>
            <div className='md:w-[46vh] w-full rounded-2xl shadow group hover:-translate-y-3 transition-transform duration-300 hover:shadow-2xl'>
                <div className='relative'>
                    <img src="/images/agent-mich.webp" alt="agent michael" className='md:h-[46vh] h-full md:w-[48vh] w-full group-hover:brightness-26 transition-all duration-300 object-cover rounded-tr-2xl rounded-tl-2xl'/>
                    <div className='flex gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-center justify-center top-30'>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsTelephone size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsEnvelope size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsWhatsapp size={18}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center py-6'>
                    <h5 className='font-medium text-2xl'>Michael Chen</h5>
                    <span className='text-sm text-[#2c7a7b] mt-1'>Property Consultant</span>
                    <div className='flex gap-2 mt-4'>
                        <span className='transition-transform translate-y-1 text-[#2c7a7b]'><BsGeoAlt /></span>
                        <span className='text-[#323b3b]'>Brooklyn Heights</span>
                    </div>
                    <div className='flex gap-2 py-5 mb-3'>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>English</p>
                        </div>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>Mandarin</p>
                        </div>
                    </div>
                    <div className='rounded-full border-2 border-[#2c7a7b] text-[#2c7a7b] bg-white font-bold w-fit px-4 py-1 transition-colors duration-300 hover:bg-[#2c7a7b] hover:text-white'>
                        <button><a href="/">View Listings</a></button>
                    </div>
                </div>
            </div>

            <div className='md:w-[46vh] w-full rounded-2xl shadow group hover:-translate-y-3 transition-transform duration-300 hover:shadow-2xl'>
                <div className='relative'>
                    <img src="images/agent-A2.webp" alt="Sarah Johnson" className='md:h-[46vh] h-full md:w-[48vh] w-full group-hover:brightness-26 transition-all duration-300 object-cover rounded-tr-2xl rounded-tl-2xl'/>
                    <div className='flex gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-center justify-center top-30'>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsTelephone size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsEnvelope size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsWhatsapp size={18}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center py-6'>
                    <h5 className='font-medium text-2xl'>Sarah Johnson</h5>
                    <span className='text-sm text-[#2c7a7b] mt-1'>Commercial Specialist</span>
                    <div className='flex gap-2 mt-4'>
                        <span className='transition-transform translate-y-1 text-[#2c7a7b]'><BsGeoAlt /></span>
                        <span className='text-[#323b3b]'>Manhattan</span>
                    </div>
                    <div className='flex gap-2 py-5 mb-3'>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>English</p>
                        </div>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>Spanish</p>
                        </div>
                    </div>
                    <div className='rounded-full border-2 border-[#2c7a7b] text-[#2c7a7b] bg-white font-bold w-fit px-4 py-1 transition-colors duration-300 hover:bg-[#2c7a7b] hover:text-white'>
                        <button><a href="/">View Listings</a></button>
                    </div>
                </div>
            </div>

            <div className='md:w-[46vh] w-full rounded-2xl shadow group hover:-translate-y-3 transition-transform duration-300 hover:shadow-2xl'>
                <div className='relative'>
                    <img src="/images/agent-sarah.webp" alt="David Martinez" className='md:h-[46vh] h-full md:w-[48vh] w-full group-hover:brightness-26 transition-all duration-300 object-cover rounded-tr-2xl rounded-tl-2xl'/>
                    <div className='flex gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-center justify-center top-30'>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsTelephone size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsEnvelope size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsWhatsapp size={18}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center py-6'>
                    <h5 className='font-medium text-2xl'>David Martinez</h5>
                    <span className='text-sm text-[#2c7a7b] mt-1'>Luxury Home Advisor</span>
                    <div className='flex gap-2 mt-4'>
                        <span className='transition-transform translate-y-1 text-[#2c7a7b]'><BsGeoAlt /></span>
                        <span className='text-[#323b3b]'>Upper East Side</span>
                    </div>
                    <div className='flex gap-2 py-5 mb-3'>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>English</p>
                        </div>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>French</p>
                        </div>
                    </div>
                    <div className='rounded-full border-2 border-[#2c7a7b] text-[#2c7a7b] bg-white font-bold w-fit px-4 py-1 transition-colors duration-300 hover:bg-[#2c7a7b] hover:text-white'>
                        <button><a href="/">View Listings</a></button>
                    </div>
                </div>
            </div>

            <div className='md:w-[46vh] w-full rounded-2xl shadow group hover:-translate-y-3 transition-transform duration-300 hover:shadow-2xl'>
                <div className='relative'>
                    <img src="/images/agent-1.webp" alt="Lisa Thompson" className='md:h-[46vh] h-full w-full md:w-[48vh] group-hover:brightness-26 transition-all duration-300 object-cover rounded-tr-2xl rounded-tl-2xl'/>
                    <div className='flex gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-center justify-center top-30'>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsTelephone size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsEnvelope size={18}/>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='rounded-full w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b]'>
                                <BsWhatsapp size={18}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center text-center py-6'>
                    <h5 className='font-medium text-2xl'>Lisa Thompson</h5>
                    <span className='text-sm text-[#2c7a7b] mt-1'>Residential Specialist</span>
                    <div className='flex gap-2 mt-4'>
                        <span className='transition-transform translate-y-1 text-[#2c7a7b]'><BsGeoAlt /></span>
                        <span className='text-[#323b3b]'>Queens</span>
                    </div>
                    <div className='py-5 mb-3'>
                        <div className='bg-[#2c7a7b1f] text-[#2c7a7b] rounded-3xl w-fit px-4 py-1 text-sm'>
                            <p>English</p>
                        </div>
                    </div>
                    <div className='rounded-full border-2 border-[#2c7a7b] text-[#2c7a7b] bg-white font-bold w-fit px-4 py-1 transition-colors duration-300 hover:bg-[#2c7a7b] hover:text-white'>
                        <button><a href="/">View Listings</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
