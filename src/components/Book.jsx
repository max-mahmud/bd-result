import React from "react";
import bookData from "../assets/book.json";

const Book = ({ path }) => {
  const pathname = path?.split("-")?.join("");
  const name = path?.split("-")?.join(" ");
  if (!bookData[pathname]) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-4xl font-medium capitalize text-slate-600">
        No data found for this Department
      </div>
    );
  }

  return (
    <div className="pt-16 ">
      {Object.keys(bookData[pathname]).map((semester, i) => (
        <div key={i} className="mb-10 w-3/5 ">
          <h3 className="text-2xl font-medium mb-2 text-center">{semester}</h3>

          <table class=" text-sm text-left rtl:text-right text-gray-500 shadow-lg w-full">
            <thead class="text-xs text-gray-100 uppercase bg-gray-700 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Code
                </th>
                <th scope="col" class="px-6 py-3">
                  Subject
                </th>
              </tr>
            </thead>
            <tbody>
              {bookData[pathname][semester].map((item, j) => (
                <tr class="bg-white border-b ">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.Code}
                  </th>
                  <td class="px-6 py-4 text-gray-900 text-[17px]">{item.Subject}</td>
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
