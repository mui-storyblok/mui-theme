import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  IconButton,
} from '@material-ui/core';

export const DialogIconButton = ({
  title,
  handleOpen,
  icon,
}) => (
  <Tooltip title={title} placement="top-end">
    <IconButton onClick={handleOpen}>
      {icon}
    </IconButton>
  </Tooltip>
);

export default DialogIconButton;

DialogIconButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};
