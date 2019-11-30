import React from 'react';
import { Grid } from '@material-ui/core';
import ImageCarousel from 'components/Item/ItemInfo/ImageCarousel';
import ItemDescription from 'components/Item/ItemInfo/ItemDescription';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={5}>
          <ImageCarousel />
        </Grid>
        <Grid item md={7}>
          <ItemDescription />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
