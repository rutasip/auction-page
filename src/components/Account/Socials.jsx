import React from 'react';

import { ThumbUp } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const Socials = () => (
  <React.Fragment>
    <Button variant="contained" color="primary" fullWidth>
      <ThumbUp style={{ left: 40, position: 'absolute' }} />
      Facebook
    </Button>
    <Button variant="contained" color="default" fullWidth style={{ marginTop: 15 }}>
      <ThumbUp style={{ left: 40, position: 'absolute' }} />
      Twitter
    </Button>
  </React.Fragment>
);

export default Socials;
