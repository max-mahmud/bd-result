import { TextField } from "@mui/material";
import React from "react";

const InputField = ({ handleChange, point, pointName }) => {
  return (
    <>
      <TextField
        InputLabelProps={{
          style: {
            fontSize: "14px",
            marginBlock: "0px",
          },
        }}
        sx={{
          "& input": {
            height: "30px",
            padding: "10px",
            width: "144px",
          },
        }}
        required
        id={`outlined-basic-${pointName}`}
        label={pointName}
        variant="outlined"
        type="number"
        inputProps={{
          min: 0,
          max: 4,
          step: 0.01,
        }}
        onChange={(e) => handleChange(e)}
        value={point}
      />
    </>
  );
};

export default InputField;
