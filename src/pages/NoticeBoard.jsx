import React from "react";
import { Link, useLocation } from "react-router-dom";
import Visit from "../components/Visit";
import NoticeTable from "../components/NoticeTable";

const NoticeBoard = () => {
  const location = useLocation();
  const { search } = location;
  const path = search.split("=")[1] || "all";

  const noticsData = {
    all: [
      {
        date: "12-12-2023",
        notice:
          "The exam name option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice:
          "The exam name option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
    ],
    diploma: [
      {
        date: "12-12-2023",
        notice: "diploma refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "12-12-2023",
        notice: "diploma refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "12-12-2023",
        notice: "diploma refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "12-12-2023",
        notice: "diploma refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "diplomae option refers to the curriculum name of your diploma or polytechnic exam under the",
      },
    ],
    hsc: [
      {
        date: "12-12-2023",
        notice: "HSC refers to the curriculum name of your HSC or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "HSC option refers to the curriculum name of your HSC or polytechnic exam under the",
      },
    ],
    ssc: [
      {
        date: "12-12-2023",
        notice: "SSC refers to the curriculum name of your SSC or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "SSC option refers to the curriculum name of your SSC or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice: "SSC option refers to the curriculum name of your SSC or polytechnic exam under the",
      },
    ],
    "basic-and-others": [
      {
        date: "12-12-2023",
        notice:
          "BasicAndOther refers to the curriculum name of your BasicAndOther or polytechnic exam under the",
      },
      {
        date: "01-01-2024",
        notice:
          "BasicAndOther option refers to the curriculum name of your BasicAndOther or polytechnic exam under the",
      },
    ],
  };

  const NavigateData = [
    {
      link: "all",
      Name: "All Notice",
    },
    {
      link: "diploma",
      Name: "Diploma",
    },
    {
      link: "hsc",
      Name: "HSC",
    },
    {
      link: "ssc",
      Name: "SSC",
    },
    {
      link: "basic-and-others",
      Name: "Basic And Other",
    },
  ];

  const filteredNotices = noticsData[path.toLowerCase()];

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden bg-slate-100 pt-16 ">
        {/*  */}
        <div className="container mx-auto pt-4 text-slate-800 flex w-full min-h-screen">
          <div className=" w-full min-h-screen sm:px-8 px-2 py-5">
            <div className="lg:w-2/3 w-full">
              <div className=" text-center text-slate-700">
                <h4 className="md:text-4xl text-2xl font-medium mb-2">Latest Notices</h4>
                <h4 className="md:text-2xl text-lg">Bangladesh Technical Education Board (BTEB)</h4>

                <div className="flex md:text-lg text-sm sm:text-base md:gap-8 gap-2 border-b  my-5 border-slate-300 font-medium text-slate-500">
                  {NavigateData.map((item, i) => (
                    <Link
                      key={i}
                      to={`/notice?type=${item.link}`}
                      className={` ${
                        path === item.link ? "border-blue-600 text-blue-600" : ""
                      }   hover:text-blue-600  py-2 hover:border-b-2 hover:border-blue-600 border-b-2 transition-all duration-300`}
                    >
                      {item.Name}
                    </Link>
                  ))}
                </div>
                <div className="my-4">
                  <NoticeTable filteredNotices={filteredNotices} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block fixed xl:right-40 right-28 top-20  z-50">
        <Visit />
      </div>
    </>
  );
};

export default NoticeBoard;
