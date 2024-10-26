import { TextField, Button, Box, Grid } from "@mui/material";
import React, { useState } from "react";

const Form = ({ onInputChange }) => {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onInputChange(number); // Pass the number to the parent component
    setNumber(""); // Clear the input field after submission
  };

  return (
    <Box
      className="text-field"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center"
          }}
        >
          <Grid item xs={12} sm={8}>
            {" "}
            {/* Adjust the width for small and large screens */}
            <TextField
              id="number"
              label="Input a number from 1 - 100"
              variant="outlined"
              value={number} // Controlled input
              onChange={(e) => setNumber(e.target.value)} // Update local state
              fullWidth // Makes the TextField take full width of the container
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FEFAE0" // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#FEFAE0" // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FEFAE0" // Border color when focused
                  }
                },
                "& .MuiInputLabel-root": {
                  color: "#FEFAE0" // Default label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FEFAE0" // Label color when focused
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ marginTop: { xs: "16px", sm: "0" } }}
            >
              Submit
            </Button>{" "}
            {/* Submit button */}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
