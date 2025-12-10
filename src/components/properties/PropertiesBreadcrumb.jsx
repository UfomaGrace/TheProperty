import React from 'react'
import { Link } from "react-router-dom";

export default function PropertiesBreadcrumb() {
  return (
    <div className="w-full">
        <nav className="flex items-center bg-gray-200 px-3 py-5 max-w-full">
          <ol className="inline-flex items-center space-x-1 md:space-x-4 mx-18">
            <li>
              <Link to="/" className="text-[#2c7a7b]">
                Home
              </Link>
            </li>

            <li>
              <span>/</span>
            </li>

            <li aria-current="page" className="text-gray-800">
              Properties
            </li>
          </ol>
        </nav>
    </div>
  )
}
