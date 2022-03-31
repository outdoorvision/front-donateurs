import { graphql, useStaticQuery } from 'gatsby';

export const useImages = () => {
  const { wrapper } = useStaticQuery(graphql`
    query {
      wrapper: allFile(filter: {extension: {in: ["jpg", "png"]}}) {
        nodes {
          relativePath
          relativeDirectory
        }
      }
    }
  `);

  return wrapper.nodes;
};

export default useImages;
