import React from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';

export const Page = ({ accessToken, theme }) => (
  <MuiStoryblok
    useObjectTheme={true}
    theme={theme}
    accessToken={accessToken}
    version="draft"
  />
);

export default Page;

Page.propTypes = {
  accessToken: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
};

Page.defaultProps = {};
