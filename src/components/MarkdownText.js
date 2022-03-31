import React from 'react';
import clsx from 'clsx';

import Rehype2react from 'rehype-react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Link from './Link';
import MDBlock from './MDBlock';
import MarkdwonCustomComponents from './MarkdwonCustomComponents';

const useStyles = makeStyles(theme => ({
  markdown: {
    '& .MuiTypography-body1 + .MuiTypography-body1:not(li)': {
      margin: theme.spacing(2, 0),
    },
    '& [class*="MuiTypography-h"]:not(:first-child)': {
      marginTop: theme.spacing(4),
    },
  },
  separator: {
    backgroundColor: theme.palette.primary.main,
    width: 50,
    height: 5,
    display: 'block',
    margin: theme.spacing(5, 0),
  },
}));

const makeSpacerStyles = ({ w = 0, h = 0, ...props }, theme) => ({
  display: 'inline-block',
  width: theme.spacing(+w),
  height: theme.spacing(+h),
  ...props,
});

const MarkdownText = ({ hast, components = MarkdwonCustomComponents, className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const renderAst = new Rehype2react({
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
      h1: props => <Typography variant="h1" color="secondary" gutterBottom {...props} />,
      h2: props => <Typography variant="h2" color="secondary" gutterBottom {...props} />,
      h3: props => <Typography variant="h3" color="secondary" gutterBottom {...props} />,
      h4: props => <Typography variant="h4" color="secondary" gutterBottom {...props} />,
      h5: props => <Typography variant="h5" color="secondary" gutterBottom {...props} />,
      h6: props => <Typography variant="h6" color="secondary" gutterBottom {...props} />,
      p: props => <Typography variant="body1" color="secondary" {...props} />,
      li: props => <Typography variant="body1" component="li" {...props} />,
      a: ({ href, ...props }) => <Link to={href} {...props} />,
      // eslint-disable-next-line jsx-a11y/alt-text
      img: props => <img style={{ maxWidth: '100%' }} {...props} />,
      spacer: props => <Box component="span" style={makeSpacerStyles(props, theme)} />,
      hr: props => <Box className={classes.separator} {...props} />,
      'md-block': props => <MDBlock {...props} />,
      ...components,
    },
  }).Compiler;

  return (
    <Box className={clsx(classes.markdown, className)} {...rest}>{renderAst(hast)}</Box>
  );
};

export default MarkdownText;
