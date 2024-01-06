import React from "react";
import notPage from "../assets/not.jpg";

const NotPage = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto h-screen flex justify-center items-center">
        <img className="w-[50%] h-[60%]" src={notPage} alt="img" />
      </div>
    </div>
  );
};

export default NotPage;
