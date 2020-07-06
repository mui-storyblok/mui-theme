import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ThemeForm from './components/ThemeForm/ThemeForm';
import Page from './components/Page/Page';
import ViewThemeDialog from './components/ViewThemeDialog/ViewThemeDialog';
import GoogleFonts from './components/GoogleFonts/GoogleFonts';
import theme from './defaultMuiTheme';

const App = () => {
  const [state, setState] = useState({
    theme,
    accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
  });

  const onSubmit = async (values) => {
    setState({
      theme: values.theme,
      accessToken: values.storyBlokAccessToken,
    });
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
            <ViewThemeDialog
              theme={state.theme}
            />
            <GoogleFonts
              theme={state.theme}
            />
          </Grid>
          <Grid xs={12}>
            <ThemeForm
              onSubmit={onSubmit}
              theme={state.theme}
            />
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ overflow: 'scroll', maxHeight: '1000px' }}>
          <Page
            accessToken={state.accessToken}
            theme={state.theme}
          />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {};
