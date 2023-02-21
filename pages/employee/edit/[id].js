import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Edit({ employee }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label="First Name"
        variant="outlined"
        value={employee.first_name}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={employee.last_name}
      />
      <TextField label="Email" variant="outlined" value={employee.email} />
      <TextField label="Phone" variant="outlined" value={employee.number} />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={employee.gender}
          onChange={() => {}}
          label="Age"
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
        </Select>
      </FormControl>
      <Button size="small">Delete</Button>
    </Box>
  );
}

export default Edit;

export async function getStaticPaths() {
  const response = await import('/data/employees.json');
  const employees = await JSON.parse(JSON.stringify(response.default ?? []));
  const allPaths = employees.map((employee) => ({
    params: {
      id: employee.id,
    },
  }));

  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  const response = await import('/data/employees.json');
  const employees = await JSON.parse(JSON.stringify(response.default ?? []));
  const employee = employees.find(
    (employee) => employee.id === context?.params.id,
  );

  return { props: { employee } };
}
