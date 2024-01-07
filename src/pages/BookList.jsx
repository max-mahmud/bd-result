import React from "react";
import bookData from "../assets/booklist.json";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Book from "../components/Book";
import Visit from "../components/Visit";

const BookList = () => {
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const handleClick = (data, year) => {
    const len = data.split(" ").length;
    let newData = data
      .split(" ")
      .slice(0, len - 1)
      .join("-");
    newData = newData
      .replace(/[()&\s]/g, "-")
      .split("--")
      ?.join("-");
    newData = newData?.split("--")?.join("-");
    navigate(`/booklists/${newData}-${year}`, {
      state: {
        name: data,
        year,
      },
    });
  };

  return (
    <>
      <div className="pt-20 container mx-auto ">
        {id == undefined ? (
          <div>
            <h4 className="text-4xl font-medium py-4 border-b border-gray-300 text-gray-700">
              Diploma Booklists
            </h4>
            <div className="flex md:flex-row flex-col-reverse md:gap-4 gap-8   justify-around px-2 py-5 text-gray-700">
              <div>
                <h2 className="text-2xl font-medium pb-3">Regulation 2016</h2>
                <ul>
                  {bookData.Regulation2016.map((book, index) => (
                    <li
                      onClick={() => handleClick(book, "2016")}
                      key={index}
                      className="flex gap-2 items-center bg-slate-200 py-1 sm:px-4 px-2 mb-2  transition-all duration-300 hover:bg-slate-300 shadow-md cursor-pointer sm:text-lg text-base"
                    >
                      <BsFillCaretRightFill /> {book}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-medium pb-3">Regulation 2022</h2>
                <ul>
                  {bookData.Regulation2022.map((book, index) => (
                    <li
                      onClick={() => handleClick(book, "2022")}
                      key={index}
                      className="flex gap-2 items-center bg-slate-200 py-1 sm:px-4 px-2 mb-2  transition-all duration-300 hover:bg-slate-300 shadow-md cursor-pointer sm:text-lg text-base"
                    >
                      <BsFillCaretRightFill /> {book}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-screen ">
            <Book path={path} />
            <div className="hidden lg:block fixed xl:right-40 right-28 top-20  z-50">
              <Visit />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;
