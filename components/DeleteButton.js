import React from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import styles from '../styles/components/DeleteButton.module.css';

const DeleteButton = ({ name, id, onClick }) => {
  return (
    <IconButton
      className={styles.deleteButton}
      aria-label="delete"
      size="medium"
      onClick={() => onClick(name, id)}
    >
      <Delete fontSize="inherit" />
    </IconButton>
  );
};

export default DeleteButton;
