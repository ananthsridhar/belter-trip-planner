import React from 'react';
import {
  Container, Drawer, makeStyles, Button
} from '@material-ui/core';

import AddDestinationComponent from './AddDestinationComponent';
import DestinationDetail from './DestinationDetailComponent';

export default function DestinationDrawerComponent(props) {
  const useStyles = makeStyles({
    drawerStyle: {
      width: 'auto',
    }
  });
  const classes = useStyles();
  const toggleDrawer = open => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    props.toggleDrawer(open);
  };

  const onAddDestination = (dest) => {
    if (!dest) props.toggleDrawer(false);
  };

  // Template for Destination Page
  const destDetail = () => (
    <div
      className={classes.drawerStyle}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <DestinationDetail destId={props.currentDest} toggleDrawer={() => props.toggleDrawer(false)} />
    </div>
  );

  // Template for Add Destination Page
  const addDestination = () => (
    <div className={classes.drawerStyle} role="presentation">
      <p>Adding Destination</p>
      <AddDestinationComponent
        addPos={props.currentDest}
        onAddDestination={() => onAddDestination()}
      />
    </div>
  );

  return (
    <Drawer anchor="bottom" open={props.drawer} onClose={toggleDrawer(false)}>
      <Container fixed style={{ height: '100vh' }}>
        {/* Displaying information based on if Adding Destination or Destination Detail page */}
        {!props.addDest && destDetail()}
        {props.addDest && addDestination()}
      </Container>
      <Button color="primary" variant="outlined" onClick={toggleDrawer(false)}>Close</Button>
    </Drawer>
  );
}
