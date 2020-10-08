import React from 'react';

import { AppBar, Divider, Toolbar } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const authLink = 'https://staging-asip-auth.makina-corpus.net/auth/realms/PRNSN/protocol/openid-connect/auth?client_id=OutdoorGeoVision&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:8000%2F&scope=openid';

const TopBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" to="/">Accueil</Button>
      <Button color="inherit" to="/presentation">Présentation</Button>
      <Button color="inherit" to="/mentions-legales">Mensions légales & données personnelles</Button>
      <Button color="inherit" href={authLink}>Se connecter</Button>

      <Button color="inherit" to="/compte">Mon compte</Button>
      <Button color="inherit" edge="end" to="/compte/parametres">Paramètres</Button>
      <Button color="inherit" to="/compte/traces">Mes traces</Button>
    </Toolbar>
  </AppBar>
);

export default TopBar;
