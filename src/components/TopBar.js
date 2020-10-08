import React from 'react';

import { AppBar, Toolbar, Container } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const authLink = 'https://staging-asip-auth.makina-corpus.net/auth/realms/PRNSN/protocol/openid-connect/auth?client_id=OutdoorGeoVision&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:8000%2F&scope=openid';

const TopBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Container>
        <Button color="inherit" to="/">LOGO</Button>

        <Button color="inherit" variant="text" to="/inscription">Inscription</Button>
        <Button color="inherit" variant="text" to="/presentation">Présentation</Button>
        <Button color="inherit" variant="text" to="/contact">Contact</Button>
        <Button color="inherit" variant="outlined" href={authLink}>Se connecter</Button>
      </Container>
    </Toolbar>
  </AppBar>
);

export default TopBar;
