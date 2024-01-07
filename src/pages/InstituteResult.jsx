import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";
import Visit from "../components/Visit";

const InstituteResult = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-slate-100">
      <div className="container mx-auto pt-20 text-slate-800 flex w-full h-screen">
        <div className=" lg:w-3/4 w-full h-full overflow-y-auto px-3">
          <div className=" bg-slate-100 mb-3 flex flex-col gap-5">
            <h4 className="text-3xl font-medium">Institute-Result</h4>
            <p>Select Institute for their latesh result, use search ber bellow for any institute</p>
            <div className="relative w-[90%] ">
              <TextField
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                    marginBlock: "-5px",
                    width: "100%",
                  },
                }}
                sx={{
                  width: "100%",
                  "& input": {
                    width: "100%",
                    height: "35px",
                    padding: "5px",
                    paddingLeft: "40px",
                  },
                }}
                id="outlined-basic"
                variant="outlined"
                placeholder="Search Here.."
              />
              <span className="absolute top-3 left-2 text-lg">
                <IoSearchSharp />
              </span>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block fixed right-40 top-20 z-50">
          <Visit />
        </div>
      </div>
    </div>
  );
};

export default InstituteResult;
