import React from 'react';

import { useTheme } from '@material-ui/core';
import Services from 'tripetto-services';
import { run } from 'tripetto-runner-classic';

import { token, definition, styles } from '../tripettoSettings';

const { attachments, onSubmit } = Services.init({ token });

const ContactForm = () => {
  const formWrapper = React.useRef(null);
  const theme = useTheme();

  React.useEffect(() => {
    if (!formWrapper) return;

    run({
      element: formWrapper.current,
      definition,
      styles: { ...styles, color: theme.palette.primary.main },
      attachments,
      onSubmit,
    });
  }, [formWrapper, theme]);

  return (
    <div ref={formWrapper} />
  );
};

export default ContactForm;
