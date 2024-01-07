import React from "react";
import { MdOpenInNew } from "react-icons/md";
import Visit from "../components/Visit";
import { useParams } from "react-router-dom";

const LateshResultInfo = () => {
  const { date } = useParams();

  return (
    <>
      {" "}
      <div>
        <div className="pt-20 bg-slate-100">
          <div className="container mx-auto min-h-screen ">
            <div className="w-2/3  ">
              <div className="text-slate-700 text-center pt-3 pb-7">
                <h4 className="text-3xl font-medium">2nd Semester Results of 26 November, 2023</h4>
                <h4 className="text-xl font-medium text-slate-500">Diploma In Commerce </h4>
                <h4 className="font-medium text-slate-500">Bangladesh Technical Education Board</h4>
              </div>
              <div className="flex gap-5 py-6 font-medium w-full text-slate-600">
                <div className="bg-white border relative w-full p-5">
                  <p>Passed</p>
                  <h4 className="text-2xl mt-2">380</h4>
                  <span className="absolute top-12 right-2 bg-slate-100 font-normal  px-3 rounded-xl ">
                    95%
                  </span>
                </div>
                <div className="bg-white border relative w-full p-5">
                  <p>Passed</p>
                  <h4 className="text-2xl mt-2">380</h4>
                  <span className="absolute top-12 right-2 bg-slate-100 font-normal  px-3 rounded-xl ">
                    95%
                  </span>
                </div>
                <div className="bg-white border relative w-full p-5">
                  <p>Passed</p>
                  <h4 className="text-2xl mt-2">380</h4>
                  <span className="absolute top-12 right-2 bg-slate-100 font-normal  px-3 rounded-xl ">
                    95%
                  </span>
                </div>
                <div className="bg-white border relative w-full p-5">
                  <p>Passed</p>
                  <h4 className="text-2xl mt-2">380</h4>
                  <span className="absolute top-12 right-2 bg-slate-100 font-normal  px-3 rounded-xl ">
                    95%
                  </span>
                </div>
              </div>
              <div className="py-5 h-screen">
                <div className="relative overflow-x-auto border ">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          SL.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Institute
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Passed
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Failed
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Open
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-[17px]">
                      {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
                        <tr className="bg-white border-b" key={i}>
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {i}
                          </th>
                          <td className="px-6 py-4 w-[450px]">
                            Akbar Ali Khan Technical And Commerce College, Daudkandi, Comilla
                          </td>
                          <td className="px-6 py-4">112</td>
                          <td className="px-6 py-4 text-green-700">108</td>
                          <td className="px-6 py-4 text-red-600">1</td>
                          <td className="px-6 py-4 text-xl">
                            <MdOpenInNew />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-20 right-40 z-50">
        <Visit />
      </div>
    </>
  );
};

export default LateshResultInfo;
