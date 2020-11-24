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
    minHeight: '100vh',
    '& > :last-child': {
      marginTop: 'auto',
    },
  },
  main: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

const Layout = ({
  prelude = null,
  className,
  title = '',
  ...rest
}) => {
  const classes = useStyles();

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

      <TopBar />

      {React.isValidElement(prelude) && prelude}

      {(prelude && !React.isValidElement(prelude)) && <Prelude {...prelude} />}

      <Container
        component="main"
        className={clsx(classes.main, className)}
        {...rest}
      />

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
