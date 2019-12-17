import React from "react";
import { Grid, Card, makeStyles } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Widget from "../widgets/WidgetComponent";
import { SCREEN_LABELS } from "../../resources/Constants";

import { connect } from 'react-redux';

import DestinationService from "../../services/DestinationService";

const useStyles = makeStyles(theme => ({
  widget: {
    padding: theme.spacing(2)
  }
}));
function DestinationDetail(props) {
  const classes = useStyles();
  let destination = props.destinations.filter((dest) => dest.id === props.destId)[0];
  let widgets;
  if (destination) {
    widgets = destination.widgets;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{destination && destination.name}</h1>
      <Grid container spacing={3}>
        {widgets &&
          widgets.map((widget, index) => (
            <Grid key={index} item xs={6}>
              <Widget widget={widget}/>
            </Grid>
          ))}
          <Grid item xs={12}>
            <h3>{widgets && widgets.length>0?'':SCREEN_LABELS.NO_WIDGETS}</h3>
            <AddCircleOutlineIcon className={classes.iconHover} color="primary" style={{ fontSize: 75 }}/>
          </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  destinations: state.destinations
})


export default connect(
  mapStateToProps, {})(DestinationDetail);

