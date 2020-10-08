import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Settings from '../components/Settings';
import Tracks from '../components/Tracks';
import PrivateRoute from '../components/PrivateRoute';

const Default = () => (
  <div>
    Default app page
  </div>
);

const Compte = () => (
  <Layout>
    <Router basepath="/compte">
      <PrivateRoute path="/parametres" component={Settings} />
      <PrivateRoute path="/traces" component={Tracks} />
      <Default path="/" />
    </Router>
  </Layout>
);

export default Compte;
