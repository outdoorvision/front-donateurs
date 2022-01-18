import React from 'react';
import clsx from 'clsx';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TopBar from './TopBar';
import Footer from './Footer';
import Prelude from './Prelude';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: ({ footer }) => (footer ? '100vh' : 0),
    '& > :last-child': {
      marginTop: 'auto',
    },
  },
  main: {
    marginTop: '2rem',
    marginBottom: ({ footer }) => (footer ? '2rem' : 0),
  },
});

const Layout = ({
  prelude = null,
  className,
  header = true,
  footer = true,
  title = '',
  ...rest
}) => {
  const classes = useStyles({ header, footer });

  return (
    <div className={classes.root}>
      <Helmet
        htmlAttributes={{ lang: 'fr' }}
        title={title}
        titleTemplate="%s | Outdoorvision"
        link={[
          { rel: 'shortcut icon', type: 'image/svg', href: withPrefix('/outdoor-vision-pin.svg') },
        ]}

      />

      {(header !== false) && (
        <>
          <TopBar />

          {React.isValidElement(prelude) && prelude}

          {(prelude && !React.isValidElement(prelude)) && <Prelude {...prelude} />}
        </>
      )}

      <Container
        component="main"
        className={clsx(classes.main, className)}
        {...rest}
      />

      {(footer !== false) && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
