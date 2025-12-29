import React, { useState } from 'react'
import { BsGraphUp, BsGraphUpArrow, BsPeople, BsShieldCheck, BsTrophy } from "react-icons/bs";


export default function InvestmentJourney() {
    const [budget, setBudget] = useState("");
  return (
    <div className=''>
        <div className='w-full overflow-hidden rounded-2xl relative'>
            <img src="/images/service-image.webp" alt="Property" className='object-cover hover:scale-110 ease-in-out duration-500'/>
            <div className='rounded-full px-4 py-2 w-fit bg-white absolute bottom-4 left-6 font-semibold text-sm'>
                <p className='flex gap-2'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsGraphUpArrow /></span>
                    Premium Investment
                </p>
            </div>
        </div>

        <div className="bg-white md:p-4 p-1 w-full mt-8 rounded-2xl shadow">
            <div className='flex flex-col items-center justify-center text-center mt-4 mb-6'>
                <h2 className='text-xl font-bold text-[#323b3b]'>Start Your Investment Journey</h2>
                <p className='text-sm text-[#323b3b] mt-1'>Get personalized advice from our investment specialists today.</p>
            </div>
            <form className="space-y-4 p-2">
                <div>
                    <input 
                        type="text" 
                        id='name'
                        required
                        autoComplete='name'
                        placeholder="Full Name" 
                        className="border-2 border-gray-200 rounded-lg text-sm font-normal w-full px-4 py-3 focus:outline-none focus:border-[#2c7a7b] focus:shadow focus:ring-3 focus:ring-[#9bf0ef7d] resize-none"/>
                </div>

                <div>
                    <input 
                        type="email" 
                        id="email"
                        required
                        autoComplete="email"
                        placeholder="Email Address" 
                        className="border-2 border-gray-200 rounded-lg text-sm font-normal w-full px-4 py-3 focus:outline-none focus:border-[#2c7a7b] focus:shadow focus:ring-3 focus:ring-[#9bf0ef7d] resize-none"/>
                </div>

                <div>
                    <input 
                    type="text" 
                    id="phone number"
                    required
                    autoComplete="phone number"
                    placeholder="Phone Number" 
                    className="border-2 border-gray-200 rounded-lg text-sm font-normal w-full px-4 py-3 focus:outline-none focus:border-[#2c7a7b] focus:shadow focus:ring-3 focus:ring-[#9bf0ef7d] resize-none"/>
                </div>

                <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg text-sm px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-teal-600">
                    <option value="" disabled>
                        Investment Budget Range
                    </option>
                    <option value="100-250">$100k - $250k</option>
                    <option value="250-500">$250k - $500k</option>
                    <option value="500-1m">$500k - $1M</option>
                    <option value="1m+">$1M+</option>
                </select>

                <div>
                    <textarea 
                        type="text"
                        id="message"
                        required
                        autoComplete="message"
                        placeholder="Investment goals or questions..." rows={4} 
                        className="border-2 border-gray-200 rounded-lg text-sm font-normal w-full px-4 py-3 focus:outline-none focus:border-[#2c7a7b] focus:shadow focus:ring-3 focus:ring-[#9bf0ef7d] resize-none">
                    </textarea>
                </div>

                <button className="bg-[#2c7a7b] border border-[#2c7a7b] text-white w-full py-3 px-4 rounded-lg transform transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow hover:shadow-[#2c7a7b1f] ">Get free Consultation</button>
            </form>
                    
        </div>

        <div className='border-l-4 border-l-[#2c7a7b] rounded-3xl p-6 gap-4 w-full md:max-w-3xl shadow bg-[#2c7a7b0d] mt-6'>
            <h2 className='font-semibold mb-4'>Why Choose Our Investment Services</h2>
            <div className='space-y-4'>
                <div className='flex gap-4'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsTrophy /></span>
                    <p className='text-sm font-semibold text-[#163535]'>20+ Years Market Experience</p>
                </div>
                <div className='flex gap-4'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsGraphUp /></span>
                    <p className='text-sm font-semibold text-[#163535]'>15% Average ROI for Clients</p>
                </div>
                <div className='flex gap-4'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsPeople /></span>
                    <p className='text-sm font-semibold text-[#163535]'>500+ Successful Investments</p>
                </div>
                <div className='flex gap-4'>
                    <span className='text-[#2c7a7b] transition-transform translate-y-1'><BsShieldCheck /></span>
                    <p className='text-sm font-semibold text-[#163535]'>Licensed Investment Advisors</p>
                </div>
            </div>
        </div>
    </div>
  )
}
