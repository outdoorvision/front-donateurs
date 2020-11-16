import React from 'react';
import { Link } from 'gatsby';

import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import MDBlock from '../components/MDBlock';

const authLink = 'https://dev-prnsn.makina-corpus.net/auth/';

const useStyles = makeStyles(theme => ({
  customLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  bodyButtonWrapper: {
    textAlign: 'center',
    padding: theme.spacing(6, 0),
  },
}));

const CustomLink = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="h1"
      component={Link}
      to={authLink}
      className={classes.customLink}
    >
      Je participe ›››
    </Typography>
  );
};

const prelude = {
  title: <CustomLink />,
  picture: 'https://picsum.photos/640/480',
};

const Home = () => {
  const classes = useStyles();

  return (
    <Layout prelude={prelude}>
      <MDBlock block="home-1" />

      <Box className={classes.bodyButtonWrapper}>
        <Button size="large" component={Link} to={authLink} variant="contained" color="primary">
          Je participe !
        </Button>
      </Box>

      <MDBlock block="home-2" />
    </Layout>
  );
};

export default Home;
