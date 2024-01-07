import React, { useState, useEffect } from "react";
import bookData from "../assets/book.json";
import bookData2 from "../assets/book2.json";
import { useLocation } from "react-router-dom";
import { RotateLoader } from "react-spinners";

const Book = ({ path }) => {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = path?.split("-")?.join("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return (
      <div className="w-4/5 h-[80vh] flex justify-center items-center text-6xl font-medium capitalize text-slate-600">
        <RotateLoader color="#004940" />
      </div>
    );
  }
  if (!bookData[pathname] & !bookData2[pathname]) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-4xl font-medium capitalize text-slate-600">
        No data found for this Department
      </div>
    );
  }

  return (
    <div className="pt-4 ">
      <h4 className="md:text-4xl text-2xl font-medium text-slate-700 pb-5 text-center lg:w-3/5 w-full ">
        {state?.name}
      </h4>
      {Object.keys(state?.year === "2016" ? bookData2[pathname] : bookData[pathname]).map((semester, i) => (
        <div key={i} className="mb-10 lg:w-3/5 w-full px-2 ">
          <h3 className="md:text-2xl text-xl font-medium mb-2 text-center text-slate-700">{semester}</h3>

          <table className=" text-sm text-left rtl:text-right text-gray-500 shadow-lg w-full">
            <thead className="text-xs text-gray-100 uppercase bg-secondary ">
              <tr>
                <th scope="col" className="sm:px-6 px-2 py-3">
                  Code
                </th>
                <th scope="col" className="sm:px-6 px-2 py-3">
                  Subject
                </th>
              </tr>
            </thead>
            <tbody>
              {(state?.year === "2016" ? bookData2 : bookData)[pathname][semester].map((item, j) => (
                <tr className="bg-white border-b " key={j}>
                  <th scope="row" className="sm:px-6 px-2 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.Code}
                  </th>
                  <td className="sm:px-6 px-2 py-4 text-gray-900 sm:text-[17px] ">{item.Subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Book;
