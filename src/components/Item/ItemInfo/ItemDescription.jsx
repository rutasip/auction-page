import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 26,
    padding: 30,
    border: '1px solid #e4e4e4',
    borderRadius: 4
  },
  fieldDescriptor: {
    float: 'right'
  },
  boldText: {
    fontWeight: 500
  },
  priceInputField: {
    maxWidth: 120,
    backgroundColor: '#fff'
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  infoArea: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  biddingField: {
    borderRadius: 4,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: '#f4f4f4'
  },
  contactField: {
    marginTop: theme.spacing(6),
    paddingTop: theme.spacing(6),
    borderTop: '1px solid #e4e4e4'
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 4
  },
  container: {
    paddingTop: 3,
    paddingBottom: 3
  }
}));

function ItemDescription() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: ''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Naujas medvilninis džemperis, M dydis
      </Typography>
      <div className={classes.biddingField}>
        <Grid container spacing={4} className={classes.container}>
          <Grid item md={4}>
            <Typography className={classes.fieldDescriptor} display="inline" component="p">
              Liko laiko:
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Typography display="inline" component="p">
              1 d 15 h
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.container}>
          <Grid item md={4}>
            <Typography className={classes.fieldDescriptor} display="inline" component="p">
              Dabartinė kaina:
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Typography className={classes.boldText} display="inline" variant="h4" component="h4">
              15.50 €
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.container}>
          <Grid item md={4}></Grid>
          <Grid item md={8}>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-amount"
                className={classes.priceInputField}
                value={values.amount}
                onChange={handleChange('amount')}
                endAdornment={<InputAdornment position="end">€</InputAdornment>}
                aria-describedby="outlined-amount"
                inputProps={{
                  'aria-label': 'amount'
                }}
                labelWidth={0}
              />
            </FormControl>
            <Button variant="contained" color="primary" size="medium" className={classes.button}>
              Siūlyti kainą
            </Button>
          </Grid>
        </Grid>
      </div>
      <Typography display="inline" component="p">
        Parduodu džemperį M dydžio, moteriškas. Atsiimti galite Vilniuje, su aukciono laimėtoju
        susisieksiu asmeniškai per el. paštą, susitarti dėl atsiėmimo. Į kitus miestus nesiunčiu.
      </Typography>
      <div className={classes.contactField}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item md={6}>
            <Grid container className={classes.contactLeftCol}>
              <Grid item xs={12} style={{ marginBottom: 30 }}>
                <Typography
                  className={classes.boldText}
                  display="inline"
                  variant="h4"
                  component="h4"
                >
                  Pardavėjas
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginBottom: 20 }}>
                <LocationOnIcon />
                <Typography
                  style={{ paddingLeft: 10, verticalAlign: 6 }}
                  display="inline"
                  component="p"
                >
                  J. Jasinskio g. 15, Vilnius 01111
                </Typography>
                <div style={{ paddingLeft: 32 }}>
                  <a
                    href="https://www.google.com/maps/dir//J.+Jasinskio+g.+15,+Vilnius+01111,+Lithuania/@54.6887771,25.2591619,17z/data=!4m17!1m7!3m6!1s0x46dd9409ebcb5afb:0x3da63ea8001c614c!2sJ.+Jasinskio+g.+15,+Vilnius+01111,+Lithuania!3b1!8m2!3d54.688774!4d25.2613559!4m8!1m0!1m5!1m1!1s0x46dd9409ebcb5afb:0x3da63ea8001c614c!2m2!1d25.2613559!2d54.688774!3e2"
                    style={{ color: '#0b409c' }}
                  >
                    Gauti nuorodas
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} style={{ marginBottom: 20 }}>
                <PersonIcon />
                <Typography
                  style={{ paddingLeft: 10, verticalAlign: 6 }}
                  display="inline"
                  component="p"
                >
                  Agne123
                </Typography>
                <div style={{ paddingLeft: 32 }}>
                  <a href="/#" style={{ color: '#0b409c' }}>
                    Rašyti laišką
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Box display="inline" component="p">
              <img
                alt="Google maps placeholder"
                className={classes.img}
                src={require(`assets/temp/google-maps-placeholder.png`)}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
      {/* <div className={classes.infoArea}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item md={3}>
            <Typography className={classes.lightText} display="inline" component="p">
              Pristatymas:
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography display="inline" component="p">
              Atsiėmimas asmeniškai <br /> Siuntimas paštu
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.container}>
          <Grid item md={3}>
            <Typography className={classes.lightText} display="inline" component="p">
              Pardavėjas:
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography display="inline" component="p">
              Agne123
            </Typography>
            <Typography display="inline" component="p">
              <a href="/#">
                <b>&nbsp;[susisiekti su pardavėju]</b>
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div> */}
    </Paper>
  );
}

export default ItemDescription;
