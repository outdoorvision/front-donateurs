import React from 'react';
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import useSiteMetadata from "./useSiteMetadata";

/**
 * Generate the backend URL with the mtm campaign if present in the query string
 */
const useBackendUrl = () => {
  const location = useLocation();
  const { backendUrl: siteMetadataBackendUrl } = useSiteMetadata();
  const [backendUrl, setBackendUrl] = React.useState('')

  React.useEffect(() => {
    const { mtm_campaign } = queryString.parse(location.search)
    const mtmReplacement = mtm_campaign || ''
    setBackendUrl(siteMetadataBackendUrl.replace('{mtm_placeholder}', mtmReplacement))
  }, [location])

  return backendUrl
};

export default useBackendUrl;
