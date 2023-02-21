import React from 'react';
import { IconButton } from '@mui/material';
import { ModeEdit } from '@mui/icons-material';

import styles from '../styles/components/EditButton.module.css';

const EditButton = () => {
  return (
    <IconButton className={styles.editButton} aria-label="delete" size="medium">
      <ModeEdit fontSize="inherit" />
    </IconButton>
  );
};

export default EditButton;
