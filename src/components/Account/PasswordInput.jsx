import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ error, value, name, onChange }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    value={value}
    name={name}
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    onChange={onChange}
    error={error !== null}
    helperText={error}
  />
);

PasswordInput.defaultProps = {
  error: null
};

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default PasswordInput;
