import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Categories from 'components/Item/AdvancedFilters/Categories';
import PriceRange from 'components/Item/AdvancedFilters/PriceRange';

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing(1)
  },
  formControl: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    width: '100%',
    minWidth: 120,
    borderBottom: '1px solid #e4e4e4',
    borderRight: '1px solid #e4e4e4'
  }
}));

const AdvancedFilters = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FormControl className={classes.formControl}>
        <Categories />
      </FormControl>
      <FormControl className={classes.formControl}>
        <PriceRange />
      </FormControl>
    </Box>
  );
};

export default AdvancedFilters;
