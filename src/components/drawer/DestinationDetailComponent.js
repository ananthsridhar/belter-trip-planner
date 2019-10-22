import React from "react";
import { Grid, Card, makeStyles } from "@material-ui/core";

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
  let cards;
  if (destination) {
    cards = destination.cards;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{destination && destination.name}</h1>
      <Grid container spacing={3}>
        {cards &&
          cards.map((card, index) => (
            <Grid key={index} item xs={6}>
              <Card className={classes.widget}>{card.type}</Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  destinations: state.destinations
})



export default connect(
  mapStateToProps, {})(DestinationDetail);

