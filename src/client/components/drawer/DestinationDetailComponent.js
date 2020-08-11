import React from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connect } from 'react-redux';
import Widget from '../widgets/WidgetComponent';
import { SCREEN_LABELS } from '../../resources/Constants';
import { removeDestination } from '../../actions/DestinationActions';

const useStyles = makeStyles(theme => ({
  widget: {
    padding: theme.spacing(2),
  },
}));
function DestinationDetail(props) {
  const classes = useStyles();
  const destination = props.destinations
    ? props.destinations.find(dest => dest.id == props.destId)
    : {};

  console.group('Destination Detail');
  console.log(props.destinations);
  console.log(props.destId);
  console.groupEnd();

  const removeDest = () => {
    const pos = props.destinations.findIndex(dest => dest.id == props.destId);
    props.removeDestination(pos);
    props.toggleDrawer();
  };

  const { widgets } = destination;
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{destination && destination.name}</h1>
      <Grid container spacing={3}>
        {widgets
          && widgets.map((widget, index) => (
            <Grid key={index} item xs={6}>
              <Widget widget={widget} />
            </Grid>
          ))}
        <Grid item xs={12}>
          <h3>
            {widgets && widgets.length > 0 ? '' : SCREEN_LABELS.NO_WIDGETS}
          </h3>
          <AddCircleOutlineIcon
            className={classes.iconHover}
            color="primary"
            style={{ fontSize: 75 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => removeDest()}
            // eslint-disable-next-line react/jsx-one-expression-per-line
          >
            Delete Destination
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  destinations: state.trips[state.currentTrip].destinations,
});

export default connect(mapStateToProps, { removeDestination })(
  DestinationDetail
);
