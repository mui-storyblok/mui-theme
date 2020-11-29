import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ThemeForm from './components/ThemeForm/ThemeForm';
import Page from './components/Page/Page';
import ViewThemeDialog from './components/ViewThemeDialog/ViewThemeDialog';
import GoogleFonts from './components/GoogleFonts/GoogleFonts';
import theme from './defaultMuiTheme';
import AccessToken from './components/AccessToken/AccessToken';
import ImportTheme from './components/ImportTheme/ImportTheme';
import ResetTheme from './components/ResetTheme/ResetTheme';
import AddOrLoadTheme from './components/AddOrLoadTheme/AddOrLoadTheme';
import { setThemeToLocalStore, getThemeFromLocalStore } from './Utils/localStorage';

const locallyStoredTheme = JSON.parse(getThemeFromLocalStore());

const App = () => {
  const [state, setState] = useState({
    theme: locallyStoredTheme || theme,
    // This is the access token to the Material U/I demo page. To access your own pages, update this token
    accessToken: '9K1dqG8gQkc1jeVbOWRDUAtt',
    pageRedirect: window.location.pathname,
  });

  const onSubmit = async (values) => {
    setThemeToLocalStore(values.theme);

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
          <Grid xs={12} item>
            <AccessToken {...sharedProps} setState={setState} />
            <ViewThemeDialog theme={state.theme} />
            <GoogleFonts />
            <ImportTheme {...sharedProps} setState={setState} />
            <ResetTheme />
            <AddOrLoadTheme activeTheme={state.theme}/>
          </Grid>

          <Grid xs={12} item>
            <ThemeForm theme={state.theme} onSubmit={onSubmit} />
          </Grid>

        </Grid>

        <Grid container xs={8} style={{ overflow: 'scroll', maxHeight: '1000px' }}>
          {console.log(sharedProps)}
          <Page {...sharedProps} />
        </Grid>

      </Grid>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {};
