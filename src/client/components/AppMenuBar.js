import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppMenuBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => props.openSidebar()}
        >
          <Badge color="secondary" overlap="circle" variant="dot" invisible={props.inSync}>
            <MenuIcon />
          </Badge>
        </IconButton>
        <Typography variant="h6" className={classes.title}>

          BELTER
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
const mapStateToProps = state => ({
  inSync: state.inSync,
});

export default connect(mapStateToProps)(AppMenuBar);
