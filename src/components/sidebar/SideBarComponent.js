import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const SideBarComponent = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    console.log(props.trips);
    return (
        <Container>
            <Typography>SideBarComponent</Typography>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trips" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.trips && props.trips.map((trip) => {
                            return (
                                <ListItem key={trip.id} button className={classes.nested}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={trip.name} />
                                </ListItem>
                            )
                        })}
                    </List>
                </Collapse>
            </List>
        </Container>
    )
};

const mapStateToProps = state => ({
    trips: state.trips
})

// const mapDispatchToProps = dispatch => {
//   return {
//     changeTrip : (tripId) => dispatch(changeTrip(tripId)),
//   }
// }

export default connect(mapStateToProps)(SideBarComponent);