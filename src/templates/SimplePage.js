import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownText from '../components/MarkdownText';

const Template = ({
  data: {
    markdownRemark: { htmlAst, frontmatter },
  },
}) => (
  <Layout title={frontmatter.title} prelude={frontmatter}>
    <MarkdownText hast={htmlAst} />
  </Layout>
);

export default Template;

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark (id: { eq: $id }) {
      htmlAst
      frontmatter { title picture swap }
    }
  }
`;
