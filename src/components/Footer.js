import React from 'react';

import { Container, Grid, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { Button, IconButton as GatsbyIconButton } from 'gatsby-theme-material-ui';
import { Email, Facebook, Instagram } from '@material-ui/icons';

import { SOCIALMEDIA_LINKS } from '../settings';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  footerGrid: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Toolbar component="footer" className={classes.footer}>
      <Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.footerGrid}
        >
          <Grid item>
            <Button color="inherit" variant="text" to="/mentions-legales">Mentions légales</Button>
            {' - '}
            <Button color="inherit" variant="text" to="/donnees-personnelles">Données personnelles</Button>
            {' - '}
            <Button color="inherit" variant="text" to="/faq">Foire aux questions</Button>
            {' - '}
            <Button color="inherit" variant="text" to="/kit-de-communication">Kit de communication</Button>
          </Grid>
          <Grid item>
            {SOCIALMEDIA_LINKS?.instagram && (
              <IconButton aria-label="instagram" style={{ color: 'white' }} href={SOCIALMEDIA_LINKS.instagram} target="_blank">
                <Instagram />
              </IconButton>
            )}
            {SOCIALMEDIA_LINKS?.facebook && (
              <IconButton aria-label="facebook" style={{ color: 'white' }} href={SOCIALMEDIA_LINKS.facebook} target="_blank">
                <Facebook />
              </IconButton>
            )}
            <GatsbyIconButton aria-label="mail" style={{ color: 'white' }} to="/contact">
              <Email />
            </GatsbyIconButton>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default Footer;
