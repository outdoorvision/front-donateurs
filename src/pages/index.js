import React from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import MDBlock from '../components/MDBlock';
import MarkdwonCustomComponents from '../components/MarkdwonCustomComponents';

const useStyles = makeStyles(theme => ({
  homeContent: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    '& img': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    '& .half-bleed': {
      '& img': {
        margin: 0,
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        width: `calc(100% + ${theme.spacing(5)}px)`,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: `calc(100% + ${theme.spacing(6)}px)`,
      },
      [theme.breakpoints.between('xs', 'md')]: {
        marginLeft: theme.spacing(-3),
        marginRight: theme.spacing(-3),
      },
    },
  },
  firstBlock: {
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Box className={classes.homeContent}>
        <MDBlock block="home-1" components={MarkdwonCustomComponents} className={classes.firstBlock} />
        <MDBlock block="home-2" components={MarkdwonCustomComponents} />
      </Box>
    </Layout>
  );
};

export default Home;
