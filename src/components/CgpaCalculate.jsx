import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from "@mui/material";
import { useState } from "react";
import InputField from "./InputField";
import data from "../assets/data.json";

const CgpaCalculate = () => {
  const [regulation, setRegulation] = useState(2022);
  const [roll, setRoll] = useState("");
  const [exam, setExam] = useState("Diploma In Engineering");
  const [semeasterData, setSemeasterData] = useState({
    "1st": "",
    "2nd": "",
    "3rd": "",
    "4th": "",
    "5th": "",
    "6th": "",
    "7th": "",
    "8th": "",
  });

  const handleChange = (pointName, value) => {
    setSemeasterData((prevState) => ({
      ...prevState,
      [pointName]: value < 0 ? 0 : value > 4 ? 4 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(semeasterData);
  };

  const resetData = () => {
    setSemeasterData({
      "1st": "",
      "2nd": "",
      "3rd": "",
      "4th": "",
      "5th": "",
      "6th": "",
      "7th": "",
      "8th": "",
    });
  };

  const fillUpData = (e) => {
    e.preventDefault();
    console.log(exam, roll);
  };

  return (
    <div className="container mx-auto flex justify-around items-center py-5 border-b border-gray-300">
      <div className="shadow-md bg-white shadow-slate-300 w-[400px] h-[480px] p-7">
        <h4 className="text-3xl text-center mb-4">CGPA Calculator</h4>
        <form onSubmit={handleSubmit}>
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
          <div className="flex gap-4 my-4 w-[400px]">
            <InputField
              point={semeasterData["1st"]}
              handleChange={(e) => handleChange("1st", e.target.value)}
              pointName="1st"
            />
            <InputField
              point={semeasterData["2nd"]}
              handleChange={(e) => handleChange("2nd", e.target.value)}
              pointName="2nd"
            />
          </div>
          <div className="flex gap-4  my-4 w-[400px]">
            <InputField
              point={semeasterData["3rd"]}
              handleChange={(e) => handleChange("3rd", e.target.value)}
              pointName="3rd"
            />
            <InputField
              point={semeasterData["4th"]}
              handleChange={(e) => handleChange("4th", e.target.value)}
              pointName="4th"
            />
          </div>
          <div className="flex gap-4  my-4 w-[400px]">
            <InputField
              point={semeasterData["5th"]}
              handleChange={(e) => handleChange("5th", e.target.value)}
              pointName="5th"
            />
            <InputField
              point={semeasterData["6th"]}
              handleChange={(e) => handleChange("6th", e.target.value)}
              pointName="6th"
            />
          </div>
          <div className="flex gap-4  my-4 w-[400px]">
            <InputField
              point={semeasterData["7th"]}
              handleChange={(e) => handleChange("7th", e.target.value)}
              pointName="7th"
            />
            <InputField
              point={semeasterData["8th"]}
              handleChange={(e) => handleChange("8th", e.target.value)}
              pointName="8th"
            />
          </div>
          <div className="flex justify-between items-center">
            <Button type="submit" variant="contained">
              =
            </Button>
            <Button onClick={resetData} variant="contained">
              AC
            </Button>
          </div>
        </form>
      </div>
      <div className="shadow-md bg-white shadow-slate-300 w-[400px] h-[340px] p-7 flex flex-col gap-7">
        <h4 className="text-3xl">CGPA Calculator</h4>
        <form onSubmit={fillUpData} className="flex flex-col gap-7">
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
          <Button type="submit" variant="contained">
            Fill Up Results
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CgpaCalculate;
