import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPerson, IoHeart, IoHome, IoNotificationsSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdSchool, MdDateRange, MdMenuBook } from "react-icons/md";
import { ImCalculator } from "react-icons/im";
import { ImMenu } from "react-icons/im";
import { PiWarningCircleFill } from "react-icons/pi";

const Navbar = () => {
  const [showShidebar, setShowShidebar] = useState(true);
  return (
    <>
      <nav className="bg-primary shadow-sm shadow-slate-500 fixed w-full z-10">
        <div className="container mx-auto lg:px-0 px-2">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center text-white sm:text-lg sm:font-bold font-medium">
              BTEB Results Zone
            </Link>
            <div className="flex ">
              <div className=" lg:flex hidden">
                <Link to="/result" className="ml-6 flex gap-1 items-center text-white hover:text-gray-300">
                  <IoPerson />
                  Individual Results
                </Link>
                <Link
                  to="/group-results"
                  className="ml-6 flex gap-1 items-center text-white hover:text-gray-300"
                >
                  <HiUserGroup />
                  Group Results
                </Link>
                <Link
                  to="/institute-results"
                  className="ml-6 flex gap-1 items-center text-white hover:text-gray-300"
                >
                  <MdSchool />
                  Institute Results
                </Link>
                <Link
                  to="/latest-results"
                  className="ml-6 flex gap-1 items-center text-white hover:text-gray-300"
                >
                  <MdDateRange />
                  Latest Results
                </Link>
                <Link to="/favorites" className="ml-6 flex gap-1 items-center text-white hover:text-gray-300">
                  <IoHeart />
                  Favorites
                </Link>
                <Link
                  to="/cgpa-calculator"
                  className="ml-6 cursor-pointer flex gap-1 items-center text-white hover:text-gray-300"
                >
                  <ImCalculator />
                  CGPA
                </Link>
              </div>
              <div
                onClick={() => setShowShidebar(!showShidebar)}
                className="ml-6 text-xl cursor-pointer flex gap-1 items-center text-white hover:text-gray-300"
              >
                <ImMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Side menu */}
      <nav
        className={`sm:w-[290px] w-[275px] z-[999] transition-all duration-200 fixed  ${
          showShidebar ? "-left-[290px]" : "left-0"
        } top-0 overflow-y-auto bg-white h-screen `}
      >
        <div className="flex flex-col justify-center items-center bg-primary text-white h-[120px] ">
          <h3 className="sm:text-2xl text-xl">BTEB Results Zone</h3>
          <p>Results at your fingertips</p>
        </div>
        <div className="flex flex-col gap-4 mt-3 text-lg ">
          <Link to="/" onClick={() => setShowShidebar(true)} className="ml-6 flex gap-1 items-center ">
            <IoHome />
            Home
          </Link>
          <Link to="/result" onClick={() => setShowShidebar(true)} className="ml-6 flex gap-1 items-center ">
            <IoPerson />
            Individual Results
          </Link>
          <Link
            to="/group-results"
            onClick={() => setShowShidebar(true)}
            className="ml-6 flex gap-1 items-center "
          >
            <HiUserGroup />
            Group Results
          </Link>
          <Link
            to="/institute-results"
            onClick={() => setShowShidebar(true)}
            className="ml-6 flex gap-1 items-center "
          >
            <MdSchool />
            Institute Results
          </Link>
          <Link
            to="/latest-results"
            onClick={() => setShowShidebar(true)}
            className="ml-6 flex gap-1 items-center "
          >
            <MdDateRange />
            Latest Results
          </Link>
          <Link to="/notice" onClick={() => setShowShidebar(true)} className="ml-6 flex gap-1 items-center ">
            <IoNotificationsSharp />
            Notice Board
          </Link>
          <Link
            to="/booklists"
            onClick={() => setShowShidebar(true)}
            className="ml-6 flex gap-1 items-center "
          >
            <MdMenuBook />
            BookList
          </Link>
          <Link
            to="/cgpa-calculator"
            onClick={() => setShowShidebar(true)}
            className="ml-6 flex gap-1 items-center "
          >
            <ImCalculator />
            CGPA Calculator
          </Link>
          <Link
            to="/favorites"
            onClick={() => setShowShidebar(true)}
            className="ml-6 flex gap-1 items-center "
          >
            <IoHeart />
            Favorites
          </Link>
          <Link to="/about" onClick={() => setShowShidebar(true)} className="ml-6 flex gap-1 items-center ">
            <PiWarningCircleFill />
            About Us
          </Link>
        </div>
      </nav>
      <div
        onClick={() => setShowShidebar(true)}
        className={`fixed duration-200 transition-all ${
          showShidebar ? "invisible" : "visible"
        }  w-screen h-screen bg-[rgba(0,0,0,0.43)] top-0 left-0 bottom-0 right-0 z-20`}
      ></div>
    </>
  );
};

export default Navbar;
