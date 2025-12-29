import React from 'react'
import CountUp from 'react-countup';
import { BsBuilding, BsGeoAlt, BsHammer, BsHouseHeart } from "react-icons/bs";
import InvestmentJourney from './InvestmentJourney';

const invest = [
    {
        id: 1,
        icon: <BsBuilding />,
        title: "Commercial Properties",
        example: "Office buildings, retail spaces, and industrial properties with stable rental income potential.",
        average: "Avg. ROI:",
        percentage: "12-18%"
    },
    {
        id: 2,
        icon: <BsHouseHeart />,
        title: "Residential Rentals",
        example: "Single-family homes and multi-unit properties in high-demand residential markets.",
        average: "Avg. ROI:",
        percentage: "8-14%"
    },
    {
        id: 3,
        icon: <BsHammer />,
        title: "Fix & Flip Projects",
        example: "Short-term investment opportunities with renovation potential for quick returns.",
        average: "Avg. ROI:",
        percentage: "20-35%"
    },
    {
        id: 4,
        icon: <BsGeoAlt />,
        title: "Land Development",
        example: "Raw land and development opportunities in emerging growth corridors.",
        average: "Avg. ROI:",
        percentage: "15-25%"
    },
]

const steps = [
  {
    number: "01",
    title: "Portfolio Assessment",
    description:
      "Comprehensive review of your financial goals, risk tolerance, and current investment portfolio to develop a customized strategy.",
  },
  {
    number: "02",
    title: "Market Research & Analysis",
    description:
      "Deep dive into local market conditions, growth projections, and investment opportunities that align with your criteria.",
  },
  {
    number: "03",
    title: "Property Identification",
    description:
      "Identification and evaluation of specific investment properties with detailed financial projections and risk assessments.",
  },
  {
    number: "04",
    title: "Due Diligence & Acquisition",
    description:
      "Complete property inspections, legal review, financing coordination, and seamless acquisition process management.",
  },
];


