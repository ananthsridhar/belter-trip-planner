import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography, Icon, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';
import { changeTrip, updateTripSuccess } from '../../actions/DestinationActions';
import { fetchTrips } from '../../services/Dispatchers';
import { addTrip } from '../../services/DestinationService';

import { UserProfileComponent } from './UserProfileComponent';
import { AddTripModal } from './AddTripModal';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    width: '100%',
    flex: 1,
    maxWidth: 500,
    overflow: 'auto',
  },
  inner: {
    overflow: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  addButton: {
    border: '1px solid white',
    borderRadius: 10,
    textAlign: 'center',
  },
  syncButton: {
    width: '100%',
    alignSelf: 'bottom',
    marginTop: 10,
    marginBottom: 10,
  },
}));

const SideBarComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [addOpen, setAddOpen] = React.useState(false);
  const {
    changeTrips, updateTrips, trips, inSync
  } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  const onTripClick = (id) => {
    changeTrips(id);
    props.onSetOpen(false);
  };

  const onTripAdd = (name) => {
    addTrip(name).then((res) => {
      console.log(res);
      updateTrips(res);
      changeTrips(res._id);
    });
    console.log(name);
    setAddOpen(false);
  };

  return (
    <Container className={classes.container}>
      <UserProfileComponent
        user={{ name: 'Robert Abbott', username: 'rabbit69', avatar: '<image>' }}
      />
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Trips" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit className={classes.inner}>
          <List component="div" disablePadding>
            {trips
              && trips.map(trip => (
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
      </List>
      <Button
        className={classes.syncButton}
        variant="outlined"
        color="primary"
        onClick={() => setAddOpen(true)}
      >
        <Icon color="primary">add_circle</Icon>
        Add Trip
        <Icon color="primary">add_circle</Icon>
      </Button>
      {!inSync && (
        <Button className={classes.syncButton} variant="outlined" color="secondary">
          Click To Sync
        </Button>
      )}
      <AddTripModal handleAdd={onTripAdd} open={addOpen} toggleOpen={o => setAddOpen(o)} />
    </Container>
  );
};

const mapStateToProps = state => ({
  trips: state.trips,
  inSync: state.inSync,
});
const changeTrips = tripId => dispatch => dispatch(changeTrip(tripId));
const updateTrips = trip => dispatch => dispatch(updateTripSuccess(trip));

export default connect(mapStateToProps, { changeTrips, fetchTrips, updateTrips })(SideBarComponent);
