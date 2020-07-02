import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'rff-wrapper';
import arrayMutators from 'final-form-arrays';
import RenderForm from './components/RenderForm/RenderForm';

export const ThemeForm = ({ onSubmit, theme }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{
      storyBlokAccessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
      theme,
    }}
    mutators={{ ...arrayMutators }}
  >
    <RenderForm />
  </Form>
);

export default ThemeForm;

ThemeForm.propTypes = {
  theme: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ThemeForm.defaultProps = {};
