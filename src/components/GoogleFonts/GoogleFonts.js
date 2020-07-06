import React from 'react';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';
import { MuiIcon } from 'mui-storyblok';
import { Tooltip } from '@material-ui/core';

export const GoogleFonts = () => {
  const onSubmit = async (values) => {
    const fontLink = document.createElement('link');
    fontLink.setAttribute('href', values.fontHref);
    fontLink.setAttribute('rel', 'stylesheet');
    document.getElementById('htmlHead').appendChild(fontLink);
  };
  return (
    <>
      <Tooltip title="Add Google Font">
        <MuiIcon iconName="note_add" />
      </Tooltip>
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
    </>
  );
};

export default GoogleFonts;
