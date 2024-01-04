import React from "react";
import { FaFacebook, FaSquareShareNodes } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700">
      <div className="container mx-auto h-[300px] py-5 flex justify-between items-center gap-5 text-white">
        <div className=" flex-1 mr-14">
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
        <div className=" flex-1 flex flex-col gap-3 items-start ">
          <Link to={"/result"}>Individual Results</Link>
          <Link to={"/"}>Latest Results</Link>
          <Link to={"/"}>Institute Results</Link>
          <Link to={"/"}>Group Results</Link>
          <Link to={"/"}>CGPA Calculator</Link>
          <Link to={"/"}>BookList</Link>
        </div>
        <div className="  flex-1  flex flex-col gap-3 items-start ">
          <Link to={"/"}>Favorites</Link>
          <Link to={"/"}>About Us</Link>
          <Link to={"/"}>Contact Us</Link>
          <Link to={"/"}>Privacy Policy</Link>
          <Link to={"/"}>Terms Of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
