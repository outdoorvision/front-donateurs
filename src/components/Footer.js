import React from 'react';

import { Container } from '@material-ui/core';
import { GatsbyLink } from 'gatsby-theme-material-ui';

const Footer = () => (
  <Container>
    <GatsbyLink color="inherit" variant="text" to="/mentions-legales">Mentions légales et données personnelles</GatsbyLink>
    {' - '}
    <GatsbyLink color="inherit" variant="text" to="/contact">Contact</GatsbyLink>
  </Container>
);

export default Footer;
