import React from 'react'
import { BsAspectRatio, BsDoorOpen, BsDroplet, BsGeoAlt, BsGeoAltFill, BsRulers } from "react-icons/bs";
import { BiMapPin } from 'react-icons/bi'
import { IoFlame } from 'react-icons/io5'

const houseitems = [
    {
        id:1,
        title:"Modern Courtyard Residence",
        image:<img src='/images/houses-1.webp' alt='property' className='w-full rounded-tl-2xl rounded-tr-2xl shadow-md'/>,
        geo: <BsGeoAlt/>,
        location:"Scottsdale, AZ 85251",
        dooricon: <BsDoorOpen/>,
        door: "4",
        bathicon: <BsDroplet/>,
        bathroom: "3",
        measureicon: <BsAspectRatio />,
        measure: "2,980 sq ft",
        price:"$1,025,000",
        action:<button className='bg-[#215c9c] text-xs px-3 py-1 text-white rounded-full h-fit w-fit' >Exclusive</button>,
        icon:<IoFlame size={12}/>

    },
    {
        id:2,
        title:"Cozy Lakeview Townhouse",
        image:<img src='/images/houses-2.webp' alt='property' className=' rounded-tl-2xl rounded-tr-2xl shadow-md'/>,
        geo: <BsGeoAlt/>,
        location:"Madison, WI 53703",
        dooricon: <BsDoorOpen/>,
        door: "3",
        bathicon: <BsDroplet/>,
        bathroom: "2",
        measureicon: <BsAspectRatio />,
        measure: "1,780 sq ft",
        price:"$429,000",
        action:<button className='bg-gray-700 text-xs px-3 py-1 text-white rounded-full h-fit w-fit' >Hot</button>,
        icon:<IoFlame size={12}/>

    },
    {
        id:3,
        title:"Garden Home Near Downtown",
        image:<img src='/images/houses-3.webp' alt='property' className='w-full  rounded-tl-2xl rounded-tr-2xl shadow-md'/>,
        geo: <BsGeoAlt/>,
        location:"Raleigh, NC 27601",
        dooricon: <BsDoorOpen/>,
        door: "3",
        bathicon: <BsDroplet/>,
        bathroom: "2",
        measureicon: <BsAspectRatio />,
        measure: "1,920 sq ft",
        price:"$512,000",
        action:<button className='bg-[#237b62] text-xs px-3 py-1 text-white rounded-full h-fit w-fit' >New</button>,
        icon:<IoFlame size={12}/>

    },
]

export default function Houses() {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:px-20 px-2 mb-8'>
        {houseitems.map((item) =>(
            <div key={item.id} className='shadow-2xl rounded-2xl'>
                <div className='relative flex h-50'>
                    <div className='overflow-hidden'>
                        {item.image}
                    </div>
                    <span className='absolute top-4 left-4 font-bold'>{item.action}</span>
                </div>
                <div className='md:px-6 px-2 mt-4'>
                    <h1 className='font-bold'>{item.title}</h1>
                    <div className='flex gap-2 mb-2'>
                        <span className='text-[#2c7a7b] text-sm transition-transform translate-y-1'>{item.geo}</span>
                        <span className='text-[#323b3ba6] text-sm'>{item.location}</span>
                    </div>
                    <div className='flex gap-3 mb-2'>
                        <div className='flex gap-1'>
                            <span className='text-[#2c7a7b] text-sm transition-transform translate-y-1'>{item.dooricon}</span>
                            <span className='text-[#323b3ba6] text-sm'>{item.door}</span>
                        </div>
                        <div className='flex gap-1'>
                            <span className='text-[#2c7a7b] text-sm transition-transform translate-y-1'>{item.bathicon}</span>
                            <span className='text-[#323b3ba6] text-sm'>{item.bathroom}</span>
                        </div>
                        <div className='flex gap-1'>
                            <span className='text-[#2c7a7b] text-sm transition-transform translate-y-1'>{item.measureicon}</span>
                            <span className='text-[#323b3ba6] text-sm'>{item.measure}</span>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-between items-center mb-8 mt-2'>
                        <span className='font-bold text-xl'>{item.price}</span>
                        <button className='border-2 border-teal-700 rounded-3xl py-2 px-4 text-teal-700 text-sm'>VIEW</button>
                    </div>
                </div>
            </div>
        ))}
    </div>

  )
}
