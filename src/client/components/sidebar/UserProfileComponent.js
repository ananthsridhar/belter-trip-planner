import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginTop: theme.spacing(3)
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export const UserProfileComponent = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Avatar className={classes.orange}>U</Avatar>
            <Typography>{props.user.name}</Typography>
        </Container>
    )

}