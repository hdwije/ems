import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import DeleteContext from '@/contexts/DeleteContext';
import { deleteEmployee } from '@/slices/employeeSlics';

const ConfirmDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const value = useContext(DeleteContext);
  const { name, deleteEmployeeId } = value;

  const onDeleteClick = () => {
    dispatch(deleteEmployee(deleteEmployeeId));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete {name}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDeleteClick()}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
