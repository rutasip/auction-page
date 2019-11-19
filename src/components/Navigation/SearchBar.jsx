import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
  {
    value: 'All',
    label: 'Kategorijos'
  },
  {
    value: 'Computers',
    label: 'Computers'
  },
  {
    value: 'Phones',
    label: 'Phones'
  },
  {
    value: 'Books',
    label: 'Books'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    transition: 'box-shadow 200ms ease-in',
    backgroundColor: '#f4f4f4',
    borderRadius: 19,
    height: 40,
    padding: '2px 4px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4)
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 3,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  menu: {
    width: 200
  },
  input: {
    marginLeft: 8,
    flex: 6,
    color: 'inherit',
    '&:focus': {
      zIndex: 1000
    }
  },
  iconButton: {
    padding: 8
  }
}));

function SearchBar() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    category: 'All'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="stretch">
        <TextField
          select
          label=""
          className={classes.textField}
          value={values.category}
          onChange={handleChange('category')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          InputProps={{
            disableUnderline: true
          }}
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value} button="">
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <InputBase className={classes.input} placeholder="Ieškoti prekės..." />
        <IconButton className={classes.iconButton} aria-label="Paieška" href="">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Paper>
  );
}

export default SearchBar;
