import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import downloadJson from 'Utils/downloadJson';

const ViewThemeDialog = ({ theme }) => {
  const [state, setState] = useState({ open: false });

  const toggleDialog = () => {
    setState({ open: !state.open });
  };

  const copyTheme = () => {
    copy(JSON.stringify(theme));
    toggleDialog();
  };

  const download = () => {
    downloadJson(theme);
    toggleDialog();
  };

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={state.open}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <DialogContent>
          {JSON.stringify(theme)}
        </DialogContent>
        <DialogActions>
          <Button data-testid="closeViewThemeDialog" onClick={toggleDialog} color="secondary">
            close
          </Button>
          <Button data-testid="copy" onClick={copyTheme}>
            copy object to clipboard close dialog
          </Button>
          <Button data-testid="download" onClick={download}>
            Download as json file
          </Button>
        </DialogActions>
      </Dialog>
      <Button data-testid="viewTheme" onClick={toggleDialog}>
        Vew Theme Object
      </Button>
    </>
  );
};

export default ViewThemeDialog;

ViewThemeDialog.propTypes = {
  theme: PropTypes.shape(),
};

ViewThemeDialog.defaultProps = {
  theme: {},
};