export default function InvestmentService() {
  return (
    <div className='py-12 grid md:grid-cols-6 grid-cols-1 md:gap-12 gap-2 px-2 sm:px-4 md:px-18'>
        <div className='w-full md:max-w-4xl md:col-span-4 col-span-1 order-2 md:order-1'>
            <div className='py-6'>
                <div className='text-[#2c7a7b] bg-[#2c7a7b1f] rounded-full text-sm px-5 py-2 w-fit font-semibold md:mb-5 mb-2'>
                    INVESTMENT SERVICES
                </div>
                <h1 className='md:text-5xl text-3xl font-bold mb-4'>Real Estate Investment Consulting</h1>
                <p className='md:text-lg text-base leading-relaxed'>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, 
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. 
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
            </div>

            <h2 className='mt-8 font-bold md:text-3xl text-2xl text-[#163535] md:mb-8 mb-4'>Investment Opportunities</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mb-10'>
            {invest.map((item) => (
                <div key={item.id} className='rounded-2xl px-6 py-8 shadow-xs border border-gray-200 bg-white hover:-translate-y-3 transition-all ease-in-out duration-500 hover:shadow-2xl'>
                    <div className='rounded-2xl p-4.5 bg-[#2c7a7b] text-white text-2xl w-fit mb-4'>
                        {item.icon}
                    </div>
                    <h1 className='text-xl font-semibold leading-relaxed text-[#163535] mb-2'>{item.title}</h1>
                    <p className='text-sm'>{item.example}</p>
                    <div className='bg-[#2c7a7b0d] rounded-md justify-between flex items-center px-3 py-4 mt-6'>
                        <span className='text-sm font-semibold'>{item.average}</span>
                        <span className='text-lg font-semibold text-[#2c7a7b]'>{item.percentage}</span>
                    </div>
                </div>
            ))}
            </div>
            
            <h2 className='mt-8 font-bold md:text-3xl text-2xl text-[#163535] md:mb-6 mb-4'>Our Investment Process</h2>
            <div className='relative space-y-12'>
                {/* vertical line */}
                <div className="absolute left-6 top-0 h-full w-[3px] bg-[#2c7a7b] text-[#2c7a7b]"></div>
                {steps.map((step) => (
                <div key={step.number} className='flex items-start relative'>
                    {/* circle */}
                    <div className="z-10 mt-6 flex items-center justify-center w-12 h-12 rounded-full border-3 border-[#2c7a7b] bg-white text-[#2c7a7b] font-semibold">
                        {step.number}
                    </div>
                    {/* card */}
                    <div className="bg-white shadow-lg rounded-xl md:px-8 px-5 py-6 w-full">
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {step.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>

            <div className='mt-8 mb-10'>
                <h2 className='mt-8 font-bold md:text-3xl text-2xl text-[#163535] md:mb-6 mb-4'>Client Success Metrics</h2>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-6'>
                    <div className='rounded-3xl shadow py-14 bg-white border border-gray-200 flex flex-col items-center justify-center'>
                        <CountUp end={247} duration={5} suffix='M' className='text-5xl text-[#2c7a7b] font-bold mb-4'/>
                        <p className='font-bold mb-2'>Total Investments Managed</p>
                        <p className='text-sm text-[#323b3b]'>Across all investment types</p>
                    </div>
                    <div className='rounded-3xl shadow py-14 bg-white border border-gray-200 flex flex-col items-center justify-center'>
                        <CountUp end={89} duration={5} suffix='%' className='text-5xl text-[#2c7a7b] font-bold mb-4'/>
                        <p className='font-bold mb-2'>Client Satisfaction Rate</p>
                        <p className='text-sm text-[#323b3b]'>Based on annual surveys</p>
                    </div>
                    <div className='rounded-3xl shadow py-14 bg-white border border-gray-200 flex flex-col items-center justify-center'>
                        <CountUp end={156} duration={5}  className='text-5xl text-[#2c7a7b] font-bold mb-4'/>
                        <p className='font-bold mb-2'>Active Investment Projects</p>
                        <p className='text-sm text-[#323b3b]'>Currently under management</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='mt-8 font-bold md:text-3xl text-2xl text-[#163535] md:mb-6 mb-4'>Client Success Stories</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div className='border-l-4 border-l-[#2c7a7b] bg-white rounded-3xl p-6 gap-6 max-w-3xl shadow'>
                    <p className='text-[#323b3b] text-sm leading-relaxed mb-6'>
                        "Thanks to their guidance, my real estate portfolio has grown 340% in just three years. Their market insights are invaluable."
                    </p>
                    <div className='flex gap-4'>
                        <img src="/images/person-1.webp" alt="Agent Michael" className='rounded-full w-12 h-12 border border-[#2c7a7b] items-center text-center justify-center'/>
                        <div>
                            <p className='text-[#163535] text-sm font-semibold'>Michael Chen</p>
                            <span className='text-xs text-[#2c7a7b] font-medium'>Portfolio Value: $2.8M</span>
                        </div>
                    </div>
                </div>

                <div className='border-l-4 border-l-[#2c7a7b] bg-white rounded-3xl p-6 gap-6 max-w-3xl shadow'>
                    <p className='text-[#323b3b] text-sm leading-relaxed mb-6'>
                        "Professional, knowledgeable, and always available. They found me three rental properties that consistently outperform projections."
                    </p>
                    <div className='flex gap-4'>
                        <img src="/images/blog-agent-1.webp" alt="Jennifer Rodriguez" className='rounded-full w-12 h-12 border border-[#2c7a7b] items-center text-center justify-center'/>
                        <div>
                            <p className='text-[#163535] text-sm font-semibold'>Jennifer Rodriguez</p>
                            <span className='text-xs text-[#2c7a7b] font-medium'>Portfolio Value: $1.4M</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className='order-1 md:order-2 md:col-span-2 col-span-1'>
            <InvestmentJourney />
        </div>
    </div>
  )
}
