import { createMuiTheme, colors } from '@material-ui/core';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#96BB37',
    },
    secondary: {
      main: '#322F6A',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: 14,
    h1: { fontSize: '3rem' },
    h2: { fontSize: '2.125rem' },
    h3: { fontSize: '1.5rem' },
    h4: { fontSize: '1.25rem' },
    h5: { fontSize: '1.125rem' },
    h6: { fontSize: '1rem' },
  },
});

export default theme;
