import React from "react";
import CgpaCalculate from "../components/CgpaCalculate";
import CgpaTable from "../components/CgpaTable";

const CGPA = () => {
  return (
    <div className="min-h-screen pt-20 bg-slate-100">
      <CgpaCalculate />

      <div className="mt-10 pb-10 container mx-auto">
        <div className="flex justify-center">
          <CgpaTable />
        </div>
        <div className="mt-5  w-3/4 mx-auto font-serif">
          <h4 className="text-3xl font-medium mb-3">CGPA Culculate</h4>
          <p>
            If you are a diploma Student, you can calculte your CGPA in this calcultor, and if you haven't
            completed or passed all semeaster yet, you can stil use this calculate to estimate your goal for
            your target GPA or CGPA.
          </p>
        </div>
        <div className="mt-5  w-3/4 mx-auto font-serif">
          <h4 className="text-3xl font-medium mb-3">Autofill (Explained)</h4>
          <p>
            If you want to calculate your total CGPA from the Calculator then you can autometically fill your
            available semeaster GPAs through this autofill tool to save your time
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGPA;
