import React from 'react';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';

export const GoogleFonts = () => {
  const onSubmit = async (values) => {
    console.log(values.fontLink);
    document.head.innerHTML += values.fontLink;
  };
  return (
    <Form
      onSubmit={onSubmit}
    >
      <MuiInput
        name="fontLink"
        placeholder="Google Font Link"
        fullWidth
      />
      <MuiSubmit buttonText="Add Font" />
    </Form>
  );
};

export default GoogleFonts;
