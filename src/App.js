import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ThemeForm from './components/ThemeForm/ThemeForm';
import Page from './components/Page/Page';
import SubmitDialog from './components/SubmitDialog/SubmitDialog';
import theme from './defaultMuiTheme';

const App = () => {
  const [state, setState] = useState({
    open: false,
    theme,
    accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
  });

  const onSubmit = async (values) => {
    setState({
      theme: values.theme,
      accessToken: values.storyBlokAccessToken,
    });
  };

  const handleClose = () => {
    setState({ open: false });
  };

  return (
    <BrowserRouter>
      <SubmitDialog
        handleClose={handleClose}
        theme={state.theme}
        open={state.open}
      />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4} style={{ overflow: 'scroll', maxHeight: '1000px', marginTop: '100px' }}>
          <ThemeForm onSubmit={onSubmit} theme={theme} />
        </Grid>
        <Grid item xs={8} style={{ overflow: 'scroll', maxHeight: '1000px' }}>
          <Page accessToken={state.accessToken} theme={state.theme} />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {};
