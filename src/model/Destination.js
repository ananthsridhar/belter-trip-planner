import Widget from './Widget';
import {WIDGET_TYPES} from '../resources/Constants';

export default class Destination {
    constructor(destinationName){
        this.id = Math.floor(Math.random()*100);
        this.name = destinationName;
        this.widget = [new Widget(WIDGET_TYPES.WEATHER)];
    }

    getId(){
        return this.id;
    }

    addCard(widgetType,data){
        let widget = new Widget(widgetType,data);
        this.widget = this.widgets.push(widget);
    }
}