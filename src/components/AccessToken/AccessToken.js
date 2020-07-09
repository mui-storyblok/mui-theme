import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';
import {
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import TextFormatIcon from '@material-ui/icons/TextFormat';

export const AccessToken = ({ setState, theme }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values) => {
    const { accessToken, pageRedirect } = values;
    console.log(accessToken);
    setState({ accessToken, theme, pageRedirect });
    handleClose();
  };

  return (
    <>
      <Tooltip title="Storyblok Access Token" placement="top-end">
        <IconButton onClick={handleOpen}>
          <TextFormatIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Storyblok Access Token</DialogTitle>
        <DialogContent>
          <Form onSubmit={onSubmit}>
            <MuiInput name="accessToken" placeholder="Storyblok Access Token" fullWidth />
            <MuiInput name="pageRedirect" placeholder="Page Route Redirect" fullWidth />
            <DialogActions>
              <MuiSubmit buttonText="Use Token" />
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccessToken;

AccessToken.propTypes = {
  setState: PropTypes.func.isRequired,
  theme: PropTypes.shape.isRequired,
};

AccessToken.defaultProps = {};
