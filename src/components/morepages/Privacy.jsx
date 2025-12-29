import React from 'react'
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className='py-24'>
        <div className="text-center mt-20 md:mt-10">
            <h1 className="md:text-5xl text-4xl text-center items-center font-semibold text-gray-800">Privacy</h1>
            <p className="md:mt-8 mt-6 text-center text-base justify-center md:mx-30 mx-6 md:px-38 px-4 text-gray-700">
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas 
                consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. 
                Quasi ratione sint. Sit quaerat ipsum dolorem.
            </p>
        </div>

        <div className="w-full mt-14">
            <nav className="flex items-center bg-gray-200 px-3 py-5 max-w-full">
                <ol className="inline-flex md:items-center items-start space-x-1 md:space-x-4 md:mx-18 mx-0">
                    <li>
                        <Link to="/" className="text-[#2c7a7b]">
                            Home
                        </Link>
                    </li>

                    <li>
                        <span>/</span>
                    </li>

                    <li aria-current="page" className="text-gray-800">
                        Privacy
                    </li>
                </ol>
            </nav>
        </div>

        <div className='items-center text-center justify-center py-20'>
            <div className='items-center justify-center flex'>
                <div className='bg-[#2a7c7b0d] border-l-4 text-start rounded-xl w-3xl py-6 px-12 border-[#2a7c7b] '>
                    <p className='text-[#163535]'><strong>Last updated:</strong> December 15, 2024</p>
                </div>
            </div>
            <div className='items-center justify-center flex'>
                <h3 className='border-b-3 border-[#2a7a7b] pb-1 w-8 whitespace-nowrap'>Information We Collect</h3>
            </div>
        </div>
    </div>
  )
}
