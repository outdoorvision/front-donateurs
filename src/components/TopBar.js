import React from 'react';

import { AppBar, Toolbar, Container, makeStyles } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    '& > a:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
  },
  logo: {
    marginRight: 'auto',
    transform: 'translateX(-32px)',
  },
}));

const authLink = 'https://dev-prnsn.makina-corpus.net/auth/';

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" variant="outlined">
      <Toolbar>
        <Container className={classes.nav} component="nav">
          <Link to="/" className={classes.logo}>
            <img src="/outdoor-vision.svg" alt="OutdoorVision" />
          </Link>

          <Button to="/">Accueil</Button>
          <Button variant="text" to="/pourquoi-participer">Pourquoi participer ?</Button>
          <Button variant="text" to="/acteurs">Les acteurs</Button>
          <Button variant="outlined" href={authLink}>Participer</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
