import React from 'react';
import clsx from 'clsx';
import { Link, withPrefix } from 'gatsby';

import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useBackendUrl from '../hooks/useBackendUrl';

import ContactForm from './ContactForm';
import RandomPicture from './RandomPicture';

const useStyles = makeStyles(theme => ({
  buttonWrapper: {
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing(6, 0),
    '& a': {
      borderRadius: theme.shape.mainButton.borderRadius,
      boxShadow: 'none',
      textTransform: 'none',
    },
  },
  disciplines: {
    '& img': {
      width: '100%',
    },
  },
  imagetextblock: {
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
  swap: {
    // do not apply swap for xs screens to keep [img, text] order
    // ie for md and higher breakpoints
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    },
  },
  pictureWrapper: {
    '& img': {
      maxWidth: '100%',
    },
  },
  contactTextContent: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
    },
  },
  blocContent: {
    padding: theme.spacing(0.5),
    '& iframe': {
      width: '100%',
      minHeight: 200,
    },
  },
}));

const Disciplines = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={clsx(classes.disciplines, 'half-bleed')} component="span">
      <Grid item sm={6} xs={12} component="span">
        <RandomPicture folder="random-rando" />
      </Grid>
      <Grid item sm={6} xs={12} component="span">
        <RandomPicture folder="random-ski" />
      </Grid>
      <Grid item sm={6} xs={12} component="span">
        <RandomPicture folder="random-velo" />
      </Grid>
      <Grid item sm={6} xs={12} component="span">
        <RandomPicture folder="random-course" />
      </Grid>
    </Grid>
  );
};

const RowGrid = ({ children }) => {
  const classes = useStyles();
  const blocs = children.filter(child => React.isValidElement(child));
  const blocMd = Math.round(12 / blocs.length);

  return (
    <Grid
      container
      spacing={4}
      justifyContent="space-between"
      alignItems="center"
    >
      {blocs.map(child => (
        <Grid item xs={12} sm={blocMd}>
          <Box boxShadow={3} className={classes.blocContent}>
            {child}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const Participate = ({ label = 'Je participe' }) => {
  const classes = useStyles();

  const backendUrl = useBackendUrl();

  return (
    <Box className={classes.buttonWrapper} component="span">
      <Button size="large" component={Link} to={backendUrl} variant="contained" color="primary">
        {label}
      </Button>
    </Box>
  );
};

const CustomMap = () => (
  <img src={withPrefix('/medias/custom-map-1.jpg')} alt="" className="half-bleed" />
);

const ImageTextBlock = ({ title, picture, swap = false, children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        className={clsx(classes.imagetextblock, { [classes.swap]: swap })}
      >
        <Grid item xs>
          {React.isValidElement(title)
            ? title
            : <Typography variant="h2" color="secondary" gutterBottom>{title}</Typography>}
          {React.isValidElement(children)
            ? children
            : <Typography variant="body1" color="secondary" align="justify">{children}</Typography>}
        </Grid>
        {picture && (
          <Grid item md={3} sm={4} className={classes.pictureWrapper}>
            <img src={picture} alt="" />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

const ContactFormWithText = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <ContactForm />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.contactTextContent}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default {
  participate: ({ label }) => <Participate label={label} />,
  disciplines: () => <Disciplines />,
  custommap: () => <CustomMap />,
  imagetextblock: ({ title, picture, swap, ...rest }) =>
    <ImageTextBlock title={title} picture={picture} swap={swap} {...rest} />,
  contactformwithtext: props => <ContactFormWithText {...props} />,
  rowgrid: props => <RowGrid {...props} />,
};
