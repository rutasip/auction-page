import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const LoginForm = ({ onSubmit, children }) => (
  <form noValidate onSubmit={onSubmit}>
    {children}

    <Grid container style={{ marginTop: 15 }}>
      <Grid item xs>
        <Link to="/signup/remember-password" variant="body2">
          Užmiršote slaptažodį?
        </Link>
      </Grid>
    </Grid>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default LoginForm;
