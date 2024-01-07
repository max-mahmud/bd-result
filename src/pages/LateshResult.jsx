import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { MdOpenInNew } from "react-icons/md";
import Visit from "../components/Visit";

const LateshResult = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate(`/latest-results/123`);
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden bg-slate-100">
        <div className="container mx-auto pt-20 text-slate-800 flex w-full min-h-screen">
          <div className=" lg:w-3/4 w-full h-full flex flex-col items-center  px-3">
            <div className=" bg-slate-100 mb-3 flex flex-col gap-5">
              <h4 className="text-3xl font-medium text-center mb-8">Latesh-Result and Statistics</h4>
            </div>
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="lg:w-[480px] sm:w-[450px] w-[330px] flex flex-col gap-4 mb-8 relative">
                <span className="md:text-3xl text-2xl font-light ">04 December, 2023</span>
                <Card variant="outlined" className="cardStyle">
                  <p>First Semeaster</p>
                  <p className="md:text-base text-xs">Advance Certification Course</p>
                  <div>
                    <span className="bg-slate-200 px-2 rounded-xl">3999</span>
                    <span className="bg-green-200 px-2 rounded-xl">3999</span>
                    <span className="bg-red-200 px-2 rounded-xl">3999</span>
                  </div>
                </Card>
                <span
                  onClick={handleNavigate}
                  className="absolute md:top-24 top-14 right-3 cursor-pointer flex gap-1 items-center bg-slate-200 p-1 px-3 rounded-2xl md:text-base text-sm"
                >
                  <MdOpenInNew /> Open
                </span>
              </div>
            ))}
          </div>
          <div className=" hidden lg:block fixed xl:right-40 right-28 top-20 z-50">
            <Visit />
          </div>
        </div>
      </div>
    </>
  );
};

export default LateshResult;
