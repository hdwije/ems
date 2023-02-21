import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import styles from '../../styles/pages/List.module.css';
import Link from 'next/link';
import HeaderButton from '@/components/HeaderButton';
import ViewButton from '@/components/ViewButton';
import GridView from '@/components/GridView';
import TableView from '@/components/TableView';

const List = ({ employees }) => {
  const [view, setView] = useState('TABLE');

  const switchView = () => {
    if (view === 'GRID') setView('TABLE');
    else setView('GRID');
  };

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
      {view === 'GRID' ? (
        <GridView employees={employees} />
      ) : (
        <TableView employees={employees} />
      )}
    </Box>
  );
};

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
