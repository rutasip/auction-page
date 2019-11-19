import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SecondPage from 'components/RegisterUser/SecondPage';
import FirstPage from 'components/RegisterUser/FirstPage';

class WizardForm extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1
    };
  }

  nextPage() {
    const { page } = this.state;

    this.setState({ page: page + 1 });
  }

  previousPage() {
    const { page } = this.state;

    this.setState({ page: page - 1 });
  }

  render() {
    const { onSubmit, onChange } = this.props;
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <FirstPage {...this.props} onChange={onChange} onSubmit={this.nextPage} />}
        {page === 2 && (
          <SecondPage
            {...this.props}
            previousPage={this.previousPage}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default WizardForm;
