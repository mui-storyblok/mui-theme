import React, { useState, useEffect } from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';

export const Page = ({ accessToken, theme, pageRedirect }) => {
  const [page, setPage] = useState(window.location.pathname);
  const [togglePage, setToggle] = useState(false);
  useEffect(() => {
    if (page !== pageRedirect) {
      const { host } = window.location;
      console.log(' Page is not the same');
      setPage(pageRedirect);
      // window.location.assign(`http://${host}/${pageRedirect}`);
      window.history.pushState({}, null, `http://${host}/${pageRedirect}`);
      console.log(window.location.pathname);
      console.log('##################');
      setToggle(!togglePage);
    }
  }, [accessToken, page, pageRedirect]);
  console.log(page);
  return (
    togglePage
      ? (
        <MuiStoryblok
          useObjectTheme={true}
          theme={theme}
          accessToken={accessToken}
          version="draft"
        />
      )
      : (
        <MuiStoryblok
          useObjectTheme={true}
          theme={theme}
          accessToken={accessToken}
          version="draft"
        />
      )
  );
};

export default Page;

Page.propTypes = {
  accessToken: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
  pageRedirect: PropTypes.string.isRequired,
};

Page.defaultProps = {};
