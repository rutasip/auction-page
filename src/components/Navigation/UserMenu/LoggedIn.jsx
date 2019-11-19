import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const LoggedIn = ({ onLogout }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box m={1}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          size="medium"
          className={classes.margin}
          onClick={handleClick}
        >
          Profilis
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={onLogout}>Atsijungti</MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

LoggedIn.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default LoggedIn;
