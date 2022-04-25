import React from 'react';

import { useTheme } from '@material-ui/core';
import Services from 'tripetto-services';
import { run } from 'tripetto-runner-classic';
import { Export } from 'tripetto-runner-foundation';

import { TRIPETTO_TOKEN } from '../settings';
import definition from '../contact-form.json';

const { attachments } = typeof window !== 'undefined'
  ? Services.init({ token: TRIPETTO_TOKEN })
  : {};

const ContactForm = () => {
  const formWrapper = React.useRef(null);
  const theme = useTheme();

  const handleFormSubmit = async instance => {
    const { fields } = Export.fields(instance);
    const data = fields.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});
    const body = JSON.stringify(data, null, 2);

    await fetch('https://hook.integromat.com/x3bg2n9ei3l6ic63bx7ciaa5hsamdh2a', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
  };

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
          textColor: theme.palette.primary.contrastText,
          roundness: theme.shape.mainButton.borderRadius,
          baseColor: theme.palette.primary.main,
        },
      },
      attachments,
      onSubmit: handleFormSubmit,
    });
  }, [formWrapper, theme]);

  return (
    <div ref={formWrapper} />
  );
};

export default ContactForm;
