import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Form from './form'; // Ensure the filename is correct

const FizzBuzz = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState(''); // State for FizzBuzz output

  const handleInputChange = (value) => {
    setInputValue(value); // Update state with the submitted input value
    calculateFizzBuzz(value); // Call FizzBuzz calculation
  };

  // Function to calculate FizzBuzz output
  const calculateFizzBuzz = (value) => {
    const num = parseInt(value, 10); // Convert input to a number
    if (isNaN(num) || num < 1 || num > 100) {
      setOutput('Please enter a number between 1 and 100'); // Validation message
      return;
    }
    let result = '';
    if (num % 3 === 0 && num % 5 === 0) {
      result = 'FizzBuzz';
    } else if (num % 3 === 0) {
      result = 'Fizz';
    } else if (num % 5 === 0) {
      result = 'Buzz';
    } else {
      result = num.toString(); // Display the number itself if not Fizz/Buzz
    }
    setOutput(result); // Update the output state
  };

  return (
    <Box
      sx={{
        backgroundColor: '#798645', // Background color of the box
        padding: '20px', // Padding inside the box
        borderRadius: '8px', // Rounded corners
        width: '900px',
        height: '500px', // Set width to create a square box
        margin: '0 auto', // Center the box
        textAlign: 'center', // Center align text
      }}
    >
      <Typography variant="h4">FizzBuzz Checker</Typography>
      <Form onInputChange={handleInputChange} />
      <p>Input Value: {inputValue}</p> {/* Display the input value */}
      <p>Output: {output}</p> {/* Display the FizzBuzz output */}
    </Box>
  );
};

export default FizzBuzz;
