import React from "react";

const Hero = ({ img, heading, text1, text2, text3, btnText, type, btnWidth, hight }) => {
  return (
    <div
      className={`container mx-auto py-3 px-2 flex md:gap-8 gap-4 ${
        type ? "md:flex-row-reverse flex-col-reverse" : "md:flex-row flex-col-reverse"
      } justify-between items-center md:h-[450px] min:h-[100vh]  `}
    >
      <div className="w-full h-full flex justify-center  flex-col md:gap-10 gap-3">
        <h3 className="md:text-4xl sm:text-2xl text-xl font-bold">{heading}</h3>
        <div className="md:text-lg">
          <p>{text1}</p>
          {text2 ? <p>{text2}</p> : ""}

          {text3 ? <p>{text3}</p> : ""}
        </div>
        <button
          style={{ width: `${btnWidth}px` }}
          className={`text-white btn-color hover:bg-[#33877c] transition-all duration-300  font-medium rounded-[5px] text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none  shadow-md `}
        >
          {btnText}
        </button>
      </div>
      <div className="w-[80%] h-full flex justify-center items-center">
        <img className="md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-full" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
