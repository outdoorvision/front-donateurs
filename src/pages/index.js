import React from 'react';
import clsx from 'clsx';
import { Link, withPrefix } from 'gatsby';

import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import MDBlock from '../components/MDBlock';
import useSiteMetadata from '../hooks/useSiteMetadata';

const useStyles = makeStyles(theme => ({
  homeContent: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    '& img': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    '& .half-bleed': {
      '& img': {
        margin: 0,
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        width: `calc(100% + ${theme.spacing(5)}px)`,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: `calc(100% + ${theme.spacing(6)}px)`,
      },
      [theme.breakpoints.between('xs', 'md')]: {
        marginLeft: theme.spacing(-3),
        marginRight: theme.spacing(-3),
      },
    },
  },
  firstBlock: {
    textAlign: 'center',
  },
  bodyButtonWrapper: {
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
    <Box className={classes.bodyButtonWrapper} component="span">
      <Button size="large" component={Link} to={backendUrl} variant="contained" color="primary">
        {label}
      </Button>
    </Box>
  );
};

const CustomMap = () => (
  <img src={withPrefix('/medias/custom-map-1.jpg')} alt="" className="half-bleed" />
);

const customComponents = {
  participate: () => <Participate />,
  disciplines: () => <Disciplines />,
  custommap: () => <CustomMap />,
};

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box className={classes.homeContent}>
        <MDBlock block="home-1" components={customComponents} className={classes.firstBlock} />
        <MDBlock block="home-2" components={customComponents} />
      </Box>
    </Layout>
  );
};

export default Home;
