import React from 'react';
import PropTypes from 'prop-types/prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ViewTypeSelect = ({ availableTypes }) => (
  <React.Fragment>
    <InputLabel htmlFor="available-modes">Types</InputLabel>
    <Select value="" inputProps={{ id: 'available-modes' }}>
      {availableTypes.map(type => (
        <MenuItem value={type} key={type} button>
          {type}
        </MenuItem>
      ))}
    </Select>
  </React.Fragment>
);

ViewTypeSelect.propTypes = {
  availableTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ViewTypeSelect;
