import React, { useState, useEffect } from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';

export const Page = ({ accessToken, theme, pageRedirect }) => {
  const [page, setPage] = useState(window.location.pathname);
  const [currentAccessToken, setAccessToken] = useState(accessToken);
  const [togglePage, setToggle] = useState(true);
  const toggleStoryblok = () => {
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 100);
  };

  useEffect(() => {
    if (page !== pageRedirect || currentAccessToken !== accessToken) {
      const { host } = window.location;
      setPage(pageRedirect);
      setAccessToken(accessToken);
      window.history.pushState({}, null, `http://${host}${pageRedirect}`);
      toggleStoryblok();
    }
  }, [accessToken, page, pageRedirect, togglePage, currentAccessToken]);

  return (
    <>
      {
        togglePage
        && (
        <MuiStoryblok
          useObjectTheme={true}
          theme={theme}
          accessToken={accessToken}
          version="draft"
        />
        )
      }
    </>
  );
};

export default Page;

Page.propTypes = {
  accessToken: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
  pageRedirect: PropTypes.string.isRequired,
};

Page.defaultProps = {};
