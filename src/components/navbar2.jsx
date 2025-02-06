/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar2 = ({ openModal }) => {
  return (
    <div className="flex flex-row justify-between p-8">
        <Link to='/'><img src={logo} className="w-[80px]"/></Link>
        <div onClick={openModal}>
            <button className="text-gray-600 hover:text-blue-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
    </div>
  )
}

export default Navbar2