import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import DestImage from '../rand.png';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function DestCard(props) {
  const classes = useStyles();
  return (
    <div onClick={props.onClick}>
      <Card className={classes.card}>
        <CardContent style={{ flex: 1 }}>
          <Typography variant="h5" component="h2" style={{ marginLeft: '200' }}>
            {props && props.dest.name}
          </Typography>
        </CardContent>
        <img style={{ height: '75px' }} src={DestImage} alt="Random" />
      </Card>
    </div>
  );
}
