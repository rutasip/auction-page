import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';

const RememberMeCheckbox = () => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Prisiminti mane "
  />
);

export default RememberMeCheckbox;
