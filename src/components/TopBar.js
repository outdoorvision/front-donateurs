import React from 'react';

import { AppBar, Toolbar, Container } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const authLink = 'https://dev-prnsn.makina-corpus.net/auth/';

const TopBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Container>
        <Button color="inherit" to="/">LOGO</Button>

        <Button color="inherit" variant="text" to="/presentation">Présentation</Button>
        <Button color="inherit" variant="text" to="/mentions-legales">Mentions légales</Button>
        <Button color="inherit" variant="text" to="/contact">Contact</Button>
        <Button color="inherit" variant="outlined" href={authLink}>Se connecter</Button>
      </Container>
    </Toolbar>
  </AppBar>
);

export default TopBar;
