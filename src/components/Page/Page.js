import React from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export const Page = ({ accessToken, theme, location }) => (
  <MuiStoryblok
    location={location}
    theme={theme}
    accessToken={accessToken}
    version="draft"
  />
);

export default withRouter(Page);

Page.propTypes = {
  accessToken: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

Page.defaultProps = {
};
