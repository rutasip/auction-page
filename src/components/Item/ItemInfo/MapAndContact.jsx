import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 4
  },
  lightText: {
    color: '#636363',
    float: 'right'
  },
  biddingField: {
    border: '1px solid #e4e4e4',
    borderRadius: 4,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function ItemDescription() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>
        <img className={classes.img} src={require(`assets/temp/google-maps-placeholder.png`)} />
      </Box>
      <Grid container spacing={2} className={classes.container}>
        <Grid item md={3}>
          <Typography display="inline" component="p">
            Jasinskio g. 15. <br />
            Vilnius
          </Typography>
        </Grid>
        <Grid item md={9}>
          <Typography display="inline" component="p">
            Gauti nuorodas
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ItemDescription;
