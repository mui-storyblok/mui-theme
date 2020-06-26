import React from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Page = ({ form, location }) => {
  const formState = form.getState();
  return (
    <MuiStoryblok
      location={location}
      theme={formState.values.theme}
      accessToken={formState.values.storyBlokAccessToken}
      version="draft"
    />
  );
};

export default withRouter(Page);

Page.propTypes = {
  location: PropTypes.shape.isRequired,
  form: PropTypes.shape({
    getState: PropTypes.func,
  }),
};

Page.defaultProps = {
  form: {},
};
