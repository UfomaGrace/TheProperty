import React from 'react'
import { BsArrowRight, BsEnvelope, BsGeoAlt, BsTelephone, BsWhatsapp } from 'react-icons/bs'
const agents = [
    {
        id: 1,
        image: <img src='/images/agent-1.webp' alt='Lisa Thompson' className='md:h-[48vh] h-full w-full group-hover:brightness-85 transition-all duration-300 object-cover group-hover:scale-110 hover:duration-500'/>,
        tag: "TOP AGENT",
        colour: "bg-yellow-500",
        icon1: <BsTelephone size={18}/>,
        icon2: <BsEnvelope size={18}/>,
        icon3: <BsWhatsapp size={18}/>,
        name: "Lisa Thompson",
        title: "Luxury Property Expert",
        number: "150+",
        label: "Properties Sold",
        number2: "4.9",
        label2: "RATING",
        geo: <BsGeoAlt/>,
        location: "Miami Beach",
        specialty1: "WATERFRONT",
        specialty2: "HIGH-RISE",
        button: "View Full Profile"
    },
    {
        id: 2,
        image: <img src='/images/agent-sarah.webp' alt='Robert Chen' className='md:h-[48vh] h-full w-full group-hover:brightness-85 transition-all duration-300 object-cover group-hover:scale-110 hover:duration-500'/>,
        tag: "CERTIFIED",
        colour: "bg-teal-600",
        icon1: <BsTelephone size={18}/>,
        icon2: <BsEnvelope size={18}/>,
        icon3: <BsWhatsapp size={18}/>,
        name: "Robert Chen",
        title: "Commercial Specialist",
        number: "90+",
        label: "Commercial Sales",
        number2: "4.8",
        label2: "RATING",
        geo: <BsGeoAlt/>,
        location: "Downtown",
        specialty1: "OFFICE SPACE",
        specialty2: "RETAIL",
        button: "View Full Profile"
    },
    {
        id: 3,
        image: <img src='images/agent-A2.webp' alt='Maria Gonzalez' className='md:h-[48vh] h-full w-full group-hover:brightness-85 transition-all duration-300 object-cover group-hover:scale-110 hover:duration-500'/>,
        tag: "RISING STAR",
        colour: "bg-green-500",
        icon1: <BsTelephone size={18}/>,
        icon2: <BsEnvelope size={18} />,
        icon3: <BsWhatsapp size={18}/>,
        name: "Maria Gonzalez",
        title: "Residential Advisor",
        number: "75+",
        label: "Happy Families",
        number2: "4.9",
        label2: "RATING",
        geo: <BsGeoAlt/>,
        location: "Suburbs",
        specialty1: "FAMILY HOMES",
        specialty2: "FIRST-TIME",
        button: "View Full Profile"
    },
]

export default function FeaturedAgents() {
  return (
    <div>
        <div className='text-center justify-center '>
            <h2 className='text-3xl font-bold mb-2'>Featured Agents</h2>
            <p className=''>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:px-18 px-2 py-12'>
            {agents.map((item) => (
                <div key={item.id} className='max-w-lg rounded-2xl shadow-md group hover:-translate-y-3 transition-transform duration-300 hover:shadow-2xl'>
                    <div className='overflow-hidden rounded-t-2xl relative z-40'>
                        <div className='overflow-hidden'>
                            {item.image}
                        </div>
                        <div className='flex gap-3 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 text-center justify-center top-30'>
                            <div>
                                <a href='#' className='rounded-xl w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b] transition-all hover:bg-teal-700 hover:text-white hover:scale-125 duration-300'>
                                    {item.icon1}
                                </a>
                            </div>
                            <div>
                                <a href='#' className='rounded-xl w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b] transition-all hover:bg-red-500 hover:text-white hover:scale-125 duration-300'>
                                    {item.icon2}
                                </a>
                            </div>
                            <div>
                                <a href='#' className='rounded-xl w-12 h-12 bg-white flex items-center text-center justify-center text-[#2c7a7b] transition-all hover:bg-green-500 hover:text-white hover:scale-125 duration-300'>
                                    {item.icon3}
                                </a>
                            </div>
                        </div>
                        <div className='absolute top-4 right-6 '>
                            <div className={`text-white px-3 py-1.5 rounded-full text-xs font-medium ${item.colour}`}>
                                {item.tag}
                            </div>
                        </div>
                        
                    </div>

                    <div className='py-4'>
                        <div className='text-center justify-center mb-4'>
                            <p className='text-lg font-bold'>{item.name}</p>
                            <p className='text-[#2c7a7c] uppercase font-semibold text-[14px]'>{item.title}</p>
                        </div>
                        <div className='text-center items-center justify-center flex mx-6'>
                            <div className='rounded-2xl px-10 py-5 border border-gray-200 bg-[#2c7a7b0c] flex justify-between items-center w-full'>
                                <div className='flex flex-col'>
                                    <span className='text-[16px] font-bold text-[#163535]'>{item.number}</span>
                                    <span className='text-[11px] text-[#323b3bb3] font-semibold uppercase'>{item.label}</span>
                                </div>
                                 <div className='flex items-center mr-8'>
                                    <div className='h-8 w-[1px] bg-gray-300'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[16px] font-bold text-[#163535]'>{item.number2}</span>
                                    <span className='text-[11px] text-[#323b3bb3] font-semibold uppercase'>{item.label2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center items-center justify-center flex flex-col mb-4'>
                        <div className='flex gap-1 mb-4'>
                            <span className='transition-transform translate-y-1 text-sm text-[#2c7a7b]'>{item.geo}</span>
                            <span className='text-[#323b3bb3] text-sm font-medium'>{item.location}</span>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-xs text-[#2c7a7c] font-bold border-2 border-[#2c7a7b7f] rounded-full px-3 py-1.5 uppercase'>{item.specialty1}</span>
                            <span className='text-xs text-[#2c7a7c] font-bold border-2 border-[#2c7a7b7f] rounded-full px-3 py-1.5 uppercase'>{item.specialty2}</span>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className='w-full text-center mb-8 bg-[#2c7a7b] text-white font-bold rounded-md px-2 py-3'>
                            {item.button}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex items-center justify-center text-center mt-6'>
            <button className='group border-2 border-[#2c7a7c] w-fit h-fit px-7 py-5 text-[#2c7a7c] font-bold rounded-full flex gap-2 hover:text-white transition-all duration-700
                bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-left bg-no-repeat ease-in-out hover:bg-gradient-to-r from-[#2c7a7c] to-[#2c7a7c] hover:shadow-[#2c7a7c6f] hover:shadow-lg hover:-translate-y-1'>
                Explore All Our Agents
                <BsArrowRight className='text-2xl -rotate-45 group-hover:rotate-none duration-300 transition-all hover:ease-in-out'/>
            </button>
        </div>
    </div>
  )
}
