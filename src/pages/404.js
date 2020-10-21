import React from 'react';

import { GatsbyLink } from 'gatsby-theme-material-ui';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';

const prelude = {
  title: (
    <div>
      <Typography variant="h1">Erreur 404</Typography>
      <Typography variant="subtitle1">La page que vous demandez n'existe pas.</Typography>
    </div>
  ),
  picture: 'https://picsum.photos/640/480',
};

const Home = () => (
  <Layout prelude={prelude}>
    <GatsbyLink to="/">‹ Retour à l'accueil</GatsbyLink>
  </Layout>
);

export default Home;
