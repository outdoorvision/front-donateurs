import React from 'react';

import { Container } from '@material-ui/core';
import { GatsbyLink } from 'gatsby-theme-material-ui';

const Footer = () => (
  <Container component="footer">
    <GatsbyLink color="inherit" variant="text" to="/mentions-legales">Mentions légales</GatsbyLink>
    {' - '}
    <GatsbyLink color="inherit" variant="text" to="/confidentialite">Confidentialité</GatsbyLink>
    {' - '}
    <GatsbyLink color="inherit" variant="text" to="/contact">Contact</GatsbyLink>
  </Container>
);

export default Footer;
