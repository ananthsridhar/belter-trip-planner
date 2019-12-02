import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { WIDGET_TYPES } from '../../resources/Constants';

const useStyles = makeStyles(theme => ({
    widget: {
        padding: theme.spacing(2)
    }
}));

export default function WidgetComponent(props) {
    const classes = useStyles();
    return (
        <Card className={classes.widget}>
            {renderSwitch(props.widget, classes)}
        </Card>
    );
}

const renderSwitch = (card, style) => {
    let widget = ' ';
    switch (card.type) {
        case WIDGET_TYPES.WEATHER: widget = <div>WEATHER</div>;
            break;
        case WIDGET_TYPES.NOTE: widget = <div>NOTE</div>;
            break;
        case WIDGET_TYPES.MAP: widget = <div>MAP</div>;
            break;
        default: widget = <div>NOT WEATHER</div>;
    }
    return widget;
}