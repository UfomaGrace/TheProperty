import { Link } from "react-router-dom";

function Aboutbreadcrumb() {
  return (
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
              About
            </li>
          </ol>
        </nav>
    </div>
  );
}

export default Aboutbreadcrumb;
