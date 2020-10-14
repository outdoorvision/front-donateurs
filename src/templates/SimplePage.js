import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Template = ({
  data: {
    markdownRemark: {
      html,
      frontmatter,
      frontmatter: { title } = {},
    },
  },
}) => {
  const prelude = { ...frontmatter };

  return (
    <Layout title={title} prelude={prelude}>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
      />
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark (id: { eq: $id }) {
      html
      frontmatter { title }
    }
  }
`;
