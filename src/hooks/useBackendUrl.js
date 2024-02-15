import React from 'react';
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import useSiteMetadata from "./useSiteMetadata";

/**
 * Generate the backend URL with the mtm campaign if present in the query string
 */
const useBackendUrl = () => {
  const location = useLocation();
  const { backendUrl: siteMetadataBackendUrl, backendUrlWithCampaign } = useSiteMetadata();
  const [backendUrl, setBackendUrl] = React.useState(siteMetadataBackendUrl)

  React.useEffect(() => {
    const { mtm_campaign } = queryString.parse(location.search)
    if (mtm_campaign) {
      setBackendUrl(backendUrlWithCampaign.replace('{mtm_placeholder}', mtm_campaign))
    }
  }, [location])

  return backendUrl
};

export default useBackendUrl;
