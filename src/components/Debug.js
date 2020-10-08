import React from 'react';

const Debug = props => (
  <pre>
    Debug:

    {JSON.stringify(props, null, 2)}
  </pre>
);

export default Debug;
