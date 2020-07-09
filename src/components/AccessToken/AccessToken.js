/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';
import {
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import TextFormatIcon from '@material-ui/icons/TextFormat';

export const AccessToken = ({
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
    setState({
      accessToken: values.accessToken,
      theme,
      pageRedirect: values.pageRedirect,
    });
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
          <DialogContentText>
            By default access token is for a demo Storyblok site.
            Page Demo's include page-welcome, page-about, page-enroll.
            Input access token for Storyblok environment and the Page desired to display theme on.
            Page redirect requires forward slash (/) before route.
          </DialogContentText>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              accessToken,
              pageRedirect,
            }}
          >
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
  accessToken: PropTypes.string.isRequired,
  pageRedirect: PropTypes.string.isRequired,
};

AccessToken.defaultProps = {};
