import { Grid } from '@mui/material';
import React from 'react';

import styles from '../styles/components/GridView.module.css';
import EmployeeCard from './EmployeeCard';

const GridView = ({ employees, openDeleteDialog }) => {
  return (
    <Grid md={12} item container spacing={2} className={styles.cardGrid}>
      {employees.map((employee) => (
        <Grid item md={3} lg={2} sm={4} xs={6} key={employee._id}>
          <EmployeeCard
            employee={employee}
            openDeleteDialog={openDeleteDialog}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridView;
