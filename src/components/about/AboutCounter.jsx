import React from "react";
import CountUp from "react-countup";
import { BsKey, BsGeoAlt, BsAward } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function AboutCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 rounded-2xl border border-gray-200 bg-[#2c7a7c06] md:py-14 py-4 px-6 md:m-20 m-3">
      <div className="h-fit flex flex-col text-center justify-center items-center m-4 p-2">
        <i className="w-20 h-20 rounded-2xl mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] hover:text-white hover:bg-[#2c7a7c] hover:-translate-y-2 transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
          <BsKey className="w-8 h-10 font-normal leading-4" />
        </i>
        <h2 className="text-5xl font-bold text-[#163535] mb-3">
          <CountUp end={2850} duration={5} />+
        </h2>
        <p className="uppercase text-gray-500 text-lg font-sans font-medium">Properties Sold</p>
      </div>

      <div className="h-fit flex flex-col text-center justify-center items-center m-4 p-2">
        <i className="w-20 h-20 rounded-2xl mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] hover:text-white hover:bg-[#2c7a7c] hover:-translate-y-2 transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
          <IoHeart className="w-10 h-10 font-normal leading-4" />
        </i>
        <h2 className="text-5xl font-bold text-[#163535] mb-3">
          <CountUp end={98} duration={5} />%
        </h2>
        <p className="uppercase text-gray-500 text-lg font-sans font-medium">Client Satisfaction</p>
      </div>

      <div className="h-fit flex flex-col text-center justify-center items-center m-4 p-2">
        <i className="w-20 h-20 rounded-2xl mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] hover:text-white hover:bg-[#2c7a7c] hover:-translate-y-2 transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
          <BsGeoAlt className="w-8 h-10 font-normal leading-4" />
        </i>
        <h2 className="text-5xl font-bold text-[#163535] mb-3">
          <CountUp end={35} duration={5} />
        </h2>
        <p className="uppercase text-gray-500 text-lg font-sans font-medium">Cities Covered</p>
      </div>

      <div className="h-fit flex flex-col text-center justify-center items-center m-4 p-2">
        <i className="w-20 h-20 rounded-2xl mb-6 bg-[#2c7a7c1f] text-[#2c7a7c] hover:text-white hover:bg-[#2c7a7c] hover:-translate-y-2 transition-all duration-300 inline-flex px-4 py-3 text-center justify-center items-center">
          <BsAward className="w-8 h-10 font-normal leading-4" />
        </i>
        <h2 className="text-5xl font-bold text-[#163535] mb-3">
          <CountUp end={127} duration={5} />
        </h2>
        <p className="uppercase text-gray-500 text-lg font-sans font-medium">Industry Awards</p>
      </div>
    </div>
  );
}

export default AboutCounter;
