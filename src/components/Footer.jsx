import React from "react";
import { FaFacebook, FaSquareShareNodes } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary z-50">
      <div className="container z-50 mx-auto h-[280px] py-5 flex justify-between md:flex-row flex-col items-center gap-5 text-white">
        <div className=" flex-1">
          <div className="flex gap-4 text-lg mb-4">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaSquareShareNodes />
            </span>
            <span>
              <MdEmail />
            </span>
          </div>
          <p className="text-xs">©2021-2024 “BTEB Results Zone” All rights reserved.</p>
        </div>
        <div className="flex gap-5 flex-1">
          <div className=" md:flex-1 flex flex-col md:gap-3 gap-1 items-start ">
            <Link to={"/result"}>Individual Results</Link>
            <Link to={"/latest-results"}>Latest Results</Link>
            <Link to={"/institute-results"}>Institute Results</Link>
            <Link to={"/group-results"}>Group Results</Link>
            <Link to={"/cgpa-calculator"}>CGPA Calculator</Link>
            <Link to={"/booklists"}>BookList</Link>
          </div>
          <div className="md:flex-1  flex flex-col md:gap-3 gap-1 items-start ">
            <Link to={"/favorites"}>Favorites</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Terms Of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
