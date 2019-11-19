import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const SimpleTextField = ({ error, name, value, label, onChange }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    value={value}
    label={label}
    name={name}
    autoComplete={name}
    autoFocus
    onChange={onChange}
    error={error !== null}
    helperText={error}
  />
);

SimpleTextField.defaultProps = {
  error: null
};

SimpleTextField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SimpleTextField;
