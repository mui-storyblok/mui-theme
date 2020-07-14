import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ThemeForm from './components/ThemeForm/ThemeForm';
import Page from './components/Page/Page';
import ViewThemeDialog from './components/ViewThemeDialog/ViewThemeDialog';
import GoogleFonts from './components/GoogleFonts/GoogleFonts';
import theme from './defaultMuiTheme';
import AccessToken from './components/AccessToken/AccessToken';

const App = () => {
  const [state, setState] = useState({
    theme,
    accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
    pageRedirect: window.location.pathname,
  });

  const onSubmit = async (values) => {
    setState({
      theme: values.theme,
      accessToken: state.accessToken,
      pageRedirect: state.pageRedirect,
    });
  };

  const sharedProps = {
    theme: state.theme,
    accessToken: state.accessToken,
    pageRedirect: state.pageRedirect,
  };

  return (
    <BrowserRouter>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          item
          xs={4}
          direction="row"
          style={{ overflow: 'scroll', maxHeight: '1000px', marginTop: '100px' }}
        >
          <Grid xs={12}>
            <AccessToken {...sharedProps} setState={setState} />
            <ViewThemeDialog theme={state.theme} />
            <GoogleFonts />
          </Grid>
          <Grid xs={12}>
            <ThemeForm theme={state.theme} onSubmit={onSubmit} />
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ overflow: 'scroll', maxHeight: '1000px' }}>
          <Page {...sharedProps} />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {};
