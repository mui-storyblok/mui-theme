/* eslint-disable no-restricted-globals */
import React from 'react';
import {
  MuiInput,
  MuiSubmit,
  RFFFieldArray,
} from 'rff-wrapper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const shadowValidator = (shadow) => {
  const shadowRE = new RegExp(/-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\),-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\),-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\)/);
  const result = shadowRE.exec(shadow);
  if (shadow === 'none') return undefined;
  if (result === null) {
    return 'Shadow Format Invalid.';
  }
  return undefined;
};

const fontValidator = (value, name) => {
  const fontRE = new RegExp(/('(\w{1,20}-\w{1,20}|\w{1,20})',\s){3}'(\w{1,20}-\w{1,20}|\w{1,20})'/);
  if (name.includes('fontFamily')) {
    const result = fontRE.exec(value);
    if (result === null) return 'fontFamily format invalid.';
  }
  if (value === undefined) return 'Value is Required.';
  return undefined;
};

const renderInput = (value, name) => {
  if (name.includes('shadows')) {
    return (
      <div style={{ width: '100%' }}>
        <RFFFieldArray fieldArrayName="theme.shadows">
          <MuiInput
            fullWidth
            validate={shadowValidator}
          />
        </RFFFieldArray>
      </div>
    );
  }

  if (typeof value === 'string') {
    if (value.includes('#') || value.includes('rgb')) {
      return (<MuiInput fullWidth type="color" name={name} value={value} />);
    }
  }

  if (!isNaN(value)) {
    return (
      <MuiInput
        fullWidth
        type="number"
        name={name}
      />
    );
  }

  return (<MuiInput fullWidth name={name} value={value} validate={() => fontValidator(value, name)} />);
};

const loopValues = (values, key = 'theme') => Object.entries(values).map((item) => {
  const name = key ? `${key}.${item[0]}` : item[0];

  if (item[0] === 'shadows' && Array.isArray(item[1])) {
    return (
      <ExpansionPanel style={{ width: '100%' }} key={name}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {renderInput(item[1], 'shadows')}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  if (item[1] !== Object(item[1])) {
    return renderInput(item[1], name);
  }

  if (item[1] !== Array.isArray(item[1]) && item[0]) {
    return (
      <ExpansionPanel style={{ width: '100%' }} key={name}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {loopValues(item[1], name)}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
});

const RenderForm = ({ form }) => (
  <>
    {loopValues(form.getState().values.theme)}
    <MuiSubmit buttonText="Update Theme" />
  </>
);

export default RenderForm;

RenderForm.propTypes = {
  form: PropTypes.shape({
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
