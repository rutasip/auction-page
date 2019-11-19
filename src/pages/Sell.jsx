import React from 'react';

import { Grid } from '@material-ui/core';
import AddAuctionItem from 'containers/AddAuctionItem';

const Sell = () => {
  // @todo use context, unhardcode.
  const loggedIn = true;
  if (loggedIn === false) {
    // @todo probably use redirect to the login page?
    // @todo think about creating middleware.
    return <div>Only logged in users are authenticated to access this page.</div>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item md={12}>
        <AddAuctionItem />
      </Grid>
    </Grid>
  );
};

export default Sell;
