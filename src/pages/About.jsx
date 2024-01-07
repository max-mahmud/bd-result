import React from "react";
import img1 from "../assets/image/Mobile.jpg";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
const About = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto  pt-20 pb-7 font-serif px-2">
        <div className="lg:w-3/5 w-full  mx-auto pb-10">
          <h4 className="text-2xl font-normal">About BTEB Results Zone</h4>
          <p>
            BTEB Results Zone is a web-based platform designed to provide polytechnic students in Bangladesh
            with easy and convenient access to their examination results. Developed by Sakibul Islam, a former
            student of Barisal Polytechnic Institute, this platform offers a quick and efficient solution to
            the often time-consuming and cumbersome process of checking examination results.
          </p>
        </div>
        <div className="lg:w-3/5 w-full  mx-auto pb-10">
          <h4 className="text-2xl font-normal">About Developer:</h4>
          <p>
            Sakibul Islam, the creator of “BTEB Results Zone”, is a former student of Barisal Polytechnic
            Institute where he completed his Diploma in Engineering in Power Technology. Despite his
            background in Power Technology, his passion for computer programming led him to pursue his studies
            further by enrolling in a B.Sc in Computer Science & Engineering program. He is also a freelance
            web developer, putting his skills and knowledge to use in creating useful and user-friendly
            platforms.
          </p>
        </div>
        <div className="lg:w-3/5 w-full   mx-auto pb-10 flex md:flex-row flex-col gap-5 md:gap-10 items-center bg-white shadow-md p-5 text-slate-600">
          <img className="w-[170px] h-[170px] rounded-full overflow-hidden" src={img1} alt="img" />
          <div className="md:text-left text-center">
            <h4 className="md:text-4xl text-2xl">Abc Name</h4>
            <p>Abc developer</p>
            <div className="flex gap-4 mt-5">
              <span className="border bg-gray-100 px-4 py-1 flex gap-2 items-center ">
                Connect <FaFacebook className="text-lg" />{" "}
              </span>
              <span className="border bg-gray-100 px-4 py-1 flex gap-2 items-center ">
                Connect <FaFacebookMessenger className="text-lg" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
