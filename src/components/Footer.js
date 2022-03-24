import React from 'react';

import { Container, Grid, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { Button, IconButton as GatsbyIconButton } from 'gatsby-theme-material-ui';
import { Email, Facebook, LinkedIn } from '@material-ui/icons';

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
            <Button color="inherit" variant="text" to="/partenaires">Partenaires</Button>
            {' - '}
            <Button color="inherit" variant="text" to="/faq">Foire aux questions</Button>
          </Grid>
          <Grid item>
            {SOCIALMEDIA_LINKS?.facebook && (
              <IconButton aria-label="linkedin" style={{ color: 'white' }} href={SOCIALMEDIA_LINKS.facebook} target="_blank">
                <LinkedIn />
              </IconButton>
            )}
            {SOCIALMEDIA_LINKS?.linkedin && (
              <IconButton aria-label="facebook" style={{ color: 'white' }} href={SOCIALMEDIA_LINKS.linkedin} target="_blank">
                <Facebook />
              </IconButton>
            )}
            <GatsbyIconButton aria-label="mail" style={{ color: 'white' }} to="/faq">
              <Email />
            </GatsbyIconButton>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
};

export default Footer;
