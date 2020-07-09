import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'rff-wrapper';
import arrayMutators from 'final-form-arrays';
import RenderForm from './components/RenderForm/RenderForm';

export const ThemeForm = ({ onSubmit,
  theme,
  accessToken,
  pageRedirect,
}) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{
      storyBlokAccessToken: accessToken,
      theme,
      pageRedirect,
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
  accessToken: PropTypes.string.isRequired,
  pageRedirect: PropTypes.string.isRequired,
};

ThemeForm.defaultProps = {};
