import React from 'react';

import { Container } from '@material-ui/core';
import { GatsbyLink } from 'gatsby-theme-material-ui';

const Footer = () => (
  <Container>
    <GatsbyLink color="inherit" variant="text" to="/mentions-legales">Mentions légales</GatsbyLink>
    {' - '}
    <GatsbyLink color="inherit" variant="text" to="/donnees-personnelles">Données personnelles</GatsbyLink>
    {' - '}
    <GatsbyLink color="inherit" variant="text" to="/contact">Contact</GatsbyLink>
  </Container>
);

export default Footer;
