import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownText from '../components/MarkdownText';

const Template = ({
  data: {
    markdownRemark: { htmlAst, frontmatter },
  },
}) => {
  const prelude = { ...frontmatter };
  const { title } = frontmatter;

  return (
    <Layout title={title} prelude={prelude}>
      <MarkdownText hast={htmlAst} />
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark (id: { eq: $id }) {
      htmlAst
      frontmatter { title }
    }
  }
`;
