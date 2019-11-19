import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import EmailInput from 'components/Account/EmailInput';
import PasswordInput from 'components/Account/PasswordInput';
import isEmailValid from 'services/emailValidator';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { password, repeatPassword, email } = this.props;

    const errors = {};
    if (isEmailValid(email) === false) {
      errors.email = 'Neteisingas el. pašto adresas';
    }

    if (password.length < 12) {
      errors.password = 'Slaptažodis turi susidaryti bent iš 12-os simbolių.';
    }

    if (repeatPassword !== password) {
      errors.repeatPassword = 'Slaptažodis pakartotas blogai.';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;

    return this.validate() ? onSubmit(e) : () => {};
  }

  render() {
    const { onChange, password, repeatPassword, email } = this.props;
    const { errors } = this.state;

    return (
      <React.Fragment>
        <EmailInput onChange={onChange} error={errors.email} value={email} />
        <PasswordInput
          onChange={onChange}
          error={errors.password}
          value={password}
          name="password"
        />
        <PasswordInput
          onChange={onChange}
          error={errors.repeatPassword}
          value={repeatPassword}
          name="repeatPassword"
        />
        <Button type="button" onClick={this.handleSubmit} variant="contained" color="primary">
          Tęsti
        </Button>
      </React.Fragment>
    );
  }
}

FirstPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default FirstPage;
