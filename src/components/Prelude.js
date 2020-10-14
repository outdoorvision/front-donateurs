import React from 'react';

import { Box, Container, makeStyles, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  prelude: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  swap: {
    flexDirection: 'row-reverse',
  },
  pictureWrapper: {
    '& img': {
      maxWidth: '100%',
    },
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Prelude = ({ title, picture, swap, ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.prelude} {...props}>
      <Container>
        <Grid container spacing={1} className={clsx({ [classes.swap]: swap })}>
          <Grid item md={6} className={classes.pictureWrapper}>
            <img src={picture} alt="" />
          </Grid>
          <Grid item md={6} className={classes.titleWrapper}>
            <Typography variant="h1">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Prelude;
