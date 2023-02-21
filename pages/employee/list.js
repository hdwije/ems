import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';

import EmployeeCard from '@/components/EmployeeCard';

function List({ employees }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid md={12} item container spacing={2}>
        {employees.map((employee) => (
          <Grid item md={3} key={employee.id}>
            <EmployeeCard employee={employee} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export async function getServerSideProps() {
  const response = await import('/data/employees.json');
  const employees = await JSON.parse(JSON.stringify(response.default ?? []));

  return {
    props: {
      employees,
    },
  };
}

export default List;
