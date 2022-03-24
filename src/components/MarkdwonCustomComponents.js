import React from 'react';
import clsx from 'clsx';
import { Link, withPrefix } from 'gatsby';

import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useSiteMetadata from '../hooks/useSiteMetadata';

const useStyles = makeStyles(theme => ({
  buttonWrapper: {
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing(6, 0),
    '& a': {
      borderRadius: 23,
      boxShadow: 'none',
      textTransform: 'none',
    },
  },
  disciplines: {
    '& img': {
      width: '100%',
    },
  },
}));

const Disciplines = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={clsx(classes.disciplines, 'half-bleed')} component="span">
      <Grid item sm={6} xs={12} component="span">
        <img src={withPrefix('/medias/discipline-1.jpg')} alt="" />
      </Grid>
      <Grid item sm={6} xs={12} component="span">
        <img src={withPrefix('/medias/discipline-2.jpg')} alt="" />
      </Grid>
      <Grid item sm={6} xs={12} component="span">
        <img src={withPrefix('/medias/discipline-3.jpg')} alt="" />
      </Grid>
      <Grid item sm={6} xs={12} component="span">
        <img src={withPrefix('/medias/discipline-4.jpg')} alt="" />
      </Grid>
    </Grid>
  );
};

const Participate = ({ label = 'Je participe' }) => {
  const classes = useStyles();

  const { backendUrl } = useSiteMetadata();

  return (
    <Box className={classes.buttonWrapper} component="span">
      <Button size="large" component={Link} to={backendUrl} variant="contained" color="primary">
        {label}
      </Button>
    </Box>
  );
};

const CustomMap = () => (
  <img src={withPrefix('/medias/custom-map-1.jpg')} alt="" className="half-bleed" />
);

export default {
  participate: ({ label }) => <Participate label={label} />,
  disciplines: () => <Disciplines />,
  custommap: () => <CustomMap />,
};
