import React from "react";

const timelineData = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    year: "2015",
    title: "1000th Property Milestone",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    year: "2020",
    title: "Digital Innovation Launch",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2024",
    title: "Regional Expansion",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
  },
];

export default function OurJourney() {
  return (
    <div className="md:py-16 py-8">
      <div className="max-w-6xl md:mx-auto mx-0 md:px-8 px-2">
        <div className="md:mb-12 mb-9 text-center">
          <h2 className="text-center text-4xl font-semibold mb-4">
            Our Journey of Excellence
          </h2>
          <p className=" text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam.
          </p>
        </div>
        <div className="md:space-y-16 space-y-9 md:p-6 p-0">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row items-start w-full md:items-center md:justify-start ${
                index % 2 !== 0 ? "md:flex-row-reverse md:space-x-reverse" : ""
              } md:space-x-6 space-x-4`}
            >
              {/* Year Circle */}
              <div className="mb-4 md:mb-0 flex-shrink-0 md:w-28 md:h-28 w-20 h-20 bg-[#2c7a7b] text-white rounded-full shadow-lg shadow-[#2c7a7b3e] flex items-center justify-center">
                <span className="text-xl font-bold">{item.year}</span>
              </div>

              {/* Text Block */}
              <div
                className={`flex-1 min-w-0 ${
                  index % 2 !== 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-2xl font-medium font-sans text-[#163535] mb-3.5">
                  {item.title}
                </h3>
                <p className="text-[#323b3bbf] text-base md:text-lg leading-relaxed break-words">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
