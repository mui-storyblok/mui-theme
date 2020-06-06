import React from 'react';
import MuiStoryblok from 'mui-storyblok';
import PropTypes from 'prop-types';

const Page = ({ form }) => {
  const formState = form.getState();
  return (
    <MuiStoryblok
      theme={formState.values.theme}
      accessToken={formState.values.storyBlokAccessToken}
      version="draft"
    />
  );
};

export default Page;

Page.propTypes = {
  form: PropTypes.shape({
    getState: PropTypes.func,
  }),
};

Page.defaultProps = {
  form: {},
};
