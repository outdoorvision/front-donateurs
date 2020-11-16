import React from 'react';

import { AppBar, Toolbar, Container, makeStyles, Grid, useTheme } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import { Link } from 'gatsby';

import { Home } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  logo: {
    '& img': {
      marginLeft: -32,
      display: 'block',
    },

    flexGrow: '1',
    flexShrink: '0',
    maxWidth: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  nav: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',

    flexGrow: '1',
    flexShrink: '0',
    maxWidth: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },

    '& > a:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const authLink = 'https://dev-prnsn.makina-corpus.net/auth/';

const TopBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const activeStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  return (
    <AppBar position="static" color="transparent" variant="outlined">
      <Toolbar disableGutters>
        <Container>
          <Grid container>
            <Grid item className={classes.logo}>
              <Link to="/">
                <img src="/outdoor-vision.svg" alt="OutdoorVision" />
              </Link>
            </Grid>
            <Grid item className={classes.nav} component="nav">
              <Button activeStyle={activeStyle} to="/" startIcon={<Home />}>Outdoorvision</Button>
              <Button activeStyle={activeStyle} variant="text" to="/pourquoi-participer">Pourquoi participer ?</Button>
              <Button activeStyle={activeStyle} variant="text" to="/acteurs">Les acteurs</Button>
              <Button variant="outlined" href={authLink}>Participer</Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
