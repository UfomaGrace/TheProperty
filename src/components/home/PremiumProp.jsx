import React from "react";
import CountUp from "react-countup";
import { IoSearchSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


function PremiumProp() {
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2 py-6 md:py-20 md:px-20">
        <div className="mt-36 md:mt-10 min-h-screen">
          <div className="md:mb-6 mb-3 rounded-full bg-[#2c7a7b] text-white inline-block py-1 md:px-3 px-1 text-sm font-bold tracking-wide">
            <span className="flex gap-2 p-2">
              <FaStar className="text-white translate-y-0.5" />
              Premium Properties
            </span>
          </div>
          <h1 className="md:text-5xl text-4xl font-bold md:mb-6 mb-4 text-gray-800">
            Discover Your Perfect Home in the Heart of the City
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Browse
            thousands of verified listings from trusted agents.
          </p>

          <div className="bg-white md:p-8 p-4 rounded-2xl shadow-lg space-y-4 mt-5 max-w-xl max-h-full">
            <label
              htmlFor="location"
              className="flex flex-col border border-gray-300 w-full rounded-lg"
            >
              <span className="ml-3 text-sm text-gray-600">Location</span>
              <input
                type="text"
                id="location"
                autoComplete="location"
                className="focus:ring-0 focus:outline-none border-0 px-2 py-1 rounded-md"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <label
                htmlFor="property-type"
                className="flex flex-col border border-gray-300 w-full rounded-lg px-2 py-1.5"
              >
                <span className="ml-2 text-sm text-gray-600">
                  Property Type
                </span>
                <select id="property-type" className="ml-1 text-gray-800">
                  <option value="">Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </label>

              <label
                htmlFor="price-range"
                className="flex flex-col border border-gray-300 w-full rounded-lg px-2 py-1.5"
              >
                <span className="ml-2 text-sm text-gray-600">Price Range</span>
                <select id="price-range" className="ml-1 text-gray-800">
                  <option value="">Price Range</option>
                  <option value="">Under $200k</option>
                  <option value="">$200k - $500k</option>
                  <option value="">$500k - $800k</option>
                  <option value="">$800k - $1.2M</option>
                  <option value="">Above $1.2M</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <label
                htmlFor="bedrooms"
                className="flex flex-col border border-gray-300 w-full rounded-lg px-2 py-1.5"
              >
                <span className="ml-2 text-sm text-gray-600">Bedrooms</span>
                <select id="property-type" className="ml-1 text-gray-800">
                  <option value="">Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
              </label>
              <label
                htmlFor="bathrooms"
                className="flex flex-col border border-gray-300 w-full rounded-lg px-2 py-1.5"
              >
                <span className="ml-2 text-sm text-gray-400">Bathrooms</span>
                <select id="Bathrooms" className="ml-1 text-gray-800">
                  <option value="">Bathrooms</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4">4+ Bathrooms</option>
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#2c7a7b] text-white px-4 py-2 rounded-lg font-semibold hover:[#2c7a7b22] flex items-center gap-2 w-full justify-center"
            >
              <IoSearchSharp className="" />
              Search Properties
            </button>
          </div>

          <div className="py-12 bg-gray-50">
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-10 text-center">
              <div>
                <CountUp end={2847} suffix="+" className="md:text-3xl text-2xl text-[#2c7a7b] font-bold"/>
                <p className="mt-2 text-sm text-[#323b3bb3] font-semibold">Properties Listed</p>
              </div>
              <div>
                <CountUp end={156} suffix="+" className="md:text-3xl text-2xl text-[#2c7a7b] font-bold"/>
                <p className="mt-2 text-sm text-[#323b3bb3] font-semibold">Verified Agents</p>
              </div>
              <div>
                <CountUp end={98} suffix="%" className="md:text-3xl text-2xl text-[#2c7a7b] font-bold"/>
                <p className="mt-2 text-sm text-[#323b3bb3] font-semibold">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-40 mt-10 px-4 sm:px-0">
          <div>
            <img
              src="/images/property-1.webp"
              alt="First Property"
              className="rounded-4xl w-full shadow-md h-[65vh] md:h-[75vh] object-cover"
            />
          </div>
          <div className="flex justify-between absolute top-0 left-0 right-0 md:mx-12 mx-8">
            <img
              src="/images/property-2.webp"
              alt="Property"
              className="rounded-2xl shadow-md md:h-50 md:w-48 h-28 w-28 md:-mt-10 -mt-4 border-4 border-white object-cover"
            />
            <div className="p-3 md:p-5 bg-white shadow-md rounded-2xl md:max-w-xl max-w-xs md:h-20 h-fit mt-4">
              <h3 className="md:text-lg text-base font-bold text-[#2c7a7b] mb-1">$850,000</h3>
              <p className="text-gray-500 font-semibold md:text-sm text-xs">FEATURED</p>
            </div>
          </div>
          <div className="flex shadow-md bg-white md:p-4 p-3 rounded-2xl gap-3 items-center absolute -bottom-10 md:left-5 left-8">
            <img
              src="/images/agent-sarah.webp"
              alt="Agent Sarah"
              className="md:w-16 w-10 md:h-16 h-10 rounded-full border-[#2c7a7b] border-2 shadow-md"
            />
            <div>
              <h2 className="font-semibold md:text-lg text-sm">Sarah Johnson</h2>
              <p className="text-xs text-gray-600 mb-3">
                Top Real Estate Agent
              </p>
              <div className="md:text-sm text-xs text-gray-600 md:flex">
                <FaStar className="h-4 w-4 inline text-yellow-400 " />
                <FaStar className="h-4 w-4 inline text-yellow-400" />
                <FaStar className="h-4 w-4 inline text-yellow-400" />
                <FaStar className="h-4 w-4 inline text-yellow-400" />
                <FaStar className="h-4 w-4 inline text-yellow-400 mr-1" />
                <p>
                  4.9 (127 reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumProp;
