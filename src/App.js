import React, { useState } from 'react';
import { Form } from 'rff-wrapper';
import { BrowserRouter } from 'react-router-dom';
import FormBody from './components/FormBody/FormBody';
import SubmitDialog from './components/SubmitDialog/SubmitDialog';
import theme from './defaultMuiTheme';

const App = () => {
  const [state, setState] = useState({ open: false, theme });

  const onSubmit = async (values) => {
    setState({
      open: true,
      theme: values.theme,
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
      <Form
        onSubmit={onSubmit}
        initialValues={{
          storyBlokAccessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
          theme,
        }}
      >
        <FormBody />
      </Form>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {};
