import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SortingModeSelect = ({ availableModes }) => (
  <React.Fragment>
    <InputLabel htmlFor="available-modes">Sorting</InputLabel>
    <Select value="" inputProps={{ id: 'available-modes' }}>
      {availableModes.map(mode => (
        <MenuItem value={mode} key={mode} button>
          {mode}
        </MenuItem>
      ))}
    </Select>
  </React.Fragment>
);

SortingModeSelect.propTypes = {
  availableModes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SortingModeSelect;
