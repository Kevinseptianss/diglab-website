/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import COLORS from "./color";

function Navbar({ openModal }) {
  return (
    <nav className="bg-white border-b border-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex">
          <Link to='/'><img src={logo} alt="Digilab Logo" className="h-10" /></Link>
        </div>

        <div className="flex flex-row crique-light">
          <div className="md:flex space-x-8 me-[50px]">
            <Link to='/experience'><p style={{color: COLORS.blue}}>Services</p></Link>
            <Link to='/works'><p style={{color: COLORS.blue}}>Works</p></Link>
            <Link to='/vision'><p style={{color: COLORS.blue}}>About</p></Link>
            <Link to='/reachout'><p style={{color: COLORS.blue}}>Contact Us</p></Link>
          </div>
          <div className="">
            <button className="text-gray-600 hover:text-blue-500" onClick={openModal}>
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
      </div>
    </nav>
  );
}

export default Navbar;
