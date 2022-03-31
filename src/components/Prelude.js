import React from 'react';

import { Box, makeStyles, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import RandomPicture from './RandomPicture';

const useStyles = makeStyles(theme => ({
  prelude: {
    color: theme.palette.secondary.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  swap: {
    flexDirection: 'row-reverse',
  },
  pictureWrapper: {
    '& img': {
      width: '100%',
    },
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

const Prelude = ({ title, picture, randompicfolder, swap, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.prelude} {...props}>
      <Grid container spacing={1} className={clsx({ [classes.swap]: swap })}>
        <Grid item xs={12} className={classes.titleWrapper}>
          {React.isValidElement(title)
            ? title
            : <Typography variant="h1">{title}</Typography>}
        </Grid>
        {(picture || randompicfolder) && (
          <Grid item xs={12} className={classes.pictureWrapper}>
            {randompicfolder && (<RandomPicture folder={randompicfolder} />)}
            {picture && (<img src={picture} alt="" />)}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Prelude;
