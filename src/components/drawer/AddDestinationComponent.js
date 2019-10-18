import React from "react";
import { Paper, Button, makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import DestinationService from "../../services/DestinationService";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    border: "2px solid #568cf0",
    borderRadius: "10px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function AddDestinationComponent(props) {
  const classes = useStyles();
  const [destination, setDestination] = React.useState("");
  let destinationService = new DestinationService();
  const addDest = () => {
    // console.log(destination);
    destinationService.addAfter(props.afterDestId);
    props.onAddDestination(destination);
    // destinationService.addAfter(props.afterDestId)
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        value={destination}
        onChange={e => setDestination(e.target.value)}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Button onClick={addDest}>Add</Button>
    </Paper>
  );
}
