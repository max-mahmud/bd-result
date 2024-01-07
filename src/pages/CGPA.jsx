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
        <div className="mt-5  md:w-3/4 w-full md:px-0 px-4 mx-auto font-serif">
          <h4 className="text-3xl font-medium mb-3">CGPA Calculator (Explained)</h4>
          <p>
            If you are a diploma/polytechnic student, you can calculate your total CGPA in this calculator.
            And if you haven’t completed or passed all the semester yet, you can still use this calculator to
            estimate your goal for your target GPA and CGPA. Just assume and combine the incomplete semester
            GPAs to determine your target CGPA.
          </p>
        </div>
        <div className="mt-5  md:w-3/4 w-full md:px-0 px-4 mx-auto font-serif">
          <h4 className="text-3xl font-medium mb-3">Autofill (Explained)</h4>
          <p>
            If you want to calculate your total CGPA from the CGPA calculator then you can automatically fill
            your available semester GPAs through this autofill tool to save your time.
          </p>
        </div>
        <div className="mt-5  md:w-3/4 w-full md:px-0 px-4 mx-auto font-serif">
          <h4 className="text-3xl font-medium mb-3">Regulations</h4>
          <p>
            Regulation/probidhan is a set of rules of the Bangladesh Technical Education Board (BTEB) that
            includes rules and regulations about syllabus and mark distribution. Each student falls under a
            regulation/probidhan and each regulation has different rules for calculating CGPA. So make sure
            you choose the correct “Regulation” option before calculating your CGPA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGPA;
