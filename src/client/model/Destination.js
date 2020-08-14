import Widget from './Widget';
import { WIDGET_TYPES } from '../resources/Constants';

export default class Destination {
  constructor(destinationName) {
    this.id = Math.floor(Math.random() * 100);
    this.name = destinationName;
    this.widgets = [new Widget(WIDGET_TYPES.WEATHER)];
  }

  getId() {
    return this.id;
  }

  addCard(widgetType, data) {
    const widget = new Widget(widgetType, data);
    this.widgets = this.widgets.push(widget);
  }
}
