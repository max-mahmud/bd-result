import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const NoticeTable = ({ filteredNotices }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Notice
            </th>
            <th scope="col" className="px-6 py-3">
              Open
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredNotices.map((item, i) => (
            <tr key={i} className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {item.date}
              </th>
              <td className="px-6 py-4 text-slate-800">{item.notice}</td>
              <td className="px-6 py-4 text-2xl">
                <AiOutlineCloudDownload />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeTable;
