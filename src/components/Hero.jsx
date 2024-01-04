import React from "react";

const Hero = ({ img, heading, text1, text2, text3, btnText, type, btnWidth }) => {
  return (
    <div
      className={`container mx-auto px-2 flex gap-8 ${
        type ? "flex-row-reverse" : ""
      } justify-between items-center h-[452px] `}
    >
      <div className="w-full h-full flex justify-center  flex-col gap-10">
        <h3 className="text-4xl font-bold">{heading}</h3>
        <div className="text-lg">
          <p>{text1}</p>
          {text2 ? <p>{text2}</p> : ""}

          {text3 ? <p>{text3}</p> : ""}
        </div>
        <button
          style={{ width: `${btnWidth}px` }}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none `}
        >
          {btnText}
        </button>
      </div>
      <div className="w-[80%] h-full flex justify-center items-center">
        <img className="w-[300px] h-[300px] rounded-full" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
