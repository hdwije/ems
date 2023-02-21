import React from 'react';
import { Box, Button, Grid } from '@mui/material';

import styles from '../../styles/pages/List.module.css';
import EmployeeCard from '@/components/EmployeeCard';
import Link from 'next/link';

function List({ employees }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid md={12} item container spacing={2} justifyContent="flex-end">
        <Link href={`/employee/add`} passHref>
          <Button>Add Employee</Button>
        </Link>
        <Button>Table View</Button>
      </Grid>
      <Grid md={12} item container spacing={2}>
        {employees.map((employee) => (
          <Grid item md key={employee.id}>
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
