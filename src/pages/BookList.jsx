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
  const handleClick = (data) => {
    const len = data.split(" ").length;
    const newData = data
      .split(" ")
      .slice(0, len - 1)
      .join("-");
    navigate(`/booklists/${newData}-2022`);
  };
  return (
    <>
      <div className="pt-20 container mx-auto ">
        {id == undefined ? (
          <div>
            <h4 className="text-4xl font-medium py-4 border-b border-gray-300 text-gray-600">
              Diploma Booklists
            </h4>
            <div className="flex justify-around py-5">
              <div>
                <h2 className="text-2xl font-medium pb-3">Regulation 2016</h2>
                <ul>
                  {bookData.Regulation2016.map((book, index) => (
                    <li
                      key={index}
                      className="flex gap-2 items-center text-blue-500 py-1 cursor-pointer text-lg"
                    >
                      {" "}
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
                      onClick={() => handleClick(book)}
                      key={index}
                      className="flex gap-2 items-center text-blue-500 py-1 cursor-pointer text-lg"
                    >
                      <BsFillCaretRightFill /> {book}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen overflow-y-auto">
            <Book path={path} />
            <div className="absolute top-20 right-40">
              <Visit />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;
