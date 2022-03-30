import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          backendUrl
          labUrl
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
