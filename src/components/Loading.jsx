import React from "react";
import { RotateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <RotateLoader color="#004940" />
    </div>
  );
};

export default Loading;
