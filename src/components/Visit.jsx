import React from "react";
import { Link } from "react-router-dom";

const Visit = () => {
  return (
    <div>
      <h4 className="text-xl font-medium pb-4">Pages You May Visit</h4>
      <div className="flex flex-col gap-2 text-lg text-slate-600 ">
        <Link to="/result">Individual Results</Link>
        <Link to="/latest-results">Latest Results</Link>
        <Link to="/institute-results">Institute Results</Link>
        <Link to="/cgpa-calculator">CGPA Calculator</Link>
        <Link to="/booklists">Booklists</Link>
        {/* <Link to="/favorites">Favorites</Link> */}
      </div>
    </div>
  );
};

export default Visit;
