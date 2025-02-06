/* eslint-disable react/prop-types */
import Navbar2 from "./components/navbar2";
import COLORS from "./components/color";
import Footer from "./components/footer";
import ReachOut from "./components/reachout";
import banner1 from "./assets/banner1.png";
import { useState } from "react";
import coma from './assets/coma.png'

const ReachOutForm = ({openModal}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, company, message });
  };
  return (
    <>
      <Navbar2 openModal={openModal}/>
      <div className="crique-light">
        <div
          className="flex justify-center items-center p-10"
          style={{ backgroundColor: COLORS.blue }}
        >
          <h1 className="text-5xl font-semibold text-center text-white">
            GET IN TOUCH!
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="flex-1 p-20">
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Please Insert Your Name"
                  className="border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please Insert Your Email Address"
                  className="border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Please Your Company Name"
                  className="border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How May We Help You?"
                  className="border border-black w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                />
              </div>
              <div
                style={{ backgroundColor: COLORS.blue }}
                className="inline-block px-8 py-2"
              >
                <div className="flex clex-row">
                <img src={coma} className="w-8 h-8 mr-2" />
                <h1
                  style={{ color: COLORS.green }}
                  className="text-xl font-semibold"
                >
                  SUBMIT!
                </h1>
                </div>
                
              </div>
            </form>
          </div>
          <div className="flex-1">
            <img src={banner1} style={{ width: 600 }} />
          </div>
        </div>
      </div>
      <ReachOut />
      <Footer />
    </>
  );
};

export default ReachOutForm;
