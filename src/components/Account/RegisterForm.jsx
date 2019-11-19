import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({ onSubmit, children }) => (
  <form noValidate onSubmit={onSubmit}>
    {children}
  </form>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default RegisterForm;
