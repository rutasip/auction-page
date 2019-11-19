import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const AgreeWithPoliciesCheckbox = ({ onChange, checked }) => {
  const checkbox = (
    <Checkbox onChange={onChange} checked={checked} name="agreeWithPolicies" color="primary" />
  );

  return <FormControlLabel control={checkbox} label="Sutinku su salygumos" />;
};

AgreeWithPoliciesCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AgreeWithPoliciesCheckbox;
