import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

const SubmitDialog = ({ theme, open, handleClose }) => {
  const copyTheme = () => {
    copy(JSON.stringify(theme));
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <DialogContent>
        {JSON.stringify(theme)}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          close
        </Button>
        <Button onClick={copyTheme}>
          copy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubmitDialog;

SubmitDialog.propTypes = {
  theme: PropTypes.shape(),
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

SubmitDialog.defaultProps = {
  theme: {},
  open: false,
};
