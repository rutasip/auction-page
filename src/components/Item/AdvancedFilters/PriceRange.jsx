import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 2rem',
    paddingBottom: theme.spacing(1)
  },
  slider: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(1)
  },
  textField: {
    width: 60
  }
}));

const PriceRange = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 72]);

  const handleSliderChange = (event, newValue) => setValue(newValue);

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h4">
        Kaina
      </Typography>
      <Slider
        className={classes.slider}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default PriceRange;
