import React, { useState, useEffect } from 'react';
import { MuiStoryblok } from 'mui-storyblok';
import PropTypes from 'prop-types';

export const Page = ({ accessToken, theme, pageRedirect }) => {
  const [page, setPage] = useState(window.location.pathname);
  const [togglePage, setToggle] = useState(true);
  const toggleStoryblok = () => {
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 100);
  };

  useEffect(() => {
    if (page !== pageRedirect) {
      const { host } = window.location;
      setPage(pageRedirect);
      window.history.pushState({}, null, `http://${host}/${pageRedirect}`);
      toggleStoryblok();
    }
  }, [accessToken, page, pageRedirect, togglePage]);

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
