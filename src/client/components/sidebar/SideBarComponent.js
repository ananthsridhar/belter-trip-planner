import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography, Icon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';
import { changeTrip, updateTrip } from '../../actions/DestinationActions';
import { fetchTrips } from '../../services/Dispatchers';
import { addTrip } from '../../services/DestinationService';

import { UserProfileComponent } from './UserProfileComponent';
import { AddTripModal } from './AddTripModal';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  addButton: {
    border: '1px solid white',
    borderRadius: 10,
    textAlign: 'center',
  },
}));

const SideBarComponent = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [addOpen, setAddOpen] = React.useState(false);
  const { fetchTrips, changeTrips, updateTrips } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  const onTripClick = id => {
    props.changeTrips(id);
    props.onSetOpen(false);
  };

  const onTripAdd = name => {
    addTrip(name).then(res => {
      console.log(res);
      updateTrips(res);
      changeTrips(res._id);
      // fetchTrips();
    });
    console.log(name);
    setAddOpen(false);
  };

  return (
    <Container>
      <UserProfileComponent
        user={{ name: 'Robert Abbott', username: 'rabbit69', avatar: '<image>' }}
      />
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Trips" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.trips &&
              props.trips.map(trip => (
                <ListItem
                  key={trip._id}
                  button
                  className={classes.nested}
                  onClick={() => onTripClick(trip._id)}
                >
                  <ListItemText primary={trip.name} />
                </ListItem>
              ))}
          </List>
        </Collapse>
        <ListItem className={classes.addButton} button onClick={() => setAddOpen(true)}>
          <Icon color="primary">add_circle</Icon>
          <ListItemText primary="Add Trip" />
        </ListItem>
      </List>
      <AddTripModal handleAdd={onTripAdd} open={addOpen} toggleOpen={o => setAddOpen(o)} />
    </Container>
  );
};

const mapStateToProps = state => ({
  trips: state.trips,
});
const changeTrips = tripId => dispatch => dispatch(changeTrip(tripId));
const updateTrips = tripId => dispatch => dispatch(updateTrip(tripId));

export default connect(mapStateToProps, { changeTrips, fetchTrips, updateTrips })(SideBarComponent);
