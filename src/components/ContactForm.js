import React from 'react';

import { useTheme } from '@material-ui/core';
import Services from 'tripetto-services';
import { run } from 'tripetto-runner-classic';

import { TRIPETTO_TOKEN } from '../settings';
import definition from '../contact-form.json';

const { attachments, onSubmit } = typeof window !== 'undefined'
  ? Services.init({ token: TRIPETTO_TOKEN })
  : {};

const ContactForm = () => {
  const formWrapper = React.useRef(null);
  const theme = useTheme();

  React.useEffect(() => {
    if (!formWrapper || typeof window === 'undefined') return;

    run({
      element: formWrapper.current,
      definition,
      styles: {
        mode: 'progressive',
        noBranding: true,
        contract: { name: 'tripetto-runner-classic', version: '1.9.1' },

        color: theme.palette.primary.main,

        font: {
          size: theme.typography.fontSize,
          family: theme.typography.fontFamily.split(',').shift(),
        },

        inputs: {
          borderSize: 1,
          roundness: theme.shape.borderRadius,
          textColor: theme.palette.text.primary,
          errorColor: theme.palette.error.main,
          agreeColor: theme.palette.success.main,
          declineColor: theme.palette.error.main,
        },

        buttons: {
          mode: 'fill',
          roundness: theme.shape.borderRadius,
        },
      },
      attachments,
      onSubmit,
    });
  }, [formWrapper, theme]);

  return (
    <div ref={formWrapper} />
  );
};

export default ContactForm;
