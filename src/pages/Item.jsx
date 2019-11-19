import React from 'react';
import { Grid } from '@material-ui/core';
import ImageCarousel from 'components/Item/ItemInfo/ImageCarousel';
import ItemDescription from 'components/Item/ItemInfo/ItemDescription';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={1}></Grid>
        <Grid item md={4}>
          <ImageCarousel />
        </Grid>
        <Grid item md={6}>
          <ItemDescription />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
