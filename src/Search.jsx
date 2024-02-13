import React, { useState } from 'react';
import { TextField } from '@mui/material';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onSearch(newValue); 
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <TextField
      // label="Search Movies"
      variant="outlined"
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      InputLabelProps={{ shrink: false }} // Add this line
      placeholder='Search Movies'
      sx={{
        width: '350px',
        backgroundColor: 'white',
        borderRadius: '10px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
            borderRadius: '10px',
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
        },
      }}
      style={{ float: 'right', marginTop: '20px' }}
    />
  );
};

export default Search;
