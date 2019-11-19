import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from 'react-router-dom';
import 'components/Navigation/MainNavigation.css';
import Logo from 'assets/logo/logo_transparent.png';
import Search from 'components/Navigation/SearchBar';
import ToolbarMenu from 'containers/UserMenu';
import SellNowButton from 'components/Navigation/SellNowButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(1)
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5)
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionOneRow: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionTwoRows: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function MainNavigation() {
  const classes = useStyles();

  const logo = (
    <Link to="/">
      <img src={Logo} alt="logo" />
    </Link>
  );

  const search = (
    <div className={classes.search}>
      <Search />
    </div>
  );

  const buttons = (
    <div className={classes.buttons}>
      <ToolbarMenu />
      <SellNowButton />
    </div>
  );

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar className={classes.sectionOneRow}>
        {logo}
        {search}
        {buttons}
      </Toolbar>
      <Toolbar className={classes.sectionTwoRows}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item md={4}>
            {logo}
          </Grid>
          <Grid item md={8}>
            {buttons}
          </Grid>
          {search}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavigation;
