import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography, Icon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';

import { connect } from 'react-redux';
import { changeTrip } from '../../actions/DestinationActions';
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
}));

const SideBarComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [addOpen, setAddOpen] = React.useState(false);
  const { fetchTrips } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  const onTripClick = (id) => {
    props.changeTrip(id);
    props.onSetOpen(false);
  };

  const onTripAdd = (name) => {
    // props.addTrip(name);
    addTrip(name).then((res) => {
      console.log(res);
      fetchTrips();
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
            {props.trips
              && props.trips.map(trip => (
                <ListItem
                  key={trip._id}
                  button
                  className={classes.nested}
                  onClick={() => onTripClick(trip._id)}
                >
                  <ListItemText primary={trip.name} />
                </ListItem>
              ))}
            <ListItem className={classes.nested} button onClick={() => setAddOpen(true)}>
              <Icon color="primary">add_circle</Icon>
              <ListItemText primary="Add Trip" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <AddTripModal handleAdd={onTripAdd} open={addOpen} toggleOpen={o => setAddOpen(o)} />
    </Container>
  );
};

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  changeTrip: tripId => dispatch(changeTrip(tripId)),
});

export default connect(mapStateToProps, { mapDispatchToProps, fetchTrips })(SideBarComponent);
