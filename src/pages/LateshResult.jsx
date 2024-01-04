import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { MdOpenInNew } from "react-icons/md";

const LateshResult = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-slate-100">
      <div className="container mx-auto pt-20 text-slate-800 flex w-full h-screen">
        <div className=" w-3/4 h-full overflow-y-auto px-3">
          <div className=" bg-slate-100 mb-3 flex flex-col gap-5">
            <h4 className="text-3xl font-medium text-center mb-8">Latesh-Result and Statistics</h4>
          </div>
          {[1, 2, 3, 4].map((item, i) => (
            <div key={i} className="w-[480px] flex flex-col gap-4 mb-8 relative">
              <span className="absolute top-24 right-3 flex gap-1 items-center bg-slate-200 p-1 px-3 rounded-2xl">
                <MdOpenInNew /> Open
              </span>
              <span className="text-3xl font-light ">04 December, 2023</span>
              <Card variant="outlined" className="cardStyle">
                <p>First Semeaster</p>
                <p>Advance Certification Course</p>
                <div>
                  <span className="bg-slate-200 px-2 rounded-xl">3999</span>
                  <span className="bg-green-200 px-2 rounded-xl">3999</span>
                  <span className="bg-red-200 px-2 rounded-xl">3999</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className=" w-1/4 h-full overflow-y-auto">
          <div>
            <h4 className="text-xl font-medium pb-4">Pages You May Visit</h4>
            <div className="flex flex-col gap-2 text-lg text-slate-600 ">
              <Link to="/">Individual Results</Link>
              <Link to="/">Latest Results</Link>
              <Link to="/">Institute Results</Link>
              <Link to="/">CGPA Calculator</Link>
              <Link to="/">Booklists</Link>
              <Link to="/">Favorites</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateshResult;
