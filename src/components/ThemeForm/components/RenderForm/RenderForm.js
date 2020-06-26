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

const renderInput = (value, name) => {
  if (name.includes('shadows')) {
    console.log('NAME: ', name);
    console.log('VALUE: ', value);
    return (
      <MuiInput
        fullWidth
        type="text"
        name={name}
      />
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

  return (<MuiInput fullWidth name={name} value={value} />);
};

const loopValues = (values, key = 'theme') => Object.entries(values).map((item) => {
  // console.log(item);
  const name = key ? `${key}.${item[0]}` : item[0];

  if (item[1] !== Object(item[1])) {
    return renderInput(item[1], name);
  }
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
