import React, { useState } from 'react';
import { Form, MuiSubmit } from 'rff-wrapper';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import RotateLeft from '@material-ui/icons/RotateLeft';
import { useHistory } from "react-router-dom";
import { removeThemeFromLocalStore } from '../../Utils/localStorage';
import DialogIconButton from '../sharedComponents/DialogIconButton/DialogIconButton';

export const ResetTheme = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    removeThemeFromLocalStore();
    handleClose();
    // reloading will load in the default theme
    history.go(0)
  };

  return (
    <>
      <DialogIconButton title="Reset Theme" handleOpen={handleOpen} icon={<RotateLeft />} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sur you want to reset?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You will loose any work and the theme will be reset to it's defaults.
          </DialogContentText>
          <Form onSubmit={onSubmit} data-testid="submitResetThemeDialog">
            <DialogActions>
              <Button data-testid="closeResetThemeDialog" onClick={handleClose} color="secondary"> Close </ Button>
              <MuiSubmit buttonText="Reset" variant="contained" />
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResetTheme;
