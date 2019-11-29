
import {WIDGET_TYPES} from '../resources/Constants';

export const trip = {
  id: "12",
  destinations: destinations
}

export const destinations = [
  {
    id: "1",
    name: "Chennai",
    location: "<coords>",
    widgets: [
      {
        type: WIDGET_TYPES.WEATHER,
        data: {
          text: "What did you expect?WEather is Hot AF, as usual",
          temperature: "36"
        }
      },
      {
        type: WIDGET_TYPES.NOTE,
        data: {
          type: "Note",
          color: "slate",
          text: "Sample Note Here"
        }
      },
      {
        type: WIDGET_TYPES.MAP,
        data: {
          location: "Coordinates",
          text: "Sample Map Here"
        }
      }
    ]
  },
  {
    id: "2",
    name: "Hampi",
    location: "<coords>",
    widgets: [
      {
        type: WIDGET_TYPES.WEATHER,
        data: {
          text: "What did you expect?WEather is Hot AF, as usual",
          temperature: "36"
        }
      },
      {
        type: WIDGET_TYPES.NOTE,
        data: {
          type: "Note",
          color: "slate",
          text: "Sample Note Here"
        }
      },
      {
        type: WIDGET_TYPES.MAP,
        data: {
          location: "Coordinates",
          text: "Sample Map Here"
        }
      }
    ]
  }
];
