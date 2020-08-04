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
  // Title of tooltip
  title: PropTypes.string.isRequired,
  // Handle Open function passed down
  handleOpen: PropTypes.func.isRequired,
  // Icon Component passed down from parent component
  icon: PropTypes.node.isRequired,
};
