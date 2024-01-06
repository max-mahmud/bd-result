import React from "react";

const CgpaTable = () => {
  const semeaster = [
    {
      name: "1st",
      2010: "5%",
      2016: "5%",
      2022: "5%",
    },
    {
      name: "2nd",
      2010: "5%",
      2016: "5%",
      2022: "5%",
    },
    {
      name: "3rd",
      2010: "5%",
      2016: "5%",
      2022: "10%",
    },
    {
      name: "4th",
      2010: "15%",
      2016: "10%",
      2022: "10%",
    },
    {
      name: "5th",
      2010: "15%",
      2016: "15%",
      2022: "20%",
    },
    {
      name: "6th",
      2010: "20%",
      2016: "20%",
      2022: "20%",
    },
    {
      name: "7th",
      2010: "25%",
      2016: "25%",
      2022: "20%",
    },
    {
      name: "8th",
      2010: "10%",
      2016: "15%",
      2022: "10%",
    },
  ];
  return (
    <div className="py-10 w-3/4 ">
      <h4 className="text-3xl py-5 font-medium">Semeaster Wise GPA Priorities For Regulations</h4>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className=" text-gray-50 uppercase bg-gray-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Semeaster
              </th>
              <th scope="col" className="px-6 py-3">
                2010
              </th>
              <th scope="col" className="px-6 py-3">
                2016
              </th>
              <th scope="col" className="px-6 py-3">
                2022
              </th>
            </tr>
          </thead>
          <tbody className="font-medium">
            {semeaster.map((item, i) => (
              <tr className="bg-white border-b " key={i}>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item[2010]}</td>
                <td className="px-6 py-4">{item[2016]}</td>
                <td className="px-6 py-4">{item[2022]}</td>
              </tr>
            ))}
            <tr className="bg-gray-100 border-b ">
              <td className="px-6 py-4">{"Total"}</td>
              <td className="px-6 py-4">100%</td>
              <td className="px-6 py-4">100%</td>
              <td className="px-6 py-4">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CgpaTable;
