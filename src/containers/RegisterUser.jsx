import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import WizardForm from 'components/RegisterUser/WizardForm';
import { userActions } from 'actions/user.actions';

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      repeatPassword: '',

      name: '',
      surname: '',

      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(userActions.register(email, password));
  }

  render() {
    const { submitted } = this.state;

    if (submitted) {
      return <div>Aciu uz registracija:</div>;
    }

    return <WizardForm {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => {
  const { processing, success, error } = state.userRegistration;

  return { processing, success, error };
};

RegisterUser.defaultProps = {
  processing: false,
  error: null,
  success: false
};

RegisterUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  processing: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.bool
};

export default connect(mapStateToProps)(RegisterUser);
