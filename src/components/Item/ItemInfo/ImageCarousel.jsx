import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const imageSteps = [
  {
    label: 'Naujas medvilninis džemperis, M dydis',
    imgPath: '0'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 1',
    imgPath: '1'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 2',
    imgPath: '2'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 3',
    imgPath: '3'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 4',
    imgPath: '4'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 420,
    flexGrow: 1,
    marginTop: 30,
    position: 'relative',
    marginRight: theme.spacing(3)
  },
  arrowButton: {
    padding: '50px 0',
    minWidth: 30
  },
  arrowButtonLeft: {
    position: 'absolute',
    color: '#fff',
    opacity: '80%',
    padding: '30px 0',
    left: 0,
    '&:hover': {
      color: 'black',
      backgroundColor: '#fff',
      opacity: '20%'
    }
  },
  arrowButtonRight: {
    position: 'absolute',
    color: '#fff',
    opacity: '80%',
    padding: '30px 0',
    right: 0,
    '&:hover': {
      color: 'black',
      backgroundColor: '#fff',
      opacity: '20%'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 'auto',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 420,
    marginBottom: '10px',
    borderRadius: 4
  },
  thumbnail: {
    padding: '0 4px'
  },
  thumbnailImg: {
    borderRadius: 4,
    height: 74
  }
}));

function ImageSlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imageSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSwitch = index => {
    setActiveStep(index);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="center" alignItems="center">
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {imageSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={require(`assets/items/${step.imgPath}.png`)}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <Button
          className={(classes.arrowButton, classes.arrowButtonLeft)}
          size="large"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight fontSize="large" />
          ) : (
            <KeyboardArrowLeft fontSize="large" />
          )}
        </Button>
        <Button
          className={(classes.arrowButton, classes.arrowButtonRight)}
          size="large"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft fontSize="large" />
          ) : (
            <KeyboardArrowRight fontSize="large" />
          )}
        </Button>
      </Grid>
      <Grid container spacing={0} justify="center" alignItems="center">
        {imageSteps.map((step, index) => (
          <div key={step.label}>
            <Grid item xs={3}>
              <Button className={classes.thumbnail} onClick={() => handleSwitch(index)}>
                {Math.abs(activeStep - index) <= 4 ? (
                  <img
                    src={require(`assets/items/${step.imgPath}.png`)}
                    alt={step.label}
                    className={classes.thumbnailImg}
                  />
                ) : null}
              </Button>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default ImageSlider;
