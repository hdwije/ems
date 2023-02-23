import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';

import styles from '../../styles/pages/List.module.css';
import HeaderButton from '@/components/HeaderButton';
import ViewButton from '@/components/ViewButton';
import GridView from '@/components/GridView';
import TableView from '@/components/TableView';
import { getAllEmployees } from '@/slices/employeeSlics';
import { getAll } from '@/actions/employee';

const List = () => {
  const [view, setView] = useState('GRID');

  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const switchView = () => {
    if (view === 'GRID') setView('TABLE');
    else setView('GRID');
  };

  const renderView = () => {
    switch (view) {
      case 'GRID':
        return <GridView employees={employees} />;

      case 'TABLE':
        return <TableView employees={employees} />;

      default:
        return null;
    }
  };

  if (loading === 'pending') return <div>Loading...</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        md={12}
        item
        container
        spacing={2}
        justifyContent="flex-end"
        className={styles.buttonRow}
      >
        <Grid item md={2}>
          <Link href={`/employee/add`} passHref className={styles.link}>
            <HeaderButton label="Add Employee" onClick={() => {}} />
          </Link>
        </Grid>
        <Grid item md={1}>
          <ViewButton view={view} onClick={() => switchView()} />
        </Grid>
      </Grid>
      {renderView()}
    </Box>
  );
};

export async function getServerSideProps() {
  // const response = await axios.get('http://localhost:3000/api/employee');
  const response = await getAll();
  const employees = response.data ?? [];

  return {
    props: {
      employees,
    },
  };
}

export default List;
