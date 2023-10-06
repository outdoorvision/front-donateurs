import { useLocation } from "@reach/router"
import queryString from 'query-string'
import useSiteMetadata from "./useSiteMetadata";

/**
 * Generate the backend URL with the mtm campaign if present in the query string
 */
const useBackendUrl = () => {
  const { backendUrl } = useSiteMetadata();
  const location = useLocation();

  const { mtm } = queryString.parse(location.search)

  return backendUrl + ( mtm ? 'camp/' + mtm : '')
};

export default useBackendUrl;
