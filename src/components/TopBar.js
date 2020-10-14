import React from 'react';

import { AppBar, Toolbar, Container, makeStyles } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    '& > a:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
  },
  logo: {
    marginRight: 'auto',
  },
}));

const authLink = 'https://dev-prnsn.makina-corpus.net/auth/';

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.nav} component="nav">
          <Button color="inherit" to="/" className={classes.logo}>LOGO</Button>

          <Button color="inherit" to="/">Accueil</Button>
          <Button color="inherit" variant="text" to="/pourquoi-participer">Pourquoi participer ?</Button>
          <Button color="inherit" variant="text" to="/equipe">L'équipe</Button>
          <Button color="inherit" variant="outlined" href={authLink}>Participer</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
