import React from "react";
import { FaRegHeart } from "react-icons/fa";
const Favorite = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center gap-3 h-[100vh] w-full">
        <FaRegHeart className="text-xl" />
        <h4 className="text-4xl">List is Empty</h4>
        <p className="text-lg">Favorite roll and group that you easily view</p>
      </div>
    </div>
  );
};

export default Favorite;
