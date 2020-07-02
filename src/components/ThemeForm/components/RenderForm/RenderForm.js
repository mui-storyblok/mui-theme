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
import { shadowValidator, validator } from './Regex';
import theme from '../../../../defaultMuiTheme';

const shadowsInput = (name, defaultInput) => {
  if (name.includes('shadows')) {
    return (
      <div style={{ width: '100%' }}>
        <RFFFieldArray fieldArrayName="theme.shadows">
          <MuiInput fullWidth validate={shadowValidator} />
        </RFFFieldArray>
      </div>
    );
  }

  return defaultInput;
};

const colorInput = (name, value, defaultInput) => {
  if (typeof value === 'string') {
    if (value.includes('#') || value.includes('rgb')) {
      return (<MuiInput fullWidth type="color" name={name} value={value} />);
    }
  }
  return defaultInput;
};

const numberInput = (name, value, defaultInput) => {
  if (!isNaN(value)) return <MuiInput fullWidth type="number" name={name} />;
  return defaultInput;
};

const renderInput = (value, name) => {
  let defaultInput = (
    <MuiInput
      fullWidth
      name={name}
      value={value}
      validate={() => validator(value, name)}
    />
  );
  defaultInput = shadowsInput(name, defaultInput);
  defaultInput = colorInput(name, value, defaultInput);
  defaultInput = numberInput(name, value, defaultInput);
  return defaultInput;
};

const renderShadows = (item, name) => (
  <ExpansionPanel style={{ width: '100%' }} key={name}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Grid container direction="column" justify="center" alignItems="center">
        {renderInput(item, 'shadows')}
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const getName = (key, item) => (key ? `${key}.${item[0]}` : item[0]);

const determineItem = (item) => {
  if (item[0] === 'shadows' && Array.isArray(item[1])) return 'shadow';
  if (item[1] !== Object(item[1])) return 'input';
  if (item[1] !== Array.isArray(item[1]) && item[0]) return 'notArray';
};

const loopValues = (values, key = 'theme') => Object.entries(values).map((item) => {
  const name = getName(key, item);
  const inputType = determineItem(item);
  switch (inputType) {
    case 'shadow':
      return renderShadows(item[1], name);
    case 'notArray':
      return (
        <ExpansionPanel style={{ width: '100%' }} key={name}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container direction="column" justify="center" alignItems="center">
              {loopValues(item[1], name)}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    default:
      return renderInput(item[1], name);
  }
});

const RenderForm = () => (
  <>
    {loopValues(theme)}
    <MuiSubmit buttonText="Update Theme" />
  </>
);

export default RenderForm;
