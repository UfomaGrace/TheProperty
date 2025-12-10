import React from 'react'
import { BsGeoAlt, BsGrid3X3Gap, BsHouse, BsList, BsTelephone, BsWater } from "react-icons/bs";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";

const properties = [
    {
        id: 1,
        image: <img src='/images/property1.webp' alt='Property' className='object-cover rounded-tr-2xl rounded-tl-2xl'/>,
        tag1: "Featured",
        tag2: "For Sale",
        price: "$875,000",
        title: "Modern Family Home with Garden",
        geo: <BsGeoAlt />,
        address: "2847 Oak Street, Beverly Hills, CA 90210",
        icon1: <BsHouse />,
        beds: "4 Bed",
        icon2: <BsWater />,
        bath: "3 Bath",
        icon3: <FaUpRightAndDownLeftFromCenter />,
        size: "2,400 sqft",
        img: <img src='/images/agent-emily.webp' alt='Agent' className='rounded-full w-10 h-10 items-center text-center justify-center'/>,
        agent: "Sarah Johnson",
        contact: "+1 (555) 123-4567",
        icon4: <BsTelephone/>,
        button: "View Details"
    },
    {
        id: 2,
        image: <img src='/images/property2.webp' alt='Property' className='object-cover rounded-tr-2xl rounded-tl-2xl'/>,
        tag1: "New",
        tag2: "For Sale",
        price: "$1,250,000",
        title: "Downtown Luxury Condominium",
        geo: <BsGeoAlt />,
        address: "1542 Main Avenue, Manhattan, NY 10001",
        icon1: <BsHouse />,
        beds: "2 Bed",
        icon2: <BsWater />,
        bath: "2 Bath",
        icon3: <FaUpRightAndDownLeftFromCenter />,
        size: "1,800 sqft",
        img: <img src='/images/agent-mich.webp' alt='Agent' className='rounded-full w-10 h-10 items-center text-center justify-center'/>,
        agent: "Michael Chen",
        contact: "+1 (555) 234-5678",
        icon4: <BsTelephone/>,
        button: "View Details"
    },
    {
        id: 3,
        image: <img src='/images/property3.webp' alt='Property' className='object-cover rounded-tr-2xl rounded-tl-2xl'/>,
        tag1: "Featured",
        tag2: "For Sale",
        price: "$4,500/month",
        title: "Spacious Suburban Villa",
        geo: <BsGeoAlt />,
        address: "789 Pine Ridge Drive, Austin, TX 73301",
        icon1: <BsHouse />,
        beds: "5 Bed",
        icon2: <BsWater />,
        bath: "4 Bath",
        icon3: <FaUpRightAndDownLeftFromCenter />,
        size: "3,200 sqft",
        img: <img src='/images/agent-1.webp' alt='Agent' className='rounded-full w-10 h-10 items-center text-center justify-center'/>,
        agent: "Emma Rodriguez",
        contact: " +1 (555) 345-6789",
        icon4: <BsTelephone/>,
        button: "View Details"
    },
    {
        id: 4,
        image: <img src='/images/property4.webp' alt='Property' className='object-cover rounded-tr-2xl rounded-tl-2xl'/>,
        tag1: "Featured",
        tag2: "For Sale",
        price: "$695,000",
        title: "Waterfront Townhouse with Dock",
        geo: <BsGeoAlt />,
        address: "456 Harbor View Lane, Miami, FL 33101",
        icon1: <BsHouse />,
        beds: "3 Bed",
        icon2: <BsWater />,
        bath: "2 Bath",
        icon3: <FaUpRightAndDownLeftFromCenter />,
        size: "2,100 sqft",
        img: <img src='/images/agent-david.webp' alt='Agent' className='rounded-full w-10 h-10 items-center text-center justify-center'/>,
        agent: "David Williams",
        contact: "+1 (555) 456-7890",
        icon4: <BsTelephone/>,
        button: "View Details"
    },
]

export default function MainProperties() {
  return (
    <div className='grid grid-cols-3 gap-4 w-full py-16'>
        {/* <div className='flex justify-between max-w-2xl py-12 px-20'>
            <div className='flex gap-2'>
                <div className='flex rounded-md gap-1.5 px-3 py-2 bg-[#2c7a7b] text-white cursor-pointer'>
                    <BsGrid3X3Gap className='transition-transform translate-y-1'/>
                    <span>Grid</span>
                </div>
                <div className='flex rounded-md border border-gray-300 gap-1 px-3 py-2 cursor-pointer hover:bg-gray-400 hover:text-[#2c7a7b] transition-colors duration-300'>
                    <BsList className='transition-transform translate-y-1'/>
                    <span>List</span>
                </div>
            </div>
            <select name="" id=""></select>
        </div> */}

        <div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-4'>
            {properties.map((item) => (
                <div key={item.id} className='max-w-lg rounded-2xl shadow-md group'>
                    <div>
                        <div className='overflow-hidden'>
                            {item.image}
                        </div>
                        
                    </div>

                    <div className='mt-6 px-8'>
                        {/* Body of property card */}
                        <div className='text-2xl text-[#2c7a7b] font-bold mb-2'>{item.price}</div>

                        <div className='text-[#163535] text-lg font-semibold mb-2'>{item.title}</div>

                        <div className='flex gap-2'>
                            <span className='text-[#2c7a7b] transition-transform translate-y-0.5'>{item.geo}</span>
                            <span className='text-[#323b3bb3] text-sm mb-4'>{item.address}</span>
                        </div>

                        <div className='flex gap-2 mb-6'>
                            <div className='flex gap-2'>
                                <span className='text-[#2c7a7b] transition-transform translate-y-0.5'>{item.icon1}</span>
                                <span className='text-[#323b3b] text-sm'>{item.beds}</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-[#2c7a7b] transition-transform translate-y-0.5'>{item.icon2}</span>
                                <span className='text-[#323b3b] text-sm'>{item.bath}</span>
                            </div>
                            <div className='flex gap-2'>
                                <span className='text-[#2c7a7b] transition-transform translate-y-0.5'>{item.icon3}</span>
                                <span className='text-[#323b3b] text-sm'>{item.size}</span>
                            </div>
                        </div>

                        {/* Agent details */}
                        <div className='flex gap-4 mb-8 items-center rounded-2xl p-4 bg-[#323b3b]/5'>
                            <div className=''>
                                {item.img}
                            </div>
                            <div className=''>
                                <p className='text-sm font-bold mb-2'>{item.agent}</p>
                                <div className='flex'>
                                    <span className='text-[#2c7a7b] transition-transform translate-y-0.5'>{item.icon4}</span>
                                    <span className='text-[#323b3b] text-sm'>{item.contact}</span>
                                </div>
                            </div>
                        </div>

                        {/* button div */}
                        <div className='mb-8 items-center justify-center text-center w-full'>
                            <a className='rounded-md px-6 py-3 block bg-[#2c7a7b] text-white font-bold text-sm'>
                            {item.button}
                        </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
