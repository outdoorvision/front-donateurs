import React from 'react';

import { Container, Toolbar, makeStyles } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Toolbar component="footer" className={classes.footer}>
      <Container>
        <Button color="inherit" variant="text" to="/mentions-legales">Mentions légales</Button>
        {' - '}
        <Button color="inherit" variant="text" to="/donnees-personnelles">Données personnelles</Button>
        {' - '}
        <Button color="inherit" variant="text" to="/contact">Contact</Button>
      </Container>
    </Toolbar>
  );
};

export default Footer;
