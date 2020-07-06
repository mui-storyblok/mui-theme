import React from 'react';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';

export const GoogleFonts = () => {
  const onSubmit = async (values) => {
    const fontLink = document.createElement('link');
    fontLink.href = values.fontHref;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  };
  return (
    <Form
      onSubmit={onSubmit}
    >
      <MuiInput
        name="fontHref"
        placeholder="Google Font Link"
        fullWidth
      />
      <MuiSubmit buttonText="Add Font" />
    </Form>
  );
};

export default GoogleFonts;
