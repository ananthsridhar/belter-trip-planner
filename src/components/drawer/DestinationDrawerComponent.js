import React from "react";
import { Container, Drawer, makeStyles, Button } from "@material-ui/core";

import AddDestinationComponent from "./AddDestinationComponent";
import DestinationDetail from "./DestinationDetailComponent";

export default function DestinationDrawerComponent(props) {
  const useStyles = makeStyles({
    drawerStyle: {
      width: "auto",
      height: "100vh"
    }
  });
  const classes = useStyles();
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.toggleDrawer(open);
  };

  const onAddDestination = dest => {
    props.toggleDrawer(false);
    props.onAddDestination(dest);
  };

  //Template for Destination Page 
  const destDetail = () => (
    <div
      className={classes.drawerStyle}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DestinationDetail destId={props.currentDest} />
      {/* <Button onClick={() => toggleDrawer(false)}>Close</Button> */}
    </div>
  );

  //Template for Add Destination Page
  const addDestination = () => (
    <div className={classes.drawerStyle} role="presentation">
      <p>Adding Destination</p>
      <AddDestinationComponent
        afterDestId={props.currentDest}
        onAddDestination={onAddDestination}
      />
      {/* <Button onClick={toggleDrawer(false)}>Close</Button> */}
    </div>
  );

  return (
    <Drawer anchor="bottom" open={props.drawer} onClose={toggleDrawer(false)}>
      <Container fixed>
        {/*Displaying information based on if Adding Destination or Destination Detail page*/}
        {!props.addDest && destDetail()}
        {props.addDest && addDestination()}
      </Container>
      <Button onClick={toggleDrawer(false)}>Close</Button>
    </Drawer>
  );
}
