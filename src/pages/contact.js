import React from 'react';

import { Grid } from '@material-ui/core';

import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import MDBlock from '../components/MDBlock';

const prelude = { title: 'Nous contacter' };

const Contact = () => (
  <Layout prelude={prelude}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <ContactForm />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MDBlock block="contact-1" />
      </Grid>
    </Grid>
  </Layout>
);

export default Contact;
