import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

const ConfirmDialog = ({ open, name, handleClose, handleConfirm }) => {
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
          onClick={() => handleConfirm()}
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
