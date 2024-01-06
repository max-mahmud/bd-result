import { useState, useEffect } from "react";
import img1 from "../assets/img5.jpg";
import { FormControl, MenuItem, InputLabel, Select, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import data from "../assets/data.json";
import Visit from "../components/Visit";

const allData = [
  {
    title: "1st",
  },
  {
    title: "2nd",
  },
  {
    title: "3rd",
  },
  {
    title: "4th",
  },
  {
    title: "5th",
  },
  {
    title: "6th",
  },
  {
    title: "7th",
  },
  {
    title: "8th",
  },
];
const GroupResult = () => {
  const [exam, setExam] = useState("Diploma In Engineering");
  const [regulation, setRegulation] = useState(2022);
  const [roll, setRoll] = useState("");
  const [semeaster, setSemeaster] = useState("4th");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(exam, regulation, roll);
  };

  return (
    <div className="w-full  min-h-screen overflow-hidden bg-slate-100">
      <div className=" container mt-16 mx-auto flex justify-center gap-5 px-5 pb-8 border-b border-slate-300">
        <div className="w-2/4 pt-8 flex items-center ">
          <img className="w-[420px] h-[390px] ms-16" src={img1} alt="img" />
        </div>
        <div className="w-2/4 flex flex-col items-center justify-center ">
          <h4 className="text-4xl font-semibold text-center mb-5">Individual Results</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-7 w-[400px] h-[380px] ">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Exam</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={exam}
                label="Exam"
                onChange={(e) => setExam(e.target.value)}
                style={{ height: 45 }}
              >
                {data.map((item, i) => (
                  <MenuItem key={i} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth className="myTop">
              <InputLabel id="demo-simple-select-label">Regulation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={regulation}
                label="Regulation"
                onChange={(e) => setRegulation(e.target.value)}
                style={{ height: 45 }}
              >
                <MenuItem value={"any"}>Any</MenuItem>
                <MenuItem value={2010}>2010</MenuItem>
                <MenuItem value={2016}>2016</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className="myTop">
              <InputLabel id="demo-simple-select-label">Semeaster</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={semeaster}
                label="Regulation"
                onChange={(e) => setSemeaster(e.target.value)}
              >
                {allData.map((item, i) => (
                  <MenuItem key={i} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: "14px",
                  marginBlock: "-5px",
                },
              }}
              sx={{
                "& input": {
                  height: "35px",
                  padding: "5px",
                },
              }}
              required
              id="outlined-basic"
              label="Roll Number"
              variant="outlined"
              type="number"
              onChange={(e) => setRoll(e.target.value)}
              value={roll}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto pt-4 text-slate-800 flex w-full min-h-[100vh]">
        <div className=" w-2/3 h-full overflow-y-auto px-14 py-5">
          <div>
            <h4 className="text-2xl mb-3 font-medium">Individual's Results (Explained)</h4>
            <p className="font-serif">
              Individual result in this app refers to all the semester results of a single diploma/polytechnic
              student published by the Bangladesh Technical Education Board(BTEB)
            </p>
            <h4 className="text-2xl mb-3 mt-5 font-medium">Roll Number</h4>
            <p className="font-serif">
              The roll number is the 6-digit number on your admit card or registration card.
            </p>
            <h4 className="text-2xl mb-3 mt-5 font-medium">The Exam Options</h4>
            <p className="font-serif">
              The exam name option refers to the curriculum name of your diploma or polytechnic exam under the
              Bangladesh Technical Education Board (BTEB). By default "Diploma In Engineering" is selected. So
              if your exam is different from the default, make sure you select the right exam name before you
              hit the "View Result" button.
            </p>
            <h4 className="text-2xl mb-3 mt-5 font-medium">Available Exams Results</h4>
            <ul className="ml-8">
              {data.map((item, i) => (
                <li className="list-disc" key={i}>
                  {item.title}
                </li>
              ))}
            </ul>
            <h4 className="text-2xl mb-3 mt-5 font-medium">Semester Results</h4>
            <p className="font-serif">
              A single semester could contain multiple results. But each result will have a publish date on
              top of it. And only the latest result is your final result for the semester. Previous results
              are just history. So don’t get confused if you had referred in previous results.
            </p>
            <h4 className="text-2xl mb-3 mt-5 font-medium">Referred Subjects</h4>
            <p className="font-serif">
              Every subject on the referred subject list contains the subject code at the beginning, then the
              subject name, and at last the failure type of the subject wrapping in brackets.
            </p>
            <h4 className="text-2xl mb-3 mt-5 font-medium">GPA Is Not Published (Explained)</h4>
            <p className="font-serif">
              Let’s say someone has failed in a subject in the 6th semester and passed the referred subject in
              the next semester (7th). They will get the result of the current semester (7th), but not the GPA
              of the previous semester (6th), although they have passed in the 6th semester. In that case, you
              can contact your institute for the GPA.
            </p>
          </div>
        </div>
        <div className=" p-4 w-1/3 mt-3 h-full overflow-y-auto">
          <Visit />
        </div>
      </div>
    </div>
  );
};

export default GroupResult;
