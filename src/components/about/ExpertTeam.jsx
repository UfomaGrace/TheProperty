import React from 'react'

function ExpertTeam() {
  return (
    <div className='md:py-16 py-8'>
        <div className='max-w-4xl mx-auto md:px-8 px-1'>
            <h2 className='text-center text-4xl font-medium mb-4 text-[#163535]'>Meet Our Expert Team</h2>
            <p className=" text-gray-600 text-lg max-w-2xl mx-auto mt-4 text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation.
            </p>
        </div>
        <div className='flex flex-wrap items-stretch justify-center text-center md:gap-2 gap-5 place-items-center mt-10'>
            <div className='md:w-64 w-full h-full items-center text-center flex flex-col rounded-2xl py-12 px-6 mx-3 border border-gray-200 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4'>
                <img src='/images/agent-1.webp' alt='Agent Sarah' className='rounded-full w-24 h-24 border-4 border-[#2c7a7b] items-center text-center justify-center'/>
                <h5 className='text-[#163535] mb-1.5 text-xl font-sans mt-5'>Sarah Martinez</h5>
                <p className='text-[#2c7a7b] font-medium text-sm'>Senior Property Advisor</p>
            </div>
            <div className='md:w-64 w-full h-full items-center text-center flex flex-col rounded-2xl py-12 px-6 mx-3 border border-gray-200 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-4'>
                <img src='/images/agent-2.webp' alt='Agent Sarah' className='rounded-full w-24 h-24 border-4 border-[#2c7a7b] items-center text-center justify-center'/>
                <h5 className='text-[#163535] mb-1.5 text-xl font-sans mt-5'>David Chen</h5>
                <p className='text-[#2c7a7b] font-medium text-sm'>Investment Specialist</p>
            </div>
        </div>
        <div className="flex justify-center md:mt-16 mt-10">
            <button className="bg-[#2c7a7b] text-white font-bold px-10 py-4 rounded-full hover:bg-[#236665] hover:shadow-md hover:shadow-[#2c7a7b3f] hover:-translate-y-1 transition-all duration-300">
                VIEW FULL TEAM
            </button>
        </div>
    </div>
  )
}

export default ExpertTeam