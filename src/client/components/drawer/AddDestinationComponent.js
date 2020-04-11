import React from "react";
import { Paper, Button, makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import Destination from "../../model/Destination";

import {addDestination} from "../../actions/DestinationActions";

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
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

function AddDestinationComponent(props) {
  const classes = useStyles();
  const [destination, setDestination] = React.useState("");
  const addDest = () => {
    let newDest = new Destination(destination);
    props.addDestination(newDest,props.addPos);
    props.onAddDestination(destination);
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


const mapStateToProps = state => ({
  destinations: state.destinations
})

const mapDispatchToProps = dispatch => {
  return {
    addDestination : (destination,addPos) => dispatch(addDestination(destination,addPos)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddDestinationComponent);
