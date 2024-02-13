import { useLocation } from "@reach/router"
import queryString from 'query-string'
import useSiteMetadata from "./useSiteMetadata";

/**
 * Generate the backend URL with the mtm campaign if present in the query string
 */
const useBackendUrl = () => {
  const { backendUrl } = useSiteMetadata();
  const location = useLocation();

  const { mtm_campaign } = queryString.parse(location.search)
  const mtmReplacement = mtm_campaign ? 'camp/' + mtm_campaign : ''

  return backendUrl.replace('{mtm_placeholder}', mtmReplacement)
};

export default useBackendUrl;
