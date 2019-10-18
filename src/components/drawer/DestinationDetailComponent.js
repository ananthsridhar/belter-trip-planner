import React from "react";
import { Grid, Paper, Card, makeStyles } from "@material-ui/core";

import DestinationService from "../../services/DestinationService";

const useStyles = makeStyles(theme => ({
  widget: {
    padding: theme.spacing(2)
  }
}));
export default function DestinationDetail(props) {
  const classes = useStyles();
  let destinationService = new DestinationService();
  let destination = destinationService.getDestination(props.destId);
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
