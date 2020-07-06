import React, { useState } from 'react';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';
import {
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import { NoteAdd } from '@material-ui/icons';

export const GoogleFonts = ({ theme }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values) => {
    const fontLink = document.createElement('link');
    fontLink.setAttribute('href', values.fontHref);
    fontLink.setAttribute('rel', 'stylesheet');
    document.getElementById('htmlHead').appendChild(fontLink);
    handleClose();
  };


  return (
    <>
      <Tooltip title="Add Google Font" placement="top-end">
        <IconButton onClick={handleOpen}>
          <NoteAdd />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} style={{ padding: '100px' }}>
        <DialogTitle>Google Font HREF</DialogTitle>
        <DialogContent>
          <Form
            onSubmit={onSubmit}
          >
            <MuiInput
              name="fontHref"
              placeholder="Google Font Link"
              fullWidth
            />
            <DialogActions>
              <MuiSubmit buttonText="Add Font" />
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoogleFonts;
