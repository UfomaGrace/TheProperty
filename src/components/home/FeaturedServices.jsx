import React from 'react'
import { BsArrowRight, BsCheck2, BsGraphUp, BsKey, BsSearch, BsShieldCheck } from "react-icons/bs";

const services = [
    {
        id: 1,
        icon: <BsSearch />,
        digit: "01",
        title: "Property Search",
        heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna",
        icon2: <BsCheck2 />,
        List1: "Advanced Search Filters",
        List2: "360° Virtual Tours",
        List3: "Real-time Updates",
        button: "Explore Properties",
        buttonIcon: <BsArrowRight />
    },
    {
        id: 2,
        icon: <BsGraphUp />,
        digit: "02",
        title: "Market Analysis",
        heading: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat duis aute",
        icon2: <BsCheck2 />,
        List1: "Price Trend Reports",
        List2: "Investment Insights",
        List3: "Market Forecasting",
        button: "Get Analysis",
        buttonIcon: <BsArrowRight />
    },
    {
        id: 3,
        icon: <BsKey />,
        digit: "03",
        title: "Property Management",
        heading: "Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim laborum sed",
        icon2: <BsCheck2 />,
        List1: "Tenant Screening",
        List2: "Rental Collection",
        List3: "Maintenance Services",
        button: "Manage Now",
        buttonIcon: <BsArrowRight />
    },
    {
        id: 4,
        icon: <BsShieldCheck />,
        digit: "04",
        title: "Legal Support",
        heading: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam",
        icon2: <BsCheck2 />,
        List1: "Contract Review",
        List2: "Title Verification",
        List3: "Legal Documentation",
        button: "Learn More",
        buttonIcon: <BsArrowRight />
    },
]

export default function FeaturedServices() {
  return (
    <div className='mb-10'>
        <div className='text-center justify-center '>
            <h2 className='text-3xl font-bold mb-2'>Featured Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className='mt-8 grid md:grid-cols-4 grid-cols-1 md:px-18 px-2 gap-4 '>
            {services.map((item) => (
                <div key={item.id} className={`group max-w-lg rounded-3xl hover:shadow-2xl hover:-translate-y-5 duration-300 transition-all py-12 md:p-6 p-4 border border-gray-200
                    relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:origin-center before:duration-500 before:ease-in-out h-full before:w-0 
                    hover:before:w-16 before:border-t-[3px] before:transition-all ease-in-out before:rounded-sm overflow-hidden
                    ${item.id === 2 ? 'bg-[#2c7a7c] text-white before:border-white' : 'bg-white text-[#163535] before:border-[#2c7a7c]'}`}>
                    <div className='flex justify-between items-center'>
                        <div className='perspective w-16 h-16'> 
                            <div className='relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-360'>
                                <div className={`absolute backface-hidden rounded-full justify-center items-center flex w-16 h-16 ${item.id === 2 ? 'bg-white text-[#2c7a7c]' :'text-[#2c7a7c] bg-[#2c7a7c1f]' }`}>
                                    <span className='text-3xl'>{item.icon}</span>
                                </div>
                                <div className={`absolute backface-hidden text-[#2c7a7c] bg-[#2c7a7c1f] rounded-full justify-center items-center flex w-16 h-16 rotate-y-180 ${item.id === 2 ? 'bg-white text-[#2c7a7c]' :'text-[#2c7a7c] bg-[#2c7a7c1f]' }`}>
                                    <span className='text-3xl'>{item.icon}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`font-extrabold font-serif text-2xl ${item.id === 2 ? 'text-white' : 'text-gray-400'}`}>
                            {item.digit}
                        </div>
                    </div>

                    <div className='text-center py-4 mt-4'>
                        <h2 className={`font-bold text-lg mb-3 ${item.id === 2 ? 'text-white' : 'text-[#163535]'}`}>{item.title}</h2>
                        <p className={`text-sm py-3 ${item.id === 2 ? 'text-white' : 'text-[#323b3bbf]'}`}>{item.heading}</p>
                    </div>

                    <div className='space-y-4 text-sm'>
                        <div className='flex gap-3'>
                            <span className={`transition-transform translate-y-1 ${item.id === 2 ? 'text-white' : 'text-[#2c7a7c]'}`}>
                                {item.icon2}
                            </span>
                            <span className={`${item.id === 2 ? 'text-white' : 'text-[#323b3b]'}`}>
                                {item.List1}
                            </span>
                        </div>
                        <div className='flex gap-3'>
                            <span className={`transition-transform translate-y-1 ${item.id === 2 ? 'text-white' : 'text-[#2c7a7c]'}`}>
                                {item.icon2}
                            </span>
                            <span className={`${item.id === 2 ? 'text-white' : 'text-[#323b3b]'}`}>
                                {item.List2}
                            </span>
                        </div>
                        <div className='flex gap-3'>
                            <span className={`transition-transform translate-y-1 ${item.id === 2 ? 'text-white' : 'text-[#2c7a7c]'}`}>
                                {item.icon2}
                            </span>
                            <span className={`${item.id === 2 ? 'text-white' : 'text-[#323b3b]'}`}>
                                {item.List3}
                            </span>
                        </div>
                    </div>

                    <div className='flex text-center items-center justify-center mt-8'>
                        <div className={`rounded-full w-fit h-fit px-6 py-4 flex gap-2 peer border hover:scale-105 transition-all duration-300 ${item.id === 2 ? 'text-white bg-[#ffffff33] hover:text-[#2c7a7c] hover:bg-white border-0' : 'text-[#2c7a7c] bg-[#2c7a7c1f] hover:bg-[#2c7a7c] hover:text-white border-gray-300'}`}>
                            <span className='text-sm font-bold'>{item.button}</span>
                            <span className='transition-transform translate-y-0.5 peer-hover:translate-x-1 duration-300'>{item.buttonIcon}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='flex items-center justify-center text-center py-8 mt-6'>
            <button className='group border-2 border-[#2c7a7c] w-fit h-fit px-7 py-5 text-[#2c7a7c] font-bold rounded-full flex gap-2 hover:text-white transition-all duration-700
            bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-left bg-no-repeat ease-in-out hover:bg-gradient-to-r from-[#2c7a7c] to-[#2c7a7c] hover:shadow-[#2c7a7c6f] hover:shadow-lg hover:-translate-y-1'>
                Discover All Our Services
                <BsArrowRight className='text-2xl -rotate-45 group-hover:rotate-none duration-300 transition-all hover:ease-in-out'/>
            </button>
        </div>
    </div>
  )
}
