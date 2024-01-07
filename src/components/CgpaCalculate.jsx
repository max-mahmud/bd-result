import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from "@mui/material";
import { useState } from "react";
import InputField from "./InputField";
import data from "../assets/data.json";

const CgpaCalculate = () => {
  const [regulation, setRegulation] = useState(2022);
  const [roll, setRoll] = useState("");
  const [exam, setExam] = useState("Diploma In Engineering");
  const [point, setPoint] = useState("");
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
  const semeasterPoint = [
    {
      name: "1st",
      2010: "5%",
      2016: "5%",
      2022: "5%",
    },
    {
      name: "2nd",
      2010: "5%",
      2016: "5%",
      2022: "5%",
    },
    {
      name: "3rd",
      2010: "5%",
      2016: "5%",
      2022: "10%",
    },
    {
      name: "4th",
      2010: "15%",
      2016: "10%",
      2022: "10%",
    },
    {
      name: "5th",
      2010: "15%",
      2016: "15%",
      2022: "20%",
    },
    {
      name: "6th",
      2010: "20%",
      2016: "20%",
      2022: "20%",
    },
    {
      name: "7th",
      2010: "25%",
      2016: "25%",
      2022: "20%",
    },
    {
      name: "8th",
      2010: "10%",
      2016: "15%",
      2022: "10%",
    },
  ];

  const handleChange = (pointName, value) => {
    setSemeasterData((prevState) => ({
      ...prevState,
      [pointName]: value < 0 ? 0 : value > 4 ? 4 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalPoints = Object.values(semeasterData).reduce((acc, curr, index) => {
      const point = parseFloat(curr || 0);
      const percentage = parseFloat(semeasterPoint[index][regulation]) / 100;
      return acc + point * percentage;
    }, 0);

    setPoint(totalPoints.toFixed(2));
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
            <Button type="submit" variant="contained" color="success">
              Calculate
            </Button>
            {point && (
              <div className="text-green-600 ">
                CGPA <span className="text-3xl font-bold">{point}</span>
              </div>
            )}
            <Button onClick={resetData} variant="contained" color="success">
              Reset
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
          <Button type="submit" variant="contained" color="success">
            Fill Up Results
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CgpaCalculate;
