import React, { useState } from 'react';
import PropTypes from 'prop-types';
import base64url from 'base64url';
import { Form, FileInput, MuiSubmit } from 'rff-wrapper';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DialogIconButton from '../sharedComponents/DialogIconButton/DialogIconButton';

export const ImportTheme = ({
  setState,
  theme,
  accessToken,
  pageRedirect,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values) => {
    const { importTheme } = values;
    const base64Split = importTheme.split('data:application/json;base64,');
    const updatedTheme = base64url.decode(base64Split[1]);
    setState({
      accessToken,
      theme: updatedTheme,
      pageRedirect,
    });
    handleClose();
  };

  return (
    <>
      <DialogIconButton title="Import Existing Theme" handleOpen={handleOpen} icon={<AttachFileIcon />} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Storyblok Access Token</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Drag .json file to file input to import theme.
          </DialogContentText>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              theme,
            }}
          >
            <FileInput name="importTheme" acceptFileTypes={['application/json']} />
            <DialogActions>
              <MuiSubmit buttonText="Import Theme" />
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImportTheme;

ImportTheme.propTypes = {
  accessToken: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  theme: PropTypes.shape.isRequired,
  pageRedirect: PropTypes.string.isRequired,
};

ImportTheme.defaultProps = {};
