import React from "react";
import { Link } from "react-router-dom";
import { CircleArrowRight, CircleQuestionMark } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function Error() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center mt-30">
      {/* Header Section */}
      <div className="mb-12">
      <div className="text-center mt-20 md:mt-10">
        <h1 className="md:text-5xl text-4xl text-center items-center font-semibold text-gray-800">404</h1>
        <p className="md:mt-8 mt-6 text-center text-base justify-center md:mx-30 mx-6 px-4 md:px-30 text-gray-700">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo 
          odio sint voluptas consequatur ut a odio voluptatem. 
          Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>
    </div>

      {/* Breadcrumb */}
      <div className="w-full">
        <nav className="flex items-center bg-gray-200 px-3 py-5 max-w-full">
          <ol className="inline-flex md:items-center items-start space-x-1 md:space-x-4 md:mx-18 mx-0">
            <li>
              <Link to="/" className="text-teal-700">
                Home
              </Link>
            </li>

            <li>
              <span>/</span>
            </li>

            <li aria-current="page" className="text-gray-800">
              404
            </li>
          </ol>
        </nav>
    </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-6 lg:px-12 items-center">
        {/* Left Side (Animated Illustration) */}
        <div className="flex justify-center items-center relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <div className="relative flex items-center justify-center animate-pulse">
            <div className="text-[#2c7a7b]">
              <BsFillExclamationTriangleFill size={150} />
            </div>
            <div className="absolute w-52 h-52 bg-cyan-100 rounded-full opacity-30 animate-bounce motion-safe:animate-[bounce_3.5s_ease-in-out_infinite]"></div>
            <div className="absolute w-28 h-28 bg-neutral-700 rounded-full opacity-15 top-[10%] right-[85%]"></div>
            <div className="absolute w-20 h-20 bg-teal-600 rounded-full opacity-10 bottom-[15%] left-[85%] animate-pulse"></div>
          </div>
        </div>

        {/* Right Side (Text & Buttons) */}
        <div className="flex flex-col items-start text-left space-y-3">
          <button className="bg-[#2c7a7b26] text-[#2c7a7b] rounded-full py-2 px-6 text-sm font-semibold">
            ERROR
          </button>
          <p className="text-9xl font-extrabold text-[#17494a]">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Page Not Found
          </h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 w-full max-w-md">
            <a
              href="/"
              className="py-4 px-6 bg-teal-600 text-white flex justify-center items-center gap-2 font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <IoHomeOutline size={20} />
              <span>Back To Home</span>
            </a>

            <a
              href="#"
              className="py-4 px-6 border border-teal-600 text-teal-600 flex justify-center items-center gap-2 font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <CircleQuestionMark size={18} />
              <span>Help Center</span>
            </a>
          </div>

          {/* Suggestions */}
          <div className="mt-10">
            <h2 className="text-lg font-bold mb-3 text-gray-800">
              You might want to:
            </h2>
            <div className="space-y-4">
              <div className="group">
                <a
                  href="#"
                  className="flex items-center gap-3 group-hover:text-teal-600 font-medium transition-all"
                >
                  <span className="text-teal-600 transition-transform duration-300 group-hover:-translate-x-2">
                    <CircleArrowRight />
                  </span>
                  <span>Check our Sitemap</span>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="flex items-center gap-3 group-hover:text-teal-600 font-medium transition-all"
                >
                  <span className="text-teal-600 transition-transform duration-300 group-hover:-translate-x-2">
                    <CircleArrowRight />
                  </span>
                  <span>Contact support</span>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="flex items-center gap-3 group-hover:text-teal-600 font-medium transition-all"
                >
                  <span className="text-teal-600 transition-transform duration-300 group-hover:-translate-x-2">
                    <CircleArrowRight />
                  </span>
                  <span>Return to previous page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
