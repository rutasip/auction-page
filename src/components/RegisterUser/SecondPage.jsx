import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SimpleTextField from 'components/Account/SimpleTextField';

class SecondPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { name, surname } = this.props;

    const errors = {};
    if (name.length < 1) {
      errors.name = 'Tuščias laukas negali būti paliktas.';
    }

    if (surname.length < 1) {
      errors.surname = 'Tuščias laukas negali būti paliktas.';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  }

  handleSubmit(e) {
    const { onSubmit } = this.props;

    return this.validate() ? onSubmit(e) : () => {};
  }

  render() {
    const { onChange, name, surname, previousPage } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <SimpleTextField
          onChange={onChange}
          label="Vardas"
          error={errors.name}
          name="name"
          value={name}
        />
        <SimpleTextField
          onChange={onChange}
          error={errors.surname}
          label="Pavardė"
          name="surname"
          value={surname}
        />
        <Button type="button" onClick={previousPage} variant="contained" color="primary">
          Atgal
        </Button>
        <Button
          style={{ marginLeft: 15 }}
          onClick={this.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Registruotis
        </Button>
      </div>
    );
  }
}

SecondPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};

export default SecondPage;
