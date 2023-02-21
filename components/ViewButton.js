import React from 'react';
import { IconButton } from '@mui/material';
import { Apps, List } from '@mui/icons-material';

import styles from '../styles/components/ViewButton.module.css';

const ViewButton = ({ view, onClick }) => {
  return (
    <IconButton
      aria-label="delete"
      className={styles.viewButton}
      onClick={() => onClick()}
    >
      {view === 'GRID' ? <List /> : <Apps />}
    </IconButton>
  );
};

export default ViewButton;
