import React from 'react';

import { Button } from 'gatsby-theme-material-ui';
import { Link } from 'gatsby';

import {
  AppBar,
  Toolbar,
  Container,
  makeStyles,
  Grid,
  Box,
  useTheme,
  IconButton,
  Button as MuiButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { Menu as MenuIcon, PeopleOutline } from '@material-ui/icons';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { HOME_LINKS } from '../settings';

const useStyles = makeStyles(theme => ({
  appbar: {
    border: 'none',
  },
  proToolBar: {
    backgroundColor: '#f5f5f5',
  },
  logo: {
    '& a': {
      display: 'inline-block',
      maxWidth: '100%',
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
      maxHeight: 110,
      [theme.breakpoints.down('md')]: {
        maxHeight: 80,
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

const TopBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { backendUrl, labUrl } = useSiteMetadata();

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const activeStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  return (
    <AppBar position="static" color="transparent" variant="outlined" className={classes.appbar}>
      <Toolbar disableGutters className={classes.proToolBar}>
        <Container>
          <Box display="flex" justifyContent="flex-end">
            <MuiButton
              variant="text"
              color="default"
              size="small"
              href={labUrl}
              rel="noreferrer"
              target="_blank"
              className={classes.button}
              startIcon={<PeopleOutline />}
            >
              Accès pro
            </MuiButton>
          </Box>
        </Container>
      </Toolbar>
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
                {HOME_LINKS.map(({ to, label }) => (
                  <MenuItem
                    key={`menu-${label}`}
                    component={Link}
                    activeStyle={to === '/' ? null : activeStyle} // do not add activeStyle on home button
                    to={to}
                  >
                    {label}
                  </MenuItem>
                ))}
                <MenuItem component={Link} to={backendUrl}>Participer</MenuItem>
              </Menu>
            </Grid>

            <Grid item className={classes.nav} component="nav">
              {HOME_LINKS.map(({ to, label }) => (
                <Button
                  key={`button-${label}`}
                  activeStyle={to === '/' ? null : activeStyle} // do not add activeStyle on home button
                  to={to}
                >
                  {label}
                </Button>
              ))}
              <Button variant="outlined" href={backendUrl}>Participer</Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
