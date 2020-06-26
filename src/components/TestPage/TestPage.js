import React from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const TestPage = ({ accessToken, theme, location }) => {
  console.log(location);
  return (
    <MuiStoryblok
      location={location}
      accessToken="xxI9nWQgRHQvoxTRac2Hugtt"
      version="draft"
    />
  );
};

export default withRouter(TestPage);

TestPage.propTypes = {
  // accessToken: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired,
  // theme: PropTypes.shape().isRequired,
};

TestPage.defaultProps = {
};
