import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({ error, value, onChange }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    value={value}
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
    onChange={onChange}
    error={error !== null}
    helperText={error}
  />
);

EmailInput.defaultProps = {
  error: null
};

EmailInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default EmailInput;
