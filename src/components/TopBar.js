import React from 'react';

import { Button } from 'gatsby-theme-material-ui';
import { Link } from 'gatsby';

import {
  AppBar,
  Toolbar,
  Container,
  makeStyles,
  Grid,
  useTheme,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { Home, Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  appbar: {
    border: 'none',
  },
  logo: {
    '& a': {
      display: 'inline-block',
      maxWidth: '100%',
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
      maxHeight: 180,
      [theme.breakpoints.down('md')]: {
        maxHeight: 145,
      },
    },

    flexGrow: '1',
    flexShrink: '1',
    maxWidth: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  nav: {
    display: 'flex',
    alignItems: 'center',

    flexGrow: '1',
    flexShrink: '0',
    maxWidth: '100%',

    justifyContent: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    '& > a:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  narrowNav: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const authLink = 'https://dev-prnsn.makina-corpus.net/auth/';

const TopBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const activeStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  return (
    <AppBar position="static" color="transparent" variant="outlined" className={classes.appbar}>
      <Toolbar disableGutters>
        <Container>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item className={classes.logo}>
              <Link to="/">
                <img src="/logo.svg" alt="Outdoorvision" />
              </Link>
            </Grid>

            <Grid item className={classes.narrowNav}>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                MenuListProps={{ component: 'nav' }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} activeStyle={activeStyle} to="/">Outdoorvision</MenuItem>
                <MenuItem component={Link} activeStyle={activeStyle} to="/partenaires">Partenaires</MenuItem>
                <MenuItem component={Link} to={authLink}>Participer</MenuItem>
              </Menu>
            </Grid>

            <Grid item className={classes.nav} component="nav">
              <Button activeStyle={activeStyle} to="/" startIcon={<Home />}>Outdoorvision</Button>
              <Button activeStyle={activeStyle} to="/partenaires">Partenaires</Button>
              <Button variant="outlined" href={authLink}>Participer</Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
