import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import RenderForm from './components/RenderForm/RenderForm';
import Page from './components/Page/Page';
import styles from './FormBody.module.scss';

const FormBody = ({ form }) => (
  <Grid
    container
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    style={{ marginTop: '100px' }}
  >
    <Grid item xs={4} className={styles.container}>
      <RenderForm form={form} />
    </Grid>
    <Grid item xs={8} className={styles.container}>
      <Page form={form} />
    </Grid>
  </Grid>
);

export default FormBody;

FormBody.propTypes = {
  form: PropTypes.shape({
    getState: PropTypes.func,
  }),
};

FormBody.defaultProps = {
  form: {},
};
