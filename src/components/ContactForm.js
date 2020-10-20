import React from 'react';

import { useTheme } from '@material-ui/core';
import Services from 'tripetto-services';
import { run } from 'tripetto-runner-classic';

import { TRIPETTO_TOKEN } from '../settings';
import definition from '../contact-form.json';

const { attachments, onSubmit } = Services.init({ token: TRIPETTO_TOKEN });

const ContactForm = () => {
  const formWrapper = React.useRef(null);
  const theme = useTheme();

  React.useEffect(() => {
    if (!formWrapper) return;

    run({
      element: formWrapper.current,
      definition,
      styles: {
        mode: 'progressive',
        noBranding: true,
        contract: { name: 'tripetto-runner-classic', version: '1.7.1' },
        color: theme.palette.primary.main,
      },
      attachments,
      onSubmit,
    });
  }, [formWrapper, theme.palette.primary]);

  return (
    <div ref={formWrapper} />
  );
};

export default ContactForm;
