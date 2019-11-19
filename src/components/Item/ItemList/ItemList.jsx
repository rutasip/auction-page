import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ItemCard from 'components/Item/ItemList/ItemCard';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    flexGrow: 1,
    minWidth: '100px',
    maxWidth: '100%',
    '@media (min-width: 420px)': {
      maxWidth: '50%'
    },
    '@media (min-width: 710px)': {
      maxWidth: '33%'
    },
    '@media (min-width: 770px)': {
      maxWidth: '50%'
    },
    '@media (min-width: 960px)': {
      maxWidth: '33%'
    },
    '@media (min-width: 1300px)': {
      maxWidth: '25%'
    },
    '@media (min-width: 1550px)': {
      maxWidth: '20%'
    }
  }
}));

const ItemList = () => {
  const classes = useStyles();
  const items = [];
  for (let i = 0; i < 14; i += 1) {
    items.push(
      <Grid item md={false} key={i} className={classes.item}>
        <ItemCard
          timeUntilBidEnd={999}
          itemName="Naujas medvilninis džemperis, M dydis"
          currentBid={9999.99}
        />
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Box mt={3}>
        <Grid container direction="row" spacing={2} className={classes.container}>
          {items}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ItemList;
