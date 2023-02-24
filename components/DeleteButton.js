import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import styles from '../styles/components/DeleteButton.module.css';
import DeleteContext from '@/contexts/DeleteContext';

const DeleteButton = ({ name, id, onClick }) => {
  const value = useContext(DeleteContext);
  const { setName, setDeleteEmployeeId } = value;

  const deleteEmployee = () => {
    setName(name);
    setDeleteEmployeeId(id);

    onClick(name, id);
  };

  return (
    <IconButton
      className={styles.deleteButton}
      aria-label="delete"
      size="medium"
      onClick={() => deleteEmployee()}
    >
      <Delete fontSize="inherit" />
    </IconButton>
  );
};

export default DeleteButton;
