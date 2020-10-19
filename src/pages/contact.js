import React from 'react';

import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

const prelude = { title: 'Nous contacter' };

const Contact = () => (
  <Layout prelude={prelude}>
    <ContactForm />
  </Layout>
);

export default Contact;
