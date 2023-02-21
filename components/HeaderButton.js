import React from 'react';
import { Button } from '@mui/material';

import styles from '../styles/components/HeaderButton.module.css';

const HeaderButton = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      className={styles.headerButton}
      onClick={() => onClick()}
    >
      {label}
    </Button>
  );
};

export default HeaderButton;
