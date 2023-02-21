import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const add = () => {
  const clickOnAdd = () => {}

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label="First Name"
        variant="outlined"
        value={''}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={''}
      />
      <TextField label="Email" variant="outlined" value={''} />
      <TextField label="Phone" variant="outlined" value={''} />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={'M'}
          onChange={() => {}}
          label="Age"
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
        </Select>
      </FormControl>
      <Button size="small" onClick={() => clickOnAdd()}>Add</Button>
    </Box>
  );
};

export default add;
