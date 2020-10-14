import React from 'react';

import Layout from '../components/Layout';

const prelude = {
  title: 'Eum architecto natus cum nesciunt.',
  picture: 'https://picsum.photos/640/480',
};

const Home = () => (
  <Layout prelude={prelude}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto eius saepe
    quis architecto repudiandae assumenda optio cumque quasi! Facilis, numquam.
    Dicta perferendis quisquam non corporis exercitationem voluptates tenetur
    minima.
  </Layout>
);

export default Home;
