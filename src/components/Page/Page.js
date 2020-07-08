import React, { useState, useEffect } from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';

export const Page = ({ accessToken, theme, pageRedirect }) => {
  const [page, setPage] = useState(window.location.pathname);
  useEffect(() => {
    if (page !== pageRedirect) {
      console.log(' Page is not the same');
      setPage(pageRedirect);
    }
  }, accessToken);
  return (
    <MuiStoryblok
      useObjectTheme={true}
      theme={theme}
      accessToken={accessToken}
      version="draft"
    />
  );
};

export default Page;

Page.propTypes = {
  accessToken: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
  pageRedirect: PropTypes.string.isRequired,
};

Page.defaultProps = {};
